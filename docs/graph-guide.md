# Graph View Guide

## Why the graph looks sparse

The vault contains two types of files:

1. **Wiki pages** (`/wiki/`) — knowledge nodes with semantic edges. These form the graph.
2. **System files** (`/pipeline/`, `/schema/`, `/ontology/`, `/domains/`) — LLM prompts and definitions. No wikilinks by design.

Obsidian shows ALL files. System files appear as isolated nodes and pollute the graph.

## Fix: Filter to wiki pages only

In Obsidian **Graph View** → click the **filter icon** (funnel) → **Files** section:

```
path:wiki
```

This shows only `/wiki/` knowledge pages and their connections.

## Why the graph is still small

The graph grows with each ingestion. One source file → ~15–30 pages.

At this stage:
- 1 source ingested (nRF52840 datasheet)
- 27 pages, 33 edges
- Only technical lower layers (Axiom, Entity, Process, Pattern)

The graph becomes visually rich once:
- **More sources** are ingested (each adds ~20–30 nodes)
- **Upper layers** appear: Concept → Overview → Synthesis connect multiple domains
- **Decision Logs** add Rule nodes that bridge Decisions ↔ Concepts

## Expected graph shape at different stages

### Stage 1 (now) — Setup + 1 source
```
Axioms ──defines──▶ Entities ──participates_in──▶ Processes ──instance_of──▶ Patterns
```
Looks: small cluster per source file

### Stage 2 — 10+ sources ingested
```
Multiple clusters, cross-entity edges, shared patterns emerge
```

### Stage 3 — Synthesis runs
```
Overview nodes bridge clusters → star pattern connecting domains
```

### Stage 4 — Decision Logs added
```
Decision → Rule → Concept → Pattern — vertical spine connecting all layers
```

## Recommended Obsidian Graph Settings

**Filters:**
- Files: `path:wiki`
- Tags: none needed

**Display:**
- Node size: Links (more connected = bigger)
- Link thickness: On

**Groups (optional color coding):**
- `path:wiki/Electronics-Hardware` → blue
- `path:wiki/Yocto-BitBake` → orange
- `path:wiki/decisions` → red
- `path:wiki/synthesis` → purple
