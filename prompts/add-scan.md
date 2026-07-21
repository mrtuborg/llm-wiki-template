## Pipeline Mode: ADD — Scan Phase

{{SHARED_CONTEXT}}

> **File rule:** Stage output files (`pipeline/stage-output/current-*.md`) are deleted before each stage run — always **Create** them fresh, never Edit them.

### Your Task: Scan for Unprocessed Source Files

1. Read `{{WIKI_ROOT}}/pipeline/tracking/progress.json`
2. Read `{{WIKI_ROOT}}/pipeline/tracking/sources.json` — lists all registered source paths and their per-source exclude patterns
3. For each active source in `sources.json`, scan all `.md` files under that source path (recursively)
4. For each file NOT present in `progress.json` OR with status `pending`:
   - Add it to the queue with `status: "queued"`
5. Skip files matching per-source exclusion patterns (`.trash`, `.obsidian`, etc.)
6. Write the updated `progress.json`
7. Write `{{WIKI_ROOT}}/pipeline/tracking/queue.json`:

```json
{
  "batch_id": "batch-{{TIMESTAMP}}",
  "created_at": "{{TIMESTAMP}}",
  "files": [
    "/absolute/path/to/source-file.md"
  ],
  "total_queued": 42,
  "total_pending": 38
}
```

8. Overwrite `{{WIKI_ROOT}}/pipeline/stage-output/current-add-scan.md`:

```markdown
# Scan Results — {{TIMESTAMP}}
- Batch ID: batch-{{TIMESTAMP}}
- Sources scanned: N paths from sources.json
- Files queued this scan: N
- Total still pending: N
- Files in this batch (for Stage 5): [list of up to BATCH_SIZE files]
```

### Rules
- Read source paths from `sources.json` — **never hardcode vault paths**
- Skip files matching per-source `exclude` list
- Do NOT queue grocery/checklist/household files (status = `skipped`)
- Batch size: {{BATCH_SIZE}} files per run
- If queue is already non-empty (previous run), report existing queue, do not rescan
