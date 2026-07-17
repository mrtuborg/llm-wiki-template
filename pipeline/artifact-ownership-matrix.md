# Artifact Ownership Matrix (Authoritative)

This matrix defines which layer OWNS which artifact types.
Ownership means: the layer is the ONLY layer allowed to CREATE or MODIFY
the artifact. Other layers may READ it if permitted.

No artifact may be written outside its ownership domain.
No artifact may have more than one owner.

## 0. Orchestrator (Layer 0)

**Owns:**
- `/pipeline/handoff/provenance/*.json` (intermediate provenance data)
- `/pipeline/errors/*.md` (error reports)

**Special:** `SOURCES_PATH` (defined in `/pipeline/config.md`) is an external read-only vault — no wiki layer owns it. The Orchestrator routes files from SOURCES_PATH to Reconstruction Layer.

## 1. Domain Layer (Layer 1)

**Owns:**
- `/domains/README.md`
- `/domains/map.md`
- `/domains/<domain>/README.md`
- `/domains/<domain>/boundaries.md`
- `/domains/<domain>/index.md`

**May read:** ontology, schema, templates

**May NOT write:** wiki pages, graph, synthesis, decisions

## 2. Ontology Layer (Layer 2)

**Owns:**
- `/ontology/relationships.md`
- `/ontology/provenance.md`
- `/ontology/*.md` (node type definitions)

**May read:** domains

**May NOT write:** wiki pages, raw, reconstructed, synthesis

## 3. Schema Layer (Layer 3)

**Owns:**
- `/schema/types.md`
- `/schema/fields.md`
- `/schema/linking.md`
- `/schema/lifecycle.md`
- `/schema/rules.md`
- `/schema/axioms.md`

**May read:** ontology

**May NOT write:** wiki pages, graph, synthesis

## 4. Template Layer (Layer 4)

**Owns:**
- `/wiki/templates/*.md`

**May read:** schema, ontology

**May NOT write:** wiki pages, graph, synthesis

## 5. Reconstruction Layer (Layer 5)

**Owns:**
- `/pipeline/reconstructed/*.md`

**May read:** raw documents

**May NOT write:** wiki pages, graph, synthesis, decisions

## 6. Ingestion Layer (Layer 6)

**Owns:**
- `/wiki/<domain>/<page>.md` (typed pages, excluding Decision)
- `/wiki/updates/*.md` (change logs)

**May read:** reconstructed raw, templates, schema, ontology

**May NOT write:** decisions, graph, synthesis, `/wiki/index.md`

## 7. Compilation Layer (Layer 7)

**Owns:**
- `/wiki/graph/<timestamp>-graph.md` (semantic graph files)
- `/wiki/graph/<timestamp>-provenance.md` (provenance graph files)
- `/wiki/compiled/*.md` (compilation reports)
- `/wiki/index.md` (global wiki index)

**May read:** typed pages, ontology, schema, provenance edge data from Decision Log Layer

**May NOT write:** synthesis pages, decisions

**Special rule:** Compilation Layer writes provenance graph files but does NOT create provenance edges. Provenance edge data is produced by Decision Log Layer and consumed by Compilation for graph file output.

## 8. Synthesis Layer (Layer 8)

**Owns:**
- `/wiki/synthesis/*.md`
- `/wiki/synthesis/index.md`
- `/wiki/synthesis/*-report.md`

**May read:** semantic graph, provenance graph, typed pages, decisions

**May NOT write:** `/wiki/index.md`, typed pages, ontology, schema

## 9. Decision Log Layer (Layer 9)

**Owns:**
- `/wiki/decisions/*.md` (Decision typed pages)
- Provenance edge data (Decision → RawDocument, Decision → ReconstructedRawDocument, Decision → TypedPage)

**May read:** conversations, typed pages, pipeline/reconstructed (read-only), ontology, schema

**May NOT write:** typed pages (non-Decision), synthesis, graph files

**Special rule:** Decision Log Layer produces provenance edges but does NOT write graph files. Provenance edges are passed to Compilation Layer for recording in `/wiki/graph/*-provenance.md`.

## Routing Rules

The Orchestrator MUST route artifacts based on ownership:

- `/domains/` → Domain Layer
- `/ontology/` → Ontology Layer
- `/schema/` → Schema Layer
- `/wiki/templates/` → Template Layer
- `SOURCES_PATH` (see /pipeline/config.md) → Reconstruction Layer (external, read-only)
- `/pipeline/reconstructed/` → Ingestion Layer (via Reconstruction)
- `/wiki/<domain>/<page>.md` → Ingestion Layer
- `/wiki/updates/` → Ingestion Layer
- `/wiki/graph/` → Compilation Layer
- `/wiki/compiled/` → Compilation Layer
- `/wiki/index.md` → Compilation Layer
- `/wiki/synthesis/` → Synthesis Layer
- `/wiki/decisions/` → Decision Log Layer
- `/pipeline/handoff/provenance/` → Orchestrator (intermediate)
- Conversational content → Decision Log Layer

## Rules

- No artifact may have multiple owners.
- No layer may write outside its ownership domain.
- Semantic edges may ONLY be created by Ingestion and Compilation.
- Provenance edges (data) may ONLY be created by Decision Log Layer.
- Provenance graph files may ONLY be written by Compilation Layer.
- Synthesis Layer MUST NOT modify `/wiki/index.md`.
- Ingestion Layer MUST NOT create Decision pages.
- Decision Log Layer MUST NOT write graph files directly.
- Provenance edge data flows: Decision Log → `/pipeline/handoff/provenance/*.json` → Compilation → `/wiki/graph/*-provenance.md`.
