#!/usr/bin/env python3
"""render-graph.py — Interactive D3.js semantic graph renderer
Usage:  python3 tools/compile/render-graph.py
Output: wiki/graph/index.html
"""
import os, re, glob, json
from datetime import datetime

WIKI_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "../.."))
GRAPH_DIR = os.path.join(WIKI_ROOT, "wiki/graph")

graph_files = sorted(glob.glob(GRAPH_DIR + "/*-graph.md"))
if not graph_files:
    print("No graph files found in wiki/graph/"); exit(1)

latest = graph_files[-1]
print(f"Parsing: {os.path.basename(latest)}")
text = open(latest).read()

TYPE_COLORS = {
    "Axiom":"#E67E22","Entity":"#3B82F6","Process":"#10B981",
    "Pattern":"#06B6D4","Method":"#0891B2","Decision":"#EF4444",
    "Rule":"#F59E0B","Concept":"#8B5CF6","Overview":"#7C3AED","Synthesis":"#4C1D95",
}

slug_types = {}
for f in glob.glob(WIKI_ROOT + "/wiki/**/*.md", recursive=True):
    slug = os.path.splitext(os.path.basename(f))[0]
    m = re.search(r'^type:\s*(\w+)', open(f).read(), re.MULTILINE)
    if m: slug_types[slug] = m.group(1)

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
                  "full_label":slug,"type":ntype,"color":TYPE_COLORS.get(ntype,"#6B7280")})

ts          = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
src_file    = os.path.basename(latest)
nodes_js    = json.dumps(nodes)
edges_js    = json.dumps(edges)
colors_js   = json.dumps(TYPE_COLORS)
# Pre-escape JS object literals that would confuse the f-string parser
radius_js   = json.dumps({"Axiom":7,"Entity":11,"Process":9,"Pattern":8,"Synthesis":13})
dy_js       = json.dumps({"Axiom":17,"Entity":21,"Process":19,"Pattern":18,"Synthesis":23})
n_nodes     = len(nodes)
n_edges     = len(edges)

print(f"  Nodes: {n_nodes}, Edges: {n_edges}")

HTML = """\
<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="UTF-8">
<title>Semantic Graph · LLM-Wiki</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
:root[data-theme="dark"] {
  --bg:#0D1117; --surface:#161B22; --border:#30363D;
  --text:#E6EDF3; --muted:#8B949E; --bg-stroke:3px;
  --el-bg:rgba(22,27,34,0.9); --el-fg:#636C76;
  --shadow:0 4px 24px rgba(0,0,0,.5);
}
:root[data-theme="light"] {
  --bg:#F6F8FA; --surface:#FFFFFF; --border:#D0D7DE;
  --text:#1F2328; --muted:#636C76; --bg-stroke:3px;
  --el-bg:rgba(255,255,255,0.9); --el-fg:#636C76;
  --shadow:0 4px 24px rgba(0,0,0,.1);
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{background:var(--bg);color:var(--text);font-family:'Inter',system-ui,sans-serif;
     font-size:13px;height:100vh;overflow:hidden;transition:background .2s,color .2s}
/* ── toolbar ── */
#tb{display:flex;align-items:center;height:48px;gap:14px;padding:0 16px;
    background:var(--surface);border-bottom:1px solid var(--border);box-shadow:var(--shadow)}
#tb h1{font-size:13px;font-weight:600;white-space:nowrap}
.meta{font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;white-space:nowrap}
.sep{width:1px;height:24px;background:var(--border);flex-shrink:0}
.tg{display:flex;align-items:center;gap:10px}
#srch{background:var(--bg);border:1px solid var(--border);color:var(--text);
      padding:5px 10px;border-radius:6px;font-size:12px;font-family:inherit;
      width:170px;outline:none;transition:border-color .15s}
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
#thbtn{background:none;border:1px solid var(--border);color:var(--muted);
       border-radius:6px;padding:4px 9px;cursor:pointer;font-size:12px;
       font-family:inherit;transition:all .15s;white-space:nowrap}
#thbtn:hover{border-color:var(--muted);color:var(--text)}
#leg{display:flex;gap:5px;flex-wrap:wrap;align-items:center}
.li{display:flex;align-items:center;gap:4px;font-size:11px;color:var(--muted);
    cursor:pointer;padding:2px 7px;border-radius:12px;border:1px solid transparent;transition:all .15s}
.li:hover{border-color:var(--border);color:var(--text)}
.li.off{opacity:.3}
.ld{width:8px;height:8px;border-radius:50%;flex-shrink:0}
/* ── graph ── */
#graph{width:100vw;height:calc(100vh - 48px)}
svg{width:100%;height:100%}
.node circle{stroke-width:1.5px;cursor:pointer;transition:r .15s,stroke-width .15s;
             filter:drop-shadow(0 1px 3px rgba(0,0,0,.3))}
.node:hover circle{stroke-width:2.5px}
.node.dim{opacity:.1}
.node.hi circle{stroke-width:3px}
.nlabel{font-size:9px;font-family:'JetBrains Mono',monospace;fill:var(--muted);
        pointer-events:none;paint-order:stroke;stroke:var(--bg);stroke-width:var(--bg-stroke)}
.node.hi .nlabel,.node.nb .nlabel{fill:var(--text);font-size:10px;font-weight:500}
.edge{stroke-opacity:.3;transition:stroke-opacity .15s}
.edge.hi{stroke-opacity:.9}
.edge.dim{stroke-opacity:.04}
.elg{pointer-events:none}
.elb{fill:var(--el-bg)}
.elt{font-size:8px;font-family:'JetBrains Mono',monospace;fill:var(--el-fg);
     text-anchor:middle;dominant-baseline:middle}
/* ── tooltip ── */
#tip{position:fixed;background:var(--surface);border:1px solid var(--border);
     border-radius:8px;padding:12px 14px;pointer-events:none;display:none;
     max-width:290px;z-index:200;box-shadow:var(--shadow)}
.ts{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--text);
    font-weight:500;margin-bottom:2px}
.tt{font-size:11px;font-weight:500;margin-bottom:8px}
.th{font-size:10px;color:var(--muted);margin-bottom:3px;font-weight:500;
    text-transform:uppercase;letter-spacing:.05em}
.te{font-size:11px;color:var(--muted);line-height:1.75;font-family:'JetBrains Mono',monospace}
.te b{color:var(--text);font-weight:500}
/* ── stats ── */
#stats{position:fixed;bottom:12px;left:16px;font-size:10px;color:var(--muted);
       font-family:'JetBrains Mono',monospace;background:var(--surface);
       border:1px solid var(--border);padding:4px 10px;border-radius:6px}
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
  <button id="thbtn" onclick="togTheme()">☀ Light</button>
</div>
<div id="graph"><svg id="svg"></svg></div>
<div id="tip"></div>
<div id="stats">nodes: """ + str(n_nodes) + """ · edges: """ + str(n_edges) + """ · """ + ts + """</div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
const NODES=""" + nodes_js + """;
const EDGES=""" + edges_js + """;
const TC=""" + colors_js + """;
const RADIUS=""" + radius_js + """;
const DY=""" + dy_js + """;

let elOn=true, nlOn=true, arOn=true, hidT=new Set(), activeN=null;

// adjacency
const adj={};
NODES.forEach(n=>adj[n.id]={out:[],inn:[]});
EDGES.forEach(e=>{
  (adj[e.source]=adj[e.source]||{out:[],inn:[]});
  (adj[e.target]=adj[e.target]||{out:[],inn:[]});
  adj[e.source].out.push({node:e.target,label:e.label});
  adj[e.target].inn.push({node:e.source,label:e.label});
});

// legend
const types=[...new Set(NODES.map(n=>n.type))].sort();
const legEl=document.getElementById('leg');
types.forEach(t=>{
  const el=document.createElement('div');
  el.className='li'; el.id='li-'+t;
  el.innerHTML=`<div class="ld" style="background:${TC[t]||'#6B7280'}"></div>${t}`;
  el.onclick=()=>togType(t,el);
  legEl.appendChild(el);
});

// svg
const svg=d3.select('#svg');
const root=svg.append('g');
svg.call(d3.zoom().scaleExtent([0.05,6]).on('zoom',e=>root.attr('transform',e.transform)));
svg.on('click',clearHi);

// defs: arrows (dark=0, light=1)
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

// sim
const W=window.innerWidth, H=window.innerHeight-48;
const sim=d3.forceSimulation(NODES)
  .force('link',d3.forceLink(EDGES).id(d=>d.id).distance(110).strength(0.35))
  .force('charge',d3.forceManyBody().strength(-380))
  .force('center',d3.forceCenter(W/2,H/2))
  .force('collision',d3.forceCollide(24));

// edges
const edgeG=root.append('g');
const eSel=edgeG.selectAll('line').data(EDGES).join('line')
  .attr('class','edge')
  .attr('stroke',d=>TC[NODES.find(n=>n.id===d.source?.id||n.id===d.source)?.type]||'#6B7280')
  .attr('stroke-width',1.2)
  .attr('marker-end',d=>`url(#arr-${d.label.replace(/_/g,'-')}-0)`);

// edge labels
const elG=root.append('g');
const elSel=elG.selectAll('g').data(EDGES).join('g').attr('class','elg');
elSel.append('rect').attr('class','elb').attr('height',13).attr('y',-6.5).attr('rx',3);
elSel.append('text').attr('class','elt').text(d=>d.label);

// nodes
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
  .attr('dy',d=>DY[d.type]||17)
  .attr('text-anchor','middle')
  .text(d=>d.label);

// tick
sim.on('tick',()=>{
  eSel.attr('x1',d=>d.source.x).attr('y1',d=>d.source.y)
      .attr('x2',d=>d.target.x).attr('y2',d=>d.target.y);

  elSel.attr('transform',d=>{
    const mx=(d.source.x+d.target.x)/2, my=(d.source.y+d.target.y)/2;
    let a=Math.atan2(d.target.y-d.source.y,d.target.x-d.source.x)*180/Math.PI;
    if(a>90||a<-90) a+=180;
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
function rows(arr,dir){
  return arr.map(a=>`<div class="te">${dir} <b>${a.label}</b> ${a.node}</div>`).join('');
}
function showTip(e,d){
  const a=adj[d.id]||{out:[],inn:[]};
  tip.innerHTML=`
    <div class="ts">${d.full_label}</div>
    <div class="tt" style="color:${d.color}">${d.type}</div>
    ${a.out.length?`<div class="th">outbound</div>${rows(a.out,'→')}`:''}
    ${a.inn.length?`<div class="th" style="margin-top:6px">inbound</div>${rows(a.inn,'←')}`:''}
    ${!a.out.length&&!a.inn.length?'<div class="te" style="opacity:.4">no edges</div>':''}
  `;
  tip.style.display='block'; moveTip(e);
}
function moveTip(e){
  const x=e.clientX+16,y=e.clientY-10;
  tip.style.left=(x+tip.offsetWidth>window.innerWidth?x-tip.offsetWidth-32:x)+'px';
  tip.style.top=Math.max(8,y)+'px';
}
function hideTip(){tip.style.display='none';}

// highlight on click
function clickN(d){
  if(activeN===d.id){clearHi();return;}
  activeN=d.id;
  const nb=new Set((adj[d.id]?.out||[]).map(a=>a.node)
    .concat((adj[d.id]?.inn||[]).map(a=>a.node)));
  nb.add(d.id);
  nSel.classed('hi',n=>n.id===d.id).classed('nb',n=>n.id!==d.id&&nb.has(n.id)).classed('dim',n=>!nb.has(n.id));
  eSel.classed('hi',l=>(l.source.id||l.source)===d.id||(l.target.id||l.target)===d.id)
      .classed('dim',l=>(l.source.id||l.source)!==d.id&&(l.target.id||l.target)!==d.id);
}
function clearHi(){
  activeN=null;
  nSel.classed('hi nb dim',false);
  eSel.classed('hi dim',false);
}

// search
document.getElementById('srch').addEventListener('input',function(){
  const q=this.value.toLowerCase();
  nSel.classed('dim',d=>q&&!d.id.includes(q)&&!d.label.includes(q));
  eSel.classed('dim',l=>{
    if(!q)return false;
    return !(l.source.id||l.source).includes(q)&&!(l.target.id||l.target).includes(q);
  });
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
  nSel.style('display',d=>hidT.has(d.type)?'none':null);
  eSel.style('display',l=>{
    const s=NODES.find(n=>n.id===(l.source.id||l.source))?.type;
    const tg=NODES.find(n=>n.id===(l.target.id||l.target))?.type;
    return hidT.has(s)||hidT.has(tg)?'none':null;
  });
  elSel.style('display',l=>{
    const s=NODES.find(n=>n.id===(l.source.id||l.source))?.type;
    const tg=NODES.find(n=>n.id===(l.target.id||l.target))?.type;
    return !elOn||hidT.has(s)||hidT.has(tg)?'none':null;
  });
}
function togTheme(){
  const html=document.documentElement;
  const dark=html.getAttribute('data-theme')==='dark';
  html.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('thbtn').textContent=dark?'☾ Dark':'☀ Light';
  if(arOn){
    const i=dark?1:0;
    eSel.attr('marker-end',d=>`url(#arr-${d.label.replace(/_/g,'-')}-${i})`);
  }
}
</script>
</body>
</html>"""

out = os.path.join(GRAPH_DIR, "index.html")
with open(out, "w") as f:
    f.write(HTML)
print(f"Output: wiki/graph/index.html ({len(HTML)//1024}KB)")
