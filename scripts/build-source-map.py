#!/usr/bin/env python3
"""
Build source-map.json: reverse index from source files → wiki pages.
Scans wiki/ frontmatter `sources:` fields and maps them back to known sources.

Output: pipeline/tracking/source-map.json
"""

import json
import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

WIKI_ROOT = Path(os.environ.get("WIKI_ROOT", Path(__file__).parent.parent.parent))
WIKI_DIR = WIKI_ROOT / "wiki"
SOURCES_FILE = WIKI_ROOT / "pipeline" / "tracking" / "sources.json"
SOURCE_MAP_FILE = WIKI_ROOT / "pipeline" / "tracking" / "source-map.json"


def parse_frontmatter_sources(text: str) -> list[str]:
    """Extract source refs from YAML frontmatter.
    
    Handles three field variants:
      sources: [a, b]          → array
      source_refs:             → YAML list (extracts Vladimir/, chatgpt- etc.)
        - "Vladimir/foo.md"
      source: some/path        → singular string
    """
    if not text.startswith("---"):
        return []
    end = text.find("---", 3)
    if end == -1:
        return []
    fm = text[3:end]
    results = []

    # 1. sources: [a, b, c]  or  sources: a
    m = re.search(r"^sources:\s*(.+)$", fm, re.MULTILINE)
    if m:
        raw = m.group(1).strip()
        if raw.startswith("[") and raw.endswith("]"):
            items = [s.strip().strip("\"'") for s in raw[1:-1].split(",")]
        else:
            items = [raw.strip("\"'")]
        results.extend(s for s in items if s)

    # 2. source_refs: YAML list — extract Vladimir/, chatgpt-, apple-notes, myMac, ms-copilot refs
    SOURCE_PREFIXES = ("Vladimir/", "chatgpt-sessions/", "Sources/chatgpt-sessions/",
                       "apple-notes", "AppleNotes/", "Sources/AppleNotes/",
                       "myMac/", "Sources/myMac/", "ms-copilot", "Sources/Microsoft",
                       "web-search", "custom-pool")
    m2 = re.search(r"^source_refs:\s*\n((?:[ \t]*-[ \t]+.+\n?)*)", fm, re.MULTILINE)
    if m2:
        for line in m2.group(1).splitlines():
            line = line.strip().lstrip("- ").strip("\"'")
            if any(line.startswith(p) for p in SOURCE_PREFIXES):
                results.append(line)

    # 3. source: single-value (skip pipeline/reconstructed paths — those aren't source refs)
    m3 = re.search(r"^source:\s*(.+)$", fm, re.MULTILINE)
    if m3:
        val = m3.group(1).strip().strip("\"'")
        if val and not val.startswith("pipeline/") and not val.startswith("#"):
            results.append(val)

    return [s for s in results if s]


def load_sources_config() -> list[dict]:
    """Load sources.json for known source prefixes."""
    if not SOURCES_FILE.exists():
        return []
    with open(SOURCES_FILE) as f:
        data = json.load(f)
    return data.get("sources", [])


AUTO_GENERATED_DIRS = {"decisions", "synthesis", "templates", "graph", "updates"}

def build_map() -> dict:
    """Scan all wiki pages and build the reverse source map."""
    sources_config = load_sources_config()

    # by_page: page_rel_path → [source_refs]
    by_page: dict[str, list[str]] = {}
    # by_source_ref: raw source string → [page_rel_paths]
    by_source_ref: dict[str, list[str]] = {}

    wiki_pages = sorted(WIKI_DIR.rglob("*.md"))
    auto_generated = 0
    for page in wiki_pages:
        rel = str(page.relative_to(WIKI_ROOT))
        # Skip updates index and root index
        if "/updates/" in rel or rel == "wiki/index.md":
            continue
        # Count auto-generated pages separately
        parts = page.relative_to(WIKI_DIR).parts
        if parts and parts[0] in AUTO_GENERATED_DIRS:
            auto_generated += 1
            continue
        try:
            text = page.read_text(encoding="utf-8", errors="replace")
        except Exception:
            continue
        srcs = parse_frontmatter_sources(text)
        if srcs:
            by_page[rel] = srcs
            for s in srcs:
                by_source_ref.setdefault(s, []).append(rel)

    # Aggregate by known source (using source_prefix + alt_prefixes from sources.json)
    by_source_id: dict[str, list[str]] = {}
    for src in sources_config:
        sid = src["id"]
        prefixes = []
        if src.get("source_prefix"):
            prefixes.append(src["source_prefix"])
        prefixes.extend(src.get("alt_prefixes", []))
        if not prefixes:
            by_source_id[sid] = []
            continue
        pages = []
        for ref, ref_pages in by_source_ref.items():
            if any(ref.startswith(p + "/") or ref == p for p in prefixes):
                pages.extend(ref_pages)
        by_source_id[sid] = sorted(set(pages))

    # Unknown refs (not matched to any known source)
    known_prefixes = []
    for s in sources_config:
        if s.get("source_prefix"):
            known_prefixes.append(s["source_prefix"])
        known_prefixes.extend(s.get("alt_prefixes", []))
    unknown_refs: dict[str, list[str]] = {}
    for ref, pages in by_source_ref.items():
        matched = any(
            ref.startswith(p + "/") or ref == p
            for p in known_prefixes
        )
        if not matched:
            unknown_refs[ref] = pages

    total_pages = len(by_page)
    untraced = sum(1 for p in wiki_pages
                   if str(p.relative_to(WIKI_ROOT)) not in by_page
                   and "/updates/" not in str(p)
                   and str(p.relative_to(WIKI_ROOT)) != "wiki/index.md"
                   and p.relative_to(WIKI_DIR).parts
                   and p.relative_to(WIKI_DIR).parts[0] not in AUTO_GENERATED_DIRS)

    result = {
        "generated": datetime.now(timezone.utc).isoformat(),
        "total_wiki_pages": total_pages + untraced + auto_generated,
        "pages_with_sources": total_pages,
        "pages_without_sources": untraced,
        "auto_generated_pages": auto_generated,
        "by_source_id": by_source_id,
        "unknown_refs": {k: v for k, v in sorted(
            unknown_refs.items(), key=lambda x: -len(x[1]))},
        "by_page": by_page,
    }
    return result


def print_summary(data: dict):
    print(f"\n  Source Map Summary")
    print(f"  {'─'*48}")
    print(f"  Wiki pages total:        {data['total_wiki_pages']}")
    print(f"  Pages with sources:      {data['pages_with_sources']}")
    print(f"  Pages without sources:   {data['pages_without_sources']}")
    print(f"  Auto-generated (no src): {data['auto_generated_pages']} (decisions/synthesis/templates/graph)")
    print()
    print(f"  By known source:")
    for sid, pages in data["by_source_id"].items():
        print(f"    {sid}: {len(pages)} wiki pages")
    print()
    print(f"  Other source refs (top 10):")
    for ref, pages in list(data["unknown_refs"].items())[:10]:
        print(f"    {ref!r}: {len(pages)} pages")
    print(f"  {'─'*48}\n")


if __name__ == "__main__":
    quiet = "--quiet" in sys.argv
    data = build_map()
    SOURCE_MAP_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(SOURCE_MAP_FILE, "w") as f:
        json.dump(data, f, indent=2)
    if not quiet:
        print_summary(data)
    print(f"  Saved: {SOURCE_MAP_FILE}")
