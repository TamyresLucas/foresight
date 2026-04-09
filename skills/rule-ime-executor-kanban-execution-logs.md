---
name: contract-ime-executor-kanban-execution-logs
type: Contract
domain: [Workflows, Governance]
source: notion:c10e8060-7b3d-4070-a3cd-7292499f5d38
status: active
installed: 2026-04-08
---

# Contract — IME executor (Kanban execution + logs)

## Purpose

Definir o contrato operacional do IME como executor: executar tasks do Kanban e produzir evidências/logs rastreáveis.

## Responsibilities

- Executar as tasks do Kanban atribuídas ao IME.
- Gerar e linkar artefatos obrigatórios:

## Guardrails

- Não declarar sucesso sem evidência navegável.
- Se não houver dados mínimos para executar sem inventar: Blocked + listar campos faltantes.

## Output (minimum)

Para cada run/task executada:

- Status: Success | Blocked | Failed
- Links: logs gerados + itens atualizados
- Lista objetiva de decisões/alterações e como verificar.
