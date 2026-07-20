## Pipeline Stage 6: Ingestion

> **Edge type rule:** Use ONLY: `relates-to` · `defines` · `constrains` · `participates-in` · `instance-of` · `depends-on` · `follows` · `summarizes` · `part-of` · `specializes` — never invent new types.


{{SHARED_CONTEXT}}

### Domain Classification Reference
Read `{{WIKI_ROOT}}/vault.config.yaml` to get the list of configured domains.
Then for each domain, try to read `{{WIKI_ROOT}}/domains/<Domain>/subdomains.md` if it exists.
**If a domain's subdomains.md is missing — that's OK, skip it and infer subdomain from content.**

Use domain dictionaries (when available) to decide domain + subdomain for each fragment.
When content doesn't fit any described subdomain, use `Unrecognized` — do NOT invent domain names.

### Input
Read `{{WIKI_ROOT}}/pipeline/stage-output/current-5-reconstruction.md`  
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
   title: Page Title
   type: reference|pattern|guide|overview|notes
   domain: DomainName
   subdomain: SubdomainName
   tags: [tag1, tag2]
   created: {{TIMESTAMP}}
   updated: {{TIMESTAMP}}
   sources: [Vladimir/SubFolder/filename.md]
   source_files:
     - path: Vladimir/SubFolder/filename.md
       processed: {{TIMESTAMP}}
   ---
   
   # Page Title
   
   ## Section from this batch
   [content]
   ```
   
   **Required fields:** `title`, `type`, `domain`, `subdomain`, `created`, `updated` — all must be present.

4. **Create/update** `{{WIKI_ROOT}}/wiki/updates/{{TIMESTAMP}}.md`:
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
