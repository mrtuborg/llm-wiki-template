#!/usr/bin/env bash
# compile.sh — Shell-based Stage 7 post-processing
# Updates wiki/index.md, sources-registry.md, progress.json stats
# Usage: WIKI_ROOT=/path/to/vault bash compile.sh [BATCH_ID]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WIKI_ROOT="${WIKI_ROOT:-$(cd "$SCRIPT_DIR/../.." && pwd)}"
TRACKING_DIR="$WIKI_ROOT/pipeline/tracking"
PROGRESS_FILE="$TRACKING_DIR/progress.json"
STAGE_OUTPUT_DIR="$WIKI_ROOT/pipeline/stage-output"
WIKI_DIR="$WIKI_ROOT/wiki"
INDEX_FILE="$WIKI_DIR/index.md"
REGISTRY_FILE="$WIKI_ROOT/pipeline/sources-registry.md"

NOW_ISO="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
NOW_LOCAL="$(date +%Y-%m-%dT%H:%M:%S%z)"
VAULT_NAME="$(basename "$WIKI_ROOT")"

echo "[compile] Running shell compilation for $VAULT_NAME..."

# ── 1+2. Count pages and rebuild wiki/index.md ───────────────────────────────
python3 - "$WIKI_ROOT" "$INDEX_FILE" "$NOW_LOCAL" << 'PYEOF'
import sys, os, re
from pathlib import Path
from collections import defaultdict

WIKI_ROOT, INDEX_FILE, NOW = sys.argv[1], sys.argv[2], sys.argv[3]
VAULT_NAME = os.path.basename(WIKI_ROOT)
WIKI_DIR = Path(WIKI_ROOT) / 'wiki'
SKIP = {'graph', 'updates', 'templates', 'decisions'}

domain_pages = defaultdict(list)
for mdfile in sorted(WIKI_DIR.rglob('*.md')):
    rel = mdfile.relative_to(WIKI_DIR)
    parts = rel.parts
    if len(parts) < 2:          # skip root-level files (index.md, etc.)
        continue
    domain = parts[0]
    if domain in SKIP:
        continue
    domain_pages[domain].append(str(rel))

total = sum(len(v) for v in domain_pages.values())
domains = sorted(domain_pages.keys())

lines = [
    f"# {VAULT_NAME} Wiki Index", "",
    f"Generated: {NOW}", "",
    f"Total pages: {total}",
    f"Domains: {len(domains)}",
    f"Last updated: {NOW}", "",
    "## Domains", "",
    "| Domain | Pages | Description |",
    "|--------|-------|-------------|",
]
for d in domains:
    lines.append(f"| {d} | {len(domain_pages[d])} |  |")
lines += ["", "## Pages by Domain", ""]
for d in domains:
    lines.append(f"### {d}")
    lines.append("")
    for p in domain_pages[d]:
        lines.append(f"- [{p}]({p})")
    lines.append("")

Path(INDEX_FILE).write_text('\n'.join(lines))
print(f"[compile] wiki/index.md: {total} pages, {len(domains)} domains")
PYEOF

# ── 3. Update sources-registry.md ───────────────────────────────────────────
python3 - "$PROGRESS_FILE" "$REGISTRY_FILE" "$NOW_LOCAL" "$WIKI_ROOT" << 'PYEOF'
import sys, json, os
from pathlib import Path

PROGRESS_FILE, REGISTRY_FILE, NOW, WIKI_ROOT = sys.argv[1:5]
data = json.load(open(PROGRESS_FILE))
last_dl = data.get('last_decision_log') or 'never'

lines = [
    "# Sources Registry", "",
    f"Last compilation: {NOW}", "",
    f"Last decision log: {last_dl}", "",
    "| Source | Path | Status | Pages |",
    "|--------|------|--------:|------:|",
]
for key, val in sorted(data.get('sources', {}).items()):
    status = val.get('status', 'unknown')
    path = str(Path.home() / key) if not key.startswith('/') else key
    pages = val.get('wiki_pages', 0)
    lines.append(f"| {key} | {path} | `{status}` | {pages} |")

lines += [
    "", "## Status Legend",
    "| Status | Meaning |",
    "|--------|---------|",
    "| `pending` | Not yet processed |",
    "| `queued` | Queued for pipeline |",
    "| `reconstructed` | Stage 5 done |",
    "| `ingested` | Stages 5–6 done; typed pages exist in wiki |",
    "| `compiled` | Stages 5–7 done; in index |",
    "| `done` | All layers complete |",
]
Path(REGISTRY_FILE).write_text('\n'.join(lines))
print("[compile] sources-registry.md updated")
PYEOF

# ── 4. Update progress.json stats ───────────────────────────────────────────
python3 - "$PROGRESS_FILE" "$NOW_ISO" << 'PYEOF'
import sys, json
from collections import Counter

PROGRESS_FILE, NOW = sys.argv[1], sys.argv[2]
data = json.load(open(PROGRESS_FILE))
counts = Counter(v.get('status', 'unknown') for v in data.get('sources', {}).values())
data['stats'] = {
    'total':         sum(counts.values()),
    'pending':       counts.get('pending', 0),
    'queued':        counts.get('queued', 0),
    'reconstructed': counts.get('reconstructed', 0),
    'ingested':      counts.get('ingested', 0),
    'compiled':      counts.get('compiled', 0),
    'done':          counts.get('done', 0),
    'skipped':       counts.get('skipped', 0),
}
data['last_updated'] = NOW
data['last_compilation'] = NOW
with open(PROGRESS_FILE, 'w') as f:
    json.dump(data, f, indent=2)
print(f"[compile] progress.json stats: done={counts.get('done',0)} queued={counts.get('queued',0)} total={sum(counts.values())}")
PYEOF

# ── 5. Dead link check + stage output ───────────────────────────────────────
STAGE_OUT="$STAGE_OUTPUT_DIR/current-7-compilation.md"
DEAD_RESULT="skipped (validator not found)"
if [[ -f "$WIKI_ROOT/engine/tools/validate/check-dead-links.sh" ]]; then
    DEAD_RESULT=$(bash "$WIKI_ROOT/engine/tools/validate/check-dead-links.sh" 2>&1 | tail -3) || true
fi

TOTAL_PAGES=$(python3 - "$PROGRESS_FILE" << 'PYEOF'
import json, sys
d = json.load(open(sys.argv[1]))
print(d['stats'].get('total', 0))
PYEOF
)

# Count wiki pages modified in the last 10 minutes (= this batch's new pages)
NEW_PAGES=$(find "$WIKI_DIR" -name '*.md' -newer "$PROGRESS_FILE" -not -path '*/graph/*' -not -path '*/updates/*' -not -path '*/templates/*' -not -path '*/decisions/*' 2>/dev/null | wc -l | tr -d ' ')

printf '# Stage 7 Output — %s (shell compile)\n## Dead link check\n%s\n\n## Index updated\n- See wiki/index.md\n\n## Registry updated\n- See pipeline/sources-registry.md\n\n## Synthesis trigger\n- New pages this batch: %s\n- Total pages: %s\n- Synthesis threshold (min 5 new pages): %s\n' \
    "$NOW_LOCAL" "$DEAD_RESULT" "$NEW_PAGES" "$TOTAL_PAGES" \
    "$([ "${NEW_PAGES:-0}" -ge 5 ] && echo YES || echo NO)" > "$STAGE_OUT"

echo "[compile] Stage output written"
echo "[compile] ✅ Done"
