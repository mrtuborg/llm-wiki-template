#!/usr/bin/env bash
# run-stage.sh — Execute one pipeline stage via gh copilot (bash 3.2 compatible)
# Usage: ./run-stage.sh <stage-name> [batch_id] [batch_size]

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

# Resolve model: stage-specific override > agent.model > auto (bash 3.2 safe eval)
_stage_key="AGENT_MODEL_$(echo "$STAGE" | tr '-' '_' | tr '[:lower:]' '[:upper:]')"
eval "_stage_val=\"\${${_stage_key}:-}\""
if [ -n "$_stage_val" ]; then
    PIPELINE_MODEL="$_stage_val"
else
    PIPELINE_MODEL="${AGENT_MODEL:-auto}"
fi

echo ""
echo "┌─────────────────────────────────────────────────────┐"
echo "│  STAGE: $STAGE"
echo "│  Batch: $BATCH_ID  Size: $BATCH_SIZE"
echo "└─────────────────────────────────────────────────────┘"
echo ""

# Build the prompt
prompt_file=$(build_prompt "$STAGE" "$BATCH_ID" "$BATCH_SIZE")
echo "[run-stage] Prompt: $prompt_file ($(wc -c < "$prompt_file") bytes)"

# Stage output path — agent writes here; we back up current and restore on failure
_out_dir="${STAGE_OUTPUT_DIR:-$WIKI_ROOT/pipeline/stage-output}"
STAGE_OUT_FILE="$_out_dir/current-${STAGE}.md"
STAGE_OUT_BACKUP="$_out_dir/.bak-current-${STAGE}.md"

# Back up existing output (safe handoff: previous run kept if agent fails)
[ -f "$STAGE_OUT_FILE" ] && cp -f "$STAGE_OUT_FILE" "$STAGE_OUT_BACKUP"
# Create empty placeholder so agent always uses Create (not Edit)
: > "$STAGE_OUT_FILE"

# Build --add-dir flags: wiki root + all active sources
SOURCES_FILE="${TRACKING_DIR:-$WIKI_ROOT/pipeline/tracking}/sources.json"
_tmp_dirs=$(mktemp)
echo "$WIKI_ROOT" > "$_tmp_dirs"
if [ -f "$SOURCES_FILE" ]; then
    python3 - "$SOURCES_FILE" >> "$_tmp_dirs" << 'PYEOF'
import json, sys
data = json.load(open(sys.argv[1]))
for s in data.get('sources', []):
    if s.get('active') and s.get('path'):
        print(s['path'])
PYEOF
fi

add_dir_args=""
while IFS= read -r src_path; do
    [ -z "$src_path" ] && continue
    add_dir_args="$add_dir_args --add-dir $src_path"
done < "$_tmp_dirs"
rm -f "$_tmp_dirs"

echo "[run-stage] Dirs:$add_dir_args"
echo "[run-stage] Model: $PIPELINE_MODEL"
echo "[run-stage] Launching gh copilot..."
echo ""

# shellcheck disable=SC2086
gh copilot -- \
    -p "$(cat "$prompt_file")" \
    --model "$PIPELINE_MODEL" \
    --allow-all-tools \
    --allow-all-paths \
    $add_dir_args || true   # capture exit code below; -e is off in callers

EXIT_CODE=$?

echo ""
if [ "$EXIT_CODE" -eq 0 ]; then
    echo "[run-stage] ✅ Stage $STAGE completed"
    rm -f "$STAGE_OUT_BACKUP"   # clean up backup on success
else
    echo "[run-stage] ❌ Stage $STAGE failed (exit $EXIT_CODE)"
    # Restore previous good output so downstream stages have valid context
    [ -f "$STAGE_OUT_BACKUP" ] && mv -f "$STAGE_OUT_BACKUP" "$STAGE_OUT_FILE" && \
        echo "[run-stage] ↩️  Stage output restored from backup"
    mkdir -p "${_out_dir}/errors"
    {
        echo "# Stage Error -- $(date -u +%Y-%m-%dT%H:%M:%SZ)"
        echo "- Stage: $STAGE"
        echo "- Batch: $BATCH_ID"
        echo "- Exit code: $EXIT_CODE"
        echo "- Prompt: $prompt_file"
    } >> "${_out_dir}/errors/$(date -u +%Y%m%dT%H%M%SZ)-${STAGE}.md"
    exit "$EXIT_CODE"
fi

# Update tracker stats after every stage
tracker_update_stats

# Post-stage: mark source files done after stage 9
STAGE_OUT="${STAGE_OUTPUT_DIR:-$WIKI_ROOT/pipeline/stage-output}/current-${STAGE}.md"
if [ "$STAGE" = "9-decision-log" ] && [ -f "$STAGE_OUT" ]; then
    echo "[run-stage] Storing content hashes for processed source files..."
    hashed=0
    while IFS= read -r line; do
        key=$(echo "$line" | sed 's/^[[:space:]]*-[[:space:]]*//' | sed "s|^$HOME/||" | xargs)
        [ -z "$key" ] && continue
        abs="$HOME/$key"
        [ -f "$abs" ] || continue
        tracker_mark_done "$key"
        hashed=$(( hashed + 1 ))
    done < <(awk '/^processed_files:/,/^[^-[:space:]]/' "$STAGE_OUT" 2>/dev/null | grep "^[[:space:]]*-")
    [ "$hashed" -gt 0 ] && echo "[run-stage] ✅ Stored hashes for $hashed source files"
    tracker_update_stats
fi

# Post-stage domain validation
case "$STAGE" in
    6-ingestion|8-synthesis|9-decision-log)
        echo ""
        echo "[run-stage] Checking domain validity of new pages..."
        VALID_DOMAINS_LIST="${VALID_DOMAINS:-Engineer TechLead Entrepreneur Self-care Family Meta}"
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
            d = m.group(1).strip().strip('"').strip("'")
            if d and d not in valid:
                print("  BAD DOMAIN [" + d + "]: " + path.replace(wiki + "/", ""), flush=True)
                bad += 1
print(bad)
PYEOF
        bad_count=$(python3 "$_py_tmp" "$WIKI_ROOT/wiki" "$VALID_DOMAINS_LIST")
        rm -f "$_py_tmp"
        count=$(echo "$bad_count" | tail -1)
        if [ "$count" -gt 0 ]; then
            echo "[run-stage] WARNING: $count pages with invalid domain — fix with: ./llm-wiki validate"
        else
            echo "[run-stage] ✅ All domains valid"
        fi
        ;;
esac
