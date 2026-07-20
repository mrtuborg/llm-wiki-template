#!/usr/bin/env bash
# check-dead-links.sh — validate wiki structural integrity:
#   1. Broken/empty [[wikilinks]]
#   2. Frontmatter duplication in body
#   3. Domain validity (must be one of fixed role domains)
#   4. Missing required frontmatter fields (title, type, domain, subdomain, created)
# Link check excludes: wiki/templates/, wiki/graph/, wiki/compiled/
# Domain check: ALL wiki pages including decisions/ and synthesis/

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENGINE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
export WIKI_ROOT ENGINE_DIR

# Load vault config (provides VALID_DOMAINS array, WIKI_DIR, etc.)
# shellcheck source=../scripts/lib/vault-config.sh
source "$ENGINE_DIR/scripts/lib/vault-config.sh" 2>/dev/null || {
    # Fallback if called outside engine context
    VALID_DOMAINS="Engineer TechLead Entrepreneur Self-care Family Meta"
}

WIKI="${WIKI_DIR:-$WIKI_ROOT/wiki}"

# Build Python-readable domain set from space-separated string (bash 3.2 safe)
DOMAINS_PY=""
for _d in $VALID_DOMAINS; do
    DOMAINS_PY="${DOMAINS_PY}'${_d}', "
done

python3 << EOF
import os, re, glob

WIKI = "$WIKI"
# Excluded from LINK checking (placeholder-heavy or generated files)
LINK_EXCLUDE_DIRS = {os.path.join(WIKI, d) for d in {"templates", "graph", "compiled", "updates"}}
# Excluded from DOMAIN checking (truly non-content dirs)
DOMAIN_EXCLUDE_DIRS = {os.path.join(WIKI, d) for d in {"templates", "graph", "compiled"}}
EXCLUDE_DIRS = LINK_EXCLUDE_DIRS  # backward compat for link checks

ALLOWED_DOMAINS = {${DOMAINS_PY%??}}  # trim trailing ", "

REQUIRED_FIELDS = {"type", "domain", "created"}          # hard errors if missing
WARN_FIELDS     = {"title", "subdomain"}                  # warnings only
SOURCE_FIELDS   = {"source_refs", "sources", "source"}   # at least one needed

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
    rel = f.replace(WIKI.rstrip("/") + "/", "").replace(WIKI + "/", "")
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


# --- Frontmatter duplication check ---
duplication_re = re.compile(r'^\*\*(Type|OTF|Domain|Status):\*\*', re.MULTILINE)
dupe = []
for f in sorted(glob.glob(WIKI + "/**/*.md", recursive=True)):
    if any(f.startswith(ex) for ex in EXCLUDE_DIRS):
        continue
    rel = f.replace(WIKI.rstrip("/") + "/", "").replace(WIKI + "/", "")
    content = open(f).read()
    body = re.sub(r'^---\n.*?\n---\n', '', content, count=1, flags=re.DOTALL)
    if duplication_re.search(body):
        matches = duplication_re.findall(body)
        dupe.append((rel, set(matches)))

if dupe:
    errors += len(dupe)
    print(f"\nFRONTMATTER DUPLICATION IN BODY: {len(dupe)}")
    for f, fields in dupe:
        print(f"  {f}: {', '.join(sorted(fields))}")


# --- Domain validity check ---
bad_domain = []
missing_fields = []
fm_re = re.compile(r'^---\n(.*?)\n---', re.DOTALL)

for f in sorted(glob.glob(WIKI + "/**/*.md", recursive=True)):
    if any(f.startswith(ex) for ex in EXCLUDE_DIRS):
        continue
    # Skip index files
    if os.path.basename(f) == "index.md":
        continue
    rel = f.replace(WIKI.rstrip("/") + "/", "").replace(WIKI + "/", "")
    content = open(f, encoding="utf-8", errors="replace").read()
    m = fm_re.match(content)
    if not m:
        continue
    fm_text = m.group(1)

    # Extract field values
    fm_fields = {}
    for line in fm_text.splitlines():
        kv = re.match(r'^(\w[\w_-]*):\s*(.*)$', line)
        if kv:
            fm_fields[kv.group(1)] = kv.group(2).strip()

    # Check domain is allowed
    domain = fm_fields.get("domain", "")
    if domain and domain not in ALLOWED_DOMAINS:
        bad_domain.append((rel, domain))

    # Hard required fields
    missing_hard = [f for f in REQUIRED_FIELDS if f not in fm_fields]
    # Soft warn fields
    missing_warn = [f for f in WARN_FIELDS if f not in fm_fields]
    if missing_hard:
        missing_fields.append((rel, missing_hard, "error"))
    elif missing_warn:
        missing_fields.append((rel, missing_warn, "warn"))

if bad_domain:
    errors += len(bad_domain)
    print(f"\nINVALID DOMAIN (not in allowed list): {len(bad_domain)}")
    for f, d in bad_domain[:20]:
        print(f"  {f}: domain={d!r}")
    if len(bad_domain) > 20:
        print(f"  ... and {len(bad_domain)-20} more")

hard_errors = [(f, mf) for f, mf, sev in missing_fields if sev == "error"]
warnings    = [(f, mf) for f, mf, sev in missing_fields if sev == "warn"]

if hard_errors:
    errors += len(hard_errors)
    print(f"\nMISSING REQUIRED FIELDS (errors): {len(hard_errors)} pages")
    for f, mf in hard_errors[:20]:
        print(f"  {f}: missing {mf}")
    if len(hard_errors) > 20:
        print(f"  ... and {len(hard_errors)-20} more")

warn_subdomain = sum(1 for _, mf in warnings if "subdomain" in mf)
warn_title     = sum(1 for _, mf in warnings if "title" in mf)
if warnings:
    print(f"\nWARNINGS (non-breaking):")
    if warn_subdomain:
        print(f"  {warn_subdomain} pages missing 'subdomain' field")
    if warn_title:
        print(f"  {warn_title} pages missing 'title' in frontmatter (H1 heading used instead)")

total_pages = len(slug_to_path)
if errors == 0:
    print(f"OK — no issues found ({total_pages} pages scanned)")
    if warnings:
        print(f"  ⚠️  {len(warnings)} pages have non-breaking warnings (title/subdomain)")
else:
    print(f"\nTOTAL ERRORS: {errors}")
    exit(1)
    exit(1)
EOF
