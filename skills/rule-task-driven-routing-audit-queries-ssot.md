---
name: task-driven-routing-audit-queries-ssot
type: Audit
domain: [Routing]
source: notion:d6a89e96-7fe7-4bff-9451-973a47b6e29f
status: active
installed: 2026-04-09
---

# Task-driven routing — Audit queries (SSOT)

### Objective

Define deterministic audits for Task-driven routing readiness.

### A) Kanban readiness audits (SQL)

1. **Cards missing Workflow Key**
   - Query: `SELECT COUNT(*) FROM Kanban WHERE Workflow Key is empty`
   - Current count: 36

2. **Cards missing Task ID**
   - Query: `SELECT COUNT(*) FROM Kanban WHERE Task ID is empty`
   - Current count: 0

3. **DOCS_WORKFLOW cards missing Doc Type**
   - Query: `SELECT COUNT(*) FROM Kanban WHERE Workflow Key='DOCS_WORKFLOW' AND Doc Type is empty`
   - Current count: 3

### B) Workflow compliance audits (SQL)

1. **Workflows Active missing Trigger**
   - Current count: 0

2. **Workflows Active missing Description**
   - Current count: 0

3. **Workflows Active missing AI Recommendation**
   - Current count: 0

### Rule

- PASS gates only when all counts are 0, OR when each non-zero item is explicitly set to Bloqueado with an Execution Log describing what is missing (no inference).
