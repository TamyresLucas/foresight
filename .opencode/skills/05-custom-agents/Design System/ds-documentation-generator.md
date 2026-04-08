---
name: "ds-documentation-generator"
description: "Generates documentation artifacts after a component is added to the Design System."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

risk: safe

source: community

This page contains the raw source code and logic of the skill to allow other AIs to reuse it and developers to audit its behavior.

name: ds-documentation-generator

description: Generates documentation artifacts after a component is added to the Design System.

allowed-tools: Read, Write, Edit

scope: Design System ONLY

when: After adding a new DS component or making a significant DS component change

workflow: 

next-step: Review generated docs and publish update notes

related: 

# DS Documentation Generator

required

optional

obrigatórios

1) 

2) 

## 🎯 Purpose

Produce consistent documentation outputs:

## When to Use

Trigger this skill when:

## Implementation

Execute:

```plain text
Name, category, version, origin, Storybook URL, GitHub path.
```

Execute:

```plain text
Overview, when-to-use, usage snippets, props summary, a11y notes, links.
```

Execute:

```plain text
Document added/changed/breaking impact. Link migration guide if needed.
```

Execute:

```plain text
Add examples and document defaults for critical props.
```

## Technology Context

## Validation

## Related Skills