# Concept — Ontology Definition

**OTF Category:** `OTF:Abstraction`  
**Tagline:** Abstract idea generalizing entities or rules

## Definition

Abstract idea that does not exist as a concrete object. Generalizes patterns across entities and rules.

## Allowed Inbound Edges

- `Method → Concept (abstracted_into)`
- `Rule → Concept (abstracted_into)`
- `Concept → Pattern (generalized_into)`

## Allowed Outbound Edges

- `Concept → Pattern (generalized_into)`
- `Concept → Overview (summarized_into)`

## Examples

- Backpressure
- Idempotency
- Temporal coherence
- Resource ownership
- Event propagation

## Constraints

See `/ontology/relationships.md` for full graph rules and validation.
