# llm-wiki-engine

A portable pipeline engine for building structured LLM-driven personal knowledge wikis (PKM).

Inspired by Andrej Karpathy's llm-wiki approach. Designed to be used as a **git submodule** in any vault.

## How LLM Agents Are Used

Each pipeline stage is executed by invoking **`gh copilot`** as a non-interactive agent:

```
./llm-wiki add
      │
      ▼
orchestrator.sh          ← picks pending files, loops until done
      │
      ▼
run-stage.sh             ← one stage per batch
      │
      ├── context-builder.sh
      │     ├── pipeline/prompts/_context.md   ← vault-specific context (paths, domains)
      │     └── engine/prompts/<stage>.md      ← stage instructions
      │
      └── gh copilot                           ← LLM agent
            --allow-all-tools
            --allow-all-paths
            --add-dir $WIKI_ROOT               ← full vault access
            --add-dir $SOURCES_DIR             ← raw source files
```

The agent receives a composed prompt (vault context + stage instructions) and is granted full file access to both the wiki and the source directory. It reads raw source files, creates or updates wiki pages, and writes stage output — all autonomously, guided by the ontology, schema, and templates defined in the vault.

**What each invocation produces:**

| Stage | Agent task |
|-------|-----------|
| 5 – Reconstruction | Reads raw source files → writes structured `.md` extracts to `pipeline/reconstructed/` |
| 6 – Ingestion | Reads reconstructed files → creates typed wiki pages under `wiki/<domain>/` |
| 7 – Compilation | Validates pages, updates `index.md` files, checks semantic links |
| 8 – Synthesis | Generates overview/synthesis pages when compilation triggers exist |
| 9 – Decision Log | Captures architectural decisions from conversational reasoning |

**Dependencies:**
- `gh copilot` CLI must be installed and authenticated
- Semantic embeddings use **Ollama** (`mxbai-embed-large`, `http://localhost:11434`)

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

The pipeline is split into three phases. **Setup** (Layers 1–4) runs once on init and only when the vault structure changes. **Active** (Layers 5–7) is the normal ingestion cycle. **Enrichment** (Layers 8–9) runs when enough material has accumulated.

| Phase | Layer | Stage | What the agent does |
|-------|-------|-------|---------------------|
| Setup | 1 | Domains | Define domain boundaries; no knowledge written |
| Setup | 2 | Ontology | Define all node types, edges, constraints |
| Setup | 3 | Schema | Define page types, fields, linking rules |
| Setup | 4 | Templates | Generate deterministic page templates |
| Active | 5 | Reconstruction | Extract axioms/invariants from raw source files |
| Active | 6 | Ingestion | Convert reconstructed data into typed wiki pages |
| Active | 7 | Compilation | Validate, deduplicate, update index.md, build graph |
| Enrichment | 8 | Synthesis | Generate overview/synthesis pages from compiled content |
| Enrichment | 9 | Decision Log | Capture architectural decisions from reasoning trails |

Layers 1–4 are run by the human (or manually via `./llm-wiki stage`). Layers 5–9 are run automatically on every `./llm-wiki add` or `./llm-wiki maintain --synthesis` call.

## Attaching to an existing vault

If your vault is NOT a git repo, use a symlink:

```bash
ln -s ~/vaults/llm-wiki-engine ~/vaults/my-existing-vault/engine
cp ~/vaults/llm-wiki-engine/vault.config.template.yaml ~/vaults/my-existing-vault/vault.config.yaml
# Edit vault.config.yaml, then:
bash ~/vaults/my-existing-vault/engine/init-vault.sh
```
