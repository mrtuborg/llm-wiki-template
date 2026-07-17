# ontology/relationships.md
# Semantic Edge Specification (Authoritative)

This file defines ONLY semantic edges between ontology node types.
No filesystem artifacts may appear in this file.

Node Types:

**Axiom** — irreducible truth: physical law, protocol guarantee, hardware constraint, timing invariant. Cannot be derived from reasoning. Does not change. Has no justification. Foundation of the wiki.
  Examples: "SPI clock polarity must remain stable during transfer." "Interrupt latency ≤ 4 µs."

**Entity** — concrete object that exists: peripheral, module, data structure, component.
  Examples: UART peripheral, DMA channel, Timer2, struct Packet, SensorDriver.

**Process** — sequence of actions or transformations that entities participate in.
  Examples: SamplingLoop, PacketTransmission, BootSequence.

**Pattern** — abstract structural form of behavior. Says WHAT structure, not HOW to implement.
  Examples: Observer, Event Loop, Retry Pattern, State Machine, Debounce Pattern.

**Method** — concrete implementation of a Pattern. Says HOW exactly.
  Examples: "Debounce via 3-sample majority filter." "Observer via function pointers and static array."

**Decision** — recorded choice with rationale, alternatives, and constraints. Comes only from conversational reasoning.
  Examples: "Use FreeRTOS over bare-metal because of multi-sensor concurrency requirements."

**Rule** — formalized justification for a Decision. Derivable from reasoning. Context-dependent. Can change.
  Examples: "Use DMA for buffers > 256 bytes." "Prefer static allocation in ISR paths."

**Concept** — abstract idea that generalizes entities or rules. Not a concrete object.
  Examples: Backpressure, Idempotency, Temporal coherence, Resource ownership.

**Overview** — human-readable page explaining one Concept: summary, context, examples, limitations.

**Synthesis** — architect-level page integrating multiple Overviews into a unified cross-domain model.

Key differentiators:
- Axiom vs Rule: Axiom is immutable foundation; Rule is contextual justification that can change.
- Pattern vs Method: Pattern is abstract structure; Method is concrete implementation.
- Entity vs Concept: Entity is concrete object; Concept is abstract idea generalizing objects/rules.
- Overview vs Synthesis: Overview explains one concept; Synthesis integrates many.

Allowed Semantic Edges:
- Axiom → Entity (defines)
- Axiom → Process (constrains)
- Entity → Process (participates_in)
- Process → Pattern (instance_of)
- Pattern → Method (implemented_by)
- Decision → Method (selects)
- Method → Concept (abstracted_into)
- Decision → Rule (justified_by)
- Rule → Concept (abstracted_into)
- Concept → Pattern (generalized_into)
- Concept → Overview (summarized_into)
- Overview → Synthesis (integrated_into)
- Decision → Decision (depends_on)
- Entity → Entity (relates_to)
- Process → Process (follows)
- Pattern → Pattern (specializes)

Forbidden Semantic Edges:

By epistemic layering:
- Any semantic edge pointing FROM Synthesis.
- Any semantic edge pointing TO Axiom.
- Any semantic edge pointing FROM Axiom except Axiom → Entity and Axiom → Process.

By ontology:
- Any semantic edge type not listed above.
- Any semantic edge connecting nodes across layers in reverse direction.
- Any cycle except Decision → Decision.

By pipeline:
- Any semantic edge to or from filesystem artifacts (raw, reconstructed raw).
- Any semantic edge created outside Ingestion or Compilation.

Validation Rules:

Axioms: outbound edges only.
Synthesis: inbound edges only.
All other nodes: at least one inbound AND one outbound semantic edge.

Exception: upper-layer nodes (Decision, Rule, Concept, Overview, Synthesis)
MAY have missing inbound edges if no Decision Log content exists yet.
