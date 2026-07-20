# Entity — Ontology Definition

**OTF Category:** `OTF:Object`  
**Tagline:** Concrete object that exists

## Definition

Peripheral, module, data structure, component, or any concrete thing that can be named and referenced.

## Allowed Inbound Edges

- `Axiom → Entity (defines)`
- `Entity → Entity (relates_to)`

## Allowed Outbound Edges

- `Entity → Process (participates_in)`
- `Entity → Entity (relates_to)`

## Examples

- UART peripheral
- DMA channel
- Timer2
- struct Packet
- SensorDriver
- nRF52840 SoC

## Constraints

See `/ontology/relationships.md` for full graph rules and validation.
