## Pipeline Stage 7b: Embedding (Semantic Index)

{{SHARED_CONTEXT}}

### Input
Read `~/vaults/Vladimir-llm-wiki/pipeline/stage-output/current-7-compilation.md`

### Your Task

Run the embedding script in incremental mode to index only new/changed pages:

```bash
cd ~/vaults/Vladimir-llm-wiki
bash pipeline/scripts/embed.sh --incremental
```

This will:
1. Read `pipeline/index/embeddings.db`
2. Skip pages whose content hash hasn't changed
3. Embed only new/updated pages from this batch
4. Update the index

### Output

Report what the script printed (embedded count, skipped, time).

Write `pipeline/stage-output/current-7b-embed.md` with:
```markdown
# Stage 7b Output — {{TIMESTAMP}}
## Embedding index update
- New pages embedded: N
- Unchanged (skipped): N
- Total in index: N
- Time: Xs
```

### Rules
- Always run `--incremental` in the pipeline (never `--full` unless manually requested)
- If ollama is not running, start it: `ollama serve &` then retry
- The index file is at `pipeline/index/embeddings.db`
