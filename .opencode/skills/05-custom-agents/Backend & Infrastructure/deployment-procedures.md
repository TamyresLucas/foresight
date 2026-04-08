---
name: "deployment-procedures"
description: "Define procedimentos de deploy (ambientes, CI/CD, rollback, checks) para releases previsíveis e auditáveis."
category: "Backend & Infrastructure"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: deployment-procedures

description: Define procedimentos de deploy (ambientes, CI/CD, rollback, checks) para releases previsíveis e auditáveis.

scope: Backend & Infrastructure

when: Antes de fazer deploy, ao criar pipeline CI/CD, ou ao responder incidentes de release.

workflow: Deployment & Release Management (TBD)

next-step: Executar checklist de deploy e registrar outcome (Success/Failed) em Execution Logs.

related: 

# Deployment Procedures

## 🎯 Purpose / Overview

Padronizar deploys para reduzir risco de downtime e facilitar investigação/rollback.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir ambientes (dev/staging/prod) e variáveis/configs (

2) Definir gates mínimos:

3) Executar deploy.

4) Validar health checks e métricas.

5) Se falhar: rollback + registrar causa.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```bash
# Deploy checklist (example)
- run tests
- apply migrations
- deploy to staging
- smoke test
- promote to prod
- monitor 15m
```

## 🔗 Related Skills