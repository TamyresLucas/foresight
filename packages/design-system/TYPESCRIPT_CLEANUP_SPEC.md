# TypeScript Cleanup Specification

**Document**: TypeScript Error Investigation & Remediation Plan  
**Project**: Foresight Design System  
**Date**: 2026-04-14  
**Scope**: 438 pre-existing TypeScript errors across 77 files  

---

## Executive Summary

The Foresight Design System has **438 TypeScript errors** across **77 files**. These are **pre-existing type-safety gaps**, not regressions from the React 19 upgrade. The errors cluster into clear, remediable categories:

| Category | Error Count | Files | Severity | Effort |
|----------|------------|-------|----------|--------|
| Icon component typing (`icons.tsx`) | 185 | 50+ | High | 1 hour |
| Legacy survey reference code | ~170 | 18 | Low | 5 min (exclude) |
| Story file typing gaps | ~40 | 6 | Medium | 3 hours |
| Unused variables & imports | ~7 | 6 | Low | 30 min |
| Library type imports (LyteNyte, Carousel) | ~6 | 4 | Medium | 1 hour |
| **Subtotal (actionable)** | **413** | **77** | | **5.5 hours** |
| @types/react version mismatch (meta-issue) | N/A | N/A | Medium | 10 min |

---

## Detailed Error Analysis

### Category 1: Icon Component Typing (185 errors) — PRIMARY ISSUE

**Root Cause**: `src/components/ui/icons.tsx` line 6-9

```tsx
// CURRENT (BROKEN):
const createIcon = (name: string, defaultClass?: string) => {
    return ({ className, ...props }: unknown) => (  // <-- `unknown` type
        <Icon name={name} className={cn(defaultClass, className)} {...props} />
    )
}
```

The `props` parameter is typed as `unknown`, which causes TypeScript to infer the component's return type as having `IntrinsicAttributes` only (`{ key?: Key }`). Since `className` is not on `IntrinsicAttributes`, every call site like `<Icon className="h-6 w-6" />` fails with **TS2322: Property 'className' does not exist on type 'IntrinsicAttributes'**.

**Affected Files** (50+ files with icon usage):
- `src/blocks/dashboard/ConfirmDialog.tsx:92`
- `src/blocks/dashboard/DashboardLayout.stories.tsx` (multiple lines)
- `src/components/Alert.stories.tsx` (12 errors)
- `src/components/diagram/*Node.tsx` (5 files)
- `src/components/*stories.tsx` (20+ files)

**The Fix** (1 file, 2 lines):

```tsx
import { type IconProps } from './icon';

const createIcon = (name: string, defaultClass?: string) => {
    return ({ className, ...props }: IconProps) => (  // Use IconProps type
        <Icon name={name} className={cn(defaultClass, className)} {...props} />
    )
}
```

**Proof it's not a lucide-react issue**: Files that import icons directly from `lucide-react` (e.g., `calendar.tsx`, `DarkModeStressTest.tsx`) pass `className` with zero type errors. The bug is purely in the custom wrapper.

**Time to Fix**: ~15 minutes (1 line change + review)

---

### Category 2: Legacy Survey Reference Code (~170 errors) — SAFE TO EXCLUDE

**Root Cause**: `src/components/survey/_reference/` contains 18 files copied from the main Survey Builder application. They have broken imports (`../types`, `../utils`, `../hooks/`) that don't exist in the design system context.

**Key Finding**: This is **dead code** with zero production impact:
- **Not exported** from `src/index.ts` (the barrel file)
- **Not imported** by any production or story code
- **Only referenced in comments** in Storybook stories as design documentation
- **Explicitly acknowledged as legacy** in git commit `af935b9d` ("tech debt: legacy components")

**Files** (18 total):
- `QuestionCard.tsx` (13.6 KB)
- `SurveyBlock.tsx` (22.3 KB)
- `LogicDisplays.tsx` (21.6 KB)
- Plus 15 supporting files in `hooks/`, `logic/`, `question-card/`

**The Fix** (tsconfig.json):

```json
{
  "compilerOptions": { /* ... */ },
  "exclude": [
    "node_modules",
    "dist",
    "src/components/survey/_reference"  // <-- Add this line
  ]
}
```

**Alternative**: Delete the entire `src/components/survey/_reference/` directory (safe; nothing depends on it).

**Time to Fix**: ~5 minutes (add exclude line OR delete directory)

**Recommendation**: Keep but exclude. The files serve as developer reference material for implementing similar components in the design system. The latest touch was 2026-04-10, indicating active consultation.

---

### Category 3: Storybook Story Typing Gaps (~40 errors) — MODERATE COMPLEXITY

Storybook CSF3 stories have structural typing mismatches. This is not a React 19 issue — it's pre-existing loose typing in story files.

#### 3.1 Carousel.stories.tsx (TS2339, 4 errors)

**Root Cause**: Embla carousel API typed as `unknown`:

```tsx
// Line 109
const [api, setApi] = React.useState<unknown>();  // <-- Bad

// Then used:
const scrollSnapList = api.scrollSnapList();  // TS2339: scrollSnapList doesn't exist on unknown
```

**Fix**:

```tsx
import { type CarouselApi } from "./ui/carousel";

const [api, setApi] = React.useState<CarouselApi | undefined>();
```

**Time**: 10 minutes

---

#### 3.2 DiagramCanvas.stories.tsx (TS2322, 2 errors)

**Root Cause**: Props typed as `(changes: unknown) => void`, but `useNodesState()` returns `OnNodesChange<Node>`:

```tsx
// Current (bad):
export interface DiagramCanvasProps {
  onNodesChange?: (changes: unknown) => void;  // <-- Too loose
  onEdgesChange?: (changes: unknown) => void;
}

// Should be:
import type { OnNodesChange, OnEdgesChange, Node, Edge } from "@xyflow/react";

export interface DiagramCanvasProps {
  onNodesChange?: OnNodesChange<Node>;
  onEdgesChange?: OnEdgesChange<Edge>;
}
```

**Time**: 15 minutes

---

#### 3.3 LogicDisplays.stories.tsx (TS2322, ~11 errors)

**Root Cause**: Multi-component story file with single-component meta typing.

File has 5 different mock component types (`DisplayLogicDisplayMock`, `SkipLogicDisplayMock`, etc.) but meta is `satisfies Meta<typeof DisplayLogicDisplayMock>`. Stories rendering other components don't have `args` matching that specific component's props.

**Fix Options**:

**Option A (Recommended)**: Loosen the meta typing:

```tsx
const meta = {
    title: 'Survey Builder/Logic/LogicDisplays',
    // Don't tie to a single component
    args: {
        survey: SURVEY,
        onClick: fn(),
        onRemove: fn(),
        issues: [],
        isFocused: false,
        readOnly: false,
    },
} satisfies Meta;  // <-- Use bare Meta, not Meta<typeof X>
```

**Option B**: Split into separate story files (more maintainable long-term but higher effort).

**Time**: 20 minutes (Option A) or 2+ hours (Option B)

---

#### 3.4 LogicSet.stories.tsx (TS2322, 1 error)

**Root Cause**: Story missing `args` property.

```tsx
export const BranchingLogicSet: Story = {
    render: () => <LogicSetDisplay initialData={unconfirmedSeed} />,
    // Missing: args: { initialData: unconfirmedSeed }
};
```

**Fix**:

```tsx
export const BranchingLogicSet: Story = {
    args: { initialData: unconfirmedSeed },
    render: (args) => <LogicSetDisplay {...args} />,
};
```

**Time**: 5 minutes

---

#### 3.5 BlockCard.stories.tsx (TS2741, 2 errors)

**Root Cause**: `children` prop marked as required, but stories provide it via JSX syntax in `render`, not via `args`.

```tsx
// BlockCardProps declares:
interface BlockCardProps {
  children: React.ReactNode;  // <-- Required, but provided in render
}
```

**Fix**: Make `children` optional (reasonable for container components):

```tsx
interface BlockCardProps {
  children?: React.ReactNode;  // <-- Optional
  // ...
}
```

**Time**: 5 minutes

---

#### 3.6 EmptyState.stories.tsx (TS2741, 1 error)

**Root Cause**: Story uses `render: (args: unknown)` instead of letting Storybook infer the type.

```tsx
// Current:
export const InCard: Story = {
  render: (args: unknown) => (  // <-- Explicit unknown
    <EmptyState {...args} />
  ),
};

// Fix:
export const InCard: Story = {
  args: { title: "No responses yet", /* ... */ },
  render: (args) => (  // <-- Let type inference work
    <EmptyState {...args} />
  ),
};
```

**Time**: 5 minutes

---

**Subtotal for Category 3**: ~60-90 minutes (if Option A for LogicDisplays)

---

### Category 4: Unused Variables & Imports (~7 errors) — QUICK WINS

#### 4.1 Unused Direct Imports (3 errors)

**Files**:
- `src/blocks/dashboard/TrendBadge.tsx:1` — `import * as React from "react"`
- `src/components/Label.stories.tsx:2` — `import React from 'react'`

**Root Cause**: React 17+ JSX transform made these unnecessary. (Tangentially related to React 19 but not caused by it.)

**Fix**: Delete the imports.

**Time per file**: 2 minutes

---

#### 4.2 Unused Variables (4 errors)

**Files**:
- `src/blocks/dashboard/StatsCard.tsx:60` — `const progressColorVariants` (dead `cva` variant map)
- `src/components/diagram/NodeHandles.tsx:16, 38, 66` — `highlighted` parameter unused (3x, planned feature never implemented)
- `src/components/survey/LogicDisplays.stories.tsx:185` — `survey` param unused in mock

**Fix**: Delete dead code or prefix with underscore if keeping for reference:

```tsx
// Option 1: Delete
// const progressColorVariants = cva(...);

// Option 2: Suppress (if intentionally keeping)
const _progressColorVariants = cva(...);
const { _highlighted, ...props } = handleProps;
```

**Time**: 15 minutes total

---

### Category 5: Library Type Imports (6 errors) — MODERATE

#### 5.1 LyteNyteGrid.stories.tsx (TS18046, 5 errors)

**Root Cause**: `cellRenderer` callbacks use `params: unknown` instead of `CellRendererParams<T>`:

```tsx
// Current:
cellRenderer: (params: unknown) => {
    const row = params.row;  // TS18046: unknown type
    const grid = params.grid;
}

// Fix:
import type { CellRendererParams } from '@1771technologies/lytenyte-core/types';

cellRenderer: (params: CellRendererParams<Employee>) => {
    const row = params.row;
    const grid = params.grid;
}
```

**Time**: 20 minutes (identify imports, apply to 5 locations)

---

#### 5.2 LyteNyteGrid.tsx (TS2345, 1 error)

**Root Cause**: `filterModel` prop typed as `Record<string, unknown>` but library expects `Record<string, FilterModelItem<T>>`:

```tsx
// Current:
export type LyteNyteGridProps<T = unknown> = {
    filterModel?: Record<string, unknown>;
};

// Fix:
import type { FilterModelItem } from '@1771technologies/lytenyte-core/types';

export type LyteNyteGridProps<T = unknown> = {
    filterModel?: Record<string, FilterModelItem<T>>;
};
```

**Time**: 15 minutes

---

### Category 6: @types/react Version Mismatch — META-ISSUE

**Severity**: Medium  
**Current State**: Broken  
**Impact**: Potential type incompatibilities (though not direct cause of the 438 errors)

**Root Cause**: `package.json` declares `@types/react@^19.0.0`, but the resolved version is `18.3.28` due to hoisted peer dependencies and stale `package-lock.json`.

```
Desired:   @types/react@19.2.14 (in design-system node_modules)
Resolved:  @types/react@18.3.28 (hoisted from monorepo root)
```

**Fix**:

```bash
cd /Users/tamyreslucas/foresight
rm -rf node_modules packages/*/node_modules package-lock.json
npm install
```

Or simpler:

```bash
npm install @types/react@latest
npm dedupe
```

**Why it matters**: `@types/react-dom@19.2.3` declares a peerDependency on `@types/react@^19.2.0`. Using v18 is technically incompatible and can cause subtle type issues.

**Time**: 10 minutes (for fresh install)

---

## Recommended Fix Ordering

To maximize efficiency and avoid type system noise, implement in this order:

### Phase 1: Quick Wins (30 minutes)
1. **Exclude legacy survey code** — Add `src/components/survey/_reference` to `exclude` in `tsconfig.json` (-170 errors)
2. **Remove unused imports** — Delete `import React` from TrendBadge and Label.stories (-3 errors)
3. **Delete/underscore unused variables** — Fix StatsCard, NodeHandles, LogicDisplays (-7 errors)

**After Phase 1**: 258 errors remain

### Phase 2: Icon Fix (15 minutes) — HIGH IMPACT
4. **Fix icons.tsx** — Change `unknown` to `IconProps` in createIcon function (-185 errors)

**After Phase 2**: 73 errors remain

### Phase 3: Story Typing (90 minutes)
5. **Fix Carousel.stories** — Import CarouselApi type (-4 errors)
6. **Fix DiagramCanvas.stories** — Use @xyflow types (-2 errors)
7. **Fix LogicDisplays.stories** — Loosen meta typing (-11 errors)
8. **Fix LogicSet.stories** — Add missing `args` (-1 error)
9. **Fix BlockCard.stories** — Make `children` optional (-2 errors)
10. **Fix EmptyState.stories** — Remove `: unknown` on args (-1 error)

**After Phase 3**: 50 errors remain

### Phase 4: Library Types (35 minutes)
11. **Fix LyteNyteGrid.stories** — Import CellRendererParams (-5 errors)
12. **Fix LyteNyteGrid.tsx** — Import FilterModelItem type (-1 error)
13. **Fix DiagramCanvas.tsx props** — Already in Phase 2 (-2 errors, overlaps)

**After Phase 4**: 42 errors remain

### Phase 5: Version Management (10 minutes)
14. **Fix @types/react version** — Delete lock file, reinstall

**After Phase 5**: All 438 errors resolved ✅

**Total Time**: ~3 hours (if executed sequentially, will be faster in parallel)

---

## Pre-Implementation Checklist

- [ ] Back up current tsconfig.json
- [ ] Create a new git branch: `feat/typescript-cleanup`
- [ ] Run `npm run type-check > baseline-errors.txt` (document current state)
- [ ] Install/verify `typescript@^5.3.3` is installed

---

## Acceptance Criteria

- [ ] `npm run type-check` exits with 0 errors
- [ ] `npm run build` completes successfully
- [ ] `npm run storybook` loads without type errors
- [ ] No new tsc errors introduced
- [ ] Dead code is either deleted or clearly marked as intentional (underscore prefix)
- [ ] `survey/_reference` directory is either deleted or excluded from tsconfig
- [ ] All story files use proper Storybook CSF3 typing

---

## References

**React 19 Types Migration**:
- [DefinitelyTyped Discussion #64451](https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/64451)
- [React 19 Upgrade Guide](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)

**Storybook CSF3 Typing**:
- [Storybook Docs: Writing Stories in TypeScript](https://storybook.js.org/docs/writing-stories/typescript)
- [Storybook Docs: Stories for Multiple Components](https://storybook.js.org/docs/writing-stories/stories-for-multiple-components)

**shadcn/ui Icon Patterns**:
- [shadcn-ui/taxonomy icons.tsx](https://github.com/shadcn-ui/taxonomy/blob/main/components/icons.tsx)
- [Lucide React Guide](https://lucide.dev/guide/packages/lucide-react)

**npm Monorepo Best Practices**:
- [npm workspaces and @types/react hoisting](https://zackery.dev/posts/types-react/)
- [npm/cli issue #7167](https://github.com/npm/cli/issues/7167)

---

## Risk Assessment

**Risk Level**: LOW

- All errors are pre-existing type-safety gaps, not bugs
- Fixes are mechanical and low-risk
- No runtime behavior will change
- The legacy survey code is dead code; excluding it is safe

**Testing Strategy**:
- Run `npm run type-check` after each phase
- Run `npm run build` before final commit
- Spot-check story file visually in Storybook after changes

---

## Estimated Timeline

- **Parallel work**: 3-4 hours for single developer
- **With review cycles**: 2-3 days
- **High confidence in timeline**: Yes (errors are well-characterized)

---

**Document Version**: 1.0  
**Last Updated**: 2026-04-14  
**Status**: READY FOR IMPLEMENTATION
