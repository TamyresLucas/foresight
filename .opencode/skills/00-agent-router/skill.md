# Agent Router (Skill)

**Agent ID**: agent-router  
**Display Name**: Agent Router / Gatekeeper  
**Purpose**: Determines which specialized agent to invoke based on user intent and task type.

## Auto-Activation

**This skill auto-triggers on these patterns:**

- "chama o agente..."
- ".call/delegue para..."
- "aciona o agente..."
- "pega o agente..."
- "qual agente..."
- "who can help me with..."
- "delegate to..."
- "ask agent to..."
- When user asks to invoke/call/delegate to a specific agent

## Trigger Patterns

- "which agent should I use for..."
- "what agent handles..."
- "who can help me with..."
- "call the right agent"
- "delegate to specialist"
- Task categorization requests

## Agent Registry

| Task Type         | Agent                 | Agent ID              | When to Use                                               |
| ----------------- | --------------------- | --------------------- | --------------------------------------------------------- |
| Workspace cleanup | Marinete              | workspace-cleanup     | "clean workspace", "remove dead code", "organize folders" |
| Code review       | Code Reviewer         | code-review           | "review code", "check for bugs", "review PR"              |
| Architecture      | Architecture Reviewer | architecture-reviewer | "refactor architecture", "improve structure"              |
| Testing           | Test Generator        | test-generator        | "write tests", "add test coverage"                        |
| Documentation     | Doc Generator         | doc-generator         | "generate docs", "document code"                          |
| Security          | Security Auditor      | security-auditor      | "check security", "vulnerability scan"                    |
| Performance       | Performance Profiler  | performance-profiler  | "optimize performance", "speed up"                        |
| Survey Builder    | Survey Builder Expert | survey-builder        | "build survey", "create form builder", "drag and drop"    |

## Routing Logic

1. **Parse intent**: Extract the core action/topic from user request
2. **Match pattern**: Compare against known trigger patterns
3. **Check availability**: Verify if target agent is available in workspace
4. **Return recommendation**: Provide agent ID and rationale

## Output Format

```
🎯 Recommended Agent: [Agent Name]
Agent ID: [agent-id]
Rationale: [why this agent fits the task]
```

## Fallback

If no matching agent found:

- Suggest creating a new agent
- Offer to handle the task directly if within capability
- Ask clarifying questions to narrow down intent
