---
name: "clean-code"
description: "Padrões de código limpo, legibilidade e manutenibilidade."
category: "Development Fundamentals"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

risk: safe

source: community

This page contains the raw source code and logic of the skill to allow other AIs to reuse it and developers to audit its behavior.

name: clean-code

description: Pragmatic coding standards. Be concise, direct, and solution-focused. Avoid over-engineering and unnecessary comments.

allowed-tools: Read, Write, Edit

scope: Universal (meta-skill)

when: Before implementing code changes, reviewing code, or producing final solutions

workflow: N/A (development fundamentals)

next-step: Apply these standards in the chosen domain skill (React/TS/Backend/etc.)

related: 

# Clean Code

## 🎯 Purpose

This skill enforces a pragmatic style:

## When to Use

Trigger this skill when:

Do NOT use when:

## Core Principles

## Implementation

Execute:

```plain text
Restate the change in 1 sentence. Identify inputs, outputs, and constraints.
```

Expected result:

If fails:

Execute:

```plain text
Prefer simple functions, guard clauses, and direct code.
Avoid new layers unless they reduce complexity.
```

Expected result:

Execute:

```plain text
Use intent-revealing names.
Booleans as questions (is/has/can).
Avoid abbreviations.
```

Expected result:

Execute:

```plain text
Aim for < 20 lines per function.
Avoid deep nesting (> 2 levels).
```

Expected result:

Execute:

```markdown
- [ ] Did I do exactly what was asked?
- [ ] Did I update dependent code too?
- [ ] Did I verify behavior (tests or a clear manual check)?
- [ ] Did I avoid extra abstractions?
```

Expected result:

## Technology Context

Required Tools:

## Validation

Review diffs: fewer lines changed than a typical over-engineered implementation, and the code is still clear.

## Related Skills