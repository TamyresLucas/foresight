---
name: "ds-component-extractor"
description: "Extracts the UI layer from an app/POC component and produces a DS-ready component with stories and tests."
category: "Design System"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

risk: safe

source: community

This page contains the raw source code and logic of the skill to allow other AIs to reuse it and developers to audit its behavior.

name: ds-component-extractor

description: Extracts the UI layer from an app/POC component and produces a DS-ready component with stories and tests.

allowed-tools: Read, Write, Edit, Glob, Bash

scope: Design System ONLY

when: After component-promotion-analyzer recommends PROMOTE (or when manually promoting)

workflow: 

next-step: Run ds-production-components, then ds-production-enforcement

related: 

# DS Component Extractor

required

optional

obrigatórios

1) 

2) 

3) 

4) 

## 🎯 Purpose

Turn an app component into a DS component by:

## When to Use

Trigger this skill when:

## Implementation

Execute:

```plain text
Identify app contexts/hooks/API calls that must remain outside DS.
```

Execute:

```plain text
Component.tsx, stories, tests, index.ts, README.
```

Execute:

```plain text
Replace domain objects with primitives. Replace internal actions with callbacks/slots.
```

Execute:

```plain text
Default + variants + states. Include a11y checks where relevant.
```

## Validation

## Related Skills