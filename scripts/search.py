#!/usr/bin/env python3
"""
search.py — Semantic search over wiki using sqlite-vec
"""

import argparse
import json
import os
import sqlite3
import sys
import urllib.error
import urllib.request
from pathlib import Path

try:
    import sqlite_vec
except ImportError:
    print("❌  sqlite-vec not installed.")
    sys.exit(1)

# ─── Config ──────────────────────────────────────────────────────────────────

WIKI_ROOT  = Path(os.environ.get("WIKI_ROOT",
                  Path(__file__).resolve().parent.parent.parent))
DB_PATH    = WIKI_ROOT / "pipeline/index/embeddings.db"
OLLAMA_URL = "http://localhost:11434/api/embeddings"
MODEL      = "mxbai-embed-large"
MAX_CHARS  = 2000

# ─── Helpers ─────────────────────────────────────────────────────────────────

def serialize(v):
    return sqlite_vec.serialize_float32(v)

def embed(text: str, model: str) -> list:
    # For search queries, embed as-is (short, no frontmatter)
    payload = json.dumps({"model": model, "prompt": text[:MAX_CHARS]}).encode()
    req = urllib.request.Request(
        OLLAMA_URL, data=payload,
        headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read())["embedding"]

def open_db(path: Path) -> sqlite3.Connection:
    if not path.exists():
        print(f"❌  Index not found: {path}")
        print("    Run first:  bash pipeline/scripts/embed.sh")
        sys.exit(1)
    db = sqlite3.connect(str(path))
    db.enable_load_extension(True)
    sqlite_vec.load(db)
    db.enable_load_extension(False)
    return db

def score_bar(distance: float, width: int = 20) -> str:
    # distance 0 = identical, distance 2 = opposite
    # convert to 0-1 similarity
    sim = max(0.0, 1.0 - distance / 2.0)
    filled = int(sim * width)
    return "█" * filled + "░" * (width - filled), sim

# ─── Main ────────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description="Semantic search over wiki")
    ap.add_argument("query",  nargs="+", help="Search query (natural language)")
    ap.add_argument("--top",  type=int, default=7,  help="Number of results (default: 7)")
    ap.add_argument("--model", default=MODEL)
    ap.add_argument("--db",    default=str(DB_PATH))
    ap.add_argument("--show-score", action="store_true", help="Show raw distance score")
    args = ap.parse_args()

    query = " ".join(args.query)

    # Embed the query
    try:
        vec = embed(query, args.model)
    except urllib.error.URLError:
        print("❌  Ollama not running. Start with: ollama serve")
        sys.exit(1)

    db = open_db(Path(args.db))
    total = db.execute("SELECT COUNT(*) FROM pages").fetchone()[0]

    results = db.execute("""
        SELECT p.path, v.distance
        FROM vec_items v
        JOIN pages p ON p.rowid = v.rowid
        WHERE v.embedding MATCH ?
          AND k = ?
        ORDER BY v.distance
    """, [serialize(vec), args.top]).fetchall()

    db.close()

    # ─── Display ─────────────────────────────────────────────────────────────

    print(f'\n  query: "{query}"')
    print(f"  index: {total} pages  |  model: {args.model}")
    print(f"  {'─'*60}")

    if not results:
        print("  (no results)")
        print()
        return

    for i, (path, dist) in enumerate(results, 1):
        bar, sim = score_bar(dist)
        # Shorten path for display
        display = path.replace("wiki/", "").replace(".md", "")
        domain, *rest = display.split("/")
        page = "/".join(rest) if rest else domain

        score_str = f"{sim:.2f}" if args.show_score else f"{int(sim*100)}%"
        print(f"  {i}. [{bar}] {score_str}")
        print(f"     {domain}/  {page}")
        print(f"     open: {WIKI_ROOT}/{path}")
        print()

    print()


if __name__ == "__main__":
    main()
