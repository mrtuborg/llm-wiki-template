## Pipeline Stage 7: Compilation

{{SHARED_CONTEXT}}

### Input
Read `{{WIKI_ROOT}}/pipeline/stage-output/current-6-ingestion.md`  
This lists all wiki pages created/updated in Stage 6.

### Your Task: Validate, Compile, and Update Index

1. **Run dead link validator**:
   ```bash
   cd {{WIKI_ROOT}} && bash engine/tools/validate/check-dead-links.sh
   ```
   Record result in stage output.

2. **Update `wiki/index.md`**:
   - Recount total pages per domain
   - Add entries for any NEW pages/domains created in Stage 6
   - Update header statistics (total pages, domains, last updated)
   - Keep existing entries intact

3. **Update sources registry** `pipeline/sources-registry.md`:
   - For each source processed this batch: set status to `compiled`
   - Update "Last compilation" timestamp in the header

4. **Update tracking** in `progress.json`:
   - Set `status: "compiled"` for sources that were `ingested`
   - Update `stats.compiled` count
   - Update `last_compilation` timestamp

5. **Write stage output** to `pipeline/stage-output/current-7-compilation.md`:
   ```markdown
   # Stage 7 Output — {{TIMESTAMP}}
   ## Dead link check
   - Result: OK / N errors
   - Pages scanned: N
   - Errors: [list if any]
   
   ## Index updated
   - Total pages: N (was: N)
   - Domains: N (was: N)
   - New domains: [list]
   - New pages: N
   
   ## Registry updated
   - Sources set to `compiled`: N
   
   ## Synthesis trigger
   - New pages this batch: N
   - Synthesis threshold (min 5): YES/NO
   ```

### Rules
- Fix any dead links found (or document them as known-broken)
- Do not remove existing index entries
- If dead link check script fails to run, note it and continue
