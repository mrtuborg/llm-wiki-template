## Pipeline Mode: MAINTAIN — Health Check

> **File rule:** Stage output files (`pipeline/stage-output/current-*.md`) are deleted before each stage run — always **Create** them fresh, never Edit them.

> **Shell rule:** Do NOT write multi-line shell scripts to update files. Use individual Read / Edit / Create tool calls for each file. Only run simple one-liner bash commands. Never use `set -euo pipefail`, heredocs, or `${VAR}` variable assignments in shell commands.


{{SHARED_CONTEXT}}

### Your Task: Wiki Health and Maintenance

1. **Run dead link validator**:
   ```bash
   cd {{WIKI_ROOT}} && bash engine/tools/validate/check-dead-links.sh
   ```

2. **Check index consistency**:
   - Count actual .md files per domain in `wiki/`
   - Compare to counts in `wiki/index.md`
   - Fix any discrepancies

3. **Find orphaned pages**:
   - Pages in `wiki/` not referenced in `wiki/index.md`
   - Add them to index if missing

4. **Check sources-registry.md** (use Python — grep with backticks is blocked):
   ```bash
   python3 - << 'PYEOF'
   import re
   data = open("pipeline/sources-registry.md", encoding="utf-8").read()
   rows = re.findall(r'^\|([^|]+)\|([^|]+)\|([^|]+)\|', data, re.MULTILINE)
   stalled = []
   for source, path, status in rows:
       s = status.strip().strip('`')
       if s in ("ingested", "compiled"):
           stalled.append((s, source.strip(), path.strip()))
   for s, src, p in stalled:
       print(f"{s}: {src} — {p}")
   print(f"Total stalled: {len(stalled)}")
   PYEOF
   ```
   - `ingested` but not `compiled` → re-trigger stage 7
   - `compiled` but not `done` → re-trigger stage 9

5. **Synthesis check**:
   - List domains with >10 pages but no synthesis page
   - Report as candidates for Stage 8

6. **Regenerate compiled graph** (so the Obsidian plugin sees new edges):
   ```bash
   cd {{WIKI_ROOT}} && python3 engine/tools/compile/update-graph.py
   ```

7. **Reclassify "Others" nodes** (types outside the epistemic model):

   The epistemic model recognises exactly these `type:` values:
   `axiom`, `rule`, `concept`, `entity`, `process`, `pattern`, `method`,
   `decision`, `overview`, `synthesis`

   **Step 7a — Detect** non-model types:
   ```bash
   python3 - << 'PYEOF'
   import os, re
   VALID = {"axiom","rule","concept","entity","process","pattern","method","decision","overview","synthesis"}
   results = []
   for root, _, files in os.walk("wiki"):
       for f in files:
           if not f.endswith(".md"): continue
           path = os.path.join(root, f)
           m = re.search(r"^type:\s*(\S+)", open(path).read(), re.MULTILINE)
           if m:
               t = m.group(1).strip().strip('"').strip("'").lower()
               if t not in VALID:
                   results.append((t, path))
   for t, p in sorted(results):
       print(f"{t:20s} {p}")
   print(f"\nTotal: {len(results)} non-model pages")
   PYEOF
   ```

   **Step 7b — Reclassify each** by reading its content. Default mappings:
   - `reference`, `source`, `bibliography` → `concept`
   - `guide`, `tutorial`, `howto` → `method`
   - `note`, `raw`, `draft` → `concept`
   - `index`, `list`, `registry`, `map` → `overview`
   - `log`, `journal`, `changelog` → `decision`
   - `unknown` or anything else → read content, pick nearest type from model

   **Step 7c — Apply** — update frontmatter in-place:
   ```bash
   # Example (repeat for each file):
   python3 - wiki/domain/page.md concept << 'PYEOF'
   import sys, re
   path, new_type = sys.argv[1], sys.argv[2]
   content = open(path).read()
   updated = re.sub(r"^type:.*$", f"type: {new_type}", content, flags=re.MULTILINE)
   open(path, "w").write(updated)
   print(f"Updated: {path} → type: {new_type}")
   PYEOF
   ```
   If a page mixes multiple epistemic concerns, split into 2–3 focused pages,
   each with a correct type, then delete the original.

   **Step 7d — Log changes** to `wiki/updates/{{TIMESTAMP}}-reclassify.md`:
   ```markdown
   # Reclassify Others — {{TIMESTAMP}}
   ## Remapped
   - wiki/domain/page.md: reference → concept

   ## Split
   - wiki/domain/big-page.md → [wiki/domain/part-a.md (concept), wiki/domain/part-b.md (process)]

   ## Could not classify
   - wiki/domain/ambiguous.md: left as concept (content unclear)
   ```
   If no Others pages found, skip step 7 and note "No Others pages found" in stage output.

8. **Write stage output** to `pipeline/stage-output/current-maintain.md`:
   ```markdown
   # Maintain: Health Check — {{TIMESTAMP}}
   ## Dead links: N errors / OK
   ## Index: consistent / N discrepancies fixed
   ## Orphaned pages: N added to index
   ## Stalled pipeline entries: N
   ## Others reclassified: N remapped / N split / N ambiguous
   ## Synthesis candidates: [domain list]
   ## Overall health: GOOD / NEEDS_ATTENTION
   ```

9. **Update tracking** `progress.json`:
   - Update `last_health_check` timestamp
   - Update `stats` counts
