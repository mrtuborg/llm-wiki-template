# Process — Ontology Definition

**OTF Category:** `OTF:Process`  
**Tagline:** Sequence of actions

## Definition

Ordered sequence of actions or transformations that entities participate in.

## Allowed Inbound Edges

- `Axiom → Process (constrains)`
- `Entity → Process (participates_in)`
- `Process → Process (follows)`

## Allowed Outbound Edges

- `Process → Pattern (instance_of)`
- `Process → Process (follows)`

## Examples

- BootSequence
- PacketTransmission
- SamplingLoop
- DMATransfer
- FlashErase

## Constraints

See `/ontology/relationships.md` for full graph rules and validation.
