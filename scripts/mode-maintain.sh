#!/usr/bin/env bash
# mode-maintain.sh — MAINTAIN mode: health check, index sync, synthesis
# Usage: ./mode-maintain.sh [--synthesis]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
export WIKI_ROOT

source "$SCRIPT_DIR/lib/tracker.sh"
source "$SCRIPT_DIR/lib/context-builder.sh"

WITH_SYNTHESIS=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --synthesis) WITH_SYNTHESIS=true ;;
        *) echo "Unknown option: $1"; exit 1 ;;
    esac
    shift
done

tracker_init

echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║  PIPELINE MODE: MAINTAIN                            ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""

tracker_summary

BATCH_ID="maintain-$(date -u +%Y%m%dT%H%M%SZ)"

# Stage 7: Health check + index update
echo ""
echo "▶ Stage 7: Health Check + Compilation..."
"$SCRIPT_DIR/run-stage.sh" "maintain-health" "$BATCH_ID"

# Optional synthesis
if [[ "$WITH_SYNTHESIS" == true ]]; then
    echo ""
    echo "▶ Stage 8: Synthesis..."
    "$SCRIPT_DIR/run-stage.sh" "8-synthesis" "$BATCH_ID"
fi

# Find and fix any stalled pipeline entries
echo ""
echo "▶ Checking for stalled sources..."
stalled_compiled=$(tracker_count compiled)
if [[ $stalled_compiled -gt 0 ]]; then
    echo "  Found $stalled_compiled sources stuck at 'compiled' — running Stage 9..."
    "$SCRIPT_DIR/run-stage.sh" "9-decision-log" "$BATCH_ID"
fi

tracker_update_stats
echo ""
echo "╔══════════════════════════════════════════════════════╗"
echo "║  MAINTAIN MODE COMPLETE                             ║"
echo "╚══════════════════════════════════════════════════════╝"
tracker_summary
