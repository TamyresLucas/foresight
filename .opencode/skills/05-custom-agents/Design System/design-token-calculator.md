---
name: "design-token-calculator"
description: "Calcula/gera tokens derivados a partir de tokens base (ex.: aliases, semânticos, estados, escalas) seguindo regras determinísticas (Token Rules), e valida consistência antes de sincronizar com o repo."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: design-token-calculator

description: Calcula tokens derivados a partir de Token Rules de forma determinística e valida consistência antes de sync.

scope: Design Tokens (Notion) + Token Rules + outputs para repo

when: Quando um Token Set muda, quando precisar recomputar aliases/semânticos, ou antes de rodar design-token-sync.

workflow: Token Maintenance Workflow (

next-step: Se validações passarem, rodar design-token-sync; se falhar, registrar gaps/TBD e bloquear.

related: 

# Design Token Calculator

## 🎯 Purpose / Overview

Gerar tokens derivados (aliases/semânticos/estados/escalas) a partir de regras explícitas (Token Rules), com saída reproduzível.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Selecionar 

2) Carregar Token Rules aplicáveis (por escopo).

3) Computar tokens derivados (sem inventar valores; apenas aplicar regras).

4) Validar:

5) Registrar 

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "token_set": "Default (Template) — Light",
  "scope": ["colors", "charts"]
}
```

## 🔗 Related Skills