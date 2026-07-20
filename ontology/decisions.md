# Decision — Ontology Definition

**OTF Category:** `OTF:Choice`  
**Tagline:** Recorded engineering choice

## Definition

Structured record of a choice made during design or implementation. Comes ONLY from conversational reasoning — never extracted from raw documents.

## Allowed Inbound Edges

- `Decision → Decision (depends_on)`

## Allowed Outbound Edges

- `Decision → Method (selects)`
- `Decision → Rule (justified_by)`
- `Decision → Decision (depends_on)`

## Examples

- Use FreeRTOS over bare-metal because of multi-sensor concurrency.
- Choose RAUC over SWUpdate for atomic A/B swap guarantee.

## Constraints

See `/ontology/relationships.md` for full graph rules and validation.
