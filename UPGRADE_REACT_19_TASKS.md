# Epic: Upgrade Foresight Design System from React 18 to React 19

**Epic Description**: Foresight design system currently has peerDependencies for React ^18.0.0, but Survey Builder uses React 19.1.1. This epic upgrades the design system to support both React 18 and 19, while also fixing a pre-existing bug in vite.config.ts causing build output filenames to mismatch the package.json exports map.

**Business Value**: Enable Foresight components to be consumed by React 19 projects while maintaining backward compatibility with React 18.

---

## Story 1: Update All Dependencies

**Description**: Update package.json to support React 18 and 19 across all dependency types (peerDeps, devDeps types, devDeps runtime).

### Tasks

| #   | Task                            | File                                                  | Changes                                                                                                                    |
| --- | ------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| 1.1 | Update peerDependencies         | `packages/design-system/package.json` (lines 41-44)   | `"react": "^18.0.0"` → `"react": "^18.0.0 \|\| ^19.0.0"`, `"react-dom": "^18.0.0"` → `"react-dom": "^18.0.0 \|\| ^19.0.0"` |
| 1.2 | Update @types dependencies      | `packages/design-system/package.json` (lines 112-113) | `@types/react`: `^18.3.3` → `^19.0.0`, `@types/react-dom`: `^18.3.0` → `^19.0.0`                                           |
| 1.3 | Add React 19 to devDependencies | `packages/design-system/package.json`                 | Add `"react": "^19.0.0"`, `"react-dom": "^19.0.0"`                                                                         |

### QA Gate

- [ ] `npm install` completes successfully in `packages/design-system/`
- [ ] Verify `@types/react` version is `19.x.x`
- [ ] Verify peerDependencies contains `"^18.0.0 || ^19.0.0"`

---

## Story 2: Fix Build Output Filename

**Description**: Fix vite.config.ts to output `index.mjs` and `index.cjs` instead of `foresight-design-system.mjs` and `foresight-design-system.cjs` to match the package.json exports map.

### Tasks

| #   | Task                     | File                                              | Changes                                                 |
| --- | ------------------------ | ------------------------------------------------- | ------------------------------------------------------- |
| 2.1 | Update fileName function | `packages/design-system/vite.config.ts` (line 12) | `foresight-design-system.${format}` → `index.${format}` |

### QA Gate

- [ ] `npm run build` succeeds
- [ ] `dist/index.mjs` exists
- [ ] `dist/index.cjs` exists
- [ ] Files match package.json exports map

---

## Story 3: Fix ReactElement TypeScript Generics

**Description**: Update ReactElement type casts across components to use explicit generics instead of `unknown` for React 19 type compatibility.

### Tasks

| #   | Task                                 | File                                                                         | Changes                                                                             |
| --- | ------------------------------------ | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| 3.1 | Fix badge.tsx ReactElement types     | `packages/design-system/src/components/ui/badge.tsx` (lines 42, 45)          | Update `React.ReactElement<unknown>` → `React.ReactElement<{ className?: string }>` |
| 3.2 | Fix StatsCard.tsx ReactElement types | `packages/design-system/src/blocks/dashboard/StatsCard.tsx` (lines 318, 319) | Update to `React.ReactElement<{ className?: string; fill?: boolean }>`              |
| 3.3 | Verify toast.tsx compatibility       | `packages/design-system/src/components/ui/toast.tsx` (line 121)              | Verify already has explicit generic (no changes needed)                             |

### QA Gate

- [ ] `npm run type-check` passes with 0 errors
- [ ] No `TS2339: Property 'className' does not exist on type 'unknown'` errors
- [ ] Badge and StatsCard components compile successfully

---

## Story 4: Run Validation Pipeline

**Description**: Execute all automated validation commands to ensure the build is stable.

### Tasks

| #   | Task                 | Commands                  |
| --- | -------------------- | ------------------------- |
| 4.1 | Run TypeScript check | `npm run type-check`      |
| 4.2 | Run Lint             | `npm run lint`            |
| 4.3 | Run Build            | `npm run build`           |
| 4.4 | Build Storybook      | `npm run build-storybook` |

### QA Gate

- [ ] `npm run type-check` exits with code 0
- [ ] `npm run lint` returns 0 errors, 0 warnings
- [ ] `npm run build` succeeds, produces all output files
- [ ] `npm run build-storybook` succeeds

---

## Story 5: Integration Test with Survey Builder

**Description**: Verify the design system works correctly when linked into Survey Builder running React 19.1.1.

### Tasks

| #   | Task                          | Steps                                                           |
| --- | ----------------------------- | --------------------------------------------------------------- |
| 5.1 | Link design system            | Run `npm link` in `packages/design-system/`                     |
| 5.2 | Link into Survey Builder      | Run `npm link @foresight/design-system` in Survey Builder       |
| 5.3 | Verify Survey Builder builds  | Run `npx tsc --noEmit` in Survey Builder                        |
| 5.4 | Run Survey Builder dev server | Start dev server, verify no "hooks from different React" errors |
| 5.5 | Verify components render      | Check Button component renders correctly in Survey Builder      |

### QA Gate

- [ ] `npm link` succeeds without errors
- [ ] Survey Builder compiles without type errors
- [ ] Survey Builder dev server starts without React version conflicts
- [ ] Components render correctly with no runtime errors

---

## Summary

| Story | Title                                | Tasks | QA Gate                      |
| ----- | ------------------------------------ | ----- | ---------------------------- |
| 1     | Update All Dependencies              | 3     | npm install + verify deps    |
| 2     | Fix Build Output Filename            | 1     | Build produces index.mjs/cjs |
| 3     | Fix ReactElement TypeScript Generics | 3     | type-check passes            |
| 4     | Run Validation Pipeline              | 4     | All commands pass            |
| 5     | Integration Test with Survey Builder | 5     | Survey Builder works         |

**Total: 5 Stories, 16 Tasks**
