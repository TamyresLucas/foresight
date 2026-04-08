---
name: "api-patterns"
description: "Padroniza padrões de API (endpoints, status codes, erros, versionamento e contracts) para serviços do projeto."
category: "Backend & Infrastructure"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: api-patterns

description: Padroniza padrões de API (endpoints, status codes, erros, versionamento e contracts) para serviços do projeto.

scope: Backend & Infrastructure

when: Ao criar/alterar endpoints, definir contracts, ou revisar consistência de APIs.

workflow: Backend API Governance (TBD)

next-step: Aplicar o padrão no serviço/PR e registrar mudanças relevantes em Execution Logs.

related: 

# API Patterns

## 🎯 Purpose / Overview

Definir um conjunto mínimo de padrões para APIs para reduzir ambiguidade e garantir consistência entre serviços.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir convenção de rotas e versionamento (ex.: 

2) Definir padrão de response envelope e erros.

3) Documentar exemplos de request/response.

4) Validar consistência no PR.

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input",
    "details": [{"field": "email", "reason": "required"}]
  }
}
```

## 🔗 Related Skills