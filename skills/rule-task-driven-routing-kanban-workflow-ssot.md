---
name: task-driven-routing-contract-kanban-workflow-ssot
type: Contract
domain: [Routing]
source: notion:63d89620-2e7d-400e-b064-f66253320b4f
status: active
installed: 2026-04-08
---

# Task-driven routing contract (Kanban → Workflow) — SSOT

## Objetivo

Garantir execução determinística: tasks do Kanban disparam **exatamente 1 workflow canônico** via propriedades, sem roteamento por intenção do usuário.

## Arquitetura de artefatos (governança)

A execução deve respeitar a hierarquia: Plan → Epic → PRD → Test Plan → Story → Spec → Task.

### BUILD vs EXEC (anti-confusão)

- Se `Work Item Type = Ops` → tratar como **BUILD** (infra/SSOT/runbooks). Não exigir `Doc Type`.
- Se `Work Item Type = Project Doc` → tratar como **EXEC** (roadmap features). Exigir `Doc Type` compatível com a etapa.

## Runbook das Tasks (Task ID)

Toda Task ID canônica deve ter um runbook determinístico (no card ou via skill linkada) contendo:

- Inputs (required/optional): propriedades do card + links (Source Item/Link)
- Preconditions / Stop-Block (o que precisa existir antes de começar)
- Steps (passo a passo, na ordem)
- Outputs (artefatos no Notion + links)
- Logging (Execution Logs: exec + review, com o que registrar)
- Handoff (como mover Status: Backlog → Em andamento → Review required → Feito)

Se a geração de tasks não conseguir preencher o runbook, ela deve atualizar o card com `Status = Bloqueado` e criar Execution Log `missing_task_runbook` com o que está faltando (sem inventar).

## Logging (obrigatório)

- Execução: criar 1 Execution Log (exec) linkado ao card.
- Revisão/gate: criar 1 Execution Log (review) linkado ao card.

## Revisão por IA (padronizada)

Quando o usuário pedir "revisar cards em Review required", usar o agente **QA Engineer** como revisor padrão. O QA Engineer deve:

- Validar a evidência do exec (outputs navegáveis + Execution Logs)
- Executar gates/checklists determinísticos do `Workflow (canônico)`/skills linkadas
- Registrar 1 Execution Log (review) com PASS/FAIL + links
- Atualizar o card: preencher `Revisado por` e mover `Review required → Done` apenas com PASS

## Triagem por IA (padronizada) — coluna No status

Quando o usuário pedir "revisar cards em No status", usar o agente **Skill Lifecycle Orchestrator (IME)** como triador padrão. O IME pode inferir e deve:

- Classificar o motivo do `No status` (ex.: missing_workflow_key, missing_task_id, missing_doc_type, missing_runbook_content, missing_skill_linkage)
- Se o problema for escolha/criação de skill: buscar/linkar skill existente ou acionar criação de skill
- Se o problema for campo obrigatório (Workflow Key/Task ID/Doc Type): não inferir; listar exatamente o que o humano deve preencher
- Registrar um Execution Log de triagem com mudanças e recomendações por card
- Atualizar o card para sair de `No status` somente quando os pré-requisitos mínimos estiverem completos

## Handoff (padrão)

- Após execução: `Status → Review required` (com log exec).
- Após revisão PASS: `Status → Done` (com log review).
- **Fila de triagem:** se o card não atende pré-requisitos mínimos → set `Status → No status` e registrar o motivo no Execution Log (sem inferir).
- **Blocked:** usar `Status → Blocked` apenas quando existir impedimento real (decisão humana necessária, ambiguidade irredutível, ou control case).

## PASS/FAIL

- PASS somente com evidência navegável nos Execution Logs.
- Sem evidência: Blocked/Fail (não marcar Feito).
