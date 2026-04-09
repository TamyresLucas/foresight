---
name: mapping-project-docs-work-generation
type: Mapping
domain: [Workflows, Governance]
source: notion:4d57944b-fba8-454c-88b8-fe26e23be577
status: active
installed: 2026-04-08
---

# Mapping — Project Docs → Work generation

## Purpose

Mapear de forma determinística como Project Docs geram trabalho (Stories/Tasks/Gates) e quais Doc Types habilitam quais etapas.

## Mapping

- PRD
- Spec (obrigatório)
- QA Test Plan (condicional)
- Execution Plan

## Stop / Block

- Sem Spec: bloquear.
- QA exigido e sem QA Test Plan + QA Plan Type: bloquear.

## Outputs

- Lista de Stories e Tasks geradas com IDs determinísticos e links para docs.
