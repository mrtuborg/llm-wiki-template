## Pipeline Stage 6b: Link Enrichment

{{SHARED_CONTEXT}}

### Goal
Add meaningful `[[wikilinks]]` between isolated wiki pages and related existing pages.
This runs after Stage 6 (Ingestion) to ensure the wiki is a connected graph, not a
collection of islands.

### Input
Read `{{WIKI_ROOT}}/pipeline/stage-output/current-6-ingestion.md` — list of pages
created or updated in the last ingestion batch.

### Your Task

**Step 1: Identify target pages**
Run this to find orphaned pages (0 inbound wikilinks) and weakly connected pages (≤1):
```bash
python3 - << 'PYEOF'
import os, re, glob
wiki = "{{WIKI_ROOT}}/wiki"
wre = re.compile(r'\[\[([^\]|#]+?)(?:[|#][^\]]*)?\]\]')
skip = {"updates","compiled","graph","templates"}
slugs = {}
for f in glob.glob(wiki+"/**/*.md",recursive=True):
    slug = os.path.splitext(os.path.basename(f))[0]
    slugs[slug] = f
inbound = {s:0 for s in slugs}
for f in glob.glob(wiki+"/**/*.md",recursive=True):
    if f.replace(wiki+"/","").split("/")[0] in skip: continue
    for m in wre.finditer(open(f).read()):
        sl = os.path.splitext(os.path.basename(m.group(1).strip()))[0]
        if sl in inbound: inbound[sl] += 1
for slug,f in sorted(slugs.items()):
    rel = f.replace(wiki+"/","")
    if rel.split("/")[0] in skip or os.path.basename(rel)=="index.md": continue
    cnt = inbound[slug]
    if cnt <= 1:
        print(f"{cnt}\t{rel}")
PYEOF
```

Focus on pages with 0 inbound links first (true orphans), then 1-link pages.
Process up to **30 pages** per run.

**Step 2: For each target page**
1. Read the page content — note its `domain:`, `subdomain:`, `tags:`, and topic
2. Scan existing wiki pages in the same domain and related domains for topical overlap
3. Identify 2–5 genuinely related pages (shared concepts, complementary knowledge)

**Step 3: Add links — two directions**
- In the **target page**: add or update a `## See also` section at the bottom:
  ```markdown
  ## See also
  - [[related-page-slug]] — brief reason why related
  - [[another-page-slug]] — brief reason
  ```
- In each **related page**: add the target page to its `## See also` section too
  (bidirectional links)

**Step 4: Rules**
- Only add links that are **genuinely meaningful** — shared technical concept, prerequisite, or application
- Do NOT link just because pages are in the same subdomain (too weak)
- Do NOT link synthesis/ or decisions/ pages here (they manage their own links)
- Do NOT add links to index.md, updates/, templates/
- Maximum 5 new links per page — quality over quantity
- Use exact slug `[[page-slug]]` (filename without .md), not full path

**Step 5: Write stage output** to `{{WIKI_ROOT}}/pipeline/stage-output/current-6b-link-enrichment.md`:
```markdown
# Stage 6b Output — {{TIMESTAMP}}
## Pages enriched: N
| Page | Links added | Linked to |
|------|-------------|-----------|
| Engineer/Embedded/risc-v-computer-architecture.md | 3 | som-hardware-platforms, embedded-linux-patterns, edge-hardware-llm-convergence |
| ... | ... | ... |

## Still orphaned: M
(list pages that couldn't find good matches — need human review or more content)
```
