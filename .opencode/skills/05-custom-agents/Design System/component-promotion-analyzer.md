---
name: "component-promotion-analyzer"
description: "Analisa um componente candidato e gera um relatório determinístico de prontidão para promoção (API stability, acessibilidade, tokens, docs, testes, Storybook, uso em produtos)."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: component-promotion-analyzer

description: Analisa prontidão de um componente para promoção ao Design System com critérios determinísticos.

scope: Design System (registry + repo + storybook)

when: Quando um componente é candidato à promoção (reuso, estabilidade, qualidade) ou antes de mover POC→DS.

workflow: Component Creation Workflow (TBD: canônico)

next-step: Se PROMOTE, acionar extractor + upserter/syncer; se não, registrar decisão e seguir plano.

related: 

# Component Promotion Analyzer

## 🎯 Purpose / Overview

Gerar um veredito determinístico sobre promoção de componente (POC→DS) com base em sinais verificáveis (uso, estabilidade de API, a11y, tokens, docs, tests, Storybook).

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Coletar contexto mínimo (repo path + onde é usado).

2) Executar checks objetivos:

3) Produzir 

4) Registrar em Execution Log e linkar na página do componente no registry.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "component_id": "empty-state",
  "component_context": {
    "repo": "TamyresLucas/foresight",
    "path": "packages/design-system/src/components/ui/empty-state.tsx"
  },
  "reuse_signal": ["Used in App-Foresight", "Used in POC-Survey"]
}
```

## 🔗 Related Skills