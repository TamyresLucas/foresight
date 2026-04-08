---
name: "webapp-testing"
description: "Define estratégia e checklist de testes para web apps (smoke, regression, e2e)"
category: "Testing & Quality"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: webapp-testing

description: Define estratégia e checklist de testes para web apps (smoke, regression, e2e)

scope: Testing & Quality

when: Ao preparar release, montar suite de testes, ou diagnosticar gaps de cobertura

workflow: Web App Testing (TBD)

next-step: Definir suite mínima, rodar checks e registrar resultados em Execution Logs.

related: 

# Web App Testing

## 🎯 Purpose / Overview

Padronizar como testar web apps de forma eficiente (cobertura útil com custo controlado), reduzindo regressões.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir fluxos críticos

2) Montar smoke suite

3) Montar regression suite

4) E2E mínimo

5) Observabilidade

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```plain text
Smoke:
- login works
- create item
- edit item
- export

Regression:
- permissions
- validation errors
```

## 🔗 Related Skills