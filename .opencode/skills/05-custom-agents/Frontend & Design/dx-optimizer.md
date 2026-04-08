---
name: "dx-optimizer"
description: "Otimiza Developer Experience (DX) em projetos frontend/backend: tooling, scripts, linting, CI e ergonomia de dev loop."
category: "Frontend & Design"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: dx-optimizer

description: Otimiza Developer Experience (DX) em projetos: tooling, scripts, linting, CI e ergonomia do dev loop.

scope: Frontend & Design

when: Quando o dev loop está lento/frágil, ao configurar projeto novo, ou ao reduzir fricção de build/test.

workflow: DX Improvements (TBD)

next-step: Aplicar mudanças via PR e registrar benchmarks simples (antes/depois) no Execution Log.

related: 

# DX Optimizer

## 🎯 Purpose / Overview

Reduzir tempo de feedback e fricção (setup, build, lint, test) com mudanças pequenas, mensuráveis e reversíveis.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Medir baseline (tempo de build/test, flakiness) (

2) Identificar gargalo (deps, bundler, cache, CI).

3) Propor mudança (1-2 por vez).

4) Validar impacto (antes/depois) e regressões.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "baseline": {"build_s": 120, "test_s": 180},
  "change": "enable CI caching",
  "after": {"build_s": 75, "test_s": 140}
}
```

## 🔗 Related Skills