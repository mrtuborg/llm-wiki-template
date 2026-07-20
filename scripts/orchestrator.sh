#!/usr/bin/env bash
# ╔══════════════════════════════════════════════════════════════╗
# ║  LLM-WIKI PIPELINE ORCHESTRATOR                              ║
# ║  Part of llm-wiki-engine (github.com/mrtuborg/llm-wiki-template) ║
# ║  Install: git submodule add <repo> engine                    ║
# ╚══════════════════════════════════════════════════════════════╝
#
# USAGE:
#   ./orchestrator.sh add      [--batch-size N] [--max-loops N] [--once]
#   ./orchestrator.sh maintain [--synthesis]
#   ./orchestrator.sh status
#   ./orchestrator.sh sources
#   ./orchestrator.sh source add <path> [name]
#   ./orchestrator.sh source remove <path>
#   ./orchestrator.sh source rescan
#   ./orchestrator.sh stage <stage-name>
#   ./orchestrator.sh search "query"
#   ./orchestrator.sh scan
#   ./orchestrator.sh sync
#   ./orchestrator.sh sourcemap
#   add      — Process pending files from all active sources (loops until done)
#   maintain — Health check, index sync, optional synthesis
#   status   — Progress per source + overall stats
#   sources  — List all sources with integration stats
#   source   — Manage sources: add / remove / rescan
#   stage    — Run one pipeline stage manually
#   search   — Semantic search: search "your query"
#   scan     — Rescan all active sources for new files
#   sourcemap — Rebuild wiki page attribution map (source → wiki pages)
#
# STAGES (for manual invocation):
#   add-scan, 5-reconstruction, 6-ingestion, 7-compilation,
#   8-synthesis, 9-decision-log, maintain-health
#
# EXAMPLES:
#   ./orchestrator.sh add                      # Process all new files, loop until done
#   ./orchestrator.sh add --batch-size 5       # Process 5 files per batch
#   ./orchestrator.sh add --once               # One batch then stop
#   ./orchestrator.sh maintain --synthesis     # Health check + run synthesis
#   ./orchestrator.sh status                   # Show what's pending/done
#   ./orchestrator.sh stage 6-ingestion        # Re-run ingestion stage only
#   ./orchestrator.sh sync                     # Import registry into JSON tracker

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ENGINE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
export WIKI_ROOT ENGINE_DIR

source "$SCRIPT_DIR/lib/vault-config.sh"   # exports VALID_DOMAINS, TRACKING_DIR, etc.
source "$SCRIPT_DIR/lib/tracker.sh"
source "$SCRIPT_DIR/lib/context-builder.sh"

# ─── Validate environment ─────────────────────────────────────────────────────

check_prerequisites() {
    local ok=true

    if ! command -v gh &>/dev/null; then
        echo "❌ gh CLI not found. Install from https://cli.github.com/"
        ok=false
    fi

    if ! gh copilot -- --help &>/dev/null 2>&1; then
        echo "❌ gh copilot not available. Run: gh extension install github/gh-copilot"
        ok=false
    fi

    if ! command -v jq &>/dev/null; then
        echo "❌ jq not found. Install: brew install jq"
        ok=false
    fi

    if [[ ! -f "$WIKI_ROOT/vault.config.yaml" ]]; then
        echo "❌ Config not found: $WIKI_ROOT/vault.config.yaml"
        ok=false
    fi

    if [[ ! -f "$TRACKING_DIR/sources.json" ]]; then
        echo "❌ No sources configured. Run: ./llm-wiki source add /path/to/raw"
        ok=false
    fi

    if [[ "$ok" != true ]]; then
        echo ""
        echo "Fix prerequisites above, then retry."
        exit 1
    fi

    echo "✅ Prerequisites OK"
}

# ─── Print banner ─────────────────────────────────────────────────────────────

print_banner() {
    local mode="$1"
    echo ""
    echo "  LLM-WIKI PIPELINE ORCHESTRATOR"
    echo "  ────────────────────────────────────────────────"
    echo "  Mode:  $mode"
    echo "  Wiki:  $WIKI_ROOT"
    echo "  Time:  $(date '+%Y-%m-%d %H:%M:%S')"
    echo "  ────────────────────────────────────────────────"
    echo ""
}

# ─── Parse command ────────────────────────────────────────────────────────────

MODE="${1:-help}"
shift || true

case "$MODE" in

    add)
        print_banner "ADD — Ingest new sources"
        check_prerequisites
        tracker_init
        "$SCRIPT_DIR/mode-add.sh" "$@"
        ;;

    maintain)
        print_banner "MAINTAIN — Wiki health + index"
        check_prerequisites
        tracker_init
        "$SCRIPT_DIR/mode-maintain.sh" "$@"
        ;;

    status)
        print_banner "STATUS"
        tracker_init
        # Rebuild source map silently
        WIKI_ROOT="$WIKI_ROOT" python3 "$SCRIPT_DIR/build-source-map.py" --quiet 2>/dev/null
        tracker_sources_list
        tracker_summary
        # Embedding coverage
        emb_count=$(python3 -c "
import sqlite3, os
db='$WIKI_ROOT/pipeline/index/embeddings.db'
if os.path.exists(db):
    c=sqlite3.connect(db)
    print(c.execute('SELECT COUNT(*) FROM pages').fetchone()[0])
    c.close()
else:
    print(0)
" 2>/dev/null || echo 0)
        wiki_count=$(find "$WIKI_ROOT/wiki" -name '*.md' \
            ! -path '*/updates/*' ! -name 'index.md' 2>/dev/null | wc -l | tr -d ' ')
        emb_pct=0
        [[ $wiki_count -gt 0 ]] && emb_pct=$(( emb_count * 100 / wiki_count ))
        emb_filled=$(( emb_pct * 20 / 100 ))
        emb_bar=$(python3 -c "print('█'*$emb_filled + '░'*$(( 20 - emb_filled )))")
        echo ""
        echo "  Semantic index (embeddings)"
        echo "  ────────────────────────────────────────────────"
        printf "  [%s] %3d%%  (%d / %d wiki pages indexed)\n" \
            "$emb_bar" "$emb_pct" "$emb_count" "$wiki_count"
        if [[ $emb_count -lt $wiki_count ]]; then
            printf "  ⚠️  %d pages not yet indexed — run: orchestrator.sh maintain\n" \
                "$(( wiki_count - emb_count ))"
        else
            echo "  ✅ All wiki pages indexed"
        fi
        echo "  ────────────────────────────────────────────────"
        echo ""
        echo "  Last stage outputs:"
        ls -la "$WIKI_ROOT/pipeline/stage-output/" 2>/dev/null | grep -v "^total\|^d" | tail -5 | sed 's/^/  /' || echo "  (none)"
        ;;

    stage)
        STAGE_NAME="${1:?stage requires a stage name, e.g.: stage 6-ingestion}"
        shift
        print_banner "STAGE: $STAGE_NAME"
        check_prerequisites
        tracker_init
        "$SCRIPT_DIR/run-stage.sh" "$STAGE_NAME" "manual-$(date -u +%Y%m%dT%H%M%SZ)" "$@"
        ;;

    sources)
        print_banner "SOURCES — Source registry"
        tracker_init
        WIKI_ROOT="$WIKI_ROOT" python3 "$SCRIPT_DIR/build-source-map.py" --quiet
        tracker_sources_list
        ;;

    sourcemap)
        print_banner "SOURCE MAP — Wiki page attribution"
        WIKI_ROOT="$WIKI_ROOT" python3 "$SCRIPT_DIR/build-source-map.py"
        ;;

    check-changes)
        print_banner "CHECK CHANGES — Detect modified source files"
        tracker_init
        echo "  Checking content hashes for all 'done' files..."
        echo "  (only files with stored hashes are checked)"
        echo ""
        hashed=$(jq '[.sources | to_entries[]
            | select(.value.content_hash != null and .value.content_hash != "")] | length' \
            "$WIKI_ROOT/pipeline/tracking/progress.json" 2>/dev/null || echo 0)
        if [[ $hashed -eq 0 ]]; then
            echo "  ℹ️  No hashes stored yet."
            echo "  Hashes are stored when files are processed via 'orchestrator.sh add'."
            echo "  Run 'orchestrator.sh add' to start processing with hash tracking."
        else
            printf "  Checking %d hashed entries...\n" "$hashed"
            outdated=$(tracker_check_outdated)
            if [[ $outdated -eq 0 ]]; then
                echo "  ✅ All $hashed tracked files are unchanged."
            else
                echo "  🔄 $outdated files changed since last integration."
                echo ""
                echo "  To mark them for re-integration:"
                echo "    orchestrator.sh check-changes --mark"
            fi
        fi
        if [[ "${1:-}" == "--mark" ]]; then
            echo ""
            echo "  Marking changed files as 'outdated'..."
            marked=$(tracker_check_outdated --mark)
            tracker_update_stats
            echo "  Marked $marked files as outdated (will be re-processed on next 'add')"
        fi
        ;;

    validate)
        print_banner "VALIDATE — Domain & subdomain integrity check"
        # Use VALID_DOMAINS string from vault-config (bash 3.2: no array export)
        ALLOWED_DOMAINS="${VALID_DOMAINS:-Engineer TechLead Entrepreneur Self-care Family Meta}"
        echo "  Allowed domains: $ALLOWED_DOMAINS"
        echo ""

        violations=0
        unrecognized=0
        total=0
        _tmp_pages=$(mktemp)
        find "$WIKI_ROOT/wiki" -name "*.md"             ! -path "*/updates/*" ! -name "index.md"             | sed "s|$WIKI_ROOT/||" | sort > "$_tmp_pages"

        # Check 1: no pages outside allowed domains
        echo "  Checking domain integrity..."
        while IFS= read -r page; do
            domain=$(echo "$page" | cut -d/ -f2)
            # Skip system directories
            case "$domain" in
                decisions|synthesis|graph|templates|compiled|updates) continue ;;
            esac
            valid=false
            for d in $ALLOWED_DOMAINS; do
                [ "$domain" = "$d" ] && valid=true && break
            done
            if [ "$valid" = "false" ]; then
                echo "  ❌ Unknown domain: $domain  ($page)"
                violations=$(( violations + 1 ))
            fi
            total=$(( total + 1 ))
        done < "$_tmp_pages"
        rm -f "$_tmp_pages"

        # Check 2: count Unrecognized pages
        echo ""
        echo "  Unrecognized subdomain contents:"
        for d in $ALLOWED_DOMAINS; do
            undir="$WIKI_ROOT/wiki/$d/Unrecognized"
            if [ -d "$undir" ]; then
                count=$(find "$undir" -name "*.md" | wc -l | tr -d ' ')
                unrecognized=$(( unrecognized + count ))
                echo "    $d/Unrecognized: $count pages"
            fi
        done
        [ "$unrecognized" -eq 0 ] && echo "    (none)"

        echo ""
        echo "  ────────────────────────────────────────────────"
        printf "  Total pages checked: %d\n" "$total"
        if [ "$violations" -eq 0 ]; then
            echo "  ✅ All pages are in valid domains"
        else
            echo "  ❌ $violations domain violations found"
        fi
        [ "$unrecognized" -gt 0 ] &&             echo "  ℹ️  $unrecognized pages in Unrecognized — review with: orchestrator.sh unrecognized"
        echo "  ────────────────────────────────────────────────"
        ;;

    unrecognized)
        print_banner "UNRECOGNIZED — Pages needing subdomain assignment"
        ALLOWED_DOMAINS="${VALID_DOMAINS:-Engineer TechLead Entrepreneur Self-care Family Meta}"
        found=0
        for d in $ALLOWED_DOMAINS; do
            undir="$WIKI_ROOT/wiki/$d/Unrecognized"
            [ -d "$undir" ] || continue
            page_count=$(find "$undir" -name "*.md" | wc -l | tr -d ' ')
            [ "$page_count" -eq 0 ] && continue
            echo ""
            echo "  $d/Unrecognized ($page_count pages):"
            while IFS= read -r p; do
                tags=$(grep "^tags:" "$p" 2>/dev/null | head -1 | sed 's/tags: //')
                printf "    %-45s  %s\n" "$(basename "$p" .md)" "$tags"
                found=$(( found + 1 ))
            done < <(find "$undir" -name "*.md" | sort)
        done
        echo ""
        [ "$found" -eq 0 ] && echo "  ✅ No unrecognized pages" ||             echo "  Total: $found pages waiting for subdomain assignment"
        ;;


    tracker-done)
        # Mark one file as done with hash: orchestrator.sh tracker-done vaults/Vladimir/foo.md
        KEY="${1:?Usage: orchestrator.sh tracker-done <relative-path-from-HOME>}"
        tracker_init
        tracker_mark_done "$KEY"
        tracker_update_stats
        hash=$(jq -r --arg k "$KEY" '.sources[$k].content_hash // "(none)"' \
            "$WIKI_ROOT/pipeline/tracking/progress.json")
        echo "  ✅ Marked done: $KEY"
        echo "     hash: $hash"
        ;;

    source)
        SUBCMD="${1:-list}"
        shift || true
        case "$SUBCMD" in
            add)
                SRC_PATH="${1:?Usage: orchestrator.sh source add <path> [name]}"
                SRC_NAME="${2:-}"
                tracker_init
                tracker_source_add "$SRC_PATH" "$SRC_NAME"
                tracker_summary
                ;;
            remove|rm)
                SRC_PATH="${1:?Usage: orchestrator.sh source remove <path>}"
                tracker_init
                tracker_source_remove "$SRC_PATH"
                ;;
            rescan)
                tracker_init
                tracker_scan_sources
                tracker_sources_list
                ;;
            list|*)
                tracker_init
                tracker_sources_list
                ;;
        esac
        ;;

    scan)
        print_banner "SCAN — Discover all source files"
        tracker_init
        tracker_scan_all_sources
        tracker_summary
        ;;

    sync)
        print_banner "SYNC — Import sources-registry → progress.json"
        tracker_init
        tracker_sync_from_registry
        tracker_summary
        ;;

    search)
        QUERY="${*}"
        if [[ -z "$QUERY" ]]; then
            echo "Usage: orchestrator.sh search \"your query\""
            exit 1
        fi
        exec bash "$SCRIPT_DIR/search.sh" $QUERY
        ;;

    help|--help|-h)
        sed -n '3,20p' "$0" | sed 's/^# *//'
        ;;

    *)
        echo "❌ Unknown mode: $MODE"
        echo ""
        echo "Usage: orchestrator.sh [add|maintain|status|stage|sync]"
        exit 1
        ;;
esac
