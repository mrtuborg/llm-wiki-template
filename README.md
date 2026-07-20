# llm-wiki-engine

A portable pipeline engine for building structured LLM-driven personal knowledge wikis (PKM).

Inspired by Andrej Karpathy's llm-wiki approach. Designed to be used as a **git submodule** in any vault.

## Quick Start

```bash
# 1. Create a new vault (git repo)
git init ~/vaults/my-wiki && cd ~/vaults/my-wiki

# 2. Add engine as submodule
git submodule add git@github.com:mrtuborg/llm-wiki-template.git engine

# 3. Bootstrap vault structure
bash engine/init-vault.sh "My-Wiki"

# 4. Edit vault.config.yaml — set your domains
#    (domains are FIXED — only humans change this list)

# 5. Add raw sources
./llm-wiki source add /path/to/raw/notes "My Notes"

# 6. Run pipeline
./llm-wiki add                    # process new files
./llm-wiki search "my query"      # semantic search
./llm-wiki status                 # progress overview
```

## Engine Structure

```
engine/
├── scripts/              ← Pipeline orchestration (entry point: orchestrator.sh)
│   ├── orchestrator.sh   ← Main CLI
│   ├── embed.py / .sh    ← Semantic embeddings (Ollama)
│   ├── search.py / .sh   ← Semantic search
│   ├── build-source-map.py
│   ├── run-stage.sh
│   ├── mode-add.sh / mode-maintain.sh
│   └── lib/
│       ├── vault-config.sh   ← Reads vault.config.yaml
│       ├── tracker.sh        ← Progress tracking
│       └── context-builder.sh
├── prompts/              ← Stage prompt templates (Layers 5–9)
├── tools/
│   ├── validate/check-dead-links.sh   ← Structural validation
│   ├── compile/render-graph.py        ← Knowledge graph
│   └── ingest/discover-domains.sh
├── templates/            ← Wiki page templates (axiom/concept/decision/…)
├── ontology/             ← OTF type definitions
├── schema/               ← Field/type/linking schema
├── vault.config.template.yaml   ← Config template for new vaults
└── init-vault.sh         ← Bootstrap script
```

## Vault Structure (after init)

```
my-vault/
├── engine/               ← git submodule (this repo)
├── vault.config.yaml     ← Vault-specific settings (domains, paths)
├── llm-wiki              ← Convenience wrapper → engine/scripts/orchestrator.sh
├── wiki/                 ← Knowledge pages (Engineer/, Meta/, …)
├── domains/              ← Domain documentation
├── ontology/             ← Copied from engine on init
├── schema/               ← Copied from engine on init
└── pipeline/
    ├── tracking/         ← progress.json, sources.json, source-map.json
    ├── index/            ← embeddings.db
    ├── reconstructed/    ← Stage 5 outputs
    ├── stage-output/     ← Stage run logs
    └── prompts/          ← _context.md (vault-specific, generated)
```

## vault.config.yaml

All vault-specific settings live here. Domains are **fixed** — only humans edit them.

```yaml
vault:
  name: "My-Wiki"

wiki:
  dir: wiki
  domains: [Engineer, TechLead, Meta]   # FIXED — only human can change
  subdomains:
    Engineer: [AI-LLM, Electronics]     # agents can add subdomains
  fallback_subdomain: Unrecognized      # for content that fits no subdomain

pipeline:
  tracking_dir: pipeline/tracking
  index_dir: pipeline/index
  prompts_dir: pipeline/prompts

embedding:
  model: mxbai-embed-large
  host: http://localhost:11434
```

## CLI Commands

```
./llm-wiki add               # Process new source files through pipeline (Layers 5–9)
./llm-wiki maintain          # Health check + index sync
./llm-wiki status            # Progress, source coverage, embedding stats
./llm-wiki sources           # List sources with attribution
./llm-wiki source add <path> # Add a raw source
./llm-wiki validate          # Validate domain, fields, links
./llm-wiki search "query"    # Semantic search
./llm-wiki stage <name>      # Run one stage manually
```

## Pipeline Layers

| Layer | Stage | What it does |
|-------|-------|-------------|
| 5 | Reconstruction | Extracts structured content from raw files |
| 6 | Ingestion | Creates typed wiki pages with frontmatter |
| 7 | Compilation | Updates index.md, validates links |
| 8 | Synthesis | Creates overview/synthesis pages |
| 9 | Decision Log | Captures architectural decisions |

## Attaching to an existing vault

If your vault is NOT a git repo, use a symlink:

```bash
ln -s ~/vaults/llm-wiki-engine ~/vaults/my-existing-vault/engine
cp ~/vaults/llm-wiki-engine/vault.config.template.yaml ~/vaults/my-existing-vault/vault.config.yaml
# Edit vault.config.yaml, then:
bash ~/vaults/my-existing-vault/engine/init-vault.sh
```
