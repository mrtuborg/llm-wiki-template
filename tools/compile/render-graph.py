#!/usr/bin/env python3
"""
render-graph.py — Generate interactive D3.js semantic graph from wiki/graph/*.md
Usage: python3 tools/compile/render-graph.py
Output: wiki/graph/index.html
"""

import os, re, glob, json
from datetime import datetime

WIKI_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
GRAPH_DIR = os.path.join(WIKI_ROOT, "wiki/graph")

# --- Parse latest graph file ---
graph_files = sorted(glob.glob(GRAPH_DIR + "/*-graph.md"))
if not graph_files:
    print("No graph files found in wiki/graph/")
    exit(1)

latest = graph_files[-1]
print(f"Parsing: {os.path.basename(latest)}")
text = open(latest).read()

# Parse node types from wiki pages
TYPE_COLORS = {
    "Axiom":     "#E67E22",
    "Entity":    "#3498DB",
    "Process":   "#2ECC71",
    "Pattern":   "#1ABC9C",
    "Method":    "#16A085",
    "Decision":  "#E74C3C",
    "Rule":      "#F39C12",
    "Concept":   "#9B59B6",
    "Overview":  "#8E44AD",
    "Synthesis": "#6C3483",
}

# Collect actual node types from wiki pages
slug_types = {}
for f in glob.glob(WIKI_ROOT + "/wiki/**/*.md", recursive=True):
    slug = os.path.splitext(os.path.basename(f))[0]
    content = open(f).read()
    m = re.search(r'^type:\s*(\w+)', content, re.MULTILINE)
    if m:
        slug_types[slug] = m.group(1)

# Parse edge table
edges = []
node_set = set()
edge_re = re.compile(r'^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$')

for line in text.splitlines():
    m = edge_re.match(line)
    if not m:
        continue
    src, etype, tgt, label = [x.strip() for x in m.groups()]
    if src in ("Source", "---"):
        continue
    edges.append({"source": src, "target": tgt, "label": label, "type": etype})
    node_set.add(src)
    node_set.add(tgt)

# Build node list
nodes = []
for slug in sorted(node_set):
    ntype = slug_types.get(slug, "Unknown")
    nodes.append({
        "id": slug,
        "label": slug.replace("-", " ").replace("nrf52840 ", ""),
        "type": ntype,
        "color": TYPE_COLORS.get(ntype, "#95a5a6"),
        "full_label": slug
    })

print(f"  Nodes: {len(nodes)}, Edges: {len(edges)}")

# --- Generate HTML with D3.js ---
nodes_json = json.dumps(nodes, indent=2)
edges_json = json.dumps(edges, indent=2)
ts = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
source_file = os.path.basename(latest)

HTML = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>LLM-Wiki Semantic Graph</title>
<style>
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{ background: #0d1117; color: #e6edf3; font-family: 'SF Mono', monospace; }}
#header {{ padding: 12px 20px; background: #161b22; border-bottom: 1px solid #30363d;
           display: flex; align-items: center; gap: 20px; }}
#header h1 {{ font-size: 14px; font-weight: 600; color: #f0f6fc; }}
#header .meta {{ font-size: 11px; color: #8b949e; }}
#controls {{ padding: 8px 20px; background: #161b22; border-bottom: 1px solid #30363d;
             display: flex; gap: 12px; align-items: center; flex-wrap: wrap; }}
#controls label {{ font-size: 11px; color: #8b949e; }}
#search {{ background: #0d1117; border: 1px solid #30363d; color: #e6edf3;
           padding: 4px 8px; border-radius: 4px; font-size: 12px; width: 180px; }}
.legend {{ display: flex; gap: 10px; flex-wrap: wrap; }}
.legend-item {{ display: flex; align-items: center; gap: 4px; font-size: 11px; cursor: pointer; }}
.legend-dot {{ width: 10px; height: 10px; border-radius: 50%; }}
#graph-container {{ width: 100vw; height: calc(100vh - 90px); overflow: hidden; }}
svg {{ width: 100%; height: 100%; }}
.node circle {{ stroke-width: 1.5px; cursor: pointer; transition: r 0.2s; }}
.node circle:hover {{ stroke-width: 3px; }}
.node text {{ font-size: 9px; fill: #8b949e; pointer-events: none; }}
.node.highlighted text {{ fill: #f0f6fc; font-size: 10px; font-weight: 600; }}
.link {{ stroke-opacity: 0.5; }}
.link-label {{ font-size: 8px; fill: #484f58; pointer-events: none; }}
.link.highlighted {{ stroke-opacity: 1; }}
#tooltip {{ position: fixed; background: #161b22; border: 1px solid #30363d;
            border-radius: 6px; padding: 10px 14px; font-size: 11px; pointer-events: none;
            display: none; max-width: 260px; z-index: 100; }}
#tooltip .tt-title {{ font-weight: 600; color: #f0f6fc; margin-bottom: 4px; font-size: 13px; }}
#tooltip .tt-type {{ font-size: 10px; margin-bottom: 6px; }}
#tooltip .tt-edges {{ font-size: 10px; color: #8b949e; line-height: 1.6; }}
</style>
</head>
<body>
<div id="header">
  <h1>⬡ LLM-Wiki Semantic Graph</h1>
  <span class="meta">Source: {source_file} · Rendered: {ts}</span>
</div>
<div id="controls">
  <input id="search" type="text" placeholder="Search nodes…" oninput="filterNodes(this.value)">
  <label>show labels: <input type="checkbox" id="showLabels" onchange="toggleLabels()" checked></label>
  <label>show edge labels: <input type="checkbox" id="showEdgeLabels" onchange="toggleEdgeLabels()"></label>
  <div class="legend" id="legend"></div>
</div>
<div id="graph-container"><svg id="svg"></svg></div>
<div id="tooltip"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
const NODES = {nodes_json};
const EDGES = {edges_json};

const TYPE_COLORS = {json.dumps(TYPE_COLORS)};

// Build adjacency for tooltip
const adj = {{}};
EDGES.forEach(e => {{
  if (!adj[e.source]) adj[e.source] = [];
  if (!adj[e.target]) adj[e.target] = [];
  adj[e.source].push({{dir: "→", node: e.target, label: e.label}});
  adj[e.target].push({{dir: "←", node: e.source, label: e.label}});
}});

// Legend
const types = [...new Set(NODES.map(n => n.type))].sort();
const legend = document.getElementById("legend");
types.forEach(t => {{
  const el = document.createElement("div");
  el.className = "legend-item";
  el.innerHTML = `<div class="legend-dot" style="background:${{TYPE_COLORS[t] || '#95a5a6'}}"></div>${{t}}`;
  el.onclick = () => toggleType(t);
  legend.appendChild(el);
}});

// D3 setup
const svg = d3.select("#svg");
const container = svg.append("g");

svg.call(d3.zoom().scaleExtent([0.1, 4]).on("zoom", e => container.attr("transform", e.transform)));

const W = window.innerWidth, H = window.innerHeight - 90;

// Arrow markers per edge type
const defs = svg.append("defs");
const edgeTypes = [...new Set(EDGES.map(e => e.label))];
edgeTypes.forEach(label => {{
  defs.append("marker")
    .attr("id", `arrow-${{label.replace(/_/g,'-')}}`)
    .attr("viewBox", "0 -4 8 8").attr("refX", 18).attr("refY", 0)
    .attr("markerWidth", 5).attr("markerHeight", 5).attr("orient", "auto")
    .append("path").attr("d", "M0,-4L8,0L0,4").attr("fill", "#484f58");
}});

// Simulation
const sim = d3.forceSimulation(NODES)
  .force("link", d3.forceLink(EDGES).id(d => d.id).distance(90).strength(0.4))
  .force("charge", d3.forceManyBody().strength(-280))
  .force("center", d3.forceCenter(W/2, H/2))
  .force("collision", d3.forceCollide(20));

// Links
const link = container.append("g").selectAll("line")
  .data(EDGES).join("line")
  .attr("class", "link")
  .attr("stroke", d => TYPE_COLORS[NODES.find(n=>n.id===d.source?.id||n.id===d.source)?.type] || "#484f58")
  .attr("stroke-width", 1)
  .attr("marker-end", d => `url(#arrow-${{d.label.replace(/_/g,'-')}})`);

const linkLabel = container.append("g").selectAll("text")
  .data(EDGES).join("text")
  .attr("class", "link-label")
  .text(d => d.label)
  .style("display", "none");

// Nodes
const node = container.append("g").selectAll("g")
  .data(NODES).join("g")
  .attr("class", "node")
  .call(d3.drag()
    .on("start", (e,d) => {{ if(!e.active) sim.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; }})
    .on("drag",  (e,d) => {{ d.fx=e.x; d.fy=e.y; }})
    .on("end",   (e,d) => {{ if(!e.active) sim.alphaTarget(0); d.fx=null; d.fy=null; }}))
  .on("mouseover", showTooltip)
  .on("mousemove", moveTooltip)
  .on("mouseout",  hideTooltip)
  .on("click", highlightNode);

node.append("circle")
  .attr("r", d => d.type === "Axiom" ? 7 : d.type === "Entity" ? 9 : 7)
  .attr("fill", d => d.color)
  .attr("stroke", d => d3.color(d.color).darker(0.5));

const nodeLabel = node.append("text")
  .attr("dy", 18).attr("text-anchor", "middle")
  .text(d => d.label);

sim.on("tick", () => {{
  link.attr("x1",d=>d.source.x).attr("y1",d=>d.source.y)
      .attr("x2",d=>d.target.x).attr("y2",d=>d.target.y);
  linkLabel.attr("x",d=>(d.source.x+d.target.x)/2).attr("y",d=>(d.source.y+d.target.y)/2);
  node.attr("transform",d=>`translate(${{d.x}},${{d.y}})`);
}});

// Tooltip
const tt = document.getElementById("tooltip");
function showTooltip(e, d) {{
  const edges = adj[d.id] || [];
  const edgeHtml = edges.map(a =>
    `${{a.dir}} <b>${{a.label}}</b> ${{a.node}}`).join("<br>");
  tt.innerHTML = `
    <div class="tt-title">${{d.full_label}}</div>
    <div class="tt-type" style="color:${{d.color}}">${{d.type}}</div>
    <div class="tt-edges">${{edgeHtml || "no edges"}}</div>`;
  tt.style.display = "block";
  moveTooltip(e);
}}
function moveTooltip(e) {{
  tt.style.left = (e.clientX + 14) + "px";
  tt.style.top  = (e.clientY - 10) + "px";
}}
function hideTooltip() {{ tt.style.display = "none"; }}

// Highlight on click
let highlighted = null;
function highlightNode(e, d) {{
  if (highlighted === d.id) {{ highlighted = null; node.classed("highlighted", false); link.classed("highlighted", false); return; }}
  highlighted = d.id;
  const neighbors = new Set((adj[d.id]||[]).map(a=>a.node));
  neighbors.add(d.id);
  node.classed("highlighted", n => neighbors.has(n.id));
  link.classed("highlighted", l =>
    (l.source.id||l.source) === d.id || (l.target.id||l.target) === d.id);
}}

// Controls
function filterNodes(q) {{
  const lq = q.toLowerCase();
  node.style("opacity", d => !q || d.id.includes(lq) ? 1 : 0.15);
  link.style("opacity", d => !q ? 0.5 : 0.08);
}}
function toggleLabels() {{
  const show = document.getElementById("showLabels").checked;
  nodeLabel.style("display", show ? null : "none");
}}
function toggleEdgeLabels() {{
  const show = document.getElementById("showEdgeLabels").checked;
  linkLabel.style("display", show ? null : "none");
}}
let hiddenTypes = new Set();
function toggleType(t) {{
  if (hiddenTypes.has(t)) hiddenTypes.delete(t); else hiddenTypes.add(t);
  node.style("opacity", d => hiddenTypes.has(d.type) ? 0.05 : 1);
  link.style("opacity", l => {{
    const st = NODES.find(n=>n.id===(l.source.id||l.source))?.type;
    const tt2 = NODES.find(n=>n.id===(l.target.id||l.target))?.type;
    return hiddenTypes.has(st)||hiddenTypes.has(tt2) ? 0.02 : 0.5;
  }});
}}
</script>
</body>
</html>
"""

out = os.path.join(GRAPH_DIR, "index.html")
with open(out, "w") as f:
    f.write(HTML)
print(f"Output: wiki/graph/index.html ({len(HTML)//1024}KB)")
