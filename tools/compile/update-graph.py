#!/usr/bin/env python3
"""update-graph.py — Regenerate compiled graph.md from wiki pages.

Sources of edges (combined):
1. Latest compiled graph.md (existing semantic edges)
2. ## See also [[wikilinks]] sections in wiki pages
3. Individual ## Edge List sections in wiki pages
"""
import os, re, glob
from datetime import datetime, timezone

WIKI_ROOT = os.environ.get("WIKI_ROOT",
    os.path.abspath(os.path.join(os.path.dirname(__file__), "../../..")))
GRAPH_DIR = os.path.join(WIKI_ROOT, "wiki/graph")
WIKI_DIR  = os.path.join(WIKI_ROOT, "wiki")

SKIP_DIRS = {"updates", "compiled", "graph", "templates"}
wikilink_re = re.compile(r'\[\[([^\]|#]+?)(?:[|#][^\]]*)?\]\]')
edge_table_re = re.compile(
    r'^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$')

edges = []
seen_edges = set()

# 1. Existing compiled graph edges
graph_files = sorted(glob.glob(GRAPH_DIR + "/*-graph.md"))
if graph_files:
    text = open(graph_files[-1]).read()
    in_edge = False
    for line in text.splitlines():
        if line.startswith("## Edge List"):
            in_edge = True; continue
        if in_edge and line.startswith("## "):
            in_edge = False; continue
        if not in_edge: continue
        m = edge_table_re.match(line)
        if not m: continue
        src, etype, tgt, label = [x.strip() for x in m.groups()]
        if src in ("Source", "---"): continue
        key = (src, tgt)
        if key not in seen_edges:
            edges.append((src, etype, tgt, label))
            seen_edges.add(key)
    print(f"  Existing edges: {len(edges)}")

# 2. ## See also [[wikilinks]] from individual wiki pages
seealso_added = 0
for f in sorted(glob.glob(WIKI_DIR + "/**/*.md", recursive=True)):
    rel = f.replace(WIKI_DIR + "/", "")
    if rel.split("/")[0] in SKIP_DIRS: continue
    if os.path.basename(f) == "index.md": continue
    src_slug = os.path.splitext(os.path.basename(f))[0]
    content = open(f, encoding="utf-8", errors="replace").read()
    if "## See also" not in content: continue
    after = content.split("## See also", 1)[1]
    nxt = re.search(r'^## ', after, re.MULTILINE)
    section = after[:nxt.start()] if nxt else after
    for m in wikilink_re.finditer(section):
        tgt_slug = os.path.splitext(os.path.basename(m.group(1).strip()))[0]
        key = (src_slug, tgt_slug)
        if key not in seen_edges:
            edges.append((src_slug, "Concept→Concept", tgt_slug, "relates-to"))
            seen_edges.add(key)
            seealso_added += 1

print(f"  New from See also: {seealso_added}")

# 3. Write new compiled graph.md
ts = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
out_path = os.path.join(GRAPH_DIR, f"{ts}-graph.md")
os.makedirs(GRAPH_DIR, exist_ok=True)
with open(out_path, "w", encoding="utf-8") as fh:
    fh.write(f"# Compiled Knowledge Graph — {ts}\n\n")
    fh.write(f"Generated: {datetime.now(timezone.utc).isoformat()}\n")
    fh.write(f"Total edges: {len(edges)}\n\n")
    fh.write("## Edge List\n\n")
    fh.write("| Source | Edge Type | Target | Label |\n")
    fh.write("|--------|-----------|--------|-------|\n")
    for src, etype, tgt, label in edges:
        fh.write(f"| {src} | {etype} | {tgt} | {label} |\n")

print(f"  Written: {out_path}")
print(f"  Total edges: {len(edges)}")
