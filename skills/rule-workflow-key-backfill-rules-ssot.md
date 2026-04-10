---
name: workflow-key-backfill-rules-ssot
type: Mapping
domain: [Routing]
source: notion:391b53cd-d7ad-48ce-9b7f-eb6b29aa783c
status: active
installed: 2026-04-09
---

# Workflow Key backfill rules (SSOT)

### Objective

Enable deterministic backfill of Kanban.Workflow Key without inferring from text.

### SSOT dependencies

- Task-driven contract: Task-driven routing contract (Kanban → Workflow) — SSOT
- Key→Workflow mapping: Workflow Key → Workflow canonical mapping (SSOT)

### Rule A — Derive key from Workflow (canônico) relation

If Kanban card has Workflow (canônico) set:

1. Look up that workflow in the mapping SSOT.
2. If exactly one key maps to that workflow → set Workflow Key to that key.
3. If no key maps to that workflow → set card Bloqueado + log `workflow_not_mapped`.

### Rule B — Project Doc implies DOCS_WORKFLOW

If Work Item Type = Project Doc:

- Set Workflow Key = DOCS_WORKFLOW.
- If Doc Type is empty → set Bloqueado + log `missing_doc_type`.

### Rule C — Inherit from Story when Story has canonical workflow

If Kanban card has Story set AND the Story has a single canonical workflow (or deterministic router field):

- Set Workflow Key accordingly.
- If Story router is ambiguous → Bloqueado + log `ambiguous_story_router`.

### Rule D — DOCS_WORKFLOW allowed only for Project Doc

If Workflow Key = DOCS_WORKFLOW and Work Item Type != Project Doc:

- Set card Status = Bloqueado
- Create/attach Execution Log with blocker `docs_workflow_not_project_doc`
- Do NOT infer a Doc Type.

### Non-goals

- Never infer Workflow Key from task title, keywords, or free text.

### Logging

- Any change made by these rules must be recorded in an Execution Log (batch), with:
  - List of affected card URLs
  - Rule applied (A/B/C/D)
  - Outcome (set / blocked)
