---
name: "bundle-optimizer"
description: "Otimiza bundles (size, splitting, caching) para melhorar performance de carregamento"
category: "Security & Performance"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: bundle-optimizer

description: Otimiza bundles (size, splitting, caching) para melhorar performance de carregamento

scope: Security & Performance

when: Quando bundles estão grandes, builds lentos, ou métricas web pioram após mudanças

workflow: Bundle Optimization (TBD)

next-step: Medir baseline, aplicar 1-2 otimizações, validar before/after e registrar em Execution Logs.

related: 

# Bundle Optimizer

## 🎯 Purpose / Overview

Reduzir custo de carregamento e tempo até interação melhorando tamanho do bundle, divisão (code splitting) e cache.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Medir baseline

2) Identificar top contributors

3) Aplicar otimizações

4) Validar before/after

5) Registrar decisão

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```plain text
Before: app.js 1.2MB
Change: lazy-load editor + remove moment locales
After: app.js 650KB, editor chunk 420KB
Metric: LCP 3.2s → 2.4s
```

## 🔗 Related Skills