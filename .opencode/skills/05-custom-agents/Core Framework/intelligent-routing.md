---
name: "intelligent-routing"
description: "Roteamento inteligente de tarefas para o agente/skill mais adequado."
category: "Core Framework"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

# Intelligent Routing

## 🎯 Purpose

This skill performs a silent classification of each user request and routes execution to the most appropriate specialist skill or agent.

## When to Use

Trigger this skill when:

Do NOT use when:

## Implementation

Execute:

```typescript
const type = classifyRequest(userMessage) // question | task | bug | planning | misc
```

Expected result:

If fails:

Execute:

```typescript
const domains = detectDomains(userMessage)
// e.g. ['frontend'], ['security','backend'], ['database']
```

Expected result:

If fails:

Execute:

```typescript
const complexity = assessComplexity({ type, domains, userMessage })
// simple | moderate | complex
```

Expected result:

If fails:

Execute:

```typescript
const selected = selectAgents({ domains, complexity })
// returns one agent, or an orchestrator plan
```

Expected result:

If fails:

Execute:

```typescript
announceToUser(selected)
// "Applying knowledge of @frontend-specialist..."
```

Expected result:

If fails:

## Validation

Send 5 requests of different domains (frontend, backend, security, database, mixed) and verify routing decisions change accordingly.

## Technology Context

Required Tools:

Environment:

## Related Skills