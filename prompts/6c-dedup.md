## Pipeline Stage 6c: Deduplication

> **Edge type rule:** Use ONLY: `relates-to` · `defines` · `constrains` · `participates-in` · `instance-of` · `depends-on` · `follows` · `summarizes` · `part-of` · `specializes` — never invent new types.

> **Shell rule:** Do NOT write multi-line shell scripts or heredocs. Use individual Read / Edit / Create tool calls. Only run simple one-liner bash commands. Never use `set -euo pipefail` or `${VAR}` assignments.

> **Tracking rule:** Do NOT update `pipeline/tracking/progress.json` — status is managed automatically by the pipeline engine.


> **File rule:** Stage output files (`pipeline/stage-output/current-*.md`) already exist — always **overwrite** them, never try to create.


{{SHARED_CONTEXT}}

### Goal
Find and merge near-duplicate wiki pages. Duplicates arise when the same topic
is ingested from multiple source files with slightly different slugs.

### Step 1: Find candidates

Run this script to find pages with high slug/tag similarity:
```bash
python3 - << 'PYEOF'
import os, re, glob, difflib
from collections import defaultdict

wiki = "{{WIKI_ROOT}}/wiki"
SKIP = {"updates","compiled","graph","templates","decisions","synthesis"}

pages = {}
for f in glob.glob(wiki+"/**/*.md", recursive=True):
    rel = f.replace(wiki+"/","")
    if rel.split("/")[0] in SKIP: continue
    if os.path.basename(f) == "index.md": continue
    slug = os.path.splitext(os.path.basename(f))[0]
    content = open(f, encoding="utf-8", errors="replace").read()
    tags = re.findall(r'^tags:.*\[([^\]]+)\]', content, re.MULTILINE)
    tag_set = set(t.strip().strip('"').strip("'") for t in 
                  (tags[0].split(",") if tags else []))
    pages[slug] = {"file": f, "rel": rel, "tags": tag_set}

slugs = list(pages.keys())
pairs = []
for i, a in enumerate(slugs):
    for b in slugs[i+1:]:
        ratio = difflib.SequenceMatcher(None, a, b).ratio()
        tag_overlap = len(pages[a]["tags"] & pages[b]["tags"])
        score = ratio * 0.6 + min(tag_overlap / 3, 1.0) * 0.4
        if score > 0.55:
            pairs.append((score, a, b, pages[a]["rel"], pages[b]["rel"]))

pairs.sort(reverse=True)
for score, a, b, ra, rb in pairs[:20]:
    print(f"{score:.2f}  {ra}  <-->  {rb}")
PYEOF
```

### Step 2: For each high-confidence pair (score > 0.75)

1. **Read both pages** — compare content, sources, tags
2. **Decide**: is this the same knowledge or genuinely different aspects?
   - **Same knowledge** → merge: append unique content from B into A, delete B
   - **Different aspects** → add `## See also` link between them, keep both
3. **Merge protocol** when merging A ← B:
   - Keep A as canonical (larger file or earlier created)
   - Append unique sections from B into A
   - Merge `sources:` and `tags:` lists
   - Update `updated:` timestamp
   - Delete B
   - If anything links `[[B-slug]]`, update to `[[A-slug]]`

### Step 3: Write output to `{{WIKI_ROOT}}/pipeline/stage-output/current-6c-dedup.md`
```markdown
# Stage 6c Output — {{TIMESTAMP}}
## Merged pairs: N
| Canonical | Removed | Reason |
|-----------|---------|--------|
| recipes-and-food | food-recipes | Same source topic, slug variants |

## Flagged for review: M
| Page A | Page B | Score | Recommendation |
|--------|--------|-------|----------------|
| ... | ... | 0.65 | Review manually |

## No action needed: K pairs below threshold
```

**Rule:** When uncertain, flag for review — never delete without reading content first.
