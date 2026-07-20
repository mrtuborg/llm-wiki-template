# Schema: Global Rules

## Naming

- Page file names: `<kebab-case-title>.md`
- Domain names: exactly one of Engineer / TechLead / Entrepreneur / Self-care / Family / Meta
- Timestamp format: `YYYYMMDDTHHMMSSZ` (ISO 8601 UTC)

## Directory Structure

```
/wiki/<domain>/<page>.md        — typed pages (Axiom, Entity, Process, Pattern, Method, Concept, Overview, Rule)
/wiki/templates/<type>.md       — page templates
/wiki/decisions/<timestamp>-<topic>.md  — Decision pages
/wiki/synthesis/<topic>.md      — Synthesis pages
/wiki/graph/<timestamp>-graph.md        — semantic graph snapshot
/wiki/graph/<timestamp>-provenance.md   — provenance graph snapshot
/wiki/compiled/<timestamp>-report.md    — compilation report
/wiki/index.md                          — global index (Compilation Layer)
```

## Template Alignment

- Every page must use the template for its type from `/wiki/templates/<type>.md`
- Template structure MUST NOT be modified by Ingestion
- Optional fields may be omitted but required fields may NOT

## Ontology Alignment

- All page types must match `/ontology/` node type definitions
- All edges must match `/ontology/relationships.md`
- OTF labels from `/ontology/otf-types.md` are optional but recommended
