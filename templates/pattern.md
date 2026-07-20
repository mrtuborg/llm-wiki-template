---
title: ""
type: Pattern
otf: OTF:Structure
domain: ""
subdomain: ""
created: YYYY-MM-DD
source_refs: []
status: draft
---

# {{title}}


> **Edge Rule:** Outbound edges MUST use real Obsidian wikilink syntax: `- **label** → [[page-slug]]`
> Never use HTML comments for edges. Inbound edges are descriptive only — they are built automatically when other pages link here.


## Structure

<!-- WHAT structure this pattern defines. Abstract — no implementation details. -->

## When To Use

<!-- Context and forces that call for this pattern. -->

## Outbound Edges

- **implemented_by** → [[method-name]]
- **specializes** → [[parent-pattern-name]]

## Inbound Edges

*Inbound edge types allowed here:*
- Process → Pattern (instance_of)
- Concept → Pattern (generalized_into)
- Pattern → Pattern (specializes)

## Source
