## Pipeline Stage 9: Decision Log

{{SHARED_CONTEXT}}

### Input
Read `{{WIKI_ROOT}}/pipeline/stage-output/current-8-synthesis.md`  
Look for "Decision-worthy patterns found" section.

### Your Task: Record Architectural Decisions

For each decision-worthy pattern found in Stage 8 output (plus any found in ingested content):

1. **Evaluate if decision-worthy**:
   - Architectural choice with rationale
   - Technology selection with tradeoffs
   - Pattern that applies across multiple projects
   - Anti-pattern discovered

2. **For each qualifying decision**, write to `wiki/decisions/`:
   - Check existing decisions to avoid duplicates
   - Create `wiki/decisions/{{TIMESTAMP}}-{{TOPIC}}.md`:

   ```markdown
   ---
   type: decision
   status: accepted|proposed|superseded
   date: {{TIMESTAMP}}
   domain: Engineer
   subdomain: AI-LLM
   sources: [source-file-basename]
   ---
   
   # ADR: {{Decision Title}}
   
   > ⚠️ `domain:` must be EXACTLY one of: Engineer / TechLead / Entrepreneur / Self-care / Family / Meta
   > Match the domain of the source material. Use the most specific single domain.
   > NEVER use old names: AI-LLM, Embedded-Linux, Yocto-BitBake, cross-domain, etc.
   
   ## Context
   [What problem does this solve / what situation led to this decision]
   
   ## Decision
   [What was decided]
   
   ## Rationale
   [Why this choice over alternatives]
   
   ## Consequences
   [What this means going forward — positive and negative]
   
   ## Related Pages
   - [[wiki/Domain/page]]
   ```

3. **Update sources registry** `pipeline/sources-registry.md`:
   - Set source status to `done` for sources that completed all stages
   - Update "Last decision log" timestamp

4. **Update tracking** in `progress.json`:
   - Set `status: "done"` for fully completed sources
   - Update `stats.done` count
   - Update `last_decision_log` timestamp

5. **Write stage output** to `pipeline/stage-output/current-9-decision-log.md`:
   ```markdown
   # Stage 9 Output — {{TIMESTAMP}}
   ## Decisions recorded
   | Decision | File | Domains |
   |----------|------|---------|
   
   ## Sources marked done: N
   ## Remaining pending: N
   ## Queue status: empty / N files remaining

   processed_files:
   - vaults/Vladimir/SubFolder/filename.md
   - vaults/Vladimir/SubFolder/filename2.md
   ```
   The `processed_files:` section MUST list each source file processed in this batch
   (relative path from HOME, e.g. `vaults/Vladimir/SubFolder/file.md`).
   This enables content-hash tracking for change detection.

### Rules
- Only create decisions for genuinely architectural/reusable patterns
- Update sources-registry.md status to `done` — this closes the pipeline loop
- The "remaining pending" count tells the orchestrator whether to loop
