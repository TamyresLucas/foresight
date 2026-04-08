---
name: "component-registry-upserter"
description: "Cria/atualiza entradas no registry de componentes (Notion) via upsert determinístico (anti-duplicata por component_id), preenchendo campos mínimos e links de rastreabilidade."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: component-registry-upserter

description: Cria/atualiza (upsert) entradas no registry de componentes do Design System no Notion sem duplicatas.

scope: Design System Components (registry Notion)

when: Quando um componente precisa ser registrado pela primeira vez ou reconciliado (anti-duplicata por component_id).

workflow: Component Registry Workflow (

next-step: Após upsert, se necessário rodar syncer para links/metadata; depois seguir gates de docs/storybook/tokens.

related: 

# Component Registry Upserter

## 🎯 Purpose / Overview

Garantir que exista exatamente 1 entrada no registry para um 

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir 

2) Rodar anti-duplicata:

3) Preencher campos mínimos determinísticos (repo/path/type/links).

4) Registrar 1 Execution Log com inputs/outputs.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "component_id": "toast",
  "repo": "TamyresLucas/foresight",
  "path": "packages/design-system/src/components/ui/toast.tsx",
  "anti_duplicate_result": "NOT_FOUND",
  "links": {
    "storybook": "?path=/docs/components-feedback-toast",
    "pr": null,
    "changelog": null
  }
}
```

## 🔗 Related Skills