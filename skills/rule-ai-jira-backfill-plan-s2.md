---
name: ai-jira-backfill-plan-s2
type: Plan
domain: [AI-Jira]
source: notion:a520d1f3-8f51-4fc7-bc22-8978b1aff817
status: active
installed: 2026-04-09
---

# AI-Jira — Backfill Plan (S2)

### Objetivo

Aplicar os contratos globais (SSOT) em batch para o sistema inteiro, sem inventar dados e com idempotência.

### Escopo determinístico

- Skills: Tier 0 + Tier 1 (Skills.Tier)
- Workflows: Status = Active
- Agents: Status = Active

### Regra de backfill

- Se faltar informação para completar o template → não inferir: marcar item como Blocked (ou manter status atual) e registrar no Execution Log o que falta.
- Toda mudança batch deve gerar Execution Log com lista de URLs alteradas.

### Campos mínimos por tipo

**Skill Runbook:**

- Purpose, Inputs, Preconditions/Stop-Block, Steps, Outputs, Logging, Handoff

**Workflow Protocol:**

- Purpose, Trigger, Routing rules, Stop/Block, Logging, Handoff, Skills (chain)

**Agent Spec exportável:**

- agent_id, display_name, purpose, scope_notions, routing_rules, stop_block_rules, logging_rules, workflows_allowed, skills_allowed

### Evidência

- Para cada batch, gerar uma lista de itens alterados + itens bloqueados.
- QA usa amostragem determinística: primeiros N por createdTime.
