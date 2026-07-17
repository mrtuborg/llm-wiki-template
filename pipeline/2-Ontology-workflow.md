# Ontology Layer Workflow

You are the Ontology Architect.

Your task is to define the complete ontology of the wiki: all node types,
their semantic roles, constraints, epistemic layers, and allowed relationships.

Ontology Layer is the ONLY layer that defines node types. No other layer may
introduce new node types or modify existing ones.

## OBJECTIVES

1. Define ALL ontology node types:
   - Axiom
   - Entity
   - Process
   - Pattern
   - Method
   - Decision
   - Rule
   - Concept
   - Overview
   - Synthesis

2. For each node type, generate:
   - definition
   - semantic role
   - epistemic layer
   - allowed inbound edges (from /ontology/relationships.md)
   - allowed outbound edges (from /ontology/relationships.md)
   - constraints
   - OTF alignment (if enabled; see /ontology/otf.md and /ontology/otf-types.md)

3. Produce the following files:
   - /ontology/entities.md
   - /ontology/processes.md
   - /ontology/patterns.md
   - /ontology/methods.md
   - /ontology/decisions.md
   - /ontology/rules.md
   - /ontology/concepts.md
   - /ontology/overviews.md
   - /ontology/synthesis.md
   - /ontology/axioms.md
   - /ontology/relationships.md (authoritative, global)
   - /ontology/provenance.md (non-semantic edge spec)
   - /ontology/otf.md (OTF category definitions)
   - /ontology/otf-types.md (node type → OTF mapping)
   - /wiki/Meta/<concept>.md (one page per extracted Meta concept; see step 5)

4. Enforce global edge specification:
   - DO NOT generate per-domain relationship files.
   - DO NOT specialize edge types per domain.
   - All domains must use the global edge specification.

5. Generate Meta wiki pages in `wiki/Meta/` from system files.

   Read each system file below and classify each concept it defines:

   | System file              | Concepts to extract                        |
   |--------------------------|--------------------------------------------|
   | `/schema/types.md`       | Type invariants → Axiom                    |
   | `/schema/fields.md`      | Required field constraints → Axiom         |
   | `/schema/rules.md`       | Changeable policies → Rule                 |
   | `/schema/linking.md`     | Edge syntax invariants → Axiom             |
   | `/schema/lifecycle.md`   | Stage transition rules → Rule              |
   | `/ontology/axioms.md`    | Ontological invariants → Axiom             |
   | `/ontology/relationships.md` | Semantic edge constraints → Axiom      |

   Classification rules:

   ```
   CREATE Axiom if:
     - violation breaks the system (not a best practice — a hard constraint)
     - no exceptions exist
     - not context-dependent
     - immutable without redesign

   CREATE Rule if:
     - a policy or preference that CAN change with new information
     - contextual (depends on domain, scale, hardware, etc.)
     - has justification that could be revised

   CREATE Concept if:
     - an abstract idea, not a constraint
     - describes a category, pattern, or model
     - has no enforcement — only explanatory value
   ```

   For each extracted concept, generate a wiki page in `wiki/Meta/`:

   ```markdown
   ---
   title: "<concept>"
   type: Axiom | Rule | Concept
   otf: OTF:Invariant | OTF:Condition | OTF:Abstraction
   domain: Meta
   created: <date>
   source_refs:
     - <system-file-path>
   status: draft
   ---

   # <concept>

   ## Constraint | Policy | Description
   <!-- Formal statement. One sentence. No hedging. -->

   ## Applies To
   <!-- Which node types or layers this governs. -->

   ## Outbound Edges
   - **governs** → [[<node-type-or-page>]]

   ## Source
   Extracted from: `<system-file-path>`
   ```

   DO NOT reclassify existing wiki pages here.
   Reclassification of wrong-typed existing pages is handled by Layer 7 (Compilation).

   Add all generated `wiki/Meta/` pages to the output list.

## RULES

- Ontology Layer defines what exists.
- Schema Layer defines how it is documented.
- Templates define the structure of pages.
- Reconstruction extracts raw semantics but does NOT define node types.
- Ingestion creates typed pages but does NOT define node types.
- Compilation validates edges but does NOT define node types.
- Synthesis uses ontology but does NOT define node types.
- Decision Logs reference ontology but do NOT define node types.
- Ontology Layer is the ONLY layer that generates `wiki/Meta/` pages.
- Ingestion must NEVER create pages in `wiki/Meta/`.
- Compilation may flag a Meta-page as wrong type → but reclassification is done by re-running Layer 2, not Layer 6.

## STYLE

- Formal, structured, explicit.
- No conversational tone.
- Deterministic formatting.
- Domain-driven design principles.

After generating ontology files, wait for my next instruction.
