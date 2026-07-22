#!/usr/bin/env python3
"""update-graph.py — Regenerate compiled graph.md from wiki pages.

Sources of edges (combined):
1. Latest compiled graph.md (existing semantic edges, normalized)
2. ## See also [[wikilinks]] sections in wiki pages
3. Auto-generated: top-3 tag-overlap matches per page (≥2 shared tags)
   + subdomain fallback + domain anchor fallback

Edge label column MUST use only the closed allowed_edge_types set.
"""
import os, re, glob
from collections import defaultdict
from datetime import datetime, timezone

WIKI_ROOT = os.environ.get("WIKI_ROOT",
    os.path.abspath(os.path.join(os.path.dirname(__file__), "../../..")))
GRAPH_DIR = os.path.join(WIKI_ROOT, "wiki/graph")
WIKI_DIR  = os.path.join(WIKI_ROOT, "wiki")

SKIP_DIRS = {"updates", "compiled", "graph", "templates"}
wikilink_re = re.compile(r'\[\[([^\]|#]+?)(?:[|#][^\]]*)?\]\]')
edge_table_re = re.compile(
    r'^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$')

# Closed set — only these labels allowed in edge col4
ALLOWED_LABELS = {
    "relates-to", "defines", "constrains", "participates-in",
    "instance-of", "depends-on", "follows", "summarizes", "part-of", "specializes"
}

# Normalize legacy / misspelled labels to canonical
LABEL_NORMALIZE = {
    "relates_to": "relates-to",
    "participates_in": "participates-in",
    "instance_of": "instance-of",
    "depends_on": "depends-on",
    "summarized_into": "summarizes",
    "summarized_in": "summarizes",
    "integrated_into": "summarizes",
    "generalized_into": "summarizes",
    "abstracted_into": "summarizes",
    "governs": "constrains",
    "specializes": "specializes",
    "subdomain": "relates-to",
    "domain-member": "part-of",
}

def normalize_label(label: str) -> str:
    label = label.strip().lower()
    label = LABEL_NORMALIZE.get(label, label)
    return label if label in ALLOWED_LABELS else "relates-to"

edges = []
seen_edges = set()  # always stored as tuple(sorted([src, tgt])) for consistent dedup

# 1. Existing compiled graph edges (normalize labels)
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
        if src in ("Source", "---") or src.startswith("---"): continue
        key = tuple(sorted([src, tgt]))
        if key not in seen_edges:
            edges.append((src, etype, tgt, normalize_label(label)))
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
        key = tuple(sorted([src_slug, tgt_slug]))
        if key not in seen_edges:
            edges.append((src_slug, "Concept→Concept", tgt_slug, "relates-to"))
            seen_edges.add(key)
            seealso_added += 1

print(f"  New from See also: {seealso_added}")

# 3. Auto-generate edges from tag overlap + subdomain fallback
# Read all page metadata
pages_meta = {}
for f in glob.glob(WIKI_DIR + "/**/*.md", recursive=True):
    rel = f.replace(WIKI_DIR + "/", "")
    if rel.split("/")[0] in SKIP_DIRS: continue
    if os.path.basename(f) == "index.md": continue
    slug = os.path.splitext(os.path.basename(f))[0]
    content = open(f, encoding="utf-8", errors="replace").read()
    fm = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    tags, subdomain = set(), ""
    if fm:
        fmtext = fm.group(1)
        m = re.search(r'tags:\s*\[([^\]]+)\]', fmtext)
        if m: tags = {t.strip().strip('"\'') for t in m.group(1).split(",")}
        m = re.search(r'subdomain:\s*(.+)', fmtext)
        if m: subdomain = m.group(1).strip()
    pages_meta[slug] = {"tags": tags, "subdomain": subdomain}

slugs = list(pages_meta.keys())
auto_added = 0
per_page_best = defaultdict(list)

# Top-3 neighbors by tag overlap (min 2 shared tags)
for i, a in enumerate(slugs):
    pa = pages_meta[a]
    if not pa["tags"]: continue
    scores = []
    for j, b in enumerate(slugs):
        if i == j: continue
        shared = pa["tags"] & pages_meta[b]["tags"]
        if len(shared) >= 2:
            scores.append((len(shared), b, sorted(shared)[0]))
    scores.sort(reverse=True)
    per_page_best[a] = [(b, lbl) for _, b, lbl in scores[:3]]

for a, targets in per_page_best.items():
    for b, _tag in targets:  # _tag is discarded — use fixed label
        key = tuple(sorted([a, b]))
        if key not in seen_edges:
            edges.append((key[0], "Concept→Concept", key[1], "relates-to"))
            seen_edges.add(key)
            auto_added += 1

# Subdomain fallback for pages still with no edges
connected = set()
for e in edges:
    connected.add(e[0]); connected.add(e[2])

subdomain_fallback = 0
for a in slugs:
    if a in connected: continue
    pa = pages_meta[a]
    if not pa["subdomain"]: continue
    for b in slugs:
        if a == b: continue
        if pages_meta[b]["subdomain"] == pa["subdomain"] and b in connected:
            key = tuple(sorted([a, b]))
            if key not in seen_edges:
                edges.append((key[0], "Concept→Concept", key[1], "relates-to"))
                seen_edges.add(key)
                subdomain_fallback += 1
            connected.add(a)
            break

print(f"  Auto from tag-overlap: {auto_added}")
print(f"  Subdomain fallback: {subdomain_fallback}")

# 4. Domain anchor fallback — connect any still-orphaned page to its domain hub
# Guarantees every page with a known domain has at least 1 edge
DOMAIN_ANCHORS = {
    "Engineer":     "embedded-linux-overview",
    "Self-care":    "personal-life-overview",
    "TechLead":     "career-professional-overview",
    "Entrepreneur": "entrepreneurship-overview",
    "Family":       "norwegian-life-overview",
    "Meta":         "synthesis",
}

connected.update(e[0] for e in edges)
connected.update(e[2] for e in edges)

domain_anchor_added = 0
for f in glob.glob(WIKI_DIR + "/**/*.md", recursive=True):
    rel = f.replace(WIKI_DIR + "/", "")
    if rel.split("/")[0] in SKIP_DIRS: continue
    if os.path.basename(f) == "index.md": continue
    slug = os.path.splitext(os.path.basename(f))[0]
    if slug in connected: continue  # already has edges

    content = open(f, encoding="utf-8", errors="replace").read()
    fm = re.match(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not fm: continue
    m = re.search(r'domain:\s*(\S+)', fm.group(1))
    if not m: continue
    domain = m.group(1).strip('"\'')
    anchor = DOMAIN_ANCHORS.get(domain)
    if not anchor or anchor == slug: continue
    if anchor not in pages_meta: continue  # anchor page doesn't exist yet

    key = tuple(sorted([slug, anchor]))
    if key not in seen_edges:
        edges.append((key[0], "Overview→Concept", key[1], "part-of"))
        seen_edges.add(key)
        connected.add(slug)
        domain_anchor_added += 1

print(f"  Domain anchor fallback: {domain_anchor_added}")

# 5. Write new compiled graph.md (keep last 5 only)
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

# Prune old graph files — keep newest 5
old_graphs = sorted(glob.glob(GRAPH_DIR + "/*-graph.md"))
for stale in old_graphs[:-5]:
    os.remove(stale)

print(f"  Written: {out_path}")
print(f"  Total edges: {len(edges)}")
