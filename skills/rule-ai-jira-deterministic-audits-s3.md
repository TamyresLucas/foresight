---
name: ai-jira-deterministic-audits-s3
type: Audit
domain: [AI-Jira]
source: notion:4f16a21f-cf11-49c5-9117-2f2ff3474c8c
status: active
installed: 2026-04-09
---

# AI-Jira — Deterministic Audits (S3)

### Objetivo

Definir auditorias determinísticas (queries + amostra) para validar executabilidade system-wide.

### Auditorias (definição)

1. Kanban: cards Feito sem Execution Logs = 0
2. Workflows: Status=Active sem campos mínimos do Protocol (Trigger/Description) = 0
3. Skills (Tier 0/1): sem campos mínimos do Runbook = 0 (ou explicitamente Blocked)
4. Agents (Active): sem Agent Spec exportável = 0 (ou explicitamente Blocked)

### Amostragem (determinística)

- Se a auditoria envolver checagem manual de conteúdo: selecionar primeiros 10 itens por createdTime (ASC) e revisar.

### PASS/FAIL

- PASS somente se todas as auditorias forem 0 (com exceções explicitamente registradas como Blocked e com log).
