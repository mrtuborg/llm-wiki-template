# Method — Ontology Definition

**OTF Category:** `OTF:Procedure`  
**Tagline:** Concrete implementation of a Pattern

## Definition

Specific algorithm, technique, or realization of a Pattern. Says HOW exactly.

## Allowed Inbound Edges

- `Pattern → Method (implemented_by)`
- `Decision → Method (selects)`

## Allowed Outbound Edges

- `Method → Concept (abstracted_into)`

## Examples

- Debounce via 3-sample majority filter.
- Observer via function pointers and static array.
- Retry with exponential backoff: 10ms, 20ms, 40ms.

## Constraints

See `/ontology/relationships.md` for full graph rules and validation.
