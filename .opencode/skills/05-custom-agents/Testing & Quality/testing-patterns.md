---
name: "testing-patterns"
description: "Coleção de patterns de testes (unit/integration/e2e) para qualidade consistente"
category: "Testing & Quality"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: testing-patterns

description: Coleção de patterns de testes (unit/integration/e2e) para qualidade consistente

scope: Testing & Quality

when: Ao escrever testes novos, revisar cobertura, ou reduzir flakiness

workflow: Testing Standards (TBD)

next-step: Aplicar pattern no PR e registrar ajustes de estratégia em Execution Logs.

related: 

# Testing Patterns

## 🎯 Purpose / Overview

Fornecer um conjunto mínimo de padrões para escrever testes legíveis, confiáveis e úteis (sem “testes de implementação”).

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Escolher o tipo de teste certo

2) Pattern AAA (Arrange/Act/Assert)

3) Preferir testes orientados a comportamento

4) Controle de flakiness

5) Naming e organização

6) Performance

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```plain text
Arrange: create survey with 3 questions
Act: publish survey
Assert: status = Published and link is generated
```

## 🔗 Related Skills