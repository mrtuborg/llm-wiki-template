## Pipeline Mode: ADD — Scan Phase

{{SHARED_CONTEXT}}

### Your Task: Scan for Unprocessed Source Files

1. Read `~/vaults/Vladimir-llm-wiki/pipeline/tracking/progress.json`
2. Read `~/vaults/Vladimir-llm-wiki/pipeline/config/pipeline.yaml` (see `sources.exclude`)
3. Scan all `.md` files under `~/vaults/Vladimir` (recursively)
4. For each file NOT present in `progress.json` OR with status `pending`:
   - Add it to the queue with `status: "queued"`
5. Skip files matching exclusion patterns from config
6. Write the updated `progress.json`
7. Write `~/vaults/Vladimir-llm-wiki/pipeline/tracking/queue.json` with this format:

```json
{
  "batch_id": "batch-{{TIMESTAMP}}",
  "created_at": "{{TIMESTAMP}}",
  "files": [
    "~/vaults/Vladimir/ChatGPT/wifi-networking.md",
    "~/vaults/Vladimir/Notes/some-note.md"
  ],
  "total_queued": 42,
  "total_pending": 38
}
```

8. Write `~/vaults/Vladimir-llm-wiki/pipeline/stage-output/current-5-reconstruction.md`:

```markdown
# Scan Results — {{TIMESTAMP}}
- Batch ID: batch-{{TIMESTAMP}}
- Files queued this scan: N
- Total still pending: N
- Files in this batch (for Stage 5): [list of up to BATCH_SIZE files]
```

### Rules
- Respect ALL exclusion patterns from pipeline.yaml
- Do NOT mark grocery/checklist/household files as queued (status = `skipped`)
- Batch size: {{BATCH_SIZE}} files per run (from pipeline.yaml `modes.add.batch_size`)
- If queue is already non-empty (previous run), report existing queue, do not rescan
