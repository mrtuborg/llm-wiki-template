#!/usr/bin/env bash
# mode-add.sh — ADD mode: ingest new source files into wiki
# Usage: ./mode-add.sh [--batch-size N] [--max-loops N] [--once]

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
export WIKI_ROOT

ENGINE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
export ENGINE_DIR
source "$SCRIPT_DIR/lib/vault-config.sh"
source "$SCRIPT_DIR/lib/tracker.sh"
source "$SCRIPT_DIR/lib/context-builder.sh"

# Defaults
BATCH_SIZE=3
MAX_LOOPS=999
ONCE=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --batch-size) BATCH_SIZE="$2"; shift ;;
        --max-loops)  MAX_LOOPS="$2";  shift ;;
        --once)       ONCE=true ;;
        *) echo "Unknown option: $1"; exit 1 ;;
    esac
    shift
done

tracker_init

# Always scan sources first to discover untracked files
echo "  Scanning sources for new files..."
tracker_scan_all_sources
echo ""

echo ""
echo "  PIPELINE MODE: ADD"
echo "  ────────────────────────────────────────────────"
echo "  Batch size: $BATCH_SIZE  Max loops: $MAX_LOOPS"
echo ""

tracker_summary

LOOP=0

while true; do
    LOOP=$((LOOP + 1))
    BATCH_ID="batch-$(date -u +%Y%m%dT%H%M%SZ)"

    echo ""
    echo "  ════════════════════════════════════════════════"
    echo "  LOOP $LOOP / $MAX_LOOPS  —  $BATCH_ID"
    echo "  ════════════════════════════════════════════════"

    # Check if there's pending work
    if ! tracker_has_pending; then
        echo ""
        echo "✅ All sources processed! Queue empty."
        tracker_summary
        break
    fi

    pending=$(tracker_count pending)
    queued=$(tracker_count queued)
    echo "  📋 Pending: $pending  |  Queued: $queued  |  Loop $LOOP/$MAX_LOOPS"

    # Stage: scan (if needed — enqueues files into queue.json)
    if [[ $((pending + queued)) -gt 0 && $queued -eq 0 ]]; then
        echo ""
        echo "▶ Scan: finding files to queue..."
        "$SCRIPT_DIR/run-stage.sh" "add-scan" "$BATCH_ID" "$BATCH_SIZE"
    fi

    # Stage 5: Reconstruction
    echo ""
    echo "▶ Stage 5: Reconstruction..."
    "$SCRIPT_DIR/run-stage.sh" "5-reconstruction" "$BATCH_ID" "$BATCH_SIZE"

    # Stage 6: Ingestion
    echo ""
    echo "▶ Stage 6: Ingestion..."
    "$SCRIPT_DIR/run-stage.sh" "6-ingestion" "$BATCH_ID" "$BATCH_SIZE"

    # Stage 6b: Link Enrichment
    echo ""
    echo "▶ Stage 6b: Link Enrichment..."
    "$SCRIPT_DIR/run-stage.sh" "6b-link-enrichment" "$BATCH_ID" "$BATCH_SIZE"

    # Stage 6c: Deduplication
    echo ""
    echo "▶ Stage 6c: Deduplication..."
    "$SCRIPT_DIR/run-stage.sh" "6c-dedup" "$BATCH_ID"

    # Stage 7: Compilation
    echo ""
    echo "▶ Stage 7: Compilation..."
    "$SCRIPT_DIR/run-stage.sh" "7-compilation" "$BATCH_ID" "$BATCH_SIZE"

    # Stage 7b: Embedding (incremental — only new pages)
    echo ""
    echo "▶ Stage 7b: Embedding..."
    bash "$SCRIPT_DIR/embed.sh" --incremental

    # Stage 8: Synthesis (conditional — only if ≥5 new pages)
    stage7_out="${STAGE_OUTPUT_DIR:-$WIKI_ROOT/pipeline/stage-output}/current-7-compilation.md"
    if [[ -f "$stage7_out" ]] && grep -q "Synthesis threshold.*YES" "$stage7_out" 2>/dev/null; then
        echo ""
        echo "▶ Stage 8: Synthesis (threshold met)..."
        "$SCRIPT_DIR/run-stage.sh" "8-synthesis" "$BATCH_ID" "$BATCH_SIZE"
    else
        echo ""
        echo "⏭  Stage 8: Synthesis skipped (threshold not met)"
    fi

    # Stage 9: Decision Log
    echo ""
    echo "▶ Stage 9: Decision Log..."
    "$SCRIPT_DIR/run-stage.sh" "9-decision-log" "$BATCH_ID" "$BATCH_SIZE"

    # Post-loop status
    echo ""
    tracker_update_stats
    tracker_summary

    # Break conditions
    if [[ "$ONCE" == true ]]; then
        echo "  --once flag set, stopping after one loop."
        break
    fi

    if [[ $LOOP -ge $MAX_LOOPS ]]; then
        echo "  Reached max loops ($MAX_LOOPS). Stopping."
        break
    fi

    if ! tracker_has_pending; then
        echo "  Queue empty — pipeline complete!"
        break
    fi

    echo ""
    echo "  ⏳ Pausing 5s before next batch..."
    sleep 5
done

echo ""
echo "  PIPELINE MODE: ADD COMPLETE"
echo "  ────────────────────────────────────────────────"
tracker_summary
