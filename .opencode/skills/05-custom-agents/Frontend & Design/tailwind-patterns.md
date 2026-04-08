---
name: "tailwind-patterns"
description: "Padroniza patterns de Tailwind (utilities, composição, variants, tokens) para consistência e manutenção."
category: "Frontend & Design"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: tailwind-patterns

description: Padroniza patterns de Tailwind (utilities, composição, variants, tokens) para consistência e manutenção.

scope: Frontend & Design

when: Ao criar componentes com Tailwind, revisar classes duplicadas, ou reduzir inconsistências de style.

workflow: Styling Standards (Tailwind) (TBD)

next-step: Aplicar padrões no PR e registrar convenções novas (se houver) em Execution Logs.

related: 

# Tailwind Patterns

## 🎯 Purpose / Overview

Definir um conjunto mínimo de padrões para usar Tailwind sem virar “string soup”, mantendo consistência e facilitando refactor.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Preferir composição por classes utilitárias simples.

2) Extrair padrões repetidos para 

3) Usar tokens semânticos via CSS vars quando aplicável.

4) Definir convenção de ordenação de classes (

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```typescript
import { cva } from "class-variance-authority";

export const button = cva("inline-flex items-center", {
  variants: {
    intent: {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground"
    }
  }
});
```

## 🔗 Related Skills