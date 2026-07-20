#!/usr/bin/env bash
# refine-domains.sh — Re-cluster wiki pages using embeddings (or TF-IDF fallback)
# and suggest domain restructuring.
#
# Usage:
#   WIKI_ROOT=/path/to/vault bash refine-domains.sh           # preview
#   WIKI_ROOT=/path/to/vault bash refine-domains.sh --apply   # move files + update config

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WIKI_ROOT="${WIKI_ROOT:-$(cd "$SCRIPT_DIR/../.." && pwd)}"
APPLY=false
[[ "${1:-}" == "--apply" ]] && APPLY=true

echo "▶ Refining domains via semantic clustering..."
echo "  Wiki: $WIKI_ROOT"
echo ""

python3 - "$WIKI_ROOT" "$APPLY" << 'PYEOF'
import sys, os, re, glob, json, math
from collections import defaultdict, Counter

wiki_root = sys.argv[1]
apply = sys.argv[2] == "True"
wiki_dir = os.path.join(wiki_root, "wiki")
SKIP = {"updates", "compiled", "graph", "templates", "decisions", "synthesis"}

# --- Load wiki pages ---
pages = {}
for f in glob.glob(wiki_dir + "/**/*.md", recursive=True):
    rel = f.replace(wiki_dir + "/", "")
    domain = rel.split("/")[0]
    if domain in SKIP: continue
    if os.path.basename(f) == "index.md": continue
    content = open(f, encoding="utf-8", errors="replace").read()
    slug = os.path.splitext(os.path.basename(f))[0]
    pages[slug] = {"file": f, "domain": domain, "content": content[:3000]}

print(f"  Loaded {len(pages)} wiki pages")

# --- Try embeddings first ---
vectors = None
embed_db = os.path.join(wiki_root, "pipeline/index/embeddings.db")
try:
    import sqlite3
    conn = sqlite3.connect(embed_db)
    rows = conn.execute("SELECT slug, embedding FROM embeddings").fetchall()
    if rows:
        import struct
        vectors = {}
        for slug, blob in rows:
            n = len(blob) // 4
            vectors[slug] = list(struct.unpack(f"{n}f", blob))
        print(f"  Using embeddings: {len(vectors)} vectors")
    conn.close()
except Exception as e:
    print(f"  Embeddings unavailable ({e}) — using TF-IDF")

# --- TF-IDF fallback ---
if not vectors:
    def tokenize(text):
        text = re.sub(r'[#\[\]\(\)\*`>_\-|]', ' ', text.lower())
        return [w for w in re.findall(r'[a-zA-ZæøåÆØÅа-яА-Я]{4,}', text) if len(w) < 20]

    docs = {slug: Counter(tokenize(p["content"])) for slug, p in pages.items()}
    N = len(docs)
    df = Counter(w for words in docs.values() for w in words)
    idf = {w: math.log(N / (1 + c)) for w, c in df.items()}

    # Top-50 vocab
    top_vocab = [w for w, _ in sorted(idf.items(), key=lambda x: x[1])
                 if df[w] > 1 and df[w] < N * 0.8][:200]

    vectors = {}
    for slug, words in docs.items():
        total = sum(words.values()) or 1
        v = [words.get(w, 0) * idf.get(w, 0) / total for w in top_vocab]
        norm = math.sqrt(sum(x*x for x in v)) or 1
        vectors[slug] = [x/norm for x in v]

    print(f"  TF-IDF vectors: {len(vectors)} pages, {len(top_vocab)} features")

# --- K-means clustering ---
slugs = [s for s in pages if s in vectors]
if not slugs:
    print("  No vectors — nothing to cluster"); sys.exit(0)

vecs = [vectors[s] for s in slugs]
dim = len(vecs[0])

# Elbow: try k=3..8, pick best
def kmeans(vecs, k, iters=20):
    import random
    cents = [list(vecs[i]) for i in random.sample(range(len(vecs)), k)]
    labels = [0] * len(vecs)
    for _ in range(iters):
        # Assign
        for i, v in enumerate(vecs):
            best = min(range(k), key=lambda c: sum((v[d]-cents[c][d])**2 for d in range(dim)))
            labels[i] = best
        # Update centroids
        for c in range(k):
            members = [vecs[i] for i, l in enumerate(labels) if l == c]
            if members:
                cents[c] = [sum(m[d] for m in members)/len(members) for d in range(dim)]
    inertia = sum(sum((vecs[i][d]-cents[labels[i]][d])**2 for d in range(dim)) for i in range(len(vecs)))
    return labels, cents, inertia

best_k, best_labels, best_cents = 4, None, None
best_score = float("inf")
for k in range(3, min(9, len(slugs))):
    labels, cents, inertia = kmeans(vecs, k)
    score = inertia / k
    if score < best_score:
        best_score, best_k, best_labels, best_cents = score, k, labels, cents

print(f"  Optimal clusters: {best_k}")

# --- Name clusters by top TF-IDF terms ---
cluster_docs = defaultdict(list)
for slug, label in zip(slugs, best_labels):
    cluster_docs[label].append(slug)

def top_terms_cluster(slugs_in_cluster, n=6):
    word_freq = Counter()
    for slug in slugs_in_cluster:
        if slug in vectors and isinstance(vectors.get(slug), list):
            content = pages[slug]["content"]
            def tokenize(text):
                text = re.sub(r'[#\[\]\(\)\*`>_\-|]', ' ', text.lower())
                return [w for w in re.findall(r'[a-zA-ZæøåÆØÅа-яА-Я]{4,}', text) if len(w) < 20]
            word_freq.update(tokenize(content))
    return [w for w, _ in word_freq.most_common(30)
            if len(w) > 4 and w not in {"that","this","with","from","have","been","they","their","which","will"}][:n]

# Compare to current domains
current_domains = sorted(set(pages[s]["domain"] for s in slugs))
print(f"\n  Current domains: {current_domains}")
print(f"\n📊 Suggested clusters (vs current):\n")

cluster_suggestions = {}
for c in range(best_k):
    members = cluster_docs[c]
    if not members: continue
    terms = top_terms_cluster(members)
    current = Counter(pages[s]["domain"] for s in members)
    dominant = current.most_common(1)[0][0]
    print(f"  Cluster {c+1} ({len(members)} pages) — terms: {', '.join(terms)}")
    print(f"    Current domains: {dict(current)}")
    print(f"    → Suggested name: {dominant} (dominant), terms: {terms[:3]}")
    cluster_suggestions[c] = {"members": members, "dominant": dominant, "terms": terms}
    print()

# --- Identify potential changes ---
print("📋 Suggested changes:")
changes = []
for c, info in cluster_suggestions.items():
    for slug in info["members"]:
        current_dom = pages[slug]["domain"]
        suggested = info["dominant"]
        if current_dom != suggested:
            changes.append((slug, current_dom, suggested))

if not changes:
    print("  ✅ Current domain structure matches semantic clusters — no moves needed")
else:
    print(f"  {len(changes)} pages could be moved:")
    for slug, src, dst in changes[:15]:
        print(f"    [{src}] → [{dst}] : {slug}")
    if len(changes) > 15:
        print(f"    ... and {len(changes)-15} more")

if apply and changes:
    print("\n▶ Applying moves...")
    for slug, src, dst in changes:
        src_f = pages[slug]["file"]
        # Preserve subdomain subfolder if exists
        rel = src_f.replace(wiki_dir + "/", "")
        parts = rel.split("/")
        if len(parts) > 2:
            new_rel = "/".join([dst] + parts[1:])
        else:
            new_rel = f"{dst}/{parts[-1]}"
        dst_f = os.path.join(wiki_dir, new_rel)
        os.makedirs(os.path.dirname(dst_f), exist_ok=True)
        os.rename(src_f, dst_f)
        print(f"  moved: {rel} → {new_rel}")
    print(f"✅ {len(changes)} pages moved")
elif not apply and changes:
    print("\nRun with --apply to move pages to suggested domains")
PYEOF
