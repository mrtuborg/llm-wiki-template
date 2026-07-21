#!/usr/bin/env python3
"""
embed.py — Generate semantic embeddings for wiki pages
Uses: Ollama mxbai-embed-large + sqlite-vec
"""

import argparse
import hashlib
import json
import os
import sqlite3
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

try:
    import sqlite_vec
except ImportError:
    print("❌  sqlite-vec not installed. Run:")
    print("    /opt/homebrew/bin/python3.12 -m pip install sqlite-vec --break-system-packages")
    sys.exit(1)

# ─── Config ──────────────────────────────────────────────────────────────────

WIKI_ROOT   = Path(os.environ.get("WIKI_ROOT",
                   Path(__file__).resolve().parent.parent.parent))
DB_PATH     = WIKI_ROOT / "pipeline/index/embeddings.db"
WIKI_DIR    = WIKI_ROOT / "wiki"
OLLAMA_URL  = "http://localhost:11434/api/embeddings"
MODEL       = "mxbai-embed-large"
DIMS        = 1024
MAX_CHARS   = 2000   # safe for mxbai-embed-large 512-token limit (~5 chars/token)

# Directories to skip inside wiki/
SKIP_DIRS = {"updates", "graph", "compiled", "templates"}

# ─── Helpers ─────────────────────────────────────────────────────────────────

def serialize(v):
    return sqlite_vec.serialize_float32(v)

def content_hash(text: str) -> str:
    return hashlib.md5(text.encode()).hexdigest()[:16]

def strip_frontmatter(text: str) -> tuple[str, str]:
    """Return (title, body) stripping YAML frontmatter. Extracts title field."""
    title = ""
    if text.startswith("---"):
        end = text.find("\n---", 3)
        if end != -1:
            fm = text[3:end]
            for line in fm.splitlines():
                if line.startswith("title:"):
                    title = line.split(":", 1)[1].strip().strip('"\'')
            text = text[end + 4:].lstrip()
    return title, text

def embed_text(text: str, model: str = MODEL) -> list:
    """Strip frontmatter, build embed-optimised input, call Ollama.
    Falls back to shorter text if context limit is exceeded."""
    title, body = strip_frontmatter(text)
    prefix = f"{title}\n\n" if title else ""

    for limit in (MAX_CHARS, 1200, 600, 300):
        prompt = (prefix + body)[:limit]
        payload = json.dumps({"model": model, "prompt": prompt}).encode()
        req = urllib.request.Request(
            OLLAMA_URL, data=payload,
            headers={"Content-Type": "application/json"}
        )
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.loads(r.read())["embedding"]
        except urllib.error.HTTPError as e:
            err_body = e.read()          # read once, reuse
            if e.code == 500 and b"context length" in err_body:
                continue                 # try shorter
            raise
    raise RuntimeError("Could not embed even at 300 chars")

def check_ollama(model: str):
    try:
        with urllib.request.urlopen("http://localhost:11434/api/tags", timeout=5) as r:
            data = json.loads(r.read())
        names = [m["name"] for m in data.get("models", [])]
        if not any(model in n for n in names):
            print(f"❌  Model '{model}' not found. Run:")
            print(f"    ollama pull {model}")
            sys.exit(1)
    except urllib.error.URLError:
        print("❌  Ollama not running. Start with: ollama serve")
        sys.exit(1)

def progress(i: int, total: int, t0: float, extra: str = ""):
    w = 38
    filled = int(w * i / total) if total else w
    bar = "█" * filled + "░" * (w - filled)
    pct = i * 100 // total if total else 100
    elapsed = time.time() - t0
    eta = (elapsed / i * (total - i)) if i > 0 else 0
    print(f"\r  [{bar}] {pct:3d}%  {i}/{total}  ETA {eta:.0f}s  {extra}   ",
          end="", flush=True)

# ─── DB ──────────────────────────────────────────────────────────────────────

def open_db(path: Path) -> sqlite3.Connection:
    path.parent.mkdir(parents=True, exist_ok=True)
    db = sqlite3.connect(str(path))
    db.enable_load_extension(True)
    sqlite_vec.load(db)
    db.enable_load_extension(False)
    db.execute("""
        CREATE TABLE IF NOT EXISTS pages (
            rowid      INTEGER PRIMARY KEY AUTOINCREMENT,
            path       TEXT UNIQUE NOT NULL,
            hash       TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )
    """)
    db.execute(f"""
        CREATE VIRTUAL TABLE IF NOT EXISTS vec_items
        USING vec0(embedding float[{DIMS}])
    """)
    db.commit()
    return db

def upsert(db: sqlite3.Connection, rel_path: str, h: str, vec: list):
    now = datetime.now(timezone.utc).isoformat()
    row = db.execute("SELECT rowid FROM pages WHERE path=?", (rel_path,)).fetchone()
    if row:
        rowid = row[0]
        db.execute("UPDATE pages SET hash=?, updated_at=? WHERE rowid=?", (h, now, rowid))
        # sqlite-vec virtual tables don't support INSERT OR REPLACE — delete then insert
        db.execute("DELETE FROM vec_items WHERE rowid=?", (rowid,))
        db.execute("INSERT INTO vec_items(rowid, embedding) VALUES (?,?)",
                   (rowid, serialize(vec)))
    else:
        cur = db.execute("INSERT INTO pages(path,hash,updated_at) VALUES (?,?,?)",
                         (rel_path, h, now))
        db.execute("INSERT INTO vec_items(rowid, embedding) VALUES (?,?)",
                   (cur.lastrowid, serialize(vec)))
    db.commit()

# ─── Main ────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description="Embed wiki pages into sqlite-vec index")
    ap.add_argument("--incremental", action="store_true",
                    help="Skip pages whose content hash hasn't changed (default for add mode)")
    ap.add_argument("--full",        action="store_true",
                    help="Re-embed all pages regardless of hash")
    ap.add_argument("--model",  default=MODEL)
    ap.add_argument("--db",     default=str(DB_PATH))
    ap.add_argument("--wiki",   default=str(WIKI_DIR))
    args = ap.parse_args()

    incremental = args.incremental or (not args.full)  # incremental is default

    check_ollama(args.model)

    db   = open_db(Path(args.db))
    wiki = Path(args.wiki)

    # Collect pages (skip non-content dirs)
    pages = [
        p for p in sorted(wiki.rglob("*.md"))
        if not any(part in SKIP_DIRS for part in p.parts)
    ]
    current_paths = {str(p.relative_to(WIKI_ROOT)) for p in pages}

    # Prune stale DB entries (paths that no longer exist — e.g. after domain restructure)
    all_db_paths = db.execute("SELECT rowid, path FROM pages").fetchall()
    stale = [(rowid, path) for rowid, path in all_db_paths if path not in current_paths]
    if stale:
        for rowid, path in stale:
            db.execute("DELETE FROM pages WHERE rowid=?", (rowid,))
            db.execute("DELETE FROM vec_items WHERE rowid=?", (rowid,))
        db.commit()
        print(f"  pruned: {len(stale)} stale entries (paths no longer exist)")

    print(f"\n  wiki:  {wiki}")
    print(f"  model: {args.model}  ({DIMS}d)")
    print(f"  index: {args.db}")
    print(f"  pages: {len(pages)}  |  mode: {'incremental' if incremental else 'full rebuild'}")
    print()

    embedded = skipped = errors = 0
    t0 = time.time()

    for i, page in enumerate(pages):
        rel = str(page.relative_to(WIKI_ROOT))
        text = page.read_text(encoding="utf-8", errors="ignore")
        h = content_hash(text)

        if incremental:
            row = db.execute("SELECT hash FROM pages WHERE path=?", (rel,)).fetchone()
            if row and row[0] == h:
                skipped += 1
                progress(i + 1, len(pages), t0, f"skip {page.name[:20]}")
                continue

        progress(i + 1, len(pages), t0, f"embed {page.name[:20]}")

        try:
            vec = embed_text(text, args.model)
            upsert(db, rel, h, vec)
            embedded += 1
        except Exception as e:
            db.rollback()  # discard any partial writes from the failed upsert
            errors += 1
            print(f"\n  ⚠️  error on {rel}: {e}", file=sys.stderr)

    elapsed = time.time() - t0
    total_indexed = db.execute("SELECT COUNT(*) FROM pages").fetchone()[0]

    print(f"\n\n  embedded: {embedded}  skipped: {skipped}  errors: {errors}")
    print(f"  time:     {elapsed:.1f}s"
          + (f"  ({embedded/elapsed:.1f} pages/s)" if elapsed > 0 and embedded > 0 else ""))
    print(f"  total in index: {total_indexed} pages")
    print()

    # Write stage output
    out = WIKI_ROOT / "pipeline/stage-output/current-7b-embed.md"
    out.write_text(f"""# Stage 7b Output — {datetime.now(timezone.utc).isoformat()}
## Embedding run
- Model: {args.model}  ({DIMS}d)
- Mode: {'incremental' if incremental else 'full'}
- Embedded: {embedded}
- Skipped (unchanged): {skipped}
- Errors: {errors}
- Time: {elapsed:.1f}s
- Total in index: {total_indexed}
- Index: {args.db}
""")

    db.close()


if __name__ == "__main__":
    main()
