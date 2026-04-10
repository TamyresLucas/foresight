---
name: workflow-key-workflow-canonical-mapping-ssot
type: Mapping
domain: [Routing]
source: notion:c941a4eb-bc23-456c-bb36-da0470a82bb1
status: active
installed: 2026-04-09
---

# Workflow Key → Workflow canonical mapping (SSOT)

### Objective

Single source of truth: Kanban.Workflow Key maps 1:1 to the canonical workflow.

### Mapping

| Workflow Key       | Canonical Workflow                                       |
| ------------------ | -------------------------------------------------------- |
| ROADMAP_HUB        | 🗺️ Roadmap Hub Workflow (Initiative → Docs → Work Items) |
| TOKEN_MAINTENANCE  | Token Maintenance Workflow                               |
| DOCS_WORKFLOW      | Documentation Workflow (A→Z)                             |
| COMPONENT_CREATION | Component Creation Workflow                              |
| WORKFLOW_CHAINS    | Workflow — Frontend & Design Standards Chain             |
| SKILL_LIFECYCLE    | Workflow — Orphan Skills Intake (auto-assign)            |
| TESTING_QA         | Testing Workflow (A→Z + QA Gate)                         |
| SECURITY_PERF      | Workflow — Security & Performance Ops Chain              |
| BACKEND_INFRA_OPS  | Workflow — Backend & Infra Ops Chain                     |

### Rule (auto-fill)

- Workflow Key is the SSOT input.
- If Workflow Key is set and matches this list: auto-fill the task's Canonical workflow to the mapped workflow (1:1).
- If Workflow Key is empty or not in this list: leave Canonical workflow empty (do not infer from task text).
- Never infer mapping from task text.
