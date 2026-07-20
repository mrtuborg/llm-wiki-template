# Pattern — Ontology Definition

**OTF Category:** `OTF:Structure`  
**Tagline:** Abstract behavioral structure

## Definition

Abstract structural form of behavior. Says WHAT structure must exist, not HOW to implement it.

## Allowed Inbound Edges

- `Process → Pattern (instance_of)`
- `Concept → Pattern (generalized_into)`
- `Pattern → Pattern (specializes)`

## Allowed Outbound Edges

- `Pattern → Method (implemented_by)`
- `Pattern → Pattern (specializes)`

## Examples

- Observer
- Event Loop
- Retry Pattern
- State Machine
- Debounce Pattern
- EasyDMA Descriptor Pattern

## Constraints

See `/ontology/relationships.md` for full graph rules and validation.
