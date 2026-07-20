#!/usr/bin/env bash
# context-builder.sh — builds prompt files for each pipeline stage
# Sourced by orchestrator.sh and run-stage.sh (WIKI_ROOT already set)

WIKI_ROOT="${WIKI_ROOT:-$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)}"
PROMPTS_DIR="${PROMPTS_DIR:-$WIKI_ROOT/pipeline/prompts}"
STAGE_OUTPUT_DIR="${STAGE_OUTPUT_DIR:-$WIKI_ROOT/pipeline/stage-output}"

# Build a prompt file for a stage and write to /tmp/pipeline-prompt-<stage>.md
build_prompt() {
    local stage="$1"
    local context_file="$PROMPTS_DIR/_context.md"
    local stage_file="${ENGINE_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)}/prompts/${stage}.md"
    local output="/tmp/pipeline-prompt-${stage}.md"

    if [ ! -f "$stage_file" ]; then
        echo "⚠️  Stage prompt not found: $stage_file" >&2
        return 1
    fi

    {
        if [ -f "$context_file" ]; then
            cat "$context_file"
            echo ""
            echo "---"
            echo ""
        fi
        cat "$stage_file"
    } | python3 -c "
import sys
content = sys.stdin.read()
content = content.replace('{{WIKI_ROOT}}', '${WIKI_ROOT}')
print(content)
" > "$output"

    echo "$output"
}
