## Pipeline Stage 6: Ingestion

{{SHARED_CONTEXT}}

### Input
Read `~/vaults/Vladimir-llm-wiki/pipeline/stage-output/current-5-reconstruction.md`  
This lists all reconstructed files ready for ingestion.

### Your Task: Write Typed Wiki Pages

For each reconstructed file from Stage 5:

1. **Read the reconstructed file** from `pipeline/reconstructed/`
2. **For each knowledge fragment**, write to the appropriate wiki domain page:
   - If a matching page **exists** → append a new section (do not duplicate existing content)
   - If no matching page **exists** → create a new page

3. **Page format** (follow existing wiki page style):
   ```markdown
   ---
   type: reference|pattern|guide|overview|notes
   domain: DomainName
   tags: [tag1, tag2]
   sources: [Vladimir/SubFolder/filename.md]
   source_files:
     - path: Vladimir/SubFolder/filename.md
       processed: {{TIMESTAMP}}
   updated: {{TIMESTAMP}}
   ---
   
   # Page Title
   
   ## Section from this batch
   [content]
   ```

4. **Create/update** `~/vaults/Vladimir-llm-wiki/wiki/updates/{{TIMESTAMP}}.md`:
   ```markdown
   # Ingestion Update — {{TIMESTAMP}}
   ## Source batch
   - Batch ID: {{BATCH_ID}}
   - Sources: [list]
   
   ## Pages created
   - `wiki/Domain/page.md` (new) — topic summary
   
   ## Pages updated  
   - `wiki/Domain/page.md` (+N lines) — what was added
   
   ## Domain statistics
   | Domain | New Pages | Updated Pages |
   |--------|-----------|---------------|
   ```

5. **Update tracking** in `progress.json`:
   - Set `status: "ingested"` for each processed source
   - Add `wiki_pages` list (paths of created/updated pages)
   - Add `page_count` (total pages touched)

6. **Write stage output** to `pipeline/stage-output/current-6-ingestion.md`:
   ```markdown
   # Stage 6 Output — {{TIMESTAMP}}
   ## Ingested
   | Source | Pages Created | Pages Updated | Domains |
   |--------|---------------|---------------|---------|
   
   ## Total new pages this batch: N
   ## Total pages updated: N
   ## Ready for Stage 7
   ```

### Rules
- Check existing pages before creating new ones (avoid duplicates)
- Keep existing content — only append
- Use existing page types from the wiki (look at similar pages for format)
- Every fragment must land on at least one wiki page
- Update `progress.json` after EACH source file (crash-safe)
