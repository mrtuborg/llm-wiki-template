#!/usr/bin/env bash
# search.sh — Semantic search over wiki
# Usage: bash search.sh "your query here"
#        bash search.sh "WiFi auto-connect Yocto" --top 10
#        bash search.sh "NXP HAB signing" --show-score

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WIKI_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
export WIKI_ROOT
PYTHON=/opt/homebrew/bin/python3.12

if [[ $# -eq 0 ]]; then
    echo "Usage: search.sh \"your query\" [--top N] [--show-score]"
    echo ""
    echo "Examples:"
    echo "  bash search.sh \"WiFi auto-connect headless Yocto\""
    echo "  bash search.sh \"NXP HAB signing pipeline\""
    echo "  bash search.sh \"Norwegian citizenship requirements\""
    exit 0
fi

if [[ ! -x "$PYTHON" ]]; then
    echo "❌  $PYTHON not found."
    exit 1
fi

exec "$PYTHON" "$SCRIPT_DIR/search.py" "$@"
