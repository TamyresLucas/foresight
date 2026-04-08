---
name: "frontend-design"
description: "Define padrões de design e implementação frontend (layout, estados, acessibilidade, componentes, responsividade) para consistência de UI."
category: "Frontend & Design"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: frontend-design

description: Define padrões de design e implementação frontend (layout, estados, a11y, responsividade) para consistência de UI.

scope: Frontend & Design

when: Ao criar telas/fluxos, definir componentes, ou revisar consistência visual/UX.

workflow: UI Standards (TBD)

next-step: Aplicar no PR e registrar decisões de design (trade-offs) no Execution Log.

related: 

# Frontend Design

## 🎯 Purpose / Overview

Criar um baseline de padrões (layout, spacing, estados, a11y) para reduzir inconsistências e acelerar entregas.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir grid/layout e breakpoints (

2) Definir estados obrigatórios (loading/empty/error/disabled).

3) Definir regras mínimas de acessibilidade (labels, focus, contrast) (

4) Usar componentes do DS quando disponíveis.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "states_required": ["loading", "empty", "error", "success"],
  "a11y": ["labelled-controls", "focus-visible"],
  "responsive": ["mobile", "desktop"]
}
```

## 🔗 Related Skills