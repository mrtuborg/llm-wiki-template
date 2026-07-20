# Schema: Page Lifecycle

## States

```
draft → reviewed → stable
              ↑
          (regression)
```

| State | Meaning | Who sets it |
|-------|---------|-------------|
| draft | Created, not validated | Ingestion Layer |
| reviewed | Compilation validated structure | Compilation Layer |
| stable | No changes in last compile cycle | Compilation Layer |

## Lifecycle Events

### Creation
- Triggered by Ingestion Layer (typed pages) or Decision Log Layer (Decision pages)
- Status: `draft`
- All required fields must be present

### Ingestion
- Ingestion Layer sets page type, fills required fields, creates outbound edges
- Status remains `draft` until Compilation validates

### Compilation
- Compilation Layer validates schema, ontology, and edge rules
- On pass: status → `reviewed`
- On fail: error written to `/pipeline/errors/`, page stays `draft`

### Synthesis
- Synthesis Layer may create cross-links from Overview → Synthesis pages
- Does NOT modify existing page lifecycle state

### Update
- Re-ingestion of updated source triggers Compilation re-run
- Status may revert to `draft` if structure changes

### Deletion
- Only explicit user action triggers deletion
- Orphan detection: Compilation flags pages with no inbound OR outbound edges
