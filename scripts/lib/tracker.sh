#!/usr/bin/env bash
# lib/tracker.sh — Tracking operations for the pipeline
# Source this file: source "$(dirname "$0")/lib/tracker.sh"

WIKI_ROOT="${WIKI_ROOT:-$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)}"
PROGRESS_FILE="${TRACKING_DIR:-$WIKI_ROOT/pipeline/tracking}/progress.json"
QUEUE_FILE="${TRACKING_DIR:-$WIKI_ROOT/pipeline/tracking}/queue.json"

# Initialize progress.json if it doesn't exist
tracker_init() {
    if [[ ! -f "$PROGRESS_FILE" ]]; then
        mkdir -p "$(dirname "$PROGRESS_FILE")"
        jq -n '{
            "version": 1,
            "created_at": now | todate,
            "last_updated": now | todate,
            "last_health_check": null,
            "last_compilation": null,
            "last_decision_log": null,
            "stats": {
                "total": 0,
                "pending": 0,
                "queued": 0,
                "reconstructed": 0,
                "ingested": 0,
                "compiled": 0,
                "done": 0,
                "skipped": 0
            },
            "sources": {}
        }' > "$PROGRESS_FILE"
        echo "[tracker] Initialized $PROGRESS_FILE"
    fi
}

# Count files by status
tracker_count() {
    local status="${1:-all}"
    if [[ "$status" == "all" ]]; then
        jq '.sources | length' "$PROGRESS_FILE"
    else
        jq --arg s "$status" '[.sources[] | select(.status == $s)] | length' "$PROGRESS_FILE"
    fi
}

# Get list of files with a given status
tracker_list() {
    local status="$1"
    jq -r --arg s "$status" '.sources | to_entries[] | select(.value.status == $s) | .key' "$PROGRESS_FILE"
}

# Set status for a source file
tracker_set_status() {
    local filepath="$1"
    local status="$2"
    local tmp
    tmp=$(mktemp)
    jq --arg f "$filepath" --arg s "$status" --arg t "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
        '.sources[$f].status = $s |
         .sources[$f].updated_at = $t |
         .last_updated = $t' \
        "$PROGRESS_FILE" > "$tmp" && mv "$tmp" "$PROGRESS_FILE"
}

# Compute short SHA256 hash of a file (16 hex chars)
tracker_compute_hash() {
    local file="$1"
    [[ -f "$file" ]] || { echo ""; return; }
    shasum -a 256 "$file" 2>/dev/null | cut -c1-16
}

# Mark a source file as done and store its content hash
# Usage: tracker_mark_done <relative-key>  (e.g. vaults/Vladimir/foo.md)
tracker_mark_done() {
    local key="$1"
    local abs_path="$HOME/$key"
    local hash=""
    [[ -f "$abs_path" ]] && hash=$(tracker_compute_hash "$abs_path")

    local tmp
    tmp=$(mktemp)
    local t
    t=$(date -u +%Y-%m-%dT%H:%M:%SZ)
    jq --arg f "$key" --arg t "$t" --arg h "$hash" \
        '.sources[$f].status      = "done" |
         .sources[$f].updated_at  = $t |
         .sources[$f].done_at     = $t |
         .sources[$f].content_hash = $h |
         .last_updated = $t' \
        "$PROGRESS_FILE" > "$tmp" && mv "$tmp" "$PROGRESS_FILE"
}

# Check all "done" entries whose file has changed since last integration.
# Prints count. Optionally marks changed files as "outdated".
# Usage: tracker_check_outdated [--mark]
tracker_check_outdated() {
    local mark=false
    [[ "${1:-}" == "--mark" ]] && mark=true

    local outdated=0
    local checked=0

    while IFS='|' read -r key stored_hash; do
        [[ -z "$stored_hash" || "$stored_hash" == "null" ]] && continue
        local abs_path="$HOME/$key"
        [[ -f "$abs_path" ]] || continue
        local current_hash
        current_hash=$(tracker_compute_hash "$abs_path")
        checked=$(( checked + 1 ))
        if [[ "$current_hash" != "$stored_hash" ]]; then
            outdated=$(( outdated + 1 ))
            if $mark; then
                tracker_set_status "$key" "outdated"
            fi
        fi
    done < <(jq -r '.sources | to_entries[]
        | select(.value.status == "done" and .value.content_hash != null)
        | "\(.key)|\(.value.content_hash)"' "$PROGRESS_FILE" 2>/dev/null)

    echo "$outdated"
}

# Update stats counts from actual data
tracker_update_stats() {
    local tmp
    tmp=$(mktemp)
    jq '
        .stats = {
            "total":        (.sources | length),
            "pending":      ([.sources[] | select(.status == "pending")]   | length),
            "queued":       ([.sources[] | select(.status == "queued")]    | length),
            "reconstructed":([.sources[] | select(.status == "reconstructed")] | length),
            "ingested":     ([.sources[] | select(.status == "ingested")]  | length),
            "compiled":     ([.sources[] | select(.status == "compiled")]  | length),
            "done":         ([.sources[] | select(.status == "done")]      | length),
            "outdated":     ([.sources[] | select(.status == "outdated")]  | length),
            "skipped":      ([.sources[] | select(.status == "skipped")]   | length)
        } |
        .last_updated = (now | todate)
    ' "$PROGRESS_FILE" > "$tmp" && mv "$tmp" "$PROGRESS_FILE"
}

# Check if queue has pending work
tracker_has_pending() {
    local pending queued
    pending=$(tracker_count pending)
    queued=$(tracker_count queued)
    reconstructed=$(tracker_count reconstructed)
    ingested=$(tracker_count ingested)
    compiled=$(tracker_count compiled)
    [[ $((pending + queued + reconstructed + ingested + compiled)) -gt 0 ]]
}

# Print a status summary with ASCII progress bar
tracker_summary() {
    local total done pending queued reconstructed ingested compiled skipped
    total=$(jq '.stats.total' "$PROGRESS_FILE")
    done=$(jq '.stats.done' "$PROGRESS_FILE")
    pending=$(jq '.stats.pending' "$PROGRESS_FILE")
    queued=$(jq '.stats.queued' "$PROGRESS_FILE")
    reconstructed=$(jq '.stats.reconstructed' "$PROGRESS_FILE")
    ingested=$(jq '.stats.ingested' "$PROGRESS_FILE")
    compiled=$(jq '.stats.compiled' "$PROGRESS_FILE")
    skipped=$(jq '.stats.skipped' "$PROGRESS_FILE")
    local last_updated
    last_updated=$(jq -r '.last_updated' "$PROGRESS_FILE")

    echo ""
    echo "  Pipeline Progress"
    echo "  ────────────────────────────────────────────────"

    # Progress bar: done out of (total - skipped)
    local effective=$((total - skipped))
    if [[ $effective -gt 0 ]]; then
        local pct=$(( done * 100 / effective ))
        local bar_width=40
        local filled=$(( done * bar_width / effective ))
        local empty=$(( bar_width - filled ))
        local bar="" gap="" i
        for ((i=0; i<filled; i++)); do bar="${bar}█"; done
        for ((i=0; i<empty;  i++)); do gap="${gap}░"; done
        printf "  [%s%s] %3d%%  (%d / %d files)\n" "$bar" "$gap" "$pct" "$done" "$effective"
    fi

    echo ""
    printf "  ✅ done:          %5d\n" "$done"
    printf "  🔵 compiled:      %5d\n" "$compiled"
    printf "  🟡 ingested:      %5d\n" "$ingested"
    printf "  🟠 reconstructed: %5d\n" "$reconstructed"
    printf "  ⏳ queued:        %5d\n" "$queued"
    printf "  ⬜ pending:       %5d\n" "$pending"
    printf "  ⏭  skipped:       %5d\n" "$skipped"

    # Outdated: done files whose content hash has changed
    local outdated
    outdated=$(jq '[.sources | to_entries[]
        | select(.value.status == "outdated")] | length' "$PROGRESS_FILE" 2>/dev/null || echo 0)
    [[ $outdated -gt 0 ]] && printf "  🔄 outdated:      %5d  (re-integration needed)\n" "$outdated"

    # Files with hash stored vs without
    local hashed
    hashed=$(jq '[.sources | to_entries[]
        | select(.value.content_hash != null and .value.content_hash != "")] | length' \
        "$PROGRESS_FILE" 2>/dev/null || echo 0)
    echo ""
    printf "  total: %d   updated: %s\n" "$total" "$last_updated"
    [[ $hashed -gt 0 ]] && printf "  hashed: %d entries (change detection active)\n" "$hashed"
    echo "  ────────────────────────────────────────────────"
    echo ""
}

# Sync from sources-registry.md (import existing state into JSON tracker)
tracker_sync_from_registry() {
    local registry="$WIKI_ROOT/pipeline/sources-registry.md"
    [[ ! -f "$registry" ]] && return
    echo "[tracker] Syncing from sources-registry.md..."
    local count=0
    while IFS='|' read -r _ folder files status _; do
        folder=$(echo "$folder" | tr -d ' \`')
        status=$(echo "$status" | tr -d ' \`')
        [[ -z "$folder" || "$folder" == "Source Folder" || "$folder" == "---" ]] && continue
        [[ "$status" =~ ^(done|ingested|compiled|reconstructed|pending|skipped)$ ]] || continue
        local tmp
        tmp=$(mktemp)
        jq --arg f "$folder" --arg s "$status" --arg t "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
            '.sources[$f] = {"status": $s, "updated_at": $t, "source": "registry-sync"}' \
            "$PROGRESS_FILE" > "$tmp" && mv "$tmp" "$PROGRESS_FILE"
        ((count++))
    done < <(grep "^|" "$registry" | grep -v "Source Folder\|---\|Status\|Legend")
    tracker_update_stats
    echo "[tracker] Synced $count entries from registry"
}

# Scan ~/vaults/Vladimir for all source files and add missing ones as "pending"
# Respects exclusion patterns from pipeline.yaml
tracker_scan_sources() {
    local sources_dir="${1:-$HOME/vaults/Vladimir}"
    echo "[tracker] Scanning sources: $sources_dir"

    # Excluded directory name fragments (from pipeline.yaml)
    local -a EXCLUDED=(".trash" ".obsidian" "Sensio-Confluence" "Продукты" "Checklist" "Домашние дела")

    local added=0 already=0 skipped_dir=0
    local tmp

    while IFS= read -r filepath; do
        # Check exclusions
        local skip=false
        for excl in "${EXCLUDED[@]}"; do
            if [[ "$filepath" == *"$excl"* ]]; then
                skip=true
                break
            fi
        done
        if $skip; then
            skipped_dir=$((skipped_dir + 1))
            continue
        fi

        # Use relative path from sources_dir as key
        local key="${filepath#$HOME/}"   # e.g. vaults/Vladimir/ChatGPT/wifi.md

        # Check if already in tracker
        local existing
        existing=$(jq -r --arg k "$key" '.sources[$k].status // ""' "$PROGRESS_FILE" 2>/dev/null)

        if [[ -n "$existing" ]]; then
            already=$((already + 1))
            continue
        fi

        # Add as pending
        tmp=$(mktemp)
        jq --arg k "$key" --arg t "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
            '.sources[$k] = {"status": "pending", "updated_at": $t, "source": "scan"}' \
            "$PROGRESS_FILE" > "$tmp" && mv "$tmp" "$PROGRESS_FILE"
        added=$((added + 1))

    done < <(find "$sources_dir" -name "*.md" -not -path "*/.trash/*" 2>/dev/null | sort)

    tracker_update_stats
    echo "[tracker] Scan complete: +$added new pending  |  $already already tracked  |  $skipped_dir excluded"
}

SOURCES_FILE="$WIKI_ROOT/pipeline/tracking/sources.json"

# ─── Source management ────────────────────────────────────────────────────────

# List all sources with per-source progress stats
tracker_sources_list() {
    [[ ! -f "$SOURCES_FILE" ]] && echo "  (no sources configured)" && return

    local total_sources
    total_sources=$(jq '.sources | length' "$SOURCES_FILE")
    local active
    active=$(jq '[.sources[] | select(.active==true)] | length' "$SOURCES_FILE")

    # Load source-map if available
    local source_map_file="$WIKI_ROOT/pipeline/tracking/source-map.json"

    echo ""
    echo "  Sources  ($active active / $total_sources total)"
    echo "  ════════════════════════════════════════════════"

    jq -r '.sources[] | "\(.id)|\(.name)|\(.path // "")|\(.active)"' "$SOURCES_FILE" | \
    while IFS='|' read -r src_id name path active_flag; do
        local rel_prefix status_icon wiki_pages_count=""
        rel_prefix="${path#$HOME/}"   # e.g. vaults/Vladimir

        # Wiki pages attributed to this source (from source-map.json)
        if [[ -f "$source_map_file" ]]; then
            wiki_pages_count=$(jq -r --arg sid "$src_id" \
                '(.by_source_id[$sid] // []) | length' \
                "$source_map_file" 2>/dev/null || echo "?")
        fi

        # File-level tracking (only for active sources with a path)
        local total=0 done=0 pending=0 ingested=0 legacy_done=0
        if [[ -n "$path" && -f "$PROGRESS_FILE" ]]; then
            total=$(jq --arg p "$rel_prefix/" \
                '[.sources | to_entries[] | select(.key | startswith($p))] | length' \
                "$PROGRESS_FILE" 2>/dev/null || echo 0)
            done=$(jq --arg p "$rel_prefix/" \
                '[.sources | to_entries[] | select(.key | startswith($p)) | select(.value.status=="done")] | length' \
                "$PROGRESS_FILE" 2>/dev/null || echo 0)
            pending=$(jq --arg p "$rel_prefix/" \
                '[.sources | to_entries[] | select(.key | startswith($p)) | select(.value.status=="pending")] | length' \
                "$PROGRESS_FILE" 2>/dev/null || echo 0)
            ingested=$(jq --arg p "$rel_prefix/" \
                '[.sources | to_entries[] | select(.key | startswith($p)) | select(.value.status | IN("ingested","compiled","done"))] | length' \
                "$PROGRESS_FILE" 2>/dev/null || echo 0)
            # Legacy registry-sync folder entries
            legacy_done=$(jq '[.sources | to_entries[] | select(.value.source=="registry-sync") | select(.value.status=="done")] | length' \
                "$PROGRESS_FILE" 2>/dev/null || echo 0)
        fi

        local pct=0
        [[ $total -gt 0 ]] && pct=$(( done * 100 / total ))

        status_icon="✅"
        [[ "$active_flag" == "false" ]] && status_icon="⏸️ "

        echo ""
        printf "  %s  %s\n" "$status_icon" "$name"

        if [[ -n "$path" ]]; then
            printf "       path:   %s\n" "$path"
        fi

        # Wiki page count (from source-map)
        if [[ -n "$wiki_pages_count" ]]; then
            printf "       wiki pages attributed: %s\n" "$wiki_pages_count"
        fi

        # File-level progress (only for active sources with tracked files)
        if [[ $total -gt 0 ]]; then
            local w=20 bar="" gap="" i filled
            filled=$(( done * w / total ))
            for ((i=0; i<filled; i++)); do bar="${bar}█"; done
            for ((i=filled; i<w;  i++)); do gap="${gap}░"; done
            printf "       source files: [%s%s] %3d%%  (%d done / %d)\n" \
                "$bar" "$gap" "$pct" "$done" "$total"
            printf "       pending: %d  |  integrated by pipeline: %d\n" "$pending" "$ingested"
            if [[ $legacy_done -gt 0 ]]; then
                printf "       + %d folders pre-integrated (manual sessions before pipeline)\n" "$legacy_done"
            fi
        fi
    done
    echo ""
    echo "  ════════════════════════════════════════════════"
    echo ""
}

# Add a new source directory
tracker_source_add() {
    local src_path="${1:?Usage: tracker_source_add <path> [name]}"
    local name="${2:-$(basename "$src_path")}"

    # Expand ~ in path
    src_path="${src_path/#\~/$HOME}"

    if [[ ! -d "$src_path" ]]; then
        echo "❌  Directory not found: $src_path"
        return 1
    fi

    # Check if already registered
    local existing
    existing=$(jq -r --arg p "$src_path" '.sources[] | select(.path==$p) | .id' "$SOURCES_FILE" 2>/dev/null)
    if [[ -n "$existing" ]]; then
        echo "⚠️   Already registered: $src_path  (id: $existing)"
        # Re-activate if inactive
        local tmp; tmp=$(mktemp)
        jq --arg p "$src_path" '(.sources[] | select(.path==$p)).active = true' \
            "$SOURCES_FILE" > "$tmp" && mv "$tmp" "$SOURCES_FILE"
        echo "    Re-activated."
        return 0
    fi

    # Generate ID from name
    local src_id
    src_id=$(echo "$name" | tr '[:upper:] ' '[:lower:]-' | tr -dc 'a-z0-9-' | head -c 30)

    local tmp; tmp=$(mktemp)
    local now; now=$(date -u +%Y-%m-%dT%H:%M:%SZ)
    jq --arg id "$src_id" --arg p "$src_path" --arg n "$name" --arg t "$now" \
        '.sources += [{"id":$id,"path":$p,"name":$n,"added_at":$t,"active":true,"exclude":[".trash",".obsidian"]}]' \
        "$SOURCES_FILE" > "$tmp" && mv "$tmp" "$SOURCES_FILE"

    echo "  ✅  Added: $name"
    echo "       $src_path"
    echo ""
    echo "  Scanning for files..."
    tracker_scan_one_source "$src_path"
}

# Remove (deactivate) a source — keeps tracking data, marks files as skipped
tracker_source_remove() {
    local src_path="${1:?Usage: tracker_source_remove <path>}"
    src_path="${src_path/#\~/$HOME}"

    local name
    name=$(jq -r --arg p "$src_path" '.sources[] | select(.path==$p) | .name' "$SOURCES_FILE" 2>/dev/null)
    if [[ -z "$name" ]]; then
        echo "❌  Source not found: $src_path"
        return 1
    fi

    # Mark inactive in sources.json
    local tmp; tmp=$(mktemp)
    jq --arg p "$src_path" '(.sources[] | select(.path==$p)).active = false' \
        "$SOURCES_FILE" > "$tmp" && mv "$tmp" "$SOURCES_FILE"

    echo "  ⏸️   Deactivated: $name"
    echo "       Files remain in tracker (status unchanged)"
    echo "       To re-add: orchestrator.sh source add \"$src_path\""
}

# Scan a single source directory (used by add and rescan)
tracker_scan_one_source() {
    local src_path="${1:?}"
    src_path="${src_path/#\~/$HOME}"
    local rel_prefix="${src_path#$HOME/}"

    # Get exclusions for this source
    local excl_json
    excl_json=$(jq -r --arg p "$src_path" \
        '(.sources[] | select(.path==$p) | .exclude) // [] | .[]' \
        "$SOURCES_FILE" 2>/dev/null)

    local added=0 already=0

    while IFS= read -r filepath; do
        # Check exclusions
        local skip=false
        while IFS= read -r excl; do
            [[ -n "$excl" && "$filepath" == *"$excl"* ]] && skip=true && break
        done <<< "$excl_json"
        $skip && continue

        local key="${filepath#$HOME/}"
        local existing
        existing=$(jq -r --arg k "$key" '.sources[$k].status // ""' "$PROGRESS_FILE" 2>/dev/null)

        if [[ -n "$existing" ]]; then
            already=$((already + 1))
            continue
        fi

        local tmp; tmp=$(mktemp)
        jq --arg k "$key" --arg t "$(date -u +%Y-%m-%dT%H:%M:%SZ)" \
            '.sources[$k] = {"status":"pending","updated_at":$t,"source":"scan"}' \
            "$PROGRESS_FILE" > "$tmp" && mv "$tmp" "$PROGRESS_FILE"
        added=$((added + 1))

    done < <(find "$src_path" -name "*.md" -not -path "*/.trash/*" 2>/dev/null | sort)

    tracker_update_stats
    echo "  +$added new files discovered  |  $already already tracked"
}

# Rescan all active sources for new files
tracker_scan_sources() {
    local _unused="${1:-}"   # backwards-compat: ignore old positional arg

    if [[ ! -f "$SOURCES_FILE" ]]; then
        echo "[tracker] No sources.json — run: orchestrator.sh source add <path>"
        return
    fi

    local src_count
    src_count=$(jq '[.sources[] | select(.active==true)] | length' "$SOURCES_FILE")
    echo "[tracker] Scanning $src_count active source(s)..."

    jq -r '.sources[] | select(.active==true) | .path' "$SOURCES_FILE" | \
    while IFS= read -r src_path; do
        local name
        name=$(jq -r --arg p "$src_path" '.sources[] | select(.path==$p) | .name' "$SOURCES_FILE")
        echo "  → $name ($src_path)"
        tracker_scan_one_source "$src_path"
    done
}
