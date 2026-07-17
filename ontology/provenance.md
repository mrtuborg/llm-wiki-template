# ontology/provenance.md
# Provenance Edge Specification (Non-Semantic)

This file defines ONLY provenance edges linking decisions to their source
documents. These edges do NOT participate in semantic reasoning.

Artifact Types:
- RawDocument
- ReconstructedRawDocument
- TypedPage
- Decision

Allowed Provenance Edges:
- Decision → RawDocument (references)
- Decision → ReconstructedRawDocument (references)
- Decision → TypedPage (references)

Forbidden:
- Any provenance edge between semantic node types.
- Any semantic edge in this file.
