#!/usr/bin/env python3
"""render-graph.py — Interactive D3.js semantic graph + analytics
Usage:  python3 tools/compile/render-graph.py
Output: wiki/graph/index.html
"""
import os, re, glob, json
from collections import Counter, defaultdict
from datetime import datetime

WIKI_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../..")))
GRAPH_DIR = os.path.join(WIKI_ROOT, "wiki/graph")

graph_files = sorted(glob.glob(GRAPH_DIR + "/*-graph.md"))
if not graph_files: print("No graph files found"); exit(1)

latest = graph_files[-1]
print(f"Parsing: {os.path.basename(latest)}")
text = open(latest).read()

TYPE_COLORS = {
    "Axiom":"#E67E22","Entity":"#3B82F6","Process":"#10B981",
    "Pattern":"#06B6D4","Method":"#0891B2","Decision":"#EF4444",
    "Rule":"#F59E0B","Concept":"#8B5CF6","Overview":"#7C3AED","Synthesis":"#4C1D95",
}
LAYERS = ["Axiom","Entity","Process","Pattern","Method","Decision","Rule","Concept","Overview","Synthesis"]

slug_types, slug_domains = {}, {}
for f in glob.glob(WIKI_ROOT + "/wiki/**/*.md", recursive=True):
    slug = os.path.splitext(os.path.basename(f))[0]
    content = open(f).read()
    tm = re.search(r'^type:\s*(\w+)', content, re.MULTILINE)
    dm = re.search(r'^domain:\s*(.+)', content, re.MULTILINE)
    if tm: slug_types[slug] = tm.group(1)
    if dm: slug_domains[slug] = dm.group(1).strip()

edges, node_set = [], set()
edge_re = re.compile(r'^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$')
for line in text.splitlines():
    m = edge_re.match(line)
    if not m: continue
    src, etype, tgt, label = [x.strip() for x in m.groups()]
    if src in ("Source","---"): continue
    edges.append({"source":src,"target":tgt,"label":label,"etype":etype})
    node_set.add(src); node_set.add(tgt)

nodes = []
for slug in sorted(node_set):
    ntype = slug_types.get(slug,"Unknown")
    nodes.append({"id":slug,"label":slug.replace("nrf52840-","").replace("-"," "),
                  "full_label":slug,"type":ntype,"domain":slug_domains.get(slug,"?"),
                  "color":TYPE_COLORS.get(ntype,"#6B7280")})

# ── Analytics ──────────────────────────────────────────────────────────
type_counts = Counter(n["type"] for n in nodes)
edge_counts = Counter(e["label"] for e in edges)
domain_counts = Counter(n["domain"] for n in nodes if n["domain"] != "?")

degree = defaultdict(int)
for e in edges:
    degree[e["source"]] += 1
    degree[e["target"]] += 1

orphans = [n["id"] for n in nodes if degree[n["id"]] == 0]
n_nodes, n_edges = len(nodes), len(edges)
density = round(n_edges / max(n_nodes*(n_nodes-1), 1), 4)
avg_degree = round(sum(degree.values()) / max(n_nodes, 1), 2)
top_hubs = sorted(degree.items(), key=lambda x: -x[1])[:8]

layer_coverage = [{"layer": l, "count": type_counts.get(l, 0),
                   "color": TYPE_COLORS.get(l,"#6B7280")} for l in LAYERS]
edge_chart = [{"label": l, "count": c} for l, c in edge_counts.most_common()]
hub_chart  = [{"id": h, "deg": d, "type": slug_types.get(h,"?"),
               "color": TYPE_COLORS.get(slug_types.get(h,"?"),"#6B7280")} for h, d in top_hubs]
type_chart = [{"type": t, "count": type_counts.get(t,0),
               "color": TYPE_COLORS.get(t,"#6B7280")} for t in LAYERS if type_counts.get(t,0)>0]
dom_chart  = [{"domain": d, "count": c} for d, c in domain_counts.most_common(8)]

analytics_js = json.dumps({
    "n_nodes": n_nodes, "n_edges": n_edges,
    "density": density, "avg_degree": avg_degree,
    "orphans": len(orphans), "orphan_ids": orphans,
    "layers": layer_coverage, "edges": edge_chart,
    "hubs": hub_chart, "types": type_chart, "domains": dom_chart,
})

ts       = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
src_file = os.path.basename(latest)
nodes_js = json.dumps(nodes)
edges_js = json.dumps(edges)
colors_js= json.dumps(TYPE_COLORS)
radius_js= json.dumps({"Axiom":7,"Entity":11,"Process":9,"Pattern":8,"Synthesis":13})
dy_js    = json.dumps({"Axiom":17,"Entity":21,"Process":19,"Pattern":18,"Synthesis":23})
print(f"  Nodes: {n_nodes}, Edges: {n_edges}, Density: {density}, Orphans: {len(orphans)}")

# ── HTML ───────────────────────────────────────────────────────────────
HTML = """\
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<title>Semantic Graph · LLM-Wiki</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root[data-theme="dark"]{
  --bg:#0D1117;--surface:#161B22;--surface2:#1C2128;--border:#30363D;
  --text:#E6EDF3;--muted:#8B949E;--el-bg:rgba(22,27,34,.9);--el-fg:#636C76;
  --shadow:0 4px 24px rgba(0,0,0,.5);--bar-bg:#21262D;
}
:root[data-theme="light"]{
  --bg:#F6F8FA;--surface:#FFFFFF;--surface2:#F0F3F6;--border:#D0D7DE;
  --text:#1F2328;--muted:#636C76;--el-bg:rgba(255,255,255,.9);--el-fg:#636C76;
  --shadow:0 4px 24px rgba(0,0,0,.1);--bar-bg:#E8ECF0;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--text);font-family:'Inter',system-ui,sans-serif;
     font-size:13px;height:100vh;overflow:hidden;display:flex;flex-direction:column;
     transition:background .2s,color .2s}
/* toolbar */
#tb{display:flex;align-items:center;height:48px;gap:14px;padding:0 16px;flex-shrink:0;
    background:var(--surface);border-bottom:1px solid var(--border);box-shadow:var(--shadow);z-index:10}
#tb h1{font-size:13px;font-weight:600;white-space:nowrap}
.meta{font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;white-space:nowrap}
.sep{width:1px;height:24px;background:var(--border);flex-shrink:0}
.tg{display:flex;align-items:center;gap:10px}
#srch{background:var(--bg);border:1px solid var(--border);color:var(--text);
      padding:5px 10px;border-radius:6px;font-size:12px;font-family:inherit;
      width:160px;outline:none;transition:border-color .15s}
#srch:focus{border-color:#3B82F6}
#srch::placeholder{color:var(--muted)}
.tw{display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none}
.tw span{font-size:11px;color:var(--muted);white-space:nowrap}
.tog{position:relative;width:32px;height:18px;background:var(--border);
     border-radius:9px;cursor:pointer;transition:background .2s;flex-shrink:0}
.tog.on{background:#3B82F6}
.tog::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;
            border-radius:7px;background:#fff;transition:left .2s}
.tog.on::after{left:16px}
.tbtn{background:none;border:1px solid var(--border);color:var(--muted);
      border-radius:6px;padding:4px 9px;cursor:pointer;font-size:12px;
      font-family:inherit;transition:all .15s;white-space:nowrap}
.tbtn:hover,.tbtn.on{border-color:#3B82F6;color:var(--text)}
.tbtn.on{background:rgba(59,130,246,.12)}
#leg{display:flex;gap:5px;flex-wrap:wrap;align-items:center}
.li{display:flex;align-items:center;gap:4px;font-size:11px;color:var(--muted);
    cursor:pointer;padding:2px 7px;border-radius:12px;border:1px solid transparent;transition:all .15s}
.li:hover{border-color:var(--border);color:var(--text)}
.li.off{opacity:.3}
.ld{width:8px;height:8px;border-radius:50%;flex-shrink:0}
/* layout */
#main{display:flex;flex:1;overflow:hidden}
#graph{flex:1;overflow:hidden}
svg{width:100%;height:100%}
/* sidebar */
#sidebar{width:300px;flex-shrink:0;background:var(--surface);border-left:1px solid var(--border);
         overflow-y:auto;display:none;flex-direction:column;gap:0}
#sidebar.open{display:flex}
.sb-section{padding:14px 16px;border-bottom:1px solid var(--border)}
.sb-title{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;
          color:var(--muted);margin-bottom:10px}
/* metric cards */
.cards{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.card{background:var(--surface2);border-radius:6px;padding:10px;border:1px solid var(--border)}
.card-val{font-size:22px;font-weight:600;font-family:'JetBrains Mono',monospace;line-height:1}
.card-lbl{font-size:10px;color:var(--muted);margin-top:4px;text-transform:uppercase;letter-spacing:.04em}
.card.warn .card-val{color:#EF4444}
/* bar rows */
.bar-row{display:flex;align-items:center;gap:8px;margin-bottom:6px}
.bar-row:last-child{margin-bottom:0}
.bar-name{font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--muted);
          width:90px;flex-shrink:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:right}
.bar-name.left{text-align:left;width:80px}
.bar-track{flex:1;height:12px;background:var(--bar-bg);border-radius:6px;overflow:hidden}
.bar-fill{height:100%;border-radius:6px;transition:width .4s ease}
.bar-count{font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--muted);
           width:22px;text-align:right;flex-shrink:0}
/* layer funnel */
.layer-row{display:flex;align-items:center;gap:8px;margin-bottom:5px}
.layer-num{font-size:9px;color:var(--muted);width:14px;text-align:right;flex-shrink:0}
.layer-name{font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--muted);
            width:72px;flex-shrink:0}
.layer-track{flex:1;height:10px;background:var(--bar-bg);border-radius:5px;overflow:hidden;position:relative}
.layer-fill{height:100%;border-radius:5px}
.layer-empty{font-size:9px;color:var(--border);font-family:'JetBrains Mono',monospace;
             position:absolute;right:6px;top:50%;transform:translateY(-50%)}
.layer-count{font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--muted);
             width:18px;text-align:right;flex-shrink:0}
/* hub list */
.hub-row{display:flex;align-items:center;gap:8px;margin-bottom:5px}
.hub-rank{font-size:9px;color:var(--muted);width:14px;text-align:right;flex-shrink:0}
.hub-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.hub-name{font-size:10px;font-family:'JetBrains Mono',monospace;color:var(--text);
          flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.hub-deg{font-size:11px;font-family:'JetBrains Mono',monospace;font-weight:500;
         width:20px;text-align:right;flex-shrink:0}
/* nodes */
.node circle{stroke-width:1.5px;cursor:pointer;transition:r .15s,stroke-width .15s;
             filter:drop-shadow(0 1px 3px rgba(0,0,0,.3))}
.node:hover circle{stroke-width:2.5px}
.node.dim{opacity:.1}
.node.hi circle{stroke-width:3px}
.nlabel{font-size:9px;font-family:'JetBrains Mono',monospace;fill:var(--muted);
        pointer-events:none;paint-order:stroke;stroke:var(--bg);stroke-width:3px}
.node.hi .nlabel,.node.nb .nlabel{fill:var(--text);font-size:10px;font-weight:500}
.edge{stroke-opacity:.3;transition:stroke-opacity .15s}
.edge.hi{stroke-opacity:.9}
.edge.dim{stroke-opacity:.04}
.elg{pointer-events:none}
.elt{font-size:8px;font-family:'JetBrains Mono',monospace;fill:var(--el-fg);
     text-anchor:middle;dominant-baseline:middle}
.elb{fill:var(--el-bg)}
/* tooltip */
#tip{position:fixed;background:var(--surface);border:1px solid var(--border);
     border-radius:8px;padding:12px 14px;pointer-events:none;display:none;
     max-width:280px;z-index:300;box-shadow:var(--shadow)}
.ts{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:500;margin-bottom:2px}
.tt{font-size:11px;font-weight:500;margin-bottom:8px}
.th{font-size:10px;color:var(--muted);margin-bottom:3px;font-weight:500;
    text-transform:uppercase;letter-spacing:.05em}
.te{font-size:11px;color:var(--muted);line-height:1.75;font-family:'JetBrains Mono',monospace}
.te b{color:var(--text);font-weight:500}
/* stats */
#stats{position:fixed;bottom:12px;left:16px;font-size:10px;color:var(--muted);
       font-family:'JetBrains Mono',monospace;background:var(--surface);
       border:1px solid var(--border);padding:4px 10px;border-radius:6px;z-index:5}
</style>
</head>
<body>
<div id="tb">
  <h1>⬡ Semantic Graph</h1>
  <span class="meta">""" + src_file + """</span>
  <div class="sep"></div>
  <div class="tg">
    <input id="srch" type="text" placeholder="Search nodes…" autocomplete="off">
  </div>
  <div class="sep"></div>
  <div class="tg">
    <label class="tw" onclick="togEl()"><div class="tog on" id="t-el"></div><span>Edge labels</span></label>
    <label class="tw" onclick="togNl()"><div class="tog on" id="t-nl"></div><span>Node labels</span></label>
    <label class="tw" onclick="togAr()"><div class="tog on" id="t-ar"></div><span>Arrows</span></label>
  </div>
  <div class="sep"></div>
  <div id="leg"></div>
  <div style="flex:1"></div>
  <button class="tbtn" id="an-btn" onclick="togAnalytics()">📊 Analytics</button>
  <button class="tbtn" id="thbtn" onclick="togTheme()">☀ Light</button>
</div>
<div id="main">
  <div id="graph"><svg id="svg"></svg></div>
  <div id="sidebar">
    <!-- Health -->
    <div class="sb-section">
      <div class="sb-title">Graph Health</div>
      <div class="cards" id="cards"></div>
    </div>
    <!-- Epistemic layers -->
    <div class="sb-section">
      <div class="sb-title">Epistemic Layers</div>
      <div id="layers"></div>
    </div>
    <!-- Edge types -->
    <div class="sb-section">
      <div class="sb-title">Edge Types</div>
      <div id="etypes"></div>
    </div>
    <!-- Top hubs -->
    <div class="sb-section">
      <div class="sb-title">Top Hubs · by degree</div>
      <div id="hubs"></div>
    </div>
    <!-- Domains -->
    <div class="sb-section">
      <div class="sb-title">Domain Coverage</div>
      <div id="domains"></div>
    </div>
  </div>
</div>
<div id="tip"></div>
<div id="stats">nodes: """ + str(n_nodes) + """ · edges: """ + str(n_edges) + """ · """ + ts + """</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
const NODES=""" + nodes_js + """;
const EDGES=""" + edges_js + """;
const TC=""" + colors_js + """;
const RADIUS=""" + radius_js + """;
const DY=""" + dy_js + """;
const A=""" + analytics_js + """;

let elOn=true,nlOn=true,arOn=true,hidT=new Set(),activeN=null,sideOpen=false;

// adjacency
const adj={};
NODES.forEach(n=>adj[n.id]={out:[],inn:[]});
EDGES.forEach(e=>{
  adj[e.source]=adj[e.source]||{out:[],inn:[]};
  adj[e.target]=adj[e.target]||{out:[],inn:[]};
  adj[e.source].out.push({node:e.target,label:e.label});
  adj[e.target].inn.push({node:e.source,label:e.label});
});

// ── Analytics sidebar ───────────────────────────────────────────────
function buildSidebar(){
  // Health cards
  const cards=[
    {val:A.n_nodes, lbl:'Nodes'},
    {val:A.n_edges, lbl:'Edges'},
    {val:A.density, lbl:'Density'},
    {val:A.avg_degree, lbl:'Avg Degree'},
    {val:A.orphans, lbl:'Orphans', warn:A.orphans>0},
  ];
  document.getElementById('cards').innerHTML=cards.map(c=>
    `<div class="card${c.warn?' warn':''}">
      <div class="card-val">${c.val}</div>
      <div class="card-lbl">${c.lbl}</div>
    </div>`).join('');

  // Epistemic layers
  const maxL=Math.max(...A.layers.map(l=>l.count),1);
  document.getElementById('layers').innerHTML=A.layers.map((l,i)=>`
    <div class="layer-row">
      <div class="layer-num">${i+1}</div>
      <div class="layer-name" style="color:${l.color}">${l.layer}</div>
      <div class="layer-track">
        <div class="layer-fill" style="width:${l.count?Math.max(l.count/maxL*100,4):0}%;background:${l.color}"></div>
        ${l.count===0?'<div class="layer-empty">gap</div>':''}
      </div>
      <div class="layer-count" style="color:${l.count?l.color:'var(--border)'}">${l.count||'—'}</div>
    </div>`).join('');

  // Edge types
  const maxE=Math.max(...A.edges.map(e=>e.count),1);
  document.getElementById('etypes').innerHTML=A.edges.map(e=>`
    <div class="bar-row">
      <div class="bar-name">${e.label}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${e.count/maxE*100}%;background:#3B82F6"></div></div>
      <div class="bar-count">${e.count}</div>
    </div>`).join('');

  // Hubs
  const maxH=Math.max(...A.hubs.map(h=>h.deg),1);
  document.getElementById('hubs').innerHTML=A.hubs.map((h,i)=>`
    <div class="hub-row" style="cursor:pointer" onclick="focusNode('${h.id}')">
      <div class="hub-rank">${i+1}</div>
      <div class="hub-dot" style="background:${h.color}"></div>
      <div class="hub-name">${h.id.replace('nrf52840-','')}</div>
      <div class="hub-deg" style="color:${h.color}">${h.deg}</div>
    </div>`).join('');

  // Domains
  const maxD=Math.max(...A.domains.map(d=>d.count),1);
  document.getElementById('domains').innerHTML=A.domains.map(d=>`
    <div class="bar-row">
      <div class="bar-name left">${d.domain.split('-')[0]}</div>
      <div class="bar-track"><div class="bar-fill" style="width:${d.count/maxD*100}%;background:#8B5CF6"></div></div>
      <div class="bar-count">${d.count}</div>
    </div>`).join('');
}
buildSidebar();

function togAnalytics(){
  sideOpen=!sideOpen;
  document.getElementById('sidebar').classList.toggle('open',sideOpen);
  document.getElementById('an-btn').classList.toggle('on',sideOpen);
  setTimeout(()=>sim.alpha(0.1).restart(),100);
}

// ── Legend ─────────────────────────────────────────────────────────
const types=[...new Set(NODES.map(n=>n.type))].sort();
const legEl=document.getElementById('leg');
types.forEach(t=>{
  const el=document.createElement('div');
  el.className='li';el.id='li-'+t;
  el.innerHTML=`<div class="ld" style="background:${TC[t]||'#6B7280'}"></div>${t}`;
  el.onclick=()=>togType(t,el);
  legEl.appendChild(el);
});

// ── D3 graph ────────────────────────────────────────────────────────
const svg=d3.select('#svg');
const root=svg.append('g');
svg.call(d3.zoom().scaleExtent([0.05,6]).on('zoom',e=>root.attr('transform',e.transform)));
svg.on('click',clearHi);

const defs=svg.append('defs');
[...new Set(EDGES.map(e=>e.label))].forEach(lbl=>{
  [['#384148',0],['#B0B7C0',1]].forEach(([col,i])=>{
    defs.append('marker')
      .attr('id',`arr-${lbl.replace(/_/g,'-')}-${i}`)
      .attr('viewBox','0 -4 8 8').attr('refX',20).attr('refY',0)
      .attr('markerWidth',5).attr('markerHeight',5).attr('orient','auto')
      .append('path').attr('d','M0,-4L8,0L0,4').attr('fill',col);
  });
});

function gw(){return document.getElementById('graph').offsetWidth;}
function gh(){return document.getElementById('graph').offsetHeight;}

const sim=d3.forceSimulation(NODES)
  .force('link',d3.forceLink(EDGES).id(d=>d.id).distance(110).strength(0.35))
  .force('charge',d3.forceManyBody().strength(-380))
  .force('center',d3.forceCenter(gw()/2,gh()/2))
  .force('collision',d3.forceCollide(24));

const edgeG=root.append('g');
const eSel=edgeG.selectAll('line').data(EDGES).join('line')
  .attr('class','edge')
  .attr('stroke',d=>TC[NODES.find(n=>n.id===d.source?.id||n.id===d.source)?.type]||'#6B7280')
  .attr('stroke-width',1.2)
  .attr('marker-end',d=>`url(#arr-${d.label.replace(/_/g,'-')}-0)`);

const elG=root.append('g');
const elSel=elG.selectAll('g').data(EDGES).join('g').attr('class','elg');
elSel.append('rect').attr('class','elb').attr('height',13).attr('y',-6.5).attr('rx',3);
elSel.append('text').attr('class','elt').text(d=>d.label);

const nodeG=root.append('g');
const nSel=nodeG.selectAll('g').data(NODES).join('g')
  .attr('class','node')
  .call(d3.drag()
    .on('start',(e,d)=>{if(!e.active)sim.alphaTarget(0.3).restart();d.fx=d.x;d.fy=d.y})
    .on('drag', (e,d)=>{d.fx=e.x;d.fy=e.y})
    .on('end',  (e,d)=>{if(!e.active)sim.alphaTarget(0);d.fx=null;d.fy=null}))
  .on('mouseover',showTip).on('mousemove',moveTip).on('mouseout',hideTip)
  .on('click',(e,d)=>{e.stopPropagation();clickN(d)});

nSel.append('circle')
  .attr('r',d=>RADIUS[d.type]||7)
  .attr('fill',d=>d.color)
  .attr('stroke',d=>d3.color(d.color).darker(0.8));

const nlSel=nSel.append('text').attr('class','nlabel')
  .attr('dy',d=>DY[d.type]||17).attr('text-anchor','middle').text(d=>d.label);

sim.on('tick',()=>{
  eSel.attr('x1',d=>d.source.x).attr('y1',d=>d.source.y)
      .attr('x2',d=>d.target.x).attr('y2',d=>d.target.y);
  elSel.attr('transform',d=>{
    const mx=(d.source.x+d.target.x)/2,my=(d.source.y+d.target.y)/2;
    let a=Math.atan2(d.target.y-d.source.y,d.target.x-d.source.x)*180/Math.PI;
    if(a>90||a<-90)a+=180;
    return `translate(${mx},${my}) rotate(${a})`;
  });
  elSel.select('rect').each(function(){
    const t=this.parentNode.querySelector('text');
    const w=t?t.getComputedTextLength()+10:50;
    d3.select(this).attr('width',w).attr('x',-w/2);
  });
  nSel.attr('transform',d=>`translate(${d.x},${d.y})`);
});

// tooltip
const tip=document.getElementById('tip');
function rows(arr,dir){return arr.map(a=>`<div class="te">${dir} <b>${a.label}</b> ${a.node}</div>`).join('');}
function showTip(e,d){
  const a=adj[d.id]||{out:[],inn:[]};
  tip.innerHTML=`
    <div class="ts">${d.full_label}</div>
    <div class="tt" style="color:${d.color}">${d.type} · ${d.domain}</div>
    ${a.out.length?`<div class="th">outbound</div>${rows(a.out,'→')}`:''}
    ${a.inn.length?`<div class="th" style="margin-top:6px">inbound</div>${rows(a.inn,'←')}`:''}
    ${!a.out.length&&!a.inn.length?'<div class="te" style="opacity:.4">no edges</div>':''}`;
  tip.style.display='block';moveTip(e);
}
function moveTip(e){
  const x=e.clientX+16,y=e.clientY-10;
  tip.style.left=(x+tip.offsetWidth>window.innerWidth?x-tip.offsetWidth-32:x)+'px';
  tip.style.top=Math.max(8,y)+'px';
}
function hideTip(){tip.style.display='none';}

// highlight
function clickN(d){
  if(activeN===d.id){clearHi();return;}
  activeN=d.id;
  const nb=new Set([...(adj[d.id]?.out||[]).map(a=>a.node),
                    ...(adj[d.id]?.inn||[]).map(a=>a.node)]);
  nb.add(d.id);
  nSel.classed('hi',n=>n.id===d.id).classed('nb',n=>n.id!==d.id&&nb.has(n.id)).classed('dim',n=>!nb.has(n.id));
  eSel.classed('hi',l=>(l.source.id||l.source)===d.id||(l.target.id||l.target)===d.id)
      .classed('dim',l=>(l.source.id||l.source)!==d.id&&(l.target.id||l.target)!==d.id);
}
function focusNode(id){
  const d=NODES.find(n=>n.id===id);if(d)clickN(d);
}
function clearHi(){activeN=null;nSel.classed('hi nb dim',false);eSel.classed('hi dim',false);}

// search
document.getElementById('srch').addEventListener('input',function(){
  const q=this.value.toLowerCase();
  nSel.classed('dim',d=>q&&!d.id.includes(q)&&!d.label.includes(q));
  eSel.classed('dim',l=>q&&!(l.source.id||l.source).includes(q)&&!(l.target.id||l.target).includes(q));
});

// toggles
function togBtn(id){const e=document.getElementById(id);const on=!e.classList.contains('on');e.classList.toggle('on',on);return on;}
function togEl(){elOn=togBtn('t-el');elSel.style('display',elOn?null:'none');}
function togNl(){nlOn=togBtn('t-nl');nlSel.style('display',nlOn?null:'none');}
function togAr(){
  arOn=togBtn('t-ar');
  const i=document.documentElement.getAttribute('data-theme')==='light'?1:0;
  eSel.attr('marker-end',d=>arOn?`url(#arr-${d.label.replace(/_/g,'-')}-${i})`:null);
}
function togType(t,el){
  if(hidT.has(t))hidT.delete(t);else hidT.add(t);
  el.classList.toggle('off',hidT.has(t));
  const hide=d=>hidT.has(d.type)?'none':null;
  nSel.style('display',hide);
  const hideE=l=>{
    const s=NODES.find(n=>n.id===(l.source.id||l.source))?.type;
    const tg=NODES.find(n=>n.id===(l.target.id||l.target))?.type;
    return hidT.has(s)||hidT.has(tg)?'none':null;
  };
  eSel.style('display',hideE);
  elSel.style('display',l=>!elOn?'none':hideE(l));
}
function togTheme(){
  const html=document.documentElement;
  const dark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('thbtn').textContent=dark?'☾ Dark':'☀ Light';
  if(arOn){const i=dark?1:0;eSel.attr('marker-end',d=>`url(#arr-${d.label.replace(/_/g,'-')}-${i})`);}
}
</script>
</body>
</html>"""

out = os.path.join(GRAPH_DIR, "index.html")
with open(out, "w") as f:
    f.write(HTML)
print(f"Output: wiki/graph/index.html ({len(HTML)//1024}KB)")
