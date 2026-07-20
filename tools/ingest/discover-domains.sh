#!/usr/bin/env bash
# discover-domains.sh — show current domain/subdomain structure
# Part of llm-wiki-engine. Reads vault.config.yaml for domain list.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENGINE_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
export WIKI_ROOT ENGINE_DIR

source "$ENGINE_DIR/scripts/lib/vault-config.sh" 2>/dev/null || true

WIKI="${WIKI_DIR:-$WIKI_ROOT/wiki}"

echo ""
echo " Domain Structure"
echo " ────────────────────────────────────────────────"
echo " Vault: $WIKI_ROOT"
echo ""

total_pages=0
unrecognized_total=0

for domain in "${VALID_DOMAINS[@]:-Engineer TechLead Entrepreneur Self-care Family Meta}"; do
    domain_dir="$WIKI/$domain"
    [ -d "$domain_dir" ] || continue

    domain_count=$(find "$domain_dir" -name "*.md" ! -path "*/Unrecognized/*" | wc -l | tr -d ' ')
    unrecognized=$(find "$domain_dir/Unrecognized" -name "*.md" 2>/dev/null | wc -l | tr -d ' ')
    total_pages=$((total_pages + domain_count + unrecognized))
    unrecognized_total=$((unrecognized_total + unrecognized))

    echo " 📂 $domain ($domain_count pages${unrecognized:+, ⚠️ $unrecognized unrecognized})"

    # List subdomains
    for subdir in "$domain_dir"/*/; do
        [ -d "$subdir" ] || continue
        subname="$(basename "$subdir")"
        count=$(find "$subdir" -name "*.md" | wc -l | tr -d ' ')
        if [ "$subname" = "Unrecognized" ]; then
            [ "$count" -gt 0 ] && echo "   └─ ⚠️  Unrecognized ($count pages — needs review)"
        else
            echo "   └─ $subname ($count)"
        fi
    done
    echo ""
done

echo " Total: $total_pages pages"
if [ "$unrecognized_total" -gt 0 ]; then
    echo " ⚠️  $unrecognized_total pages need domain assignment"
    echo "    Run: $WIKI_ROOT/llm-wiki unrecognized"
fi
echo ""
