## Pipeline Stage 5: Reconstruction

> **Shell rule:** Do NOT write multi-line shell scripts or heredocs. Use individual Read / Edit / Create tool calls. Only run simple one-liner bash commands.

> **File rule:** Stage output files (`pipeline/stage-output/current-*.md`) are deleted before each stage run — always **Create** them fresh, never Edit them.

> **Tracking rule:** Do NOT update `pipeline/tracking/progress.json` — status is managed automatically by the pipeline engine.

{{SHARED_CONTEXT}}

### Input
- Current batch queue: `{{WIKI_ROOT}}/pipeline/tracking/queue.json`
  *(this is the ONLY authoritative list of source files for this batch — it is
  regenerated fresh before every batch. Do not rely on any other file to
  determine which sources belong to this batch.)*

### Your Task: Reconstruct Knowledge from Raw Sources

For each file listed in `queue.json`'s `files` array:

1. **Read the source file** completely (ALL lines — nothing skipped)
2. **Extract ALL knowledge fragments**:
   - Technical concepts, configs, code, specs, recipes, procedures
   - Personal knowledge, decisions, preferences
   - URLs and references (if URL broken → search web to restore)
   - Even incomplete fragments → reconstruct using context
3. **Classify each fragment** by domain (see domain map in shared context)
4. **Create a reconstructed file** at:
   `{{WIKI_ROOT}}/pipeline/reconstructed/{{TIMESTAMP}}-{{TOPIC}}.md`
   
   Format:
   ```markdown
   # Reconstructed: {{SOURCE_FILENAME}}
   *Source: {{FULL_SOURCE_PATH}}*
   *Reconstructed: {{TIMESTAMP}}*
   *Domains: [list of target domains]*
   
   ## Fragment 1: {{TOPIC}}
   **Domain:** Electronics-Hardware
   **Type:** reference|procedure|concept|decision|recipe
   **Content:**
   [extracted knowledge, formatted cleanly]
   
   ## Fragment 2: ...
   ```

5. **Update tracking** in `progress.json`:
   - Set `status: "reconstructed"` for each processed file
   - Add `reconstructed_file` path
   - Add `domains` list

6. **Write stage output** to `pipeline/stage-output/current-5-reconstruction.md`:
   ```markdown
   # Stage 5 Output — {{TIMESTAMP}}
   ## Processed files
   - `path/to/file.md` → reconstructed/{{TIMESTAMP}}-topic.md (N fragments, domains: X, Y)
   
   ## Fragments by domain
   | Domain | Count |
   |--------|-------|
   | AI-LLM | 5 |
   | ...    | ... |
   
   ## Ready for Stage 6
   [list of reconstructed files to ingest]
   ```

### Rules
- **ALL content is valuable** — do not skip anything
- If a file is a fragment/stub, restore it with web search if needed
- Source files are read-only — never modify them
- Write reconstructed files to `pipeline/reconstructed/` only
- Update `progress.json` after EACH file (crash-safe)
