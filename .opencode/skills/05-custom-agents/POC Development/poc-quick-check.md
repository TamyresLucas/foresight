---
name: "poc-quick-check"
description: "Checklist rápido para validar um POC (escopo, riscos, demo, critérios de sucesso) antes de investir mais tempo."
category: "POC Development"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: poc-quick-check

description: Checklist rápido para validar um POC (escopo, riscos, demo, critérios de sucesso) antes de investir mais tempo.

scope: POC Development

when: No início de um POC ou antes de concluir um POC para decidir se vira iniciativa/epic.

workflow: POC Workflow (

next-step: Se PASS: seguir para poc-workflow; se FAIL: registrar blockers e encerrar POC.

related: 

# POC Quick Check

## 🎯 Purpose / Overview

Garantir que um POC tenha objetivo claro, demo mínima e critérios de decisão, evitando “POC infinito”.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir objetivo (1 frase).

2) Definir demo mínima (o que será mostrado).

3) Definir critérios de sucesso:

4) Definir riscos e limitações (

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "goal": "Validate if we can auto-sync DS tokens",
  "demo": "Generate PR from Notion token change",
  "success_criteria": ["PR created", "No breaking changes"],
  "timebox_days": 3
}
```

## 🔗 Related Skills