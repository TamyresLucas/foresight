---
name: workflow-active-ready-checklist-ssot
type: Checklist
domain: [Workflows]
source: notion:5ba23d87-9ad9-4061-92d5-5b9ba9cedaa0
status: active
installed: 2026-04-09
---

# Workflow Active-ready checklist (SSOT)

### Objetivo

Definir critérios determinísticos para promover um Workflow para Status = Active.

### Checklist Active-ready (mínimo)

1. **Propriedades obrigatórias (Workflows DB)**
   - Status
   - Trigger (não-vazio)
   - Description (não-vazio)
   - AI Recommendation (não-vazio)

2. **Description: estrutura mínima (A→Z)**
   - A) Purpose (1 frase)
   - B) Trigger (repetir o gatilho em linguagem operacional)
   - C) Router (regras por propriedades — sem inferência)
   - D) Stop/Block (condições explícitas)
   - E) Logging (o que registrar e quando)
   - F) Handoff (qual status mover no Kanban e quando)
   - G) Skills usadas (links)

3. **AI Recommendation: protocolo compacto**
   Deve conter explicitamente:
   - Router (condições)
   - Stop/Block
   - Logging (exec + review)
   - Handoff

### Template — Execution Log (exec)

Campos mínimos:

- Run ID: `exec:workflow-hardening:<workflow-slug>:<yyyymmdd>-<seq>`
- Status: Success | Blocked | Failed
- Inputs: links + JSON curto (sem inferência)
- Outputs: links para artefatos
- Notes/Blockers: TBDs e blockers explícitos

### Template — Execution Log (review)

Campos mínimos:

- Run ID: `review:workflow-hardening:<workflow-slug>:<yyyymmdd>-<seq>`
- Status: Success | Blocked | Failed
- Inputs: link do exec log + links de evidência
- Outputs: PASS/FAIL + contagens/links
- Notes/Blockers

### Regra de promoção

- Promover Review Skill → Active somente com um Execution Log (review) PASS.
- Se houver qualquer TBD: que impeça execução determinística: manter Review Skill e registrar Blocked (sem inferência).
