---
name: workflow-review-skill-inventory-gaps
type: Plan
domain: [Workflows]
source: notion:a86b11d1-fdbd-4d96-8879-aa2e7a4a5de3
status: active
installed: 2026-04-09
---

# Workflow Review Skill — Inventory & gaps

### Scope

- Workflows with Status = Review Skill

### Workflows in scope (URLs)

- Component Creation Workflow (Component Creation)
- Testing Workflow (Testing)
- Documentation Workflow (Documentation)
- Code Quality Workflow (Code Quality)
- Refactoring Workflow (Refactoring)
- Skill Lifecycle Workflow (Skill Lifecycle)
- Existing Epic Delivery Workflow (Epic Delivery)
- Illustration Generation Workflow (Illustration)

### Baseline (from Active workflows)

Active baseline fields:

- Trigger: required
- Description: required (A→Z steps + Outputs + Stop/Block + Logging + Handoff)
- AI Recommendation: required (router + stop/block + logging + handoff)

### Gap analysis (vs Active baseline)

No schema gaps detected: all Review Skill workflows already have Trigger + Description + AI Recommendation populated.

### What still needs review (content hardening)

1. Convert remaining TBDs into deterministic rules (or explicitly Blocked)
   - Focus: Component Creation Workflow content contains multiple TBDs (run_id format, coverage thresholds, budget, tools). Each TBD must become SSOT or explicit Blocked.

2. Make router conditions 100% property/input-driven
   - Focus: Component Creation, Testing, Documentation, Epic Delivery.

3. Make PASS/FAIL evidence requirements explicit
   - Focus: Code Quality, Testing, Refactoring.

4. Ensure consistent logging template
   - All: every execution should produce 1 Execution Log (exec) + 1 (review) with links.

### Output

This page is the inventory evidence artifact for Story S1.
