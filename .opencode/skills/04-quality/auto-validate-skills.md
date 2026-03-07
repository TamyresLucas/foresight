name: "Auto-Validate Skills"
description: "Valida aderência do componente às skills do workspace"
author: "Foresight Design System"

inputs:
  component-path:
    description: "Caminho do componente a ser validado"
    required: true
  component-type:
    description: "Tipo do componente (ui, survey-builder, etc.)"
    required: false

runs:
  using: "node20"
  main: "../scripts/validate-skills.js"

# Trigger específico para esta regra
trigger:
  events: ["push", "pull_request"]
  paths: ["src/components/**/*"]

# Condições para execução
conditions:
  - skills-installed: true
  - component-exists: true
