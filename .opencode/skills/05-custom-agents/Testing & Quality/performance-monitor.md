---
name: "performance-monitor"
description: "Detecta e previne performance issues antes de chegarem em produção"
category: "Testing & Quality"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: performance-monitor

description: Detecta e previne performance issues antes de chegarem em produção

scope: Testing & Quality

when: Antes de merge/deploy, ao investigar lentidão, ou após alertas de performance (frontend/backend)

workflow: Performance QA (TBD)

next-step: Rodar o checklist, registrar achados e mitigação em Execution Logs.

related: 

# Performance Monitor

## 🎯 Purpose / Overview

Detectar regressões e gargalos de performance cedo (dev/CI) e manter um checklist mínimo repetível para investigação e prevenção.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir superfície e hipótese

2) Coletar sinais rápidos

3) Isolar causa raiz

4) Aplicar mitigação mínima

5) Validar e registrar

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```plain text
Inputs:
- page/flow: <url or feature>
- env: staging
- device/network: MBP + throttling 4G
- suspected area: table render

Outputs:
- bottleneck: excessive re-render on row component
- fix: memoize row + virtualize list
- before/after: INP 450ms → 180ms
- log: <execution-log-url>
```

## 🔗 Related Skills