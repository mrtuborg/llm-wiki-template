#!/usr/bin/env bash
# discover-domains.sh — Cluster source content and suggest domains automatically.
# Usage: bash discover-domains.sh [--apply]
# Without --apply: prints suggestions only.
# With --apply: writes vault.config.yaml domains + creates domains/<D>/subdomains.md stubs.

set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WIKI_ROOT="${WIKI_ROOT:-$(cd "$SCRIPT_DIR/../.." && pwd)}"
APPLY=false
[[ "${1:-}" == "--apply" ]] && APPLY=true

python3 - "$WIKI_ROOT" "$APPLY" << 'PYEOF'
import sys, os, re, glob, json, math
from collections import defaultdict, Counter

wiki_root = sys.argv[1]
apply = sys.argv[2].lower() == "true"

sources_f = os.path.join(wiki_root, "pipeline/tracking/sources.json")
sources = json.load(open(sources_f)).get("sources", [])

# Sample up to 200 files for speed
all_files = []
for src in sources:
    if not src.get("active", True): continue
    path = os.path.expanduser(src["path"])
    files = glob.glob(path + "/**/*.md", recursive=True)
    all_files.extend(files)

import random
random.shuffle(all_files)
sample = all_files[:200]

# TF-IDF simple: bag of words per doc, find discriminating terms
def tokenize(text):
    text = re.sub(r'[#\[\]\(\)\*`>_\-|]', ' ', text.lower())
    return [w for w in re.findall(r'[a-zA-ZæøåÆØÅа-яА-Я]{4,}', text) if len(w) < 20]

# Gather word counts
doc_words = []
all_words = Counter()
for f in sample:
    try:
        words = Counter(tokenize(open(f, errors='replace').read()[:3000]))
        doc_words.append((f, words))
        all_words.update(words.keys())
    except: pass

N = len(doc_words)
idf = {w: math.log(N / (1 + c)) for w, c in all_words.items()}

# Top TF-IDF terms per doc
def top_terms(words, n=8):
    scores = {w: cnt * idf.get(w, 0) for w, cnt in words.items()}
    return sorted(scores, key=lambda x: -scores[x])[:n]

# Cluster by dominant topic words using simple keyword matching
DOMAIN_KEYWORDS = {
    "Engineering": {"firmware","embedded","yocto","kernel","driver","hardware","circuit","gpio","spi","i2c","uart","cmake","bitbake","linux","rust","python","algorithm","sensor","protocol","docker","ci","pipeline","test","deploy","debug","flash","bootloader","nrf","imx","stm32","arm","fpga","pcb","schematic","resistor","capacitor","antenna","rf","bluetooth","wifi","thread","zigbee"},
    "Product":     {"product","roadmap","feature","sprint","backlog","user","story","requirement","stakeholder","customer","market","competitor","pricing","mvp","release","milestone","okr","kpi","feedback","interview","persona","ux","design","prototype"},
    "Operations":  {"server","deploy","cloud","aws","azure","kubernetes","docker","monitoring","logging","alert","incident","oncall","sla","uptime","database","backup","security","certificate","vpn","network","firewall","nginx","terraform","ansible","devops"},
    "Management":  {"team","meeting","hiring","onboarding","review","performance","goal","okr","planning","budget","vendor","contract","legal","compliance","process","workflow","documentation","knowledge","training","culture","leadership"},
    "Meta":        {"wiki","note","index","overview","summary","template","archive","reference","glossary","changelog","decision","adr","log","tracking","pipeline"},
}

domain_counts = defaultdict(int)
file_domains = []
for f, words in doc_words:
    scores = {}
    for domain, kws in DOMAIN_KEYWORDS.items():
        scores[domain] = sum(words.get(w, 0) for w in kws)
    best = max(scores, key=lambda x: scores[x]) if any(scores.values()) else "Meta"
    file_domains.append((f, best, top_terms(words)))
    domain_counts[best] += 1

print("\n📊 Suggested domains based on content analysis:")
print(f"   (sampled {N} of {len(all_files)} files)\n")
for domain, count in sorted(domain_counts.items(), key=lambda x: -x[1]):
    pct = count * 100 // N
    bar = "█" * (pct // 5)
    print(f"  {domain:15s} {bar:20s} {count:3d} files ({pct}%)")

# Show sample files per domain
print("\n📁 Sample files per domain:")
shown = defaultdict(int)
for f, domain, terms in file_domains:
    if shown[domain] >= 3: continue
    shown[domain] += 1
    name = os.path.basename(f)[:50]
    print(f"  [{domain}] {name}")
    print(f"           terms: {', '.join(terms[:5])}")

if apply:
    # Write vault.config.yaml domains section
    config_f = os.path.join(wiki_root, "vault.config.yaml")
    config = open(config_f).read()
    new_domains = list(domain_counts.keys())
    if "Meta" not in new_domains: new_domains.append("Meta")

    # Replace domain list
    domains_yaml = "domains:\n" + "".join(f"    - {d}\n" for d in new_domains)
    config = re.sub(r'domains:.*?(?=\n\S)', domains_yaml, config, flags=re.DOTALL)
    open(config_f, "w").write(config)
    print(f"\n✅ vault.config.yaml updated with {len(new_domains)} domains")

    # Create domains/<D>/subdomains.md stubs
    for domain in new_domains:
        d = os.path.join(wiki_root, "domains", domain)
        os.makedirs(d, exist_ok=True)
        stub = os.path.join(d, "subdomains.md")
        if not os.path.exists(stub):
            sample_terms = [t for f, dom, terms in file_domains if dom == domain for t in terms]
            top = list(dict.fromkeys(sample_terms))[:10]
            open(stub, "w").write(f"# {domain} — Subdomain Dictionary\n\n"
                f"## What belongs here\n- Content related to: {', '.join(top)}\n\n"
                f"## Subdomains\n- General\n- (add more as content accumulates)\n\n"
                f"## What does NOT belong here\n- See other domain dictionaries\n")
            print(f"  ✓ domains/{domain}/subdomains.md created")
        else:
            print(f"  skip domains/{domain}/subdomains.md (exists)")
    print("\nRun './llm-wiki add' to start ingestion with discovered domains.")
else:
    print("\nRun with --apply to write these domains to vault.config.yaml")
PYEOF
