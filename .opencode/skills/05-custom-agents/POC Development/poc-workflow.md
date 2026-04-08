---
name: "poc-workflow"
description: "Workflow canônico para executar um POC com timebox, critérios de sucesso e decisão de promoção para Epic/Story."
category: "POC Development"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: poc-workflow

description: Workflow canônico para executar um POC com timebox, critérios de sucesso e decisão de promoção para Epic/Story.

scope: POC Development

when: Quando um POC foi aprovado (pelo quick-check) e precisa de passos claros até uma decisão final.

workflow: POC Development (canônico)

next-step: Se PASS: criar/atualizar Epic+Stories no Roadmap e cards no Kanban; se FAIL: registrar conclusão e arquivar.

related: 

# POC Workflow

## 🎯 Purpose / Overview

Executar POCs com timebox e decisão explícita (continue/stop), evitando escopo indefinido.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir timebox (dias) e entregável (demo).

2) Definir backlog mínimo (3-5 tasks) (

3) Executar em ciclos curtos, registrando resultados.

4) Ao final, decidir:

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "timebox_days": 5,
  "deliverable": "Working demo",
  "decision": "PASS",
  "notes": "Promote to epic"
}
```

## 🔗 Related Skills