---
name: contract-epic-readiness-specs-qa-gating
type: Contract
domain: [Routing, Governance, Workflows]
source: notion:54bf4951-9638-4e24-9c3f-d2456fc87ed9
status: active
installed: 2026-04-08
---

# Contract — Epic readiness (Specs + QA gating)

## Purpose

Define critérios determinísticos para uma Epic estar pronta para ser decomposta em Stories e Tasks.

## Rules (deterministic)

- Specs são obrigatórias: a Epic deve ter pelo menos 1 item em Specs.
- QA Test Plan é condicional:
- QA Plan Type (quando Doc Type = QA Test Plan)

## Default (quando QA é exigido)

Quando QA Test Plan required = true e ainda não existir QA Test Plan vinculado:

- O PM Agent deve criar/upsert um Project Doc com Doc Type = QA Test Plan e QA Plan Type = Code Review (default para produtos com roadmap).

## Stop / Block

Bloquear decomposição (não criar novas Stories/Tasks) se:

- Specs vazia; ou
- QA Test Plan required = true e QA Test Plan vazia; ou
- QA Test Plan existe mas Doc Type != QA Test Plan; ou
- QA Test Plan existe e QA Plan Type vazio.

## Outputs

- Epic com flags atualizados: QA Test Plan required e Ready for decomposition.
- Motivo objetivo de bloqueio registrado (quando aplicável).
