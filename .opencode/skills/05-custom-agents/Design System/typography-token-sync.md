---
name: "typography-token-sync"
description: "Sincroniza tokens de tipografia (font-family/size/line-height/weight/letter-spacing) entre Notion (SSOT) e o repo, garantindo consistência e evitando drift entre temas/modes."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: typography-token-sync

description: Sincroniza tokens de tipografia entre Notion (SSOT) e o repo, evitando drift entre temas/modes.

scope: Design Tokens (tipografia) + Token Rules + repo de Design System

when: Quando houver mudança em tokens de tipografia no Notion, antes/depois de alterar CSS de tipografia no repo, ou para drift check.

workflow: Token Maintenance Workflow (

next-step: Se mudanças forem necessárias, encaminhar para design-token-sync (PR + Execution Log); se faltarem inputs, bloquear com TBD.

related: 

# Typography Token Sync

## 🎯 Purpose / Overview

Manter tipografia consistente entre Notion (decisão/SSOT) e o repo (implementação), garantindo que font-family/size/line-height/weight/letter-spacing não entrem em drift.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir 

2) Coletar tokens de tipografia do Notion (valores explícitos).

3) Mapear tokens → arquivos no repo (CSS vars / bridge), sem inventar valores.

4) Gerar diff (o que muda) e, se aplicável, abrir PR.

5) Criar 1 Execution Log com inputs/outputs.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "token_set": "Default (Template) — Light",
  "scope": ["typography"]
}
```

## 🔗 Related Skills