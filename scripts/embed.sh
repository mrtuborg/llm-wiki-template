#!/usr/bin/env bash
# embed.sh — Generate semantic embeddings for wiki pages
# Usage: bash embed.sh [--incremental] [--full] [--model MODEL]
#
# Default: incremental (only re-embeds changed pages)
# Full rebuild: embed.sh --full

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
export WIKI_ROOT
PYTHON=/opt/homebrew/bin/python3.12

if [[ ! -x "$PYTHON" ]]; then
    echo "❌  $PYTHON not found. Install via: brew install python@3.12"
    exit 1
fi

exec "$PYTHON" "$SCRIPT_DIR/embed.py" "$@"
