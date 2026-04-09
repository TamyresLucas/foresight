---
name: evidencia-minima-prova-de-execucao
type: Contract
domain: [Governance, Workflows]
source: notion:14a2ea5f-da1a-453e-b6fd-ae4c7ba6e8e6
status: active
installed: 2026-04-08
---

# Evidência mínima — prova de execução

## Objetivo (SSOT)

Este contrato define o procedimento mínimo e verificável para declarar que uma task foi realmente executada (e não apenas “reportada” por IA), usando evidência navegável + gates + logging (exec/review).

Regra de ouro:

- “Success” (exec) só é permitido quando existe evidência navegável suficiente.
- “PASS” (review) só é permitido quando a evidência é verificável por outra pessoa/agente.
- Se não dá para provar → Blocked (falta insumo/evidência) ou Failed (tentou e falhou com evidência).
---

## Escopo

Aplica-se a qualquer execução registrada em 🧾 Execution Logs e/ou concluída via Kanban.

---

## Definições

- Evidência navegável: link/artefato que pode ser aberto e inspecionado (Notion page/row, PR, CI run, preview, Storybook, arquivo, etc.).
- Run (exec): execução (o “fazer”).
- Run (review): verificação (o “provar”).
- Status (no log): Success | Blocked | Failed.
---

## Procedimento canônico (A→Z)

### A) Determinar o tipo de output (classificação)

Classifique a task em 1 tipo (para evitar “evidência genérica”):

1) Notion-only: a mudança é um artefato no Notion (page/db row/template).

2) Code/Repo: mudança em repo (PR/commit, CI, build).

3) Doc com claim: texto final com afirmações (portfólio, narrativa, relatório) que exigem evidências.

4) Mixed: combina 2 ou mais tipos acima.

### B) Listar requisitos mínimos da task (Acceptance Criteria)

- Se a task não tiver AC explícito: Blocked.
- Se a task tiver AC, copie os itens no log (ou linke o card/página que contém os AC).
### C) Mapear cada requisito → evidência

Para cada requisito/AC, registrar um item requisito → evidência.

Regra: requisito sem evidência = requisito não comprovado.

### D) Coletar evidências (mínimo obrigatório)

Obrigatório:

- URL da(s) página(s)/row(s) afetada(s).
- Se for update: apontar o que mudou (seção/propriedade/template).
Obrigatório (quando aplicável ao escopo):

- Link do PR (ou commit) que contém a mudança.
- Link do CI run (ou output equivalente) que comprova gates (tests/lint/typecheck).
- Link de preview/Storybook quando o AC depende de UI.
Se a task exige PASS/FAIL de gates mas não existe link do run: Blocked.

A execução EXEC deve sempre produzir evidência objetiva de que:

1) A IA trabalhou apenas nos arquivos permitidos (allowlist) e dentro do escopo definido.

2) Cada mudança feita tem justificativa rastreável para um requisito/AC.

3) Não houve alterações colaterais fora do escopo.

Checklist mínimo de evidência (EXEC):

- Scope/allowlist explícita (no card ou no Execution Log Inputs):
- Git diff comprovável:
- Mapeamento mudança → AC: para cada arquivo alterado, registrar qual AC ele atende (1 linha por arquivo)
- Gates: links para CI run e/ou logs de comandos rodados localmente (quando CI não existe)
Stop/Block (EXEC scope compliance):

- Allowlist ausente → Blocked.
- Arquivo alterado fora da allowlist → Failed (ou Blocked se for possível reverter dentro do mesmo run).
- Mudanças sem mapeamento para AC → review FAIL.
No review, a pessoa/agente deve conseguir:

- Abrir o PR/commit e confirmar os arquivos tocados.
- Confirmar que os arquivos tocados batem com allowlist.
- Confirmar que o diff atende os AC (via evidência de testes/preview).
- Se qualquer check falhar → review FAIL.
Obrigatório (quando aplicável ao escopo):

- Link do PR (ou commit) que contém a mudança.
- Link do CI run (ou output equivalente) que comprova gates (tests/lint/typecheck).
- Link de preview/Storybook quando o AC depende de UI.
Se a task exige PASS/FAIL de gates mas não existe link do run: Blocked.

Obrigatório:

- Link para o Evidence Pack (interno) OU lista de fontes/links que sustentam as claims.
- Se uma claim não pode ser sustentada: reescrever para algo verificável ou marcar Failed (se o objetivo era manter a claim original).
### E) Registrar o Execution Log (exec)

O log de execução deve conter:

- Link do item de origem (card/página)
- Inputs usados (links/ids)
- Outputs gerados (links)
- Mapa requisito→evidência
- Status preliminar: Success somente se todos os requisitos tiverem evidência; caso contrário Blocked ou Failed.
### F) Rodar revisão (Execution Log — review)

A revisão é um segundo run (ou seção separada) com as regras:

- Verificar que cada link abre.
- Verificar que a evidência corresponde ao requisito (não apenas “existe um link”).
- Se algum requisito não estiver comprovado → review = FAIL e a execução deve voltar para Blocked/Failed.
### G) Definir veredito final

- Done/Success (final) só quando:
- Blocked quando:
- Failed quando:
---

## Regras de Stop/Block (obrigatórias)

1) AC ausente/ambíguo → Blocked.

2) “Success” sem evidência navegável → Blocked.

3) Evidência existe mas não prova o requisito (mismatch) → review FAIL.

4) Link quebrado / sem acesso → Blocked (até resolver acesso).

---

## Logging (obrigatório)

Regras globais para qualquer run registrado em 🧾 Execution Logs.

### Campos obrigatórios (enforcement via contrato)

1) Gerado por (relation)

- Regra: todo run deve preencher a propriedade Gerado por.
- Valor deve ser sempre um registro da “Equipe (Agentes + Eu)”.
- Se a execução foi feita por um Role Agent, preencher com o Role Agent executor (ex.: “Role Agent — QA Analyst”), ou com o protocolo que operou (se você registrar protocolos ali).
