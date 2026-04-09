---
name: component-creation-gates-thresholds-ssot
type: Gate/Threshold
domain: [Design System]
source: notion:16e83378-0240-44c4-9e94-d05637a91b9e
status: active
installed: 2026-04-08
---

# Component Creation — Gates & Thresholds (SSOT)

## Objective

Single source of truth for gates/thresholds referenced by Component Creation Workflow.

## 1) Execution Log Run ID

- Exec: `exec:component-creation:<component_id>:<yyyymmdd>-<seq>`
- Review: `review:component-creation:<component_id>:<yyyymmdd>-<seq>`

## 2) Anti-duplicate SSOT

- Primary SSOT: Notion database “Design System Components” (unique by `Component ID`).
- Repo consult is optional and only runs when repo+branch+path are explicitly provided.

## 3) GitHub checks availability

- If GitHub checks are not configured: do not block merge via GitHub.
- Evidence must be recorded via Execution Logs + links (PR/CI run) when available.
- If a task explicitly requires GitHub check-run blocking and checks are not configured: Blocked.

## 4) Coverage thresholds

SSOT decision:

- Coverage thresholds are read from the repo CI/test configuration (Codecov/Jest/Vitest/etc.).
- If no config or no CI evidence link exists for the run: Blocked for PASS/FAIL claims.

## 5) Bundle budget

- Optional gate until a budget SSOT is defined.
- Current SSOT: Not defined (`TBD` by design). Do not fail by default; record as `bundle_budget_not_defined`.

## 6) Visual regression

- Optional gate until tooling SSOT is defined (Chromatic/Percy/etc.).
- Current SSOT: Not defined (`TBD` by design). Do not fail by default; record as `visual_regression_tool_not_defined`.

## Promotion rule

- Promote Workflow → `Active` only when it passes the Active-ready checklist and has no execution-affecting TBDs in its protocol.
- This page defines what is considered non-blocking vs blocking for the above gates.
