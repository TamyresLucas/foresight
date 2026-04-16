# Epic: Fix TypeScript Errors in Design System (Post React 19 Upgrade)

**Status:** To Do  
**Priority:** Medium  
**Epic Lead:** TBD

---

## Description

After upgrading `@foresight/design-system` from React 18 to React 19, 77+ TypeScript errors were discovered. These errors are **pre-existing issues** in Storybook stories and unrelated components — they are **NOT** from the 6 targeted edits in the React 19 upgrade spec (which were successfully completed).

### Context

The React 19 upgrade was completed successfully with the following changes:

- ✅ PeerDependencies widened (`"react": "^18.0.0 || ^19.0.0"`)
- ✅ `@types/react` updated to v19
- ✅ `vite.config.ts` fixed (output filename now `index.mjs`/`index.cjs`)
- ✅ `badge.tsx` ReactElement generics narrowed
- ✅ `StatsCard.tsx` ReactElement generics narrowed

**Build and lint pass successfully.** The TypeScript errors exist in Storybook stories (\*.stories.tsx) and various components.

---

## Error Categories / Patterns

### 1. Property 'className' does not exist on type 'IntrinsicAttributes' (Majority of errors)

This is the most common error pattern. It occurs when passing `className` to Lucide icons in Storybook stories. The issue is that the icon components don't explicitly accept `className` in their type definitions.

**Affected files (sample):**

- `src/blocks/dashboard/ConfirmDialog.tsx`
- `src/blocks/dashboard/DashboardLayout.stories.tsx`
- `src/blocks/dashboard/DashboardLayout.tsx`
- `src/blocks/dashboard/StatsCard.tsx`
- `src/blocks/dashboard/TrendBadge.tsx`
- `src/blocks/dashboard/WizardForm.tsx`
- `src/components/Alert.stories.tsx`
- `src/components/Breadcrumb.stories.tsx`
- `src/components/Collapsible.stories.tsx`
- `src/components/Combobox.stories.tsx`
- `src/components/Command.stories.tsx`
- `src/components/DatePicker.stories.tsx`
- `src/components/Dialog.stories.tsx`
- `src/components/HoverCard.stories.tsx`
- `src/components/Select.stories.tsx`
- `src/components/Sidebar.stories.tsx`
- `src/components/assistant-ui/assistant-message.tsx`
- `src/components/assistant-ui/assistant-sidebar.tsx`
- `src/components/assistant-ui/composer.tsx`
- `src/components/diagram/DescriptionNode.tsx`
- `src/components/diagram/EndNode.tsx`
- `src/components/diagram/MultipleChoiceNode.tsx`
- `src/components/diagram/StartNode.tsx`
- `src/components/diagram/TextEntryNode.tsx`

### 2. Unused Variable Warnings

- `src/blocks/dashboard/StatsCard.tsx(60,7)`: `'progressColorVariants' is declared but its value is never read`
- `src/blocks/dashboard/TrendBadge.tsx(1,1)`: `'React' is declared but its value is never read`
- `src/components/Label.stories.tsx(2,1)`: `'React' is declared but its value is never read`
- `src/components/diagram/NodeHandles.tsx`: Multiple unused `highlighted` parameters

### 3. forwardRef/Story Type Incompatibilities

- `src/components/Carousel.stories.tsx`: Various property access errors (`scrollSnapList`, `selectedScrollSnap`, `on`, `scrollTo`)
- `src/components/diagram/DiagramCanvas.stories.tsx`: Type incompatibilities with `OnNodesChange` and `OnEdgesChange`

### 4. Missing Required Properties

- `src/components/EmptyState.stories.tsx(250,8)`: `Property 'title' is missing in type '{}' but required in type 'EmptyStateProps'`

### 5. LyteNyte Grid Type Errors

- `src/components/lytenyte-grid/LyteNyteGrid.stories.tsx`: Multiple `'params' is of type 'unknown'` errors
- `src/components/lytenyte-grid/LyteNyteGrid.tsx`: `filterModel` type incompatibility

### 6. survey/\_reference Legacy Code

The `src/components/survey/_reference/` directory contains legacy code with many issues:

- Cannot find module errors (multiple files)
- Implicit `any` type errors
- Unused variable warnings
- These files appear to be deprecated and should likely be removed or properly typed

**Affected files:**

- `src/components/survey/_reference/hooks/useQuestionCardLogic.ts`
- `src/components/survey/_reference/logic/BranchLogicSet.tsx`
- `src/components/survey/_reference/logic/DisplayLogicSet.tsx`
- `src/components/survey/_reference/logic/LogicSet.tsx`
- `src/components/survey/_reference/logic/SkipLogicSet.tsx`
- `src/components/survey/_reference/LogicDisplays.tsx`
- `src/components/survey/_reference/question-card/ChoiceGridRenderer.tsx`
- `src/components/survey/_reference/question-card/ChoiceListRenderer.tsx`
- `src/components/survey/_reference/question-card/DescriptionLinesRenderer.tsx`
- `src/components/survey/_reference/question-card/PageIndicator.tsx`
- `src/components/survey/_reference/question-card/QuestionCardBody.tsx`
- `src/components/survey/_reference/question-card/QuestionCardHeader.tsx`
- `src/components/survey/_reference/question-card/TextEntryRenderer.tsx`
- `src/components/survey/_reference/QuestionCard.tsx`
- And more...

### 7. Pre-existing Infrastructure Issues

These issues were discovered during manual QA of the React 19 upgrade. They are **pre-existing** and **not related to the React 19 upgrade**, but should be tracked in this epic for fixing all pending issues.

#### Issue 1: vitest config issue

- **Problem:** Tests don't run - vitest config references missing `@storybook/addon-vitest`
- **Impact:** Low - pre-existing issue, not React 19 upgrade related

#### Issue 2: Missing TypeScript declarations

- **Problem:** No .d.ts files in dist
- **Impact:** Low - pre-existing issue

---

## Full Error List

Run the following command to see the complete error list:

```bash
cd packages/design-system && npm run type-check
```

---

## Acceptance Criteria

1. ✅ Create epic with clear title and description
2. ✅ Document the error categories/patterns
3. ✅ Note that this is a separate task from the React 19 upgrade (which is complete)
4. ⬜ Set appropriate priority and status
5. ⬜ All TypeScript errors in non-storybook production code are resolved
6. ⬜ All TypeScript errors in Storybook stories are resolved (or explicitly acknowledged)
7. ⬜ `npm run type-check` passes with 0 errors

---

## Notes

- The errors are **not blocking** the React 19 upgrade - the upgrade was successful
- These errors existed before but were not visible because they weren't being type-checked or the types were more lenient
- React 19's stricter TypeScript types are now exposing these latent issues
- Consider whether the `survey/_reference` directory should be removed entirely (appears to be deprecated code)
