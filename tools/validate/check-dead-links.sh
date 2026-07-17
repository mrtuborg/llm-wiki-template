#!/usr/bin/env bash
# check-dead-links.sh — find broken or empty [[wikilinks]] in wiki/ pages
# Excludes: wiki/templates/ (placeholders by design)
# Empty file = file size is 0 bytes

WIKI="$(cd "$(dirname "$0")/../.." && pwd)/wiki"

python3 << EOF
import os, re, glob

WIKI = "$WIKI"
EXCLUDE_DIRS = {os.path.join(WIKI, "templates")}

placeholder_re = re.compile(
    r'^(page-slug|entity-slug|entity-name|process-name|pattern-name|method-name|'
    r'concept-name|overview-name|synthesis-name|rule-name|axiom-name|'
    r'other-.*|next-.*|parent-.*|raw-document-.*|reconstructed-.*|'
    r'typed-page-.*|wikilink|overview-name-\d+|\.\.\.)$'
)

def body_length(path):
    """Return file size in bytes."""
    try:
        return os.path.getsize(path)
    except:
        return 0

# Build slug → path map
slug_to_path = {}
for f in glob.glob(WIKI + "/**/*.md", recursive=True):
    slug = os.path.splitext(os.path.basename(f))[0]
    slug_to_path[slug] = f

wikilink_re = re.compile(r'\[\[([^\]|#]+?)(?:[|#][^\]]*)?\]\]')

broken = []   # slug doesn't exist
empty  = []   # slug exists but file has no body

for f in sorted(glob.glob(WIKI + "/**/*.md", recursive=True)):
    if any(f.startswith(ex) for ex in EXCLUDE_DIRS):
        continue
    rel = f.replace(os.path.expanduser("~/vaults/Vladimir-llm-wiki/"), "")
    content = open(f).read()
    for m in wikilink_re.finditer(content):
        target = m.group(1).strip()
        slug = os.path.splitext(os.path.basename(target))[0]
        if placeholder_re.match(slug):
            continue
        if slug not in slug_to_path:
            broken.append((rel, slug))
        elif body_length(slug_to_path[slug]) == 0:
            empty.append((rel, slug, slug_to_path[slug]))

errors = 0

if broken:
    errors += len(broken)
    print(f"BROKEN LINKS (file missing): {len(broken)}")
    cur = None
    for f, slug in broken:
        if f != cur:
            print(f"\n  {f}")
            cur = f
        print(f"    -> [[{slug}]] (missing)")

if empty:
    errors += len(empty)
    print(f"\nEMPTY LINKS (file exists but no body): {len(empty)}")
    cur = None
    for f, slug, path in empty:
        if f != cur:
            print(f"\n  {f}")
            cur = f
        print(f"    -> [[{slug}]] (empty: {path})")

if errors == 0:
    print(f"OK — no dead or empty links ({len(slug_to_path)} pages scanned)")
else:
    print(f"\nTOTAL ERRORS: {errors}")
    exit(1)
EOF
