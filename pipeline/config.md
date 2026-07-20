# LLM-Wiki Configuration

## Sources Vault

The raw input data lives in a separate vault to keep the wiki clean.

```
SOURCES_PATH = ~/vaults/Sources
```

Point this to any directory containing raw input files:
- Markdown notes
- Code snippets
- Datasheets (as text/md)
- Config files
- Protocol specs
- Any technical artifacts

The Reconstruction Layer reads from `SOURCES_PATH`.
The wiki itself never stores raw input.

## Wiki Root

```
WIKI_ROOT = ~/vaults/my-llm-wiki
```

## Notes

- SOURCES_PATH is read-only for all wiki layers.
- No wiki layer may write to SOURCES_PATH.
- pipeline/reconstructed/ stays inside the wiki (owned by Reconstruction Layer).
