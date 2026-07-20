# Axiom — Ontology Definition

**OTF Category:** `OTF:Invariant`  
**Tagline:** Foundation — immutable truth

## Definition

Physical law, protocol guarantee, hardware constraint, timing invariant. Cannot be derived from reasoning. Does not change. Has no justification.

## Allowed Inbound Edges

- `Axiom → Entity (defines)`
- `Axiom → Process (constrains)`

## Allowed Outbound Edges

- `No inbound semantic edges allowed`
- `Cannot be justified or derived`

## Examples

- SPI clock polarity must remain stable during transfer.
- Interrupt latency ≤ 4 µs.
- Flash erase unit is 4 KB minimum.

## Constraints

See `/ontology/relationships.md` for full graph rules and validation.
