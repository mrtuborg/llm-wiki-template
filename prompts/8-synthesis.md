## Pipeline Stage 8: Synthesis

> **Edge type rule:** Use ONLY: `relates-to` · `defines` · `constrains` · `participates-in` · `instance-of` · `depends-on` · `follows` · `summarizes` · `part-of` · `specializes` — never invent new types.

> **Shell rule:** Do NOT write multi-line shell scripts to update files. Use individual Read / Edit / Create tool calls for each file. Only run simple one-liner bash commands. Never use `set -euo pipefail`, heredocs, or `${VAR}` variable assignments in shell commands.


> **File rule:** Stage output files (`pipeline/stage-output/current-*.md`) are deleted before each stage run — always **Create** them fresh, never Edit them.


{{SHARED_CONTEXT}}

### Input
Read `{{WIKI_ROOT}}/pipeline/stage-output/current-7-compilation.md`  
Check if synthesis threshold was met (≥5 new pages in this batch).

### Your Task: Create/Update Synthesis Pages

**Skip this stage** if the compilation output says synthesis threshold was NOT met.  
Write a brief "skipped" note to stage output and exit.

If threshold IS met:

1. **Identify synthesis opportunities** from Stage 7 output:
   - Domains with significant new content
   - Cross-domain patterns that emerged
   - New topics needing an overview page

2. **For each synthesis opportunity**:
   - Check `wiki/synthesis/` for existing synthesis pages
   - If exists → update with new cross-links and summaries
   - If new → create `wiki/synthesis/{{DOMAIN}}-synthesis.md`

3. **Synthesis page format**:
   ```markdown
   ---
   type: synthesis
   domain: Meta
   subdomain: Synthesis
   updated: {{TIMESTAMP}}
   ---
   
   # {{TOPIC}} — Synthesis
   
   ## Key Patterns
   [Cross-cutting patterns across domains]
   
   ## Decision Points
   [Key architectural/design decisions related to this topic]
   
   ## Related Pages
   - [[wiki/Domain/page]] — summary
   ```
   
   > ⚠️ `domain:` must be EXACTLY one of the domains listed in `vault.config.yaml` (see `_context.md`).
   > Use `Meta` for cross-cutting synthesis. NEVER use `cross-domain`, `synthesis`, or invented domain names.

4. **Write stage output** to `pipeline/stage-output/current-8-synthesis.md`:
   ```markdown
   # Stage 8 Output — {{TIMESTAMP}}
   ## Status: ran / skipped (threshold not met)
   
   ## Synthesis pages created/updated
   | Page | Action | Domains covered |
   |------|--------|-----------------|
   
   ## Decision-worthy patterns found
   [List patterns that should go to Stage 9]
   ```

### Rules
- Synthesis pages summarize and cross-link — they do not duplicate raw content
- Always check existing synthesis pages first (extend, don't recreate)
- Write ONLY to `wiki/synthesis/`
