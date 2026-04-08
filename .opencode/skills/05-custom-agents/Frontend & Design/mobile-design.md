---
name: "mobile-design"
description: "Define padrões de design para mobile (layout, touch targets, navegação, responsividade, acessibilidade) para experiências consistentes."
category: "Frontend & Design"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: mobile-design

description: Define padrões de design para mobile (layout, touch targets, navegação, responsividade, acessibilidade) para experiências consistentes.

scope: Frontend & Design

when: Ao desenhar/implementar fluxos mobile-first, revisar responsividade, ou definir padrões de interação.

workflow: Mobile UI Standards (TBD)

next-step: Aplicar no PR/Design review e registrar decisões (trade-offs) no Execution Log.

related: 

# Mobile Design

## 🎯 Purpose / Overview

Criar baseline de padrões mobile para reduzir inconsistências e evitar regressões de usabilidade.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir breakpoints e comportamento mobile-first (

2) Definir touch targets mínimos (ex.: 44px) (

3) Definir padrões de navegação (header, back, drawers) (

4) Definir estados e feedback (loading/empty/error).

5) Validar com testes manuais em viewport/device.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "min_touch_target_px": 44,
  "states_required": ["loading", "empty", "error"],
  "breakpoints": ["sm", "md", "lg"]
}
```

## 🔗 Related Skills