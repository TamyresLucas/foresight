---
name: "ds-production-components"
description: "Production standards for Design System components. Type-safe, accessible, tested, and documented."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

This page contains the raw source code and logic of the skill to allow other AIs to reuse it and developers to audit its behavior.

name: ds-production-components

description: Production standards for Design System components. Type-safe, accessible, tested, and documented.

allowed-tools: Read, Write, Edit, Glob, Grep, Bash

scope: Design System ONLY

when: When writing or refactoring components in 

workflow: 

next-step: Run ds-production-enforcement before PR

related: 

# DS Production Components

required

optional

obrigatórios

1) 

2) 

## 🎯 Purpose

These standards make DS components safe to consume:

## Core Rules

## Implementation

Execute:

```plain text
Verify semantic tokens, spacing scale, heights, radii, transitions.
```

Execute:

```plain text
Export props types. Avoid any. Prefer unions for variants.
```

Execute:

```plain text
Semantic HTML first. Keyboard access. Visible focus.
```

Execute:

```plain text
Default + variants + disabled + loading/error (when applicable).
```

Execute:

```plain text
Add unit tests and a11y tests for interactive components.
```

## Technology Context

## Validation

## Related Skills