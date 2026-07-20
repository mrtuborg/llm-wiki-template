#!/bin/bash
# discover-domains.sh
# Shows current domain/subdomain structure and Unrecognized counts.
# Domains are FIXED (Engineer/TechLead/Entrepreneur/Self-care/Family/Meta).
# Use this to review what's in Unrecognized/ and plan subdomain assignments.
#
# Usage:
#   ./tools/ingest/discover-domains.sh           # show structure + Unrecognized
#   ./tools/ingest/discover-domains.sh --unrecognized  # show only unrecognized pages

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
WIKI="$WIKI_ROOT/wiki"

DOMAINS=("Engineer" "TechLead" "Entrepreneur" "Self-care" "Family" "Meta")

echo "=== Wiki Domain Structure ==="
echo "Config: $WIKI_ROOT/pipeline/config/pipeline.yaml"
echo ""

for domain in "${DOMAINS[@]}"; do
    domain_dir="$WIKI/$domain"
    [[ -d "$domain_dir" ]] || continue
    total=$(find "$domain_dir" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
    printf "%-16s  %3d pages\n" "$domain" "$total"
    # List subdomains
    for sub in "$domain_dir"/*/; do
        [[ -d "$sub" ]] || continue
        subname=$(basename "$sub")
        subcount=$(find "$sub" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
        if [[ "$subname" == "Unrecognized" ]]; then
            printf "    ⚠️  %-20s  %3d pages  ← needs review\n" "$subname" "$subcount"
        else
            printf "    %-22s  %3d pages\n" "$subname" "$subcount"
        fi
    done
    echo ""
done

# Summary of Unrecognized
unrecognized_total=0
for domain in "${DOMAINS[@]}"; do
    undir="$WIKI/$domain/Unrecognized"
    [[ -d "$undir" ]] || continue
    count=$(find "$undir" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
    unrecognized_total=$((unrecognized_total + count))
done

if [[ $unrecognized_total -gt 0 ]]; then
    echo "⚠️  $unrecognized_total pages in Unrecognized — run orchestrator.sh unrecognized"
else
    echo "✅ No Unrecognized pages"
fi

if [[ "${1:-}" == "--unrecognized" ]]; then
    echo ""
    exec bash "$WIKI_ROOT/pipeline/scripts/orchestrator.sh" unrecognized
fi
