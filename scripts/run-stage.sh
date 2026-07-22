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

# Guard progress.json: agents must NEVER write it directly (shell/tracker.sh owns it).
# Prompt rule alone is not enforced — an Edit-tool text patch against a stale read
# of this file (while tracker.sh concurrently rewrites it) can splice two file
# snapshots together and corrupt the JSON. chmod 444 blocks naive in-place writes
# (the actual observed corruption vector), but a bash-capable agent can still
# bypass it via write-temp+mv or by deleting the file outright — so the real
# safety net is the post-stage content+schema validation below, not the chmod.
PROGRESS_FILE_GUARD="${TRACKING_DIR:-$WIKI_ROOT/pipeline/tracking}/progress.json"
PROGRESS_FILE_BACKUP="${TRACKING_DIR:-$WIKI_ROOT/pipeline/tracking}/.bak-progress.json"

# Self-heal: if a previous run crashed (e.g. SIGKILL) mid-guard, progress.json may
# still be stuck at 444 from that run. Un-stick it before we do anything else.
[ -f "$PROGRESS_FILE_GUARD" ] && chmod 644 "$PROGRESS_FILE_GUARD" 2>/dev/null

# trap ensures write access is restored even if this script is interrupted
# (SIGINT/SIGTERM) while progress.json is chmod 444. SIGKILL can't be trapped —
# the self-heal above is what recovers from that case on the next run.
_restore_progress_perms() { [ -f "$PROGRESS_FILE_GUARD" ] && chmod 644 "$PROGRESS_FILE_GUARD" 2>/dev/null; }
trap _restore_progress_perms EXIT INT TERM

if [ -f "$PROGRESS_FILE_GUARD" ]; then
    cp -f "$PROGRESS_FILE_GUARD" "$PROGRESS_FILE_BACKUP"
    chmod 444 "$PROGRESS_FILE_GUARD"
fi

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

# Restore write access to progress.json regardless of outcome — shell (tracker.sh)
# needs it writable for the status promotions that follow this stage.
# Validate on CONTENT, not just chmod state — the agent can bypass chmod 444 via
# its own write-temp+mv or by deleting the file outright, so we must check the
# file exists, parses, AND still has the expected schema (not just "is valid JSON").
if [ -f "$PROGRESS_FILE_GUARD" ]; then
    chmod 644 "$PROGRESS_FILE_GUARD" 2>/dev/null
fi

_progress_ok=false
if [ -f "$PROGRESS_FILE_GUARD" ] \
   && jq empty "$PROGRESS_FILE_GUARD" 2>/dev/null \
   && [ "$(jq -r '(.sources | type == "object") and (.stats | type == "object")' "$PROGRESS_FILE_GUARD" 2>/dev/null)" = "true" ]; then
    _progress_ok=true
fi

if [ "$_progress_ok" = true ]; then
    rm -f "$PROGRESS_FILE_BACKUP"   # valid schema — safe to drop the backup
elif [ -f "$PROGRESS_FILE_BACKUP" ]; then
    if [ ! -f "$PROGRESS_FILE_GUARD" ]; then
        echo "[run-stage] ⚠️  progress.json is MISSING after stage $STAGE — restoring backup"
    else
        echo "[run-stage] ⚠️  progress.json is corrupted (invalid JSON or wrong schema) after stage $STAGE — restoring backup"
    fi
    echo "[run-stage] ⚠️  This means the agent wrote to progress.json despite the Tracking rule."
    mv -f "$PROGRESS_FILE_BACKUP" "$PROGRESS_FILE_GUARD"
    chmod 644 "$PROGRESS_FILE_GUARD"
    echo "[run-stage] ↩️  progress.json restored from backup"
fi

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
