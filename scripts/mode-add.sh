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

    # Regenerate queue.json from the EXACT keys selected above — this is now the
    # single source of truth for "what this batch is". Previously queue.json was
    # written once by scan-sources.sh and never refreshed once the tracker's
    # queued pool stayed above 0 (normal for any backlog bigger than BATCH_SIZE),
    # so the Stage 5 LLM agent kept reading a stale, frozen file list from the
    # very first scan (e.g. reconstructing the same 3 files hundreds of times)
    # while this promotion loop silently marched through a completely different
    # set of real backlog files each iteration and marked them reconstructed →
    # ingested → compiled → done without any stage ever actually processing
    # them. Regenerating queue.json here from _batch_queued guarantees the
    # agent's input and the promotion list can never diverge again.
    #
    # Any key missing from progress.json or missing its "path" field (e.g. from
    # a manual/out-of-band edit) is EXCLUDED from queue.json's files array — and
    # must also be excluded from the promotion loop below, or that single key
    # would get marked reconstructed/done without the agent ever seeing it in
    # queue.json, reproducing this exact bug class at single-key scale. The
    # python side prints only the valid keys to stdout so bash can promote
    # precisely (and only) what was actually queued for the agent.
    #
    # NOTE: _batch_queued is passed as an argv string (not piped via stdin) —
    # `python3 -` reads the script itself from stdin, so a heredoc script body
    # combined with a stdin pipe of data would have the heredoc silently win,
    # leaving the script's own sys.stdin already exhausted and empty by the
    # time it tried to read the piped keys.
    _batch_valid=$(python3 - "$PROGRESS_FILE" "$WIKI_ROOT" "$BATCH_ID" "$_batch_queued" << 'PYEOF'
import json, sys

progress_f, wiki_root, batch_id, keys_raw = sys.argv[1:5]
keys = [line.strip() for line in keys_raw.splitlines() if line.strip()]

progress = json.load(open(progress_f))
srcs = progress.get("sources", {})

valid_keys = [k for k in keys if k in srcs and "path" in srcs[k]]
dropped_keys = [k for k in keys if k not in valid_keys]
if dropped_keys:
    print(f"  ⚠️  {len(dropped_keys)} queued key(s) missing from progress.json "
          f"or missing 'path' — excluded from this batch, left queued for "
          f"retry: {dropped_keys}", file=sys.stderr)

batch_paths = [srcs[k]["path"] for k in valid_keys]

queue = {
    "batch_id": batch_id,
    "files": batch_paths,
    "total_queued": sum(1 for v in srcs.values() if v.get("status") == "queued"),
    "total_pending": sum(1 for v in srcs.values() if v.get("status") == "pending"),
}
with open(f"{wiki_root}/pipeline/tracking/queue.json", "w") as fh:
    json.dump(queue, fh, indent=2)

for k in valid_keys:
    print(k)
PYEOF
)

    "$SCRIPT_DIR/run-stage.sh" "5-reconstruction" "$BATCH_ID" "$BATCH_SIZE"
    while IFS= read -r key; do
        tracker_set_status "$key" "reconstructed"
    done <<< "$_batch_valid"

    # Stage 6: Ingestion — promote only the batch snapshotted above
    echo ""
    echo "▶ Stage 6: Ingestion..."
    # Snapshot page count BEFORE ingestion — this batch's new pages are created by
    # stage 6/6b/6c, not stage 7 (compile.sh only rebuilds index.md/registry, it
    # never adds content pages). Snapshotting after 6c (as before) always measured
    # a ~0 delta across stage 7 alone, so the synthesis threshold could never be
    # met — Stage 8 was structurally unreachable regardless of how many pages a
    # batch actually created.
    _wiki_before=$(find "$WIKI_ROOT/wiki" -name '*.md' -not -path '*/graph/*' -not -path '*/updates/*' -not -path '*/templates/*' -not -path '*/decisions/*' 2>/dev/null | wc -l | tr -d ' ')
    "$SCRIPT_DIR/run-stage.sh" "6-ingestion" "$BATCH_ID" "$BATCH_SIZE"
    while IFS= read -r key; do
        tracker_set_status "$key" "ingested"
    done <<< "$_batch_valid"

    # Snapshot gross pages created by ingestion, BEFORE stage 6c (dedup) runs.
    # 6c deletes pages when it merges near-duplicates against the *entire*
    # existing wiki (not just this batch), so measuring after 6c would net
    # creations against consolidation deletions — a batch that genuinely
    # created 8 pages but triggered 3 dedup merges would net to 5 (or lower),
    # masking real ingestion work and deflating the synthesis threshold.
    # 6b (link enrichment) only edits existing pages, it doesn't create/delete,
    # so it's safe to run between this snapshot and the "before" one.
    _wiki_after=$(find "$WIKI_ROOT/wiki" -name '*.md' -not -path '*/graph/*' -not -path '*/updates/*' -not -path '*/templates/*' -not -path '*/decisions/*' 2>/dev/null | wc -l | tr -d ' ')
    _new_pages=$(( _wiki_after - _wiki_before ))

    # Stage 6b: Link Enrichment
    echo ""
    echo "▶ Stage 6b: Link Enrichment..."
    "$SCRIPT_DIR/run-stage.sh" "6b-link-enrichment" "$BATCH_ID" "$BATCH_SIZE"

    # Stage 6c: Deduplication
    echo ""
    echo "▶ Stage 6c: Deduplication..."
    "$SCRIPT_DIR/run-stage.sh" "6c-dedup" "$BATCH_ID"

    # Record how many new pages were created by this batch (measured pre-dedup,
    # see above). This MUST happen before compile.sh runs — compile.sh reads
    # batch_new_pages from progress.json to compute the synthesis threshold, so
    # writing it after compile.sh would make compile.sh always see the previous
    # batch's stale value.
    python3 - "$PROGRESS_FILE" "$_new_pages" << 'PYEOF'
import json, sys
f, n = sys.argv[1], int(sys.argv[2])
d = json.load(open(f))
d['batch_new_pages'] = n
with open(f, 'w') as fh:
    json.dump(d, fh, indent=2)
PYEOF

    # Stage 7: Compilation (shell — index, registry, stats; LLM only for dead-link fixes)
    echo ""
    echo "▶ Stage 7: Compilation (shell)..."
    bash "$SCRIPT_DIR/compile.sh" "$BATCH_ID"

    # Promote only batch keys: ingested → compiled → done
    while IFS= read -r key; do
        tracker_set_status "$key" "compiled"
    done <<< "$_batch_valid"
    while IFS= read -r key; do
        tracker_mark_done "$key"
    done <<< "$_batch_valid"

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
