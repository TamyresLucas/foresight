---
name: behaviour-isolation-rule-ssot
type: Contract
domain: [Workflows, Governance]
source: notion:f678e94b-bc61-4da0-aa67-8f5b7462990c
status: active
installed: 2026-04-08
---

# Behaviour Isolation Rule (SSOT)

## Purpose

Garantir que cada Task represente exatamente 1 behaviour isolado, reduzindo acoplamento e tornando execução/review determinísticos.

## Rule (obrigatória)

- 1 task = 1 behaviour.
- Behaviour = uma mudança de estado observável e testável.
- Se uma task cobrir 2+ behaviours independentes → dividir.
- Se exigir tocar 2+ camadas (UI + API + DB) → dividir por camada, com dependência explícita.
- Stop/Block se o escopo não for expressável como 1 Acceptance Criterion verificável.

## Examples (split patterns)

- Ex 1 (2 behaviours): “Adicionar botão + persistir preferência” → split em:
- Ex 2 (multi-layer): “Criar endpoint + atualizar UI” → split por camada e encadear dependências.

## Stop / Block

- AC único/verificável ausente.
- Behaviours múltiplos sem split.
- Mistura de lógica de negócio na UI quando o contract de boundary exige hook/service dedicado.

## Where referenced

- Skills/Workflows que referenciam este contract devem mencionar este link em “Related SSOT/Contracts”.
