---
name: "typescript-guidelines"
description: "Padrões e boas práticas de TypeScript para o codebase."
category: "Development Fundamentals"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

# TypeScript Guidelines

## 🎯 Purpose

For solo/small teams, consistent TS rules:

## When to Use

Trigger this skill when:

## Core Rules

## Implementation

Execute:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

Expected result:

Execute:

```typescript
interface Input {
  id: string
}

interface Output {
  ok: boolean
}

function doWork(input: Input): Output {
  return { ok: true }
}
```

Expected result:

Execute:

```plain text
Add ESLint rules only when they match team velocity and project maturity.
```

Expected result:

## Technology Context

Required Tools:

## Validation

## Related Skills