---
name: ai-jira-global-contracts-ssot
type: Contract
domain: [AI-Jira, Governance]
source: notion:fa2410e6-f0c9-4fb4-85b4-5ce97a4219e8
status: active
installed: 2026-04-09
---

# AI-Jira — Global Contracts (SSOT)

### Objetivo

Padronizar como qualquer IA com MCP do Notion deve interpretar e executar trabalho no sistema (Kanban/Skills/Workflows/Agents) sem heurística.

### 1) Routing contract (Kanban → Workflow/Skill)

- Nunca inferir pelo texto do card.
- **Regra:** se Workflow Key vazio → Status = Bloqueado + Execution Log Blocked com o que falta.
- Se Workflow Key preenchido → Workflow (canônico) deve ser derivado 1:1 (mapping SSOT do próprio campo).

**Para Workflow Key = DOCS_WORKFLOW:**

- Arquitetura de artefatos (Plan → Epic → PRD → Test Plan → Story → Spec → Task)
- BUILD (infra/SSOT/runbooks/templates): cards que existem para manter o sistema.
- EXEC (artefatos reais do fluxo Plan→…→Task): cards que criam/atualizam artefatos do projeto.

**Regras de dependência (Stop/Block):**

- Epic só existe com Plan vinculado.
- PRD só existe com Epic vinculado.
- Test Plan só existe com PRD vinculado.
- Story só existe com PRD vinculado.
- Spec só existe com Story vinculada.
- Task só existe com Spec vinculada.

### 2) Skill Runbook template (obrigatório)

- Purpose (1 frase)
- Inputs (required/optional)
- Preconditions / Stop-Block
- Steps
- Outputs
- Logging (Execution Log: exec + review)
- Handoff

### 3) Workflow Protocol template (obrigatório)

- Purpose
- Trigger
- Routing rules (por propriedades)
- Stop/Block
- Logging
- Handoff
- Skills usadas (chain)

### 4) Agent Spec exportável (copy/paste)

Campos mínimos:

- agent_id, display_name, purpose
- scope_notions
- routing_rules
- stop_block_rules
- logging_rules
- workflows_allowed[]
- skills_allowed[]

### 5) Estados operacionais (Kanban)

- Execução concluída → card = Review required + criar Execution Log (exec)
- Revisão concluída → card = Feito + criar Execution Log (review)

### 6) Idempotência

- Task ID é a chave canônica para upsert/anti-duplicata.
- Rodar 3x não pode criar duplicatas.
