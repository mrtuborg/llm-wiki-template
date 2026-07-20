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

# SOURCES_DIR resolved from active sources in vault (see orchestrator source add)

echo ""
echo "┌─────────────────────────────────────────────────────┐"
echo "│  STAGE: $STAGE"
echo "│  Batch: $BATCH_ID  Size: $BATCH_SIZE"
echo "└─────────────────────────────────────────────────────┘"
echo ""

# Build the prompt
prompt_file=$(build_prompt "$STAGE" "$BATCH_ID" "$BATCH_SIZE")
echo "[run-stage] Prompt: $prompt_file ($(wc -c < "$prompt_file") bytes)"

# Invoke gh copilot in non-interactive mode
echo "[run-stage] Launching gh copilot..."
echo ""

gh copilot -- \
    -p "$(cat "$prompt_file")" \
    --allow-all-tools \
    --allow-all-paths \
    --add-dir "$WIKI_ROOT" \
    --add-dir "$SOURCES_DIR"

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
