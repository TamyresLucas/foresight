---
name: "tdd-workflow"
description: "Workflow de TDD (red-green-refactor) com checklist mínimo e exemplos"
category: "Testing & Quality"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

name: tdd-workflow

description: Workflow de TDD (red-green-refactor) com checklist mínimo e exemplos

scope: Testing & Quality

when: Ao implementar lógica nova, corrigir bugs com regressão, ou aumentar confiança sem over-testing

workflow: TDD Loop (TBD)

next-step: Escrever teste que falha, implementar mínimo, refatorar, e registrar decisão/coverage em Execution Logs.

related: 

# TDD Workflow

## 🎯 Purpose / Overview

Aplicar um ciclo simples e repetível de TDD para reduzir retrabalho e aumentar confiança: Red → Green → Refactor.

## ⏱️ When to Use / Triggers

## 🧩 Implementation / How to Use

1) Red (teste falha)

2) Green (passar rápido)

3) Refactor (limpar)

4) Expandir casos

5) Guardrails

## 🧰 Technology Context / Tools

## ✅ Validation / Success Criteria

## 💡 Example (copy/paste)

```plain text
Red: should return total with tax
Green: implement minimal calc
Refactor: extract helpers + rename vars
Add: edge case for null/rounding
```

## 🔗 Related Skills