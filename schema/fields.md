# Schema: Page Fields

## Required Fields (all page types)

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Unique page title |
| `type` | enum | One of the 10 page types |
| `domain` | enum | Role domain: Engineer / TechLead / Entrepreneur / Self-care / Family / Meta |
| `subdomain` | string | Functional subdomain within domain (e.g. AI-LLM, Embedded) |
| `created` | date | ISO 8601 creation date |
| `source_refs` | list | Source documents this page derives from |

## Optional Fields (all page types)

| Field | Type | Description |
|-------|------|-------------|
| `updated` | date | Last modification date |
| `otf` | string | OTF category label (e.g. OTF:Invariant) |
| `tags` | list | Free-form tags for search |
| `status` | enum | draft / reviewed / stable |

## Type-Specific Required Fields

### Axiom
| Field | Description |
|-------|-------------|
| `constraint` | The invariant stated as a formal constraint |
| `applies_to` | Entity or Process this axiom governs |

### Decision
| Field | Description |
|-------|-------------|
| `context` | Situation that prompted the decision |
| `alternatives` | Options that were considered |
| `rationale` | Why this option was chosen |
| `consequences` | Known consequences of the decision |
| `decision_type` | Architectural / Design / Process / Domain / Epistemic |

### Rule
| Field | Description |
|-------|-------------|
| `justified_by` | Decision that this rule supports |
| `condition` | Context in which this rule applies |

## Field Constraints

- `title` must be unique within a domain
- `source_refs` must reference existing files in SOURCES_PATH or pipeline/reconstructed/
- `domain` must be one of: Engineer, TechLead, Entrepreneur, Self-care, Family, Meta
- `type` is immutable after creation
