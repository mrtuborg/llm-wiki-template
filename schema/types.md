# Schema: Page Types

All wiki pages must be one of these types. Type determines template, fields, and allowed edges.

| Type | OTF | Epistemic Layer | Source |
|------|-----|-----------------|--------|
| Axiom | OTF:Invariant | 1 (lowest) | Datasheets, specs, hardware docs |
| Entity | OTF:Object | 2 | Technical artifacts |
| Process | OTF:Process | 3 | Technical artifacts |
| Pattern | OTF:Structure | 4 | Reconstructed raw |
| Method | OTF:Procedure | 5 | Reconstructed raw |
| Decision | OTF:Choice | 6 | Conversational reasoning ONLY |
| Rule | OTF:Condition | 7 | Conversational reasoning ONLY |
| Concept | OTF:Abstraction | 8 | Ingestion / Synthesis |
| Overview | OTF:Summary | 9 | Synthesis |
| Synthesis | OTF:Integration | 10 (highest) | Synthesis Layer ONLY |

Rules:
- Lower layers MUST NOT reference higher layers.
- Synthesis pages are created ONLY by the Synthesis Layer (Layer 8).
- Decision pages are created ONLY by the Decision Log Layer (Layer 9).
