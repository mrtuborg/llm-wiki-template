#!/bin/bash
# Initialize a new LLM-Wiki from this template.
# Usage: ./init.sh "My Wiki Name"

set -euo pipefail

WIKI_NAME="${1:-LLM-Wiki}"

echo "=== Initializing: $WIKI_NAME ==="

# Check that SOURCES_PATH is configured
if grep -q 'SOURCES_PATH = ~/vaults/Sources' pipeline/config.md 2>/dev/null; then
  echo ""
  echo "⚠️  WARNING: pipeline/config.md still has the default SOURCES_PATH."
  echo "   Edit SOURCES_PATH to point to your raw data vault."
  echo ""
fi

# Check that domain sources are configured
if grep -q '{{DOMAIN_SOURCES}}' pipeline/1-domains-workflow.md 2>/dev/null; then
  echo ""
  echo "⚠️  WARNING: pipeline/1-domains-workflow.md still has {{DOMAIN_SOURCES}} placeholder."
  echo "   Edit it before running the Setup Phase."
  echo ""
fi

# Initialize git repo
if [ ! -d .git ]; then
  git init
  echo "✓ Git repo initialized"
else
  echo "✓ Git repo already exists"
fi

# Create initial commit
git add -A
git commit -m "Initialize $WIKI_NAME from llm-wiki-template" --allow-empty

echo ""
echo "=== $WIKI_NAME ready ==="
echo ""
echo "Next steps:"
echo "  1. Edit pipeline/config.md — set SOURCES_PATH to your raw data vault"
echo "  2. Edit pipeline/1-domains-workflow.md — set your domains"
echo "  3. Feed pipeline/1-domains-workflow.md to your LLM (Layer 1)"
echo "  4. Continue with Layers 2–4 (Setup Phase)"
echo "  5. Add raw data to SOURCES_PATH vault"
echo "  6. Run Layers 5–7 (Active Pipeline)"
