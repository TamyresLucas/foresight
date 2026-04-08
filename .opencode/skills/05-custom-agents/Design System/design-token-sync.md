---
name: "design-token-sync"
description: "Sincroniza alterações de Design Tokens do Notion para o repo (e vice-versa quando aplicável), seguindo Token Rules e gerando PR + Execution Log com rastreabilidade."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: design-token-sync

description: Sincroniza Design Tokens entre Notion (SSOT) e o repo, gerando PR + Execution Log e registrando drift.

scope: Design Tokens (Notion) + Token Rules + repo(s) de Design System

when: Quando houver mudança em Token Set/Token Rules, pedido de palette change, drift check, ou token novo detectado.

workflow: Token Maintenance Workflow (

next-step: Se houver PR, registrar link + artefatos no Execution Log; se drift/gaps, registrar TBDs e bloquear antes de criar options novas.

related: 

# Design Token Sync

## 🎯 Purpose / Overview

Sincronizar tokens entre Notion (fonte de decisão/SSOT) e o repositório, evitando drift e mantendo rastreabilidade (PR + Execution Logs). Não inventar valores nem criar options automaticamente.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Determinar 

2) Coletar inputs explícitos (hex/valores) quando houver mudança.

3) Rodar cálculo de derivados (se aplicável) via 

4) Aplicar mudanças no repo (arquivos de tokens) e abrir PR (quando aplicável).

5) Atualizar Notion:

6) Criar 1 Execution Log com links para PR + artefatos + páginas afetadas.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "trigger": "palette_change",
  "scope": "foresight_ds",
  "primary": "#2563EB",
  "error": "#DC2626",
  "success": "#16A34A",
  "warning": "#F59E0B"
}
```

## 🔗 Related Skills