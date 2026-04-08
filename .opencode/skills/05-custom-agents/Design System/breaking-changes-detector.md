---
name: "breaking-changes-detector"
description: "Detecta potenciais breaking changes em componentes/tokens/docs do Design System (ex.: renames, removals, alterações de contract) e gera um relatório de impacto para revisão antes do merge/release."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: breaking-changes-detector

description: Detecta e reporta breaking changes no Design System (componentes/tokens/docs) antes de merge/release.

scope: Design System (foresight DS + registry + tokens)

when: Quando houver PR/diff que altere API pública (exports/props/tokens) ou suspeita de breaking change.

workflow: Design System — Release/Promotion (TBD: workflow canônico)

next-step: Se BREAKING, gerar migration guide + changelog; se NON_BREAKING, seguir com doc/sync.

related: 

# Breaking Changes Detector

## 🎯 Purpose / Overview

Detectar mudanças que quebram consumidores (API, tokens, exports) e produzir um veredito determinístico com evidências.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Coletar 

2) Definir 

3) Comparar “antes vs depois” para:

4) Produzir 

5) Registrar em Execution Log (inputs + outputs + links).

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "component_id": "button",
  "change_ref": "https://github.com/.../pull/123",
  "public_api_surface": {
    "exports": ["Button"],
    "tokens": ["--primary", "--secondary"],
    "props": ["variant", "size"]
  }
}
```

## 🔗 Related Skills