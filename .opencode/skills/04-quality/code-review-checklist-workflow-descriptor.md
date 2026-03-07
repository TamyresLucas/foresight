name: "Code Review Checklist"
description: "Executa checklist completo de code review para PRs"
author: "Foresight Design System"

inputs:
  pr-number:
    description: "Número do Pull Request"
    required: true
  base-branch:
    description: "Branch base para comparação"
    required: false
    default: "main"

runs:
  using: "node20"
  main: "../scripts/code-review-checklist.js"

# Trigger específico
trigger:
  events: ["pull_request"]
  branches: ["main", "develop"]

# Condições
conditions:
  - pr-opened: true
  - files-changed: true
