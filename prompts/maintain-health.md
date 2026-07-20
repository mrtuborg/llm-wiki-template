## Pipeline Mode: MAINTAIN — Health Check

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

4. **Check sources-registry.md**:
   - Find sources with status `ingested` but not `compiled` → re-trigger stage 7
   - Find sources with status `compiled` but not `done` → re-trigger stage 9
   - Report stalled pipeline entries

5. **Synthesis check**:
   - List domains with >10 pages but no synthesis page
   - Report as candidates for Stage 8

6. **Regenerate compiled graph** (so the Obsidian plugin sees new edges):
   ```bash
   cd {{WIKI_ROOT}} && python3 engine/tools/compile/update-graph.py
   ```

7. **Write stage output** to `pipeline/stage-output/current-7-compilation.md`:
   ```markdown
   # Maintain: Health Check — {{TIMESTAMP}}
   ## Dead links: N errors / OK
   ## Index: consistent / N discrepancies fixed
   ## Orphaned pages: N added to index
   ## Stalled pipeline entries: N
   ## Synthesis candidates: [domain list]
   ## Overall health: GOOD / NEEDS_ATTENTION
   ```

7. **Update tracking** `progress.json`:
   - Update `last_health_check` timestamp
   - Update `stats` counts
