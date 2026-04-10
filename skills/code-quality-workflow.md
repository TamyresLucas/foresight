# Code Quality Workflow
**Trigger:** PR gate ou pedido de review
**Preconditions:** repo + branch + link do PR (ou commit) definidos.
**Stop / Block:**
- Sem repo/branch/PR
- CI inexistente e não há como executar localmente
- Falha bloqueante recorrente sem causa determinística
## Steps
### Step 1 — Rodar checks
Execute: Read skills/clean-code.md
Inputs: repo, branch, PR link
Outputs: lint/type/test/build logs
### Step 2 — Identificar falhas
Execute: Read skills/clean-code.md
Inputs: logs from Step 1
Outputs: classificação de falhas (bloqueantes vs warnings)
### Step 3 — Corrigir falhas
Execute: Read skills/clean-code.md
Inputs: lista de falhas
Outputs: correções aplicadas ou tasks criadas
### Step 4 — Registrar evidências
Execute: Read skills/clean-code.md
Inputs: links de CI/logs, decisão final
Outputs: Execution Log (exec/review)
## Branching
- Se falha bloqueante: Corrigir ou criar task (Step 3) e re-rodar (Step 1).
- Se PASS: Registrar evidências (Step 4) e seguir para Handoff.
## Handoff
- Execução: Review required
- Review: Feito
## Logging
- Execution start: create Execution Log (exec) linked to triggering card
- Completion: create Execution Log (review) with PASS/FAIL + evidence
## Rules
- Never skip a step
- Never infer inputs — if a required input is missing, stop and log what is missing
- Follow branch logic exactly as written above
