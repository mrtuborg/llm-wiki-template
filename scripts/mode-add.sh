#!/usr/bin/env bash
# mode-add.sh — ADD mode: ingest new source files into wiki
# Usage: ./mode-add.sh [--batch-size N] [--max-loops N] [--once]

set -uo pipefail   # no -e: LLM stages may fail transiently; pipeline must continue

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
DISCOVER_DOMAINS=false

while [[ $# -gt 0 ]]; do
    case $1 in
        --batch-size)       BATCH_SIZE="$2"; shift ;;
        --max-loops)        MAX_LOOPS="$2";  shift ;;
        --once)             ONCE=true ;;
        --discover-domains) DISCOVER_DOMAINS=true ;;
        --apply)            ;; # ignored here (discover-domains always applies when used with add)
        *) echo "Unknown option: $1"; exit 1 ;;
    esac
    shift
done

tracker_init

# Guard: exit if domains are unconfigured (placeholders)
_domains_ok=$(python3 -c "
import sys
try:
    import re
    config = open('$WIKI_ROOT/vault.config.yaml').read()
    placeholders = re.findall(r'- Domain[12]', config)
    sys.exit(1 if placeholders else 0)
except Exception: sys.exit(1)
" 2>/dev/null; echo $?)

if [ "$_domains_ok" != "0" ]; then
    if [ "$DISCOVER_DOMAINS" = "true" ]; then
        echo ""
        echo "⚠️  Domains not configured — running discovery..."
        bash "$SCRIPT_DIR/discover-domains.sh" --apply
        echo ""
    else
        echo ""
        echo "❌ Domains not configured in vault.config.yaml"
        echo "   vault.config.yaml still contains placeholder domains (Domain1, Domain2)."
        echo ""
        echo "   Options:"
        echo "     Auto-discover from content:  ./llm-wiki add --discover-domains"
        echo "     Set manually:                edit vault.config.yaml → domains list"
        echo "                                  then: WIKI_ROOT=\$(pwd) bash engine/scripts/discover-domains.sh --apply"
        echo ""
        exit 1
    fi
fi

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
    # Pure script — no LLM, reads sources.json reliably
    if [[ $((pending + queued)) -gt 0 && $queued -eq 0 ]]; then
        echo ""
        echo "▶ Scan: finding files to queue..."
        bash "$SCRIPT_DIR/scan-sources.sh" "$BATCH_ID" "$BATCH_SIZE"
    fi

    # Stage 5: Reconstruction — snapshot queued keys first, promote only those
    echo ""
    echo "▶ Stage 5: Reconstruction..."
    _batch_queued=$(tracker_list queued | head -"$BATCH_SIZE")
    "$SCRIPT_DIR/run-stage.sh" "5-reconstruction" "$BATCH_ID" "$BATCH_SIZE"
    while IFS= read -r key; do
        tracker_set_status "$key" "reconstructed"
    done <<< "$_batch_queued"

    # Stage 6: Ingestion — promote only the batch snapshotted above
    echo ""
    echo "▶ Stage 6: Ingestion..."
    "$SCRIPT_DIR/run-stage.sh" "6-ingestion" "$BATCH_ID" "$BATCH_SIZE"
    while IFS= read -r key; do
        tracker_set_status "$key" "ingested"
    done <<< "$_batch_queued"

    # Stage 6b: Link Enrichment
    echo ""
    echo "▶ Stage 6b: Link Enrichment..."
    "$SCRIPT_DIR/run-stage.sh" "6b-link-enrichment" "$BATCH_ID" "$BATCH_SIZE"

    # Stage 6c: Deduplication
    echo ""
    echo "▶ Stage 6c: Deduplication..."
    "$SCRIPT_DIR/run-stage.sh" "6c-dedup" "$BATCH_ID"

    # Count wiki pages created by stage 6 for this batch (before compile.sh overwrites progress.json)
    _wiki_before=$(find "$WIKI_ROOT/wiki" -name '*.md' -not -path '*/graph/*' -not -path '*/updates/*' -not -path '*/templates/*' -not -path '*/decisions/*' 2>/dev/null | wc -l | tr -d ' ')

    # Stage 7: Compilation (shell — index, registry, stats; LLM only for dead-link fixes)
    echo ""
    echo "▶ Stage 7: Compilation (shell)..."
    bash "$SCRIPT_DIR/compile.sh" "$BATCH_ID"

    # Record how many new pages were added by this batch (used by compile.sh for synthesis trigger)
    _wiki_after=$(find "$WIKI_ROOT/wiki" -name '*.md' -not -path '*/graph/*' -not -path '*/updates/*' -not -path '*/templates/*' -not -path '*/decisions/*' 2>/dev/null | wc -l | tr -d ' ')
    _new_pages=$(( _wiki_after - _wiki_before ))
    python3 - "$PROGRESS_FILE" "$_new_pages" << 'PYEOF'
import json, sys
f, n = sys.argv[1], int(sys.argv[2])
d = json.load(open(f))
d['batch_new_pages'] = n
with open(f, 'w') as fh:
    json.dump(d, fh, indent=2)
PYEOF

    # Promote only batch keys: ingested → compiled → done
    while IFS= read -r key; do
        tracker_set_status "$key" "compiled"
    done <<< "$_batch_queued"
    while IFS= read -r key; do
        tracker_mark_done "$key"
    done <<< "$_batch_queued"

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
