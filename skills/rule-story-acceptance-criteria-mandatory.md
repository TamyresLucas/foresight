---
name: contract-story-acceptance-criteria-mandatory
type: Contract
domain: [Governance, Workflows]
source: notion:e33e8476-78cf-4bc0-9288-c1a0a5b2eb84
status: active
installed: 2026-04-08
---

# Contract — Story Acceptance Criteria (mandatory)

## Purpose

Garantir que toda Story tenha critérios verificáveis para declarar conclusão (independente de "todas tasks feitas").

## Rule (mandatory)

- Toda Story deve ter Acceptance Criteria preenchido (não vazio).

## Completion decision

Uma Story só pode ser considerada concluída quando:

1) Todas as tasks vinculadas estão concluídas (Kanban Review Done = Kanban Total; Ready to Auto-Done = true), e

2) Houve revisão comparando Execution Logs/artefatos com o Acceptance Criteria e o resultado foi PASS.

## Stop / Block

- Se Acceptance Criteria estiver vazio: bloquear decomposição/execução e manter a Story em estado não-final, registrando motivo objetivo.

## Outputs

- Acceptance Criteria explícito (texto)
- Evidência navegável via logs/links para suportar PASS/FAIL.
