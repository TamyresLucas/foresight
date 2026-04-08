---
name: "feedback-extractor"
description: "Extrai e estrutura feedback acionável a partir de texto bruto (tickets, notas, chats)"
category: "Testing & Quality"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: feedback-extractor

description: Extrai e estrutura feedback acionável a partir de texto bruto (tickets, notas, chats)

scope: Testing & Quality

when: Ao receber feedback desestruturado e precisar transformar em insights, issues e próximos passos

workflow: Feedback Triage (TBD)

next-step: Rodar extração, validar com contexto mínimo e registrar output em Execution Logs.

related: 

# Feedback Extractor

## 🎯 Purpose / Overview

Transformar feedback desestruturado em um conjunto claro de itens: problemas, evidências, impacto, severidade e sugestões de ação, reduzindo ruído e ambiguidade.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Colar o input bruto (com fonte/data, se houver).

2) Extrair entidades e contexto:

3) Normalizar em itens acionáveis:

4) Agrupar por tema e deduplicar.

5) Gerar recomendações:

6) Validar lacunas:

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```plain text
Input:
"When I try to export, it freezes after 80%. Happens on Chrome."

Output:
- Problem: Export freezes at ~80%
- Evidence: user report (Chrome)
- Impact: blocks delivery of results
- Frequency: unknown (ask support logs)
- Severity: High
- Next steps: reproduce, check export worker logs, create bug + add telemetry
```

## 🔗 Related Skills