---
name: task-driven-routing-playbook-human-ai
type: Playbook
domain: [Routing]
source: notion:d7035fce-33d4-492e-863d-73e2793c988d
status: active
installed: 2026-04-09
---

# Task-driven routing — Playbook (human + AI)

### Objetivo

Padronizar como criar e executar cards no Kanban para disparar workflows canônicos (sem inferência por texto).

### Campos mínimos do card (obrigatório)

- Task ID
- Workflow Key
- Work Item Type
- Contexto (inputs explícitos)

### Regras especiais

- Se Workflow Key = DOCS_WORKFLOW: Doc Type é obrigatório.

### Execução (sempre)

1. Criar 1 Execution Log (exec) linkado ao card.
2. Se faltou campo obrigatório: mover card → Bloqueado e registrar blockers.
3. Se executou: mover card → Review required.

### Revisão / Gate

1. Criar 1 Execution Log (review) com PASS/FAIL + evidências.
2. PASS → mover card → Feito.

### SSOT

- Contrato: Task-driven routing contract (Kanban → Workflow) — SSOT
- Mapping: Workflow Key → Workflow canonical mapping (SSOT)
- Auditorias: Task-driven routing — Audit queries (SSOT)
