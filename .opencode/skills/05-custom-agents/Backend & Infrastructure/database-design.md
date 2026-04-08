---
name: "database-design"
description: "Define padrões de modelagem de banco (schemas, relações, índices, migrações e constraints) para manter consistência e performance."
category: "Backend & Infrastructure"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: database-design

description: Define padrões de modelagem de banco (schemas, relações, índices, migrações e constraints) para manter consistência e performance.

scope: Backend & Infrastructure

when: Ao criar/alterar tabelas/coleções, definir relações, ou revisar performance/consistência do banco.

workflow: Backend Data Modeling (TBD)

next-step: Aplicar o padrão no PR/migração e registrar decisões (trade-offs) no Execution Log.

related: 

# Database Design

## 🎯 Purpose / Overview

Padronizar decisões de modelagem para reduzir retrabalho, facilitar queries e manter integridade (constraints) sem depender de conhecimento tácito.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Definir entidade, chave primária e naming.

2) Definir relações e constraints (FK, unique, not null) (

3) Definir estratégia de migração/rollback.

4) Definir índices (com base em queries esperadas).

5) Validar em staging/CI (quando existir).

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```sql
-- Example: users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT now()
);

CREATE INDEX idx_users_created_at ON users(created_at);
```

## 🔗 Related Skills