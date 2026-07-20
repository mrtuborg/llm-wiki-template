#!/usr/bin/env bash
# lib/context-builder.sh — Build the full prompt for a given stage
# Source this file: source "$(dirname "$0")/lib/context-builder.sh"

WIKI_ROOT="${WIKI_ROOT:-$HOME/vaults/Vladimir-llm-wiki}"
PROMPTS_DIR="$WIKI_ROOT/pipeline/prompts"
STAGE_OUTPUT_DIR="$WIKI_ROOT/pipeline/stage-output"

# Build a prompt file for a stage and write to /tmp/pipeline-prompt-<stage>.md
# Returns: path to built prompt file
build_prompt() {
    local stage="$1"          # e.g. "5-reconstruction", "add-scan", "maintain-health"
    local batch_id="${2:-}"
    local batch_size="${3:-3}"
    local timestamp
    timestamp=$(date -u +%Y%m%dT%H%M%SZ)

    local template="$PROMPTS_DIR/${stage}.md"
    local context="$PROMPTS_DIR/_context.md"
    local output="/tmp/pipeline-prompt-${stage}.md"

    if [[ ! -f "$template" ]]; then
        echo "[context-builder] ERROR: prompt template not found: $template" >&2
        return 1
    fi

    # Assemble: shared context + stage template
    {
        echo "# Pipeline Context"
        cat "$context"
        echo ""
        echo "---"
        echo ""
        cat "$template"
    } > "$output"

    # Replace placeholders — use python3 for portability (avoids BSD vs GNU sed issues)
    python3 - "$output" <<PYEOF
import sys
path = sys.argv[1]
with open(path) as f:
    content = f.read()
content = content.replace("{{TIMESTAMP}}", "${timestamp}")
content = content.replace("{{BATCH_ID}}", "${batch_id:-batch-${timestamp}}")
content = content.replace("{{BATCH_SIZE}}", "${batch_size}")
content = content.replace("{{WIKI_ROOT}}", "${WIKI_ROOT}")
content = content.replace("{{SHARED_CONTEXT}}", "")
with open(path, "w") as f:
    f.write(content)
PYEOF

    echo "$output"
}

# Read a stage output file (pass its content to next stage prompt)
read_stage_output() {
    local stage_num="$1"   # e.g. "5", "6", "7"
    local output_file="$STAGE_OUTPUT_DIR/current-${stage_num}-"*.md
    # shellcheck disable=SC2086
    if ls $output_file 2>/dev/null | head -1 | grep -q .; then
        cat $(ls $output_file 2>/dev/null | head -1)
    else
        echo "(no stage ${stage_num} output yet)"
    fi
}
