---
name: "nodejs-best-practices"
description: "Padroniza práticas de Node.js (estrutura, async, erros, config, logging) para serviços estáveis e previsíveis."
category: "Backend & Infrastructure"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: nodejs-best-practices

description: Padroniza práticas de Node.js (estrutura, async, erros, config, logging) para serviços estáveis e previsíveis.

scope: Backend & Infrastructure

when: Ao iniciar um serviço Node.js, ao refatorar módulos, ou ao revisar bugs relacionados a async/errors/perf.

workflow: Node Service Standards (TBD)

next-step: Aplicar no código/PR e registrar decisões relevantes em Execution Logs.

related: 

# Node.js Best Practices

## 🎯 Purpose / Overview

Reduzir variabilidade entre serviços Node.js com padrões mínimos (structure, error handling, config, logging) para facilitar manutenção e debugging.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir estrutura de pastas/modules (

2) Padronizar error handling:

3) Padronizar config (env vars) e validação de startup (

4) Padronizar logging (níveis, correlação) (

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```typescript
export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public status: number = 400
  ) {
    super(message);
  }
}
```

## 🔗 Related Skills