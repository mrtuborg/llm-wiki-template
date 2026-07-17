#!/usr/bin/env bash
# check-dead-links.sh — find broken [[wikilinks]] in wiki/ pages
# Excludes: wiki/templates/ (placeholders by design)

WIKI="$(cd "$(dirname "$0")/../.." && pwd)/wiki"

python3 << EOF
import os, re, glob

WIKI = "$WIKI"
EXCLUDE = {"$WIKI/templates"}

existing = set()
for f in glob.glob(WIKI + "/**/*.md", recursive=True):
    slug = os.path.splitext(os.path.basename(f))[0]
    existing.add(slug)

dead = []
wikilink_re = re.compile(r'\[\[([^\]|#]+?)(?:[|#][^\]]*)?\]\]')
placeholder_re = re.compile(r'^(page-slug|entity-name|process-name|pattern-name|method-name|concept-name|overview-name|synthesis-name|rule-name|axiom-name|other-.*|next-.*|parent-.*|raw-document-.*|reconstructed-.*|typed-page-.*|wikilink|overview-name-\d+)$')

for f in sorted(glob.glob(WIKI + "/**/*.md", recursive=True)):
    if any(f.startswith(ex) for ex in EXCLUDE):
        continue
    rel = f.replace(os.path.expanduser("~/vaults/Vladimir-llm-wiki/"), "")
    content = open(f).read()
    for m in wikilink_re.finditer(content):
        target = m.group(1).strip()
        slug = os.path.splitext(os.path.basename(target))[0]
        if slug not in existing and not placeholder_re.match(slug):
            dead.append((rel, slug))

if dead:
    print(f"DEAD LINKS: {len(dead)}")
    cur = None
    for f, slug in dead:
        if f != cur:
            print(f"\n  {f}")
            cur = f
        print(f"    -> [[{slug}]]")
    exit(1)
else:
    print(f"OK — no dead links ({len(existing)} pages scanned)")
EOF
