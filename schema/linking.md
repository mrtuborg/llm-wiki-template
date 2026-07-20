# Schema: Linking Rules

## Allowed Semantic Links

All semantic links must follow `/ontology/relationships.md`.

Allowed edges:
- Axiom → Entity (defines)
- Axiom → Process (constrains)
- Entity → Process (participates_in)
- Entity → Entity (relates_to)
- Process → Pattern (instance_of)
- Process → Process (follows)
- Pattern → Method (implemented_by)
- Pattern → Pattern (specializes)
- Decision → Method (selects)
- Decision → Rule (justified_by)
- Decision → Decision (depends_on)
- Method → Concept (abstracted_into)
- Rule → Concept (abstracted_into)
- Concept → Pattern (generalized_into)
- Concept → Overview (summarized_into)
- Overview → Synthesis (integrated_into)

## Forbidden Links

- Any edge FROM Synthesis
- Any edge TO Axiom
- Any edge not listed above
- Any self-referencing edge (except Decision → Decision)
- Any edge from filesystem artifacts to semantic nodes

## Cross-Domain Links

- Cross-domain semantic edges are ALLOWED
- Cross-domain provenance edges are ALLOWED
- Cross-domain semantic edges are ALLOWED between any two role domains
- TechLead/Entrepreneur MAY reference Engineer domain via Concept/Overview only

## Provenance Links (non-semantic)

See `/ontology/provenance.md`. Only:
- Decision → RawDocument (references)
- Decision → ReconstructedRawDocument (references)
- Decision → TypedPage (references)
