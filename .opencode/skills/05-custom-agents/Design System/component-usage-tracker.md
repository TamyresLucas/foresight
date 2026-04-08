---
name: "component-usage-tracker"
description: "Mapeia onde cada componente do Design System é usado nos produtos/apps, gerando um inventário de uso para priorizar migrações, detectar drift e medir adoção."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: component-usage-tracker

description: Mapeia e registra onde componentes do Design System são usados para priorizar migrações e medir adoção.

scope: Design System (registry + codebases consumidoras)

when: Quando precisar de inventário de uso (adoption), antes de mudanças amplas, ou para detectar drift.

workflow: Design System Governance (TBD)

next-step: Usar o inventário para priorizar migrações e alimentar breaking-changes-detector quando houver renames/removals.

related: 

# Component Usage Tracker

## 🎯 Purpose / Overview

Criar um inventário verificável de consumo de componentes (onde/como usados) para suportar decisões de promoção, refactors e releases sem quebrar consumidores.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir 

2) Para cada 

3) Normalizar resultados:

4) Registrar um resumo + links no Execution Log.

5) (Opcional) Atualizar a página do componente no registry com um link para o inventário.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "component_id": "button",
  "scope_repos": ["TamyresLucas/foresight", "TamyresLucas/New-Survey-builder"]
}
```

## 🔗 Related Skills