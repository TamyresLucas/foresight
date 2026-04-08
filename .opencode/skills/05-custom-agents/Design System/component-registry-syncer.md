---
name: "component-registry-syncer"
description: "Sincroniza o estado do registry de componentes (Notion) com o repo (GitHub): atualiza descrições/uso/status, valida contratos e registra divergências com rastreabilidade em Execution Logs."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: component-registry-syncer

description: Sincroniza mudanças do repo para o registry do Design System no Notion com rastreabilidade.

scope: Design System Components (Notion) + GitHub repo(s)

when: Quando um componente foi renomeado/movido/teve metadata alterada ou links (PR/Storybook/Changelog) mudaram.

workflow: Component Registry Workflow (

next-step: Se componente não existe no registry, usar upserter; se sync gerar divergência, abrir gap/TBD + run.

related: 

# Component Registry Syncer

## 🎯 Purpose / Overview

Garantir que a página do componente no registry reflita o estado atual do repo (path, nome, links e metadata) sem criar duplicatas.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Identificar o 

2) Definir 

3) Aplicar updates mínimos no registry (path, links, descrição/uso se aplicável).

4) Registrar 1 Execution Log com inputs/outputs.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "component_id": "card",
  "registry_page_link": "<notion-page-url>",
  "sync_reason": "MOVED",
  "new_repo_path": "packages/design-system/src/components/ui/card.tsx"
}
```

## 🔗 Related Skills