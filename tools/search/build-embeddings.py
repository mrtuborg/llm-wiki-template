#!/usr/bin/env python3
"""
Build semantic search embeddings for the LLM Wiki.

Reads all wiki pages, generates vector embeddings via the Ollama API,
and writes wiki/search/embeddings.json.

Run after every ingestion cycle (Layer 6/7) to keep semantic search current.

Usage:
    python3 tools/search/build-embeddings.py
    python3 tools/search/build-embeddings.py --model nomic-embed-text
    python3 tools/search/build-embeddings.py --force      # re-embed all (ignore cache)
"""
import re, json, sys, argparse
from pathlib import Path
from urllib.request import urlopen, Request
from urllib.error import URLError

VAULT_ROOT = Path(__file__).resolve().parents[2]
WIKI_DIR   = VAULT_ROOT / 'wiki'
OUTPUT     = VAULT_ROOT / 'wiki' / 'search' / 'embeddings.json'
OLLAMA_URL = 'http://localhost:11434/api/embeddings'

EXCLUDED = ['templates/', 'graph/', 'compiled/', 'updates/', 'Meta/']

FRONTMATTER_RE = re.compile(r'^---[\s\S]*?---\n?')
WIKILINK_RE    = re.compile(r'\[\[([^\]|]+)(?:\|[^\]]+)?\]\]')
CODE_BLOCK_RE  = re.compile(r'```[\s\S]*?```')
INLINE_CODE_RE = re.compile(r'`[^`]+`')
HEADER_RE      = re.compile(r'^#+\s+', re.MULTILINE)
BOLD_RE        = re.compile(r'\*\*([^*]+)\*\*')


def is_excluded(path: Path) -> bool:
    rel = str(path.relative_to(VAULT_ROOT))
    return any(ex in rel for ex in EXCLUDED)


def prepare_text(path: Path) -> str:
    raw  = path.read_text(encoding='utf-8', errors='replace')
    text = FRONTMATTER_RE.sub('', raw)
    text = CODE_BLOCK_RE.sub(' ', text)
    text = INLINE_CODE_RE.sub(' ', text)
    text = WIKILINK_RE.sub(r'\1', text)       # unwrap [[Page|label]] → label
    text = BOLD_RE.sub(r'\1', text)           # unwrap **bold**
    text = HEADER_RE.sub(' ', text)           # strip markdown headers
    text = re.sub(r'\s+', ' ', text).strip()
    # Prepend slug (important for title-based retrieval)
    slug = path.stem.replace('-', ' ').replace('_', ' ')
    return f"{slug}. {text}"[:3000]           # cap to keep embedding latency low


def embed(text: str, model: str) -> list[float]:
    payload = json.dumps({'model': model, 'prompt': text}).encode()
    req  = Request(OLLAMA_URL, data=payload, headers={'Content-Type': 'application/json'})
    resp = urlopen(req, timeout=30)
    return json.loads(resp.read())['embedding']


def main():
    parser = argparse.ArgumentParser(description='Build LLM Wiki semantic embeddings')
    parser.add_argument('--model', default='nomic-embed-text', help='Ollama embedding model')
    parser.add_argument('--force', action='store_true',        help='Re-embed all pages')
    args = parser.parse_args()

    # Check Ollama is reachable
    try:
        urlopen('http://localhost:11434', timeout=3)
    except URLError:
        print('ERROR: Ollama not reachable at http://localhost:11434 — start it first.')
        sys.exit(1)

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    # Load existing embeddings (incremental update)
    existing: dict[str, list[float]] = {}
    if OUTPUT.exists() and not args.force:
        existing = json.loads(OUTPUT.read_text(encoding='utf-8'))
        print(f'Loaded {len(existing)} cached embeddings')

    files = sorted(f for f in WIKI_DIR.rglob('*.md') if not is_excluded(f))
    print(f'Found {len(files)} wiki pages — model: {args.model}')

    embeddings = dict(existing)
    skipped = new = errors = 0

    for i, f in enumerate(files, 1):
        slug = f.stem
        if slug in embeddings and not args.force:
            skipped += 1
            continue

        text = prepare_text(f)
        if not text:
            continue

        try:
            vec = embed(text, args.model)
            embeddings[slug] = vec
            new += 1
            if new % 10 == 0 or i == len(files):
                OUTPUT.write_text(json.dumps(embeddings, separators=(',', ':')),
                                  encoding='utf-8')
                print(f'  [{i}/{len(files)}] +{new} new  skip={skipped}  err={errors}')
        except Exception as e:
            errors += 1
            print(f'  SKIP {slug}: {e}')

    OUTPUT.write_text(json.dumps(embeddings, separators=(',', ':')), encoding='utf-8')
    print(f'\nDone — {len(embeddings)} total embeddings  '
          f'({new} new, {skipped} cached, {errors} errors)')
    print(f'Saved to {OUTPUT.relative_to(VAULT_ROOT)}')


if __name__ == '__main__':
    main()
