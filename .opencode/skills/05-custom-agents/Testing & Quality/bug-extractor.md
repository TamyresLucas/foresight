---
name: "bug-extractor"
description: "Extrai bugs acionáveis a partir de descrições, logs e passos de reprodução"
category: "Testing & Quality"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: bug-extractor

description: Extrai bugs acionáveis a partir de descrições, logs e passos de reprodução

scope: Testing & Quality

when: Quando existe um relato de problema e você precisa gerar um bug report completo (repro/expected/actual)

workflow: Bug Triage (TBD)

next-step: Gerar bug report + perguntas de esclarecimento e registrar em Execution Logs.

related: 

# Bug Extractor

## 🎯 Purpose / Overview

Padronizar a conversão de relatos (muitas vezes vagos) em um bug report pronto para engenharia: reprodução, escopo, impacto, evidências e sugestões de investigação.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Capturar input bruto (texto + links + logs, se houver).

2) Extrair contexto:

3) Gerar bug report:

4) Identificar evidências:

5) Sugerir hipóteses e pontos de instrumentação.

6) Listar perguntas para fechar lacunas.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```plain text
Input:
"Export freezes at 80% on Chrome."

Output:
Steps:
1) Open report X
2) Click Export → CSV
3) Progress reaches ~80% and stalls
Expected: export completes and downloads file
Actual: progress stalls; UI becomes unresponsive
Env: Chrome 123, macOS
Severity: High (blocks workflow)
Questions: does it happen in incognito? dataset size? console errors?
```

## 🔗 Related Skills