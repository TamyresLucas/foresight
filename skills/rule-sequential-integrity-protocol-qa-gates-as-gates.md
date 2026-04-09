---
name: sequential-integrity-protocol-qa-gates-as-gates
type: Contract
domain: [Workflows, Governance]
source: notion:18b45a59-599e-45c6-93bc-003ef9ee1436
status: active
installed: 2026-04-08
---

# Sequential Integrity Protocol (QA Gates as Gates)

## Purpose

Ensure QA gates act as hard gates so implementation does not thrash across multiple sequential stories, and so progress on Story [N] cannot be bypassed by starting Story [N+1].

## Definitions

- Story order: the explicit order defined by the Epic (Story sequence) in the Foresight roadmap. If story order is not explicit, Stop/Block.
- QA GATE task (for Story N): the designated task for Story N whose completion authorizes starting execution for Story N+1.
- Execution: any action that changes implementation state (e.g., moving a task to In Progress, producing code/PR changes, or claiming progress beyond planning).

## Rule (hard gate)

For any ordered story sequence (Story N → Story N+1):

1) Tasks belonging to Story N+1 MUST NOT be moved to In Progress nor executed until the QA GATE task for Story N is:

## Allowed work before the gate passes (non-execution)

Before the gate passes, the following are allowed for Story N+1 only if they do not change execution state and do not produce implementation artifacts:

- Reading/discovery
- Drafting questions
- Planning notes / spec drafting

## Stop / Block (mandatory)

Block and ask 1 objective question (or list missing fields) if any of the following is true:

- Story order is ambiguous (cannot determine N and N+1).
- QA GATE task for Story N is missing or not uniquely identifiable.
- QA GATE task is not linked to Story N.
- QA GATE task is not Done.
- QA GATE task is Done but there is no Execution Log (exec) linked with minimum evidence.

## Logging (mandatory)

When blocking Story N+1 execution due to this contract, the Execution Log MUST include:

- Inputs: links to Story N, QA GATE task, Story N+1 (and Epic if relevant)
- Notes / Blockers: the exact missing condition(s)
- Status: Blocked

## Rationale (non-normative)

This contract prevents cross-story asynchronous execution that creates partial-progress across multiple stories and increases review + QA cost, while still allowing low-risk planning work ahead.
