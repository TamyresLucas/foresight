---
name: "storybook-component-first"
description: "Define a regra de desenvolvimento ‘component-first’: componente nasce no Design System (Storybook como gate), com stories, docs e tokens antes de ser consumido por apps."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: storybook-component-first

description: Exige fluxo component-first: componente nasce no DS com stories no Storybook antes de consumo por apps.

scope: Design System (repo + Storybook + registry)

when: Ao criar/promover componente para o DS, ou quando precisar garantir coverage mínima no Storybook.

workflow: Component Creation Workflow (

next-step: Após stories ok, seguir para enforcement/gates de produção.

related: 

# Storybook Component-First

## 🎯 Purpose / Overview

Padronizar que todo componente do DS tenha Storybook como gate mínimo (stories + link registrado), reduzindo drift e aumentando verificabilidade.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir 

2) Garantir arquivo de story (no padrão do repo): 

3) Cobrir estados mínimos (definir 

4) Rodar build do Storybook (ou CI) e obter URL.

5) Registrar URL no registry do componente (Design System Components) em “Docs / Links”.

6) Criar 1 Execution Log com inputs/outputs.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "component_id": "button",
  "component_entry": "packages/design-system/src/components/ui/button.tsx",
  "story_variants_required": ["default", "secondary", "destructive", "disabled"]
}
```

## 🔗 Related Skills