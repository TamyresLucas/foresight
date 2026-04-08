---
name: "performance-profiling"
description: "Guia rápido para profiling e isolamento de gargalos (CPU, render, queries)"
category: "Security & Performance"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: performance-profiling

description: Guia rápido para profiling e isolamento de gargalos (CPU, render, queries)

scope: Security & Performance

when: Ao investigar lentidão, regressões, long tasks, ou endpoints/queries suspeitos

workflow: Performance Investigation (TBD)

next-step: Rodar profiling, registrar hipótese → evidência → correção → before/after em Execution Logs.

related: 

# Performance Profiling

## 🎯 Purpose / Overview

Ajudar a identificar causa raiz de problemas de performance com um fluxo repetível: medir, perfilar, isolar, corrigir e validar.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir a métrica e cenário

2) Escolher ferramenta de profiling (por camada)

3) Capturar evidência

4) Isolar o hotspot

5) Aplicar correção mínima

6) Validar before/after

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```plain text
Input:
- Flow: report dashboard load
- Symptom: TTI ~9s

Output:
- Hotspot: query N+1 (endpoint /reports)
- Fix: batch query + cache
- Before/after: TTFB 2.1s → 0.6s
- Log: <execution-log-url>
```

## 🔗 Related Skills