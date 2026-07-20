# Rule — Ontology Definition

**OTF Category:** `OTF:Condition`  
**Tagline:** Contextual justification for a Decision

## Definition

Formalized reason behind a Decision. Derivable from reasoning. Context-dependent. Can change when context changes.

## Allowed Inbound Edges

- `Decision → Rule (justified_by)`

## Allowed Outbound Edges

- `Rule → Concept (abstracted_into)`

## Examples

- Use DMA for buffers > 256 bytes.
- Prefer static allocation in ISR paths.
- Retry count = 3 because network jitter is high.

## Constraints

See `/ontology/relationships.md` for full graph rules and validation.
