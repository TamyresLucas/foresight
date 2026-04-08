---
name: "behavioral-modes"
description: "Gerencia modos comportamentais (plan/build) dos agentes."
category: "Core Framework"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

# Behavioral Modes

## 🎯 Purpose

This skill standardizes how the AI behaves across different contexts by selecting a 

Each mode defines:

## When to Use

Trigger this skill when:

Do NOT use when:

## Implementation

Execute:

```typescript
type Mode = 'BRAINSTORM' | 'IMPLEMENT' | 'DEBUG' | 'REVIEW' | 'TEACH' | 'SHIP'

const mode = detectMode(userMessage)
```

Expected result:

If fails:

Execute:

```typescript
applyModeContract(mode)
```

Expected result:

If fails:

## Mode Definitions

## Validation

Test 6 prompts, one per mode keyword set, and verify the response pattern changes accordingly.

## Technology Context

Required Tools:

## Related Skills