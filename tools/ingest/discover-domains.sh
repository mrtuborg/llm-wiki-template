#!/bin/bash
# discover-domains.sh
# Scans SOURCES_PATH and suggests domains for 1-domains-workflow.md
#
# Usage:
#   ./tools/ingest/discover-domains.sh           # print suggestions
#   ./tools/ingest/discover-domains.sh --apply   # write into 1-domains-workflow.md

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
CONFIG="$WIKI_ROOT/pipeline/config.md"
DOMAINS_WORKFLOW="$WIKI_ROOT/pipeline/1-domains-workflow.md"
TMPFILE=$(mktemp)
trap 'rm -f "$TMPFILE"' EXIT

# ── Parse SOURCES_PATH from config.md ─────────────────────────────────────────
SOURCES_RAW=$(grep -E "^SOURCES_PATH\s*=" "$CONFIG" | head -1 | sed 's/.*=\s*//' | tr -d '`' | xargs)
SOURCES_PATH="${SOURCES_RAW/#\~/$HOME}"

if [ -z "$SOURCES_PATH" ] || [ ! -d "$SOURCES_PATH" ]; then
  echo "ERROR: SOURCES_PATH not found or not a directory."
  echo "  Config: $CONFIG"
  echo "  Value:  $SOURCES_PATH"
  exit 1
fi

echo "=== Domain Discovery ==="
echo "SOURCES_PATH: $SOURCES_PATH"
echo ""

# ── Skip patterns ──────────────────────────────────────────────────────────────
should_skip() {
  local name="$1"
  case "$name" in
    .*|attachments|history|scripts|done|copilot*|_*|wiki) return 0 ;;
  esac
  return 1
}

# ── Collect candidates into TMPFILE: "count name" lines ───────────────────────

# Priority 1: existing wiki/ subfolder (already curated categories)
WIKI_SUBDIR="$SOURCES_PATH/wiki"
if [ -d "$WIKI_SUBDIR" ]; then
  echo "Found existing wiki/ categories — using as primary domain source."
  echo ""
  for d in "$WIKI_SUBDIR"/*/; do
    [ -d "$d" ] || continue
    name=$(basename "$d")
    should_skip "$name" && continue
    count=$(find "$d" -maxdepth 2 -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
    [ "$count" -eq 0 ] && continue
    echo "$count $name" >> "$TMPFILE"
  done
fi

# Priority 2: top-level folders (supplement if not already in wiki/)
for d in "$SOURCES_PATH"/*/; do
  [ -d "$d" ] || continue
  name=$(basename "$d")
  should_skip "$name" && continue
  # Skip if already added from wiki/
  grep -q " $name$" "$TMPFILE" 2>/dev/null && continue
  count=$(find "$d" -maxdepth 3 -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
  [ "$count" -lt 3 ] && continue
  echo "$count $name" >> "$TMPFILE"
done

# ── Sort descending ────────────────────────────────────────────────────────────
SORTED=$(sort -rn "$TMPFILE")

echo "Discovered folders (sorted by file count):"
echo ""
echo "$SORTED" | while read -r count name; do
  printf "  %4d files  —  %s\n" "$count" "$name"
done

# ── Categorize by keyword heuristic ───────────────────────────────────────────
TECH_KEYWORDS="linux|embed|yocto|bitbake|docker|devops|network|protocol|ai|llm|electron|hardware|iot|ota|python|software|security|multimedia|vision|signal|dsp|rtos|firmware|rf|engineer|develop|code|tech|biosort|promon"
PERSONAL_KEYWORDS="personal|career|family|finance|penger|self|entrepreneur|life|home|health|hobby|maker|role|inbox|notes|forever|checklist|process|product|politics|people"

TECH_OUT=""
PERSONAL_OUT=""
OTHER_OUT=""

while read -r count name; do
  lower=$(echo "$name" | tr '[:upper:]' '[:lower:]' | sed 's/[-_]/ /g')
  if echo "$lower" | grep -qiE "$TECH_KEYWORDS"; then
    TECH_OUT="${TECH_OUT}- $name"$'\n'
  elif echo "$lower" | grep -qiE "$PERSONAL_KEYWORDS"; then
    PERSONAL_OUT="${PERSONAL_OUT}- $name"$'\n'
  else
    OTHER_OUT="${OTHER_OUT}- $name"$'\n'
  fi
done <<< "$SORTED"

# ── Build output block ─────────────────────────────────────────────────────────
OUTPUT="### DOMAIN SOURCES
Use these areas as initial hints, but you may reorganize them.
Domains auto-discovered from: $SOURCES_PATH
"
OUTPUT+=$'\n'
[ -n "$TECH_OUT" ] && OUTPUT+="Technical domains:"$'\n'"$TECH_OUT"$'\n'
[ -n "$PERSONAL_OUT" ] && OUTPUT+="Professional and personal domains:"$'\n'"$PERSONAL_OUT"$'\n'
[ -n "$OTHER_OUT" ] && OUTPUT+="Other domains:"$'\n'"$OTHER_OUT"

echo ""
echo "=== Suggested DOMAIN_SOURCES block ==="
echo ""
echo "$OUTPUT"

# ── Apply ──────────────────────────────────────────────────────────────────────
if [ "${1:-}" = "--apply" ]; then
  if grep -q "{{DOMAIN_SOURCES}}" "$DOMAINS_WORKFLOW"; then
    # Write output block to a temp file, use Python for safe multiline replace
    BLOCK_FILE=$(mktemp)
    echo "$OUTPUT" > "$BLOCK_FILE"
    python3 - "$DOMAINS_WORKFLOW" "$BLOCK_FILE" <<'PYEOF'
import sys
workflow, block_file = sys.argv[1], sys.argv[2]
with open(workflow) as f: content = f.read()
with open(block_file) as f: block = f.read().rstrip('\n')
content = content.replace('{{DOMAIN_SOURCES}}', block)
with open(workflow, 'w') as f: f.write(content)
PYEOF
    rm -f "$BLOCK_FILE"
    echo "✓ Written to: $DOMAINS_WORKFLOW"
  else
    echo "ℹ️  No {{DOMAIN_SOURCES}} placeholder found — file may already be customized."
  fi
else
  echo "────────────────────────────────────────────────────"
  echo "To write this into 1-domains-workflow.md, run:"
  echo "  ./tools/ingest/discover-domains.sh --apply"
fi

