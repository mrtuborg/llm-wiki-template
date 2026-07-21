#!/usr/bin/env bash
# init-vault.sh — Bootstrap a new LLM-Wiki vault from this engine.
# Run from the vault root AFTER adding engine as a submodule:
#
#   git init my-vault && cd my-vault
#   git submodule add git@github.com:mrtuborg/llm-wiki-template.git engine
#   bash engine/init-vault.sh "My Wiki Name"

set -euo pipefail

VAULT_NAME="${1:-My-Wiki}"
ENGINE_DIR="$(cd "$(dirname "$0")" && pwd)"
VAULT_ROOT="$(cd "$ENGINE_DIR/.." && pwd)"

echo "╔══════════════════════════════════════════════╗"
echo "║  LLM-Wiki Init: $VAULT_NAME"
echo "╚══════════════════════════════════════════════╝"
echo "  Vault: $VAULT_ROOT"
echo "  Engine: $ENGINE_DIR"
echo ""

# 1. vault.config.yaml
if [ -f "$VAULT_ROOT/vault.config.yaml" ]; then
    echo "✓ vault.config.yaml already exists (skipped)"
else
    cp "$ENGINE_DIR/vault.config.template.yaml" "$VAULT_ROOT/vault.config.yaml"
    # Set vault name
    sed -i.bak "s/name: \"My-Wiki\"/name: \"$VAULT_NAME\"/" "$VAULT_ROOT/vault.config.yaml"
    rm -f "$VAULT_ROOT/vault.config.yaml.bak"
    echo "✓ vault.config.yaml created — EDIT domains list before running pipeline"
fi

# 2. Full vault directory structure
mkdir -p "$VAULT_ROOT/wiki/Meta"
mkdir -p "$VAULT_ROOT/wiki/templates"
mkdir -p "$VAULT_ROOT/pipeline/tracking"
mkdir -p "$VAULT_ROOT/pipeline/index"
mkdir -p "$VAULT_ROOT/pipeline/reconstructed"
mkdir -p "$VAULT_ROOT/pipeline/stage-output"
mkdir -p "$VAULT_ROOT/pipeline/stage-output/errors"
mkdir -p "$VAULT_ROOT/pipeline/prompts"

# Generate _context.md with vault-specific facts for LLM agents
cat > "$VAULT_ROOT/pipeline/prompts/_context.md" << CONTEXT_EOF
# Vault Context — $(basename "$VAULT_ROOT")

## Paths
- WIKI_ROOT: $VAULT_ROOT
- Wiki pages: $VAULT_ROOT/wiki/
- Pipeline tracking: $VAULT_ROOT/pipeline/tracking/

## progress.json key format
Keys in progress.json \`sources\` are **relative to \$HOME** (not absolute paths).
Example: \`vaults/Sensio-Sources/build-pipeline/AGENTS.md\`
NOT: \`/Users/vn/vaults/Sensio-Sources/build-pipeline/AGENTS.md\`

When searching progress.json, always use the relative key format.
To convert: strip the \$HOME prefix and leading slash from any absolute path.

## Domains
$(grep -A20 "^wiki:" "$VAULT_ROOT/vault.config.yaml" 2>/dev/null | grep "^    - " | sed 's/^    - /- /' || echo "- (see vault.config.yaml)")
CONTEXT_EOF
echo "✓ pipeline/prompts/_context.md generated"
mkdir -p "$VAULT_ROOT/pipeline/handoff/provenance"
mkdir -p "$VAULT_ROOT/pipeline/errors"
mkdir -p "$VAULT_ROOT/domains"
mkdir -p "$VAULT_ROOT/docs"
echo "✓ Directory structure created"

# 3. Copy wiki templates
cp "$ENGINE_DIR/templates/"*.md "$VAULT_ROOT/wiki/templates/" 2>/dev/null && \
    echo "✓ Wiki templates copied" || echo "  (no templates to copy)"

# 4. ontology + schema stay in engine (no copy needed)
#    Scripts read them from ENGINE_DIR automatically

# 5. Initialize empty tracking files
if [ ! -f "$VAULT_ROOT/pipeline/tracking/progress.json" ]; then
    echo '{"sources": {}, "stats": {"total": 0, "done": 0, "pending": 0}, "updated_at": null}' \
        > "$VAULT_ROOT/pipeline/tracking/progress.json"
    echo "✓ progress.json initialized"
fi

if [ ! -f "$VAULT_ROOT/pipeline/tracking/sources.json" ]; then
    echo '{"sources": [], "updated_at": null}' \
        > "$VAULT_ROOT/pipeline/tracking/sources.json"
    echo "✓ sources.json initialized"
fi

# 6. Wiki index and sources registry (required by stage 7)
if [ ! -f "$VAULT_ROOT/wiki/index.md" ]; then
    cat > "$VAULT_ROOT/wiki/index.md" << INDEXEOF
# $VAULT_NAME — Wiki Index

Generated: $(date -u +%Y-%m-%d)

## Domains
(populated after first ./llm-wiki add run)

## Recent Updates
(none yet)
INDEXEOF
    echo "✓ wiki/index.md initialized"
fi

if [ ! -f "$VAULT_ROOT/pipeline/sources-registry.md" ]; then
    cat > "$VAULT_ROOT/pipeline/sources-registry.md" << 'REGEOF'
# Sources Registry

| Source | Path | Status |
|--------|------|--------|

## Status Legend
| Status | Meaning |
|--------|---------|
| `pending` | Not yet processed |
| `ingested` | Layers 5–6 done |
| `compiled` | Layers 5–7 done; in index |
| `done` | All layers complete |
REGEOF
    echo "✓ pipeline/sources-registry.md initialized"
fi

# 6. Entry-point wrapper (optional convenience)
if [ ! -f "$VAULT_ROOT/llm-wiki" ]; then
    cat > "$VAULT_ROOT/llm-wiki" << 'WRAPPER'
#!/usr/bin/env bash
exec "$(dirname "$0")/engine/scripts/orchestrator.sh" "$@"
WRAPPER
    chmod +x "$VAULT_ROOT/llm-wiki"
    echo "✓ ./llm-wiki wrapper created (shortcut for engine/scripts/orchestrator.sh)"
fi

echo ""
echo "═══════════════════════════════════════════════"
echo "  Next steps:"
echo "  1. Add sources:    ./llm-wiki source add /path/to/raw"
echo "  2. Process:        ./llm-wiki add"
echo "     (domains auto-discovered from content on first run)"
echo "  3. Search:         ./llm-wiki search 'query'"
echo ""
echo "  Optional — preview domain suggestions before processing:"
echo "     WIKI_ROOT=\$(pwd) bash engine/scripts/discover-domains.sh"
echo "═══════════════════════════════════════════════"
