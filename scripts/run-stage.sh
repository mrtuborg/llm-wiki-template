#!/usr/bin/env bash
# run-stage.sh — Execute one pipeline stage via gh copilot
# Usage: ./run-stage.sh <stage-name> [batch_id] [batch_size]
#
# stage-name: "add-scan", "5-reconstruction", "6-ingestion",
#             "7-compilation", "8-synthesis", "9-decision-log",
#             "maintain-health"

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
export WIKI_ROOT

ENGINE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
export ENGINE_DIR
source "$SCRIPT_DIR/lib/vault-config.sh"
source "$SCRIPT_DIR/lib/tracker.sh"
source "$SCRIPT_DIR/lib/context-builder.sh"

STAGE="${1:?Usage: run-stage.sh <stage-name> [batch_id] [batch_size]}"
BATCH_ID="${2:-batch-$(date -u +%Y%m%dT%H%M%SZ)}"
BATCH_SIZE="${3:-3}"

# Resolve model: stage-specific override > agent.model > auto
_stage_key="AGENT_MODEL_$(echo "$STAGE" | tr '-' '_' | tr '[:lower:]' '[:upper:]')"
PIPELINE_MODEL="${!_stage_key:-${AGENT_MODEL:-auto}}"

echo ""
echo "┌─────────────────────────────────────────────────────┐"
echo "│  STAGE: $STAGE"
echo "│  Batch: $BATCH_ID  Size: $BATCH_SIZE"
echo "└─────────────────────────────────────────────────────┘"
echo ""

# Build the prompt
prompt_file=$(build_prompt "$STAGE" "$BATCH_ID" "$BATCH_SIZE")
echo "[run-stage] Prompt: $prompt_file ($(wc -c < "$prompt_file") bytes)"

# Build --add-dir flags: wiki root + all active sources from sources.json
SOURCES_FILE="${TRACKING_DIR:-$WIKI_ROOT/pipeline/tracking}/sources.json"
add_dir_args=("--add-dir" "$WIKI_ROOT")
if [[ -f "$SOURCES_FILE" ]]; then
    while IFS= read -r src_path; do
        [[ -n "$src_path" && -d "$src_path" ]] && add_dir_args+=("--add-dir" "$src_path")
    done < <(python3 -c "
import json
data = json.load(open('$SOURCES_FILE'))
for s in data.get('sources', []):
    if s.get('active') and s.get('path'):
        print(s['path'])
")
fi

echo "[run-stage] Dirs: ${add_dir_args[*]}"
echo "[run-stage] Launching gh copilot..."
echo ""

echo "[run-stage] Model: $PIPELINE_MODEL"
gh copilot -- \
    -p "$(cat "$prompt_file")" \
    --model "$PIPELINE_MODEL" \
    --allow-all-tools \
    --allow-all-paths \
    "${add_dir_args[@]}"

EXIT_CODE=$?

echo ""
if [[ $EXIT_CODE -eq 0 ]]; then
    echo "[run-stage] ✅ Stage $STAGE completed"
else
    echo "[run-stage] ❌ Stage $STAGE failed (exit $EXIT_CODE)"
    mkdir -p "${STAGE_OUTPUT_DIR:-$WIKI_ROOT/pipeline/stage-output}/errors"
    {
        echo "# Stage Error — $(date -u +%Y-%m-%dT%H:%M:%SZ)"
        echo "- Stage: $STAGE"
        echo "- Batch: $BATCH_ID"
        echo "- Exit code: $EXIT_CODE"
        echo "- Prompt: $prompt_file"
    } >> "${STAGE_OUTPUT_DIR:-$WIKI_ROOT/pipeline/stage-output}/errors/$(date -u +%Y%m%dT%H%M%SZ)-${STAGE}.md"
    exit $EXIT_CODE
fi

# Update tracker stats after every stage
tracker_update_stats

# ─── Post-stage: hash tracking ──────────────────────────────────────────────
# Stage 9 (final stage) marks processed source files as done.
# Reads "processed_files:" list from the stage-output manifest.
STAGE_OUT="${STAGE_OUTPUT_DIR:-$WIKI_ROOT/pipeline/stage-output}/current-${STAGE}.md"
if [[ "$STAGE" == "9-decision-log" && -f "$STAGE_OUT" ]]; then
    echo "[run-stage] Storing content hashes for processed source files..."
    hashed=0
    # Look for lines like:  - vaults/Vladimir/path/to/file.md  (or full $HOME path)
    while IFS= read -r line; do
        # Strip leading "  - " or "- " and whitespace
        key=$(echo "$line" | sed 's/^[[:space:]]*-[[:space:]]*//' | sed "s|^$HOME/||" | xargs)
        [[ -z "$key" ]] && continue
        abs="$HOME/$key"
        [[ -f "$abs" ]] || continue
        tracker_mark_done "$key"
        hashed=$(( hashed + 1 ))
    done < <(awk '/^processed_files:/,/^[^-[:space:]]/' "$STAGE_OUT" 2>/dev/null | grep "^[[:space:]]*-")
    [[ $hashed -gt 0 ]] && echo "[run-stage] ✅ Stored hashes for $hashed source files"
    tracker_update_stats
fi

# Post-stage domain validation — catch bad domain: values written by agents
if [[ "$STAGE" == "8-synthesis" || "$STAGE" == "9-decision-log" || "$STAGE" == "6-ingestion" ]]; then
    echo ""
    echo "[run-stage] 🔍 Checking domain validity of new pages..."
    VALID_DOMAINS_LIST="${VALID_DOMAINS[*]:-Engineer TechLead Entrepreneur Self-care Family Meta}"
    _py_tmp=$(mktemp /tmp/run-stage-validate.XXXXXX.py)
    cat > "$_py_tmp" << 'PYEOF'
import os, re, sys
wiki = sys.argv[1]
valid = set(sys.argv[2].split())
bad = 0
for root, _, files in os.walk(wiki):
    for f in files:
        if not f.endswith(".md"):
            continue
        path = os.path.join(root, f)
        m = re.search(r"^domain:\s*(.+)", open(path).read(), re.MULTILINE)
        if m:
            d = m.group(1).strip().strip(chr(34)).strip(chr(39))
            if d and d not in valid:
                print("  BAD DOMAIN [" + d + "]: " + path.replace(wiki + "/", ""), flush=True)
                bad += 1
print(bad)
PYEOF
    bad_count=$(python3 "$_py_tmp" "$WIKI_ROOT/wiki" "$VALID_DOMAINS_LIST")
    rm -f "$_py_tmp"
    count=$(echo "$bad_count" | tail -1)
    if [[ "$count" -gt 0 ]]; then
        echo "[run-stage] ⚠️  $count pages with invalid domain: field — fix with: ./llm-wiki validate"
    else
        echo "[run-stage] ✅ All domains valid"
    fi
fi
