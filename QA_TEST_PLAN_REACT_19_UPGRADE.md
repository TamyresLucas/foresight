# QA Test Plan: Upgrade Foresight Design System from React 18 to React 19

**Epic**: Upgrade Foresight Design System from React 18 to React 19  
**Version**: 1.0  
**Date**: April 10, 2026  
**QA Analyst**: QA Agent  
**Type**: Code/CI QA (repo/build environment)

---

## Table of Contents

1. [Story 1: Update All Dependencies](#story-1-update-all-dependencies)
2. [Story 2: Fix Build Output Filename](#story-2-fix-build-output-filename)
3. [Story 3: Fix ReactElement TypeScript Generics](#story-3-fix-reactelement-typescript-generics)
4. [Story 4: Run Validation Pipeline](#story-4-run-validation-pipeline)
5. [Story 5: Integration Test with Survey Builder](#story-5-integration-test-with-survey-builder)

---

## Pre-Test Setup

### Test Environment

- **Primary Package**: `packages/design-system/`
- **Workspace Root**: `/Users/tamyreslucas/foresight/`
- **Node Version**: Must be compatible with React 19 (Node 18+ recommended)
- **Package Manager**: npm (v9.6.7 as per package.json)

### Prerequisites

Before running any test, ensure the environment is clean:

```bash
cd packages/design-system
rm -rf node_modules package-lock.json
npm install
```

---

## Story 1: Update All Dependencies

### QA Gate

Verify that npm install completes successfully and all React-related dependencies are updated to support both React 18 and 19.

### Test Environment

- **Location**: `packages/design-system/`
- **Working Directory**: `/Users/tamyreslucas/foresight/packages/design-system`

### Test Data

#### 1.1 Execute npm install

```bash
cd packages/design-system
npm install
```

#### 1.2 Verify @types/react version

```bash
cd packages/design-system
npm list @types/react
# Expected: @types/react@19.x.x
```

#### 1.3 Verify peerDependencies

```bash
cd packages/design-system
cat package.json | grep -A5 '"peerDependencies"'
```

#### 1.4 Verify React in devDependencies

```bash
cd packages/design-system
npm list react react-dom
# Expected: react@19.x.x, react-dom@19.x.x
```

### Pass Criteria

| #     | Criterion                            | Expected Output                     |
| ----- | ------------------------------------ | ----------------------------------- | --- | --------- |
| 1.1.1 | npm install completes without errors | Exit code 0, no ERR! messages       |
| 1.1.2 | @types/react version                 | `19.x.x` (e.g., `19.0.0`, `19.1.0`) |
| 1.1.3 | peerDependencies.react               | `"^18.0.0                           |     | ^19.0.0"` |
| 1.1.4 | peerDependencies.react-dom           | `"^18.0.0                           |     | ^19.0.0"` |
| 1.1.5 | devDependencies includes React 19    | `"react": "^19.0.0"` or similar     |

### Fail Patterns

| Pattern                               | Error Message         | Indicates                      |
| ------------------------------------- | --------------------- | ------------------------------ |
| `ERR! code ERESOLVE`                  | Override is required  | Dependency conflict            |
| `ERR! code EBADENGINE`                | Unsupported engine    | Node/npm version issue         |
| `WARN! cannot find in node_modules`   | Missing package       | Installation incomplete        |
| peerDependencies shows single version | `"react": "^18.0.0"`  | Not updated to dual version    |
| @types/react is 18.x.x                | `@types/react@18.3.3` | Not upgraded to React 19 types |

### Evidence Collection

Execute the following to capture evidence:

```bash
# Capture 1: Install output
cd packages/design-system
npm install 2>&1 | tee ../qa-evidence/story1-npm-install.log

# Capture 2: Dependency versions
npm list @types/react react react-dom 2>&1 | tee ../qa-evidence/story1-deps-list.log

# Capture 3: Package.json peerDependencies
cat package.json | jq '.peerDependencies' 2>&1 | tee ../qa-evidence/story1-peer-deps.json
```

### Test Cases

#### TC-1.1: npm install completes successfully

- **Command**: `npm install`
- **Expected**: Exit code 0, no errors
- **Evidence**: Console output + exit code

#### TC-1.2: @types/react is 19.x.x

- **Command**: `npm list @types/react --depth=0`
- **Expected**: `19.x.x` version displayed
- **Evidence**: `npm list` output

#### TC-1.3: peerDependencies contains dual version support

- **Command**: `cat package.json | jq '.peerDependencies'`
- **Expected**: `{"react": "^18.0.0 || ^19.0.0", "react-dom": "^18.0.0 || ^19.0.0"}`
- **Evidence**: JSON output from jq

---

## Story 2: Fix Build Output Filename

### QA Gate

Verify that the build produces `index.mjs` and `index.cjs` files that match the package.json exports map.

### Test Environment

- **Location**: `packages/design-system/`
- **Output Directory**: `packages/design-system/dist/`

### Test Data

#### 2.1 Run the build

```bash
cd packages/design-system
npm run build
```

#### 2.2 Check output files exist

```bash
ls -la packages/design-system/dist/
# Expected: index.mjs, index.cjs, index.css, index.d.ts
```

#### 2.3 Verify exports in package.json

```bash
cat packages/design-system/package.json | jq '.exports'
```

### Pass Criteria

| #     | Criterion                         | Expected Output                 |
| ----- | --------------------------------- | ------------------------------- |
| 2.1.1 | Build succeeds without errors     | Exit code 0                     |
| 2.1.2 | `dist/index.mjs` exists           | File exists                     |
| 2.1.3 | `dist/index.cjs` exists           | File exists                     |
| 2.1.4 | Exports map points to index files | `"./dist/index.mjs"` in exports |
| 2.1.5 | File is valid JavaScript module   | Contains valid JS/ESM syntax    |

### Fail Patterns

| Pattern                         | Error Message                                   | Indicates                              |
| ------------------------------- | ----------------------------------------------- | -------------------------------------- |
| `dist/index.mjs does not exist` | `ls: cannot access 'dist/index.mjs'`            | fileName not updated in vite.config.ts |
| Build fails                     | `Build failed`                                  | Vite configuration error               |
| Old file name still used        | `foresight-design-system.mjs` exists            | Bug not fixed                          |
| exports mismatch                | `"import":"./dist/foresight-design-system.mjs"` | package.json not aligned               |

### Evidence Collection

```bash
# Capture 1: Build output
cd packages/design-system
npm run build 2>&1 | tee ../qa-evidence/story2-build.log

# Capture 2: File listing
ls -la dist/ 2>&1 | tee ../qa-evidence/story2-dist-files.log

# Capture 3: Verify exports
cat package.json | jq '.exports' 2>&1 | tee ../qa-evidence/story2-exports.json
```

### Test Cases

#### TC-2.1: Build produces index.mjs

- **Command**: `npm run build && test -f dist/index.mjs`
- **Expected**: Exit code 0, file exists
- **Evidence**: Build log + file existence

#### TC-2.2: Build produces index.cjs

- **Command**: `test -f dist/index.cjs`
- **Expected**: File exists
- **Evidence**: File system check

#### TC-2.3: Exports map matches build output

- **Command**: `cat package.json | jq '.exports.".".import'`
- **Expected**: `"./dist/index.mjs"`
- **Evidence**: JSON comparison

---

## Story 3: Fix ReactElement TypeScript Generics

### QA Gate

Verify that TypeScript type-checking passes with 0 errors, and no TS2339 errors related to ReactElement generic types.

### Test Environment

- **Location**: `packages/design-system/`

### Test Data

#### 3.1 Run type-check

```bash
cd packages/design-system
npm run type-check
```

#### 3.2 Check for specific TS2339 errors

```bash
cd packages/design-system
npm run type-check 2>&1 | grep -i "TS2339"
```

#### 3.3 Verify specific component files compile

```bash
cd packages/design-system
npx tsc --noEmit src/components/ui/badge.tsx src/blocks/dashboard/StatsCard.tsx 2>&1
```

### Pass Criteria

| #     | Criterion                    | Expected Output            |
| ----- | ---------------------------- | -------------------------- |
| 3.1.1 | type-check exits with code 0 | Exit code 0, no errors     |
| 3.1.2 | No TS2339 errors             | Zero occurrences of TS2339 |
| 3.1.3 | Badge component compiles     | No errors in badge.tsx     |
| 3.1.4 | StatsCard component compiles | No errors in StatsCard.tsx |

### Fail Patterns

| Pattern                 | Error Message                                           | Indicates                    |
| ----------------------- | ------------------------------------------------------- | ---------------------------- |
| TS2339 on badge.tsx     | `Property 'className' does not exist on type 'unknown'` | Missing ReactElement generic |
| TS2339 on StatsCard.tsx | `Property 'className' does not exist on type 'unknown'` | Missing ReactElement generic |
| General TS error        | Any `error TSXXXX`                                      | Type configuration issue     |

### Evidence Collection

```bash
# Capture 1: Type-check full output
cd packages/design-system
npm run type-check 2>&1 | tee ../qa-evidence/story3-type-check.log

# Capture 2: Check for TS2339 specifically
npm run type-check 2>&1 | grep "TS2339" | tee ../qa-evidence/story3-ts2339-errors.log

# Capture 3: Full error count
npm run type-check 2>&1 | grep -c "error TS" | tee ../qa-evidence/story3-error-count.txt
```

### Test Cases

#### TC-3.1: type-check passes completely

- **Command**: `npm run type-check`
- **Expected**: Exit code 0, no errors printed
- **Evidence**: Full type-check output

#### TC-3.2: No TS2339 errors present

- **Command**: `npm run type-check 2>&1 | grep TS2339`
- **Expected**: No output (no matches)
- **Evidence**: Grep output

#### TC-3.3: Badge component type-safe

- **Command**: `npx tsc --noEmit src/components/ui/badge.tsx`
- **Expected**: Exit code 0
- **Evidence**: Direct tsc output

---

## Story 4: Run Validation Pipeline

### QA Gate

Verify that all validation commands (type-check, lint, build, build-storybook) pass successfully.

### Test Environment

- **Location**: `packages/design-system/`

### Test Data

#### 4.1 TypeScript check

```bash
cd packages/design-system
npm run type-check
```

#### 4.2 Lint check

```bash
cd packages/design-system
npm run lint
```

#### 4.3 Build

```bash
cd packages/design-system
npm run build
```

#### 4.4 Storybook build

```bash
cd packages/design-system
npm run build-storybook
```

### Pass Criteria

| #     | Criterion                | Expected Output                       |
| ----- | ------------------------ | ------------------------------------- |
| 4.1.1 | type-check exits with 0  | Exit code 0                           |
| 4.1.2 | lint exits with 0        | Exit code 0, 0 errors, 0 warnings     |
| 4.1.3 | build succeeds           | Exit code 0, all dist files created   |
| 4.1.4 | build-storybook succeeds | Exit code 0, storybook-static created |

### Fail Patterns

| Pattern           | Error Message                  | Indicates                  |
| ----------------- | ------------------------------ | -------------------------- |
| Type-check errors | `error TSXXXX`                 | Type errors in codebase    |
| Lint errors       | `warning` or `error` in output | ESLint violations          |
| Build failure     | `Build failed`                 | Vite/Rollup error          |
| Storybook failure | `Build failed.*storybook`      | Storybook misconfiguration |

### Evidence Collection

```bash
# Capture 1: Full pipeline output
cd packages/design-system

npm run type-check 2>&1 | tee ../qa-evidence/story4-type-check.log
echo "EXIT_CODE: $?" >> ../qa-evidence/story4-type-check.log

npm run lint 2>&1 | tee ../qa-evidence/story4-lint.log
echo "EXIT_CODE: $?" >> ../qa-evidence/story4-lint.log

npm run build 2>&1 | tee ../qa-evidence/story4-build.log
echo "EXIT_CODE: $?" >> ../qa-evidence/story4-build.log

npm run build-storybook 2>&1 | tee ../qa-evidence/story4-storybook.log
echo "EXIT_CODE: $?" >> ../qa-evidence/story4-storybook.log

# Capture 2: Error/warning count summary
echo "=== PIPELINE SUMMARY ===" > ../qa-evidence/story4-summary.txt
grep -c "error" ../qa-evidence/story4-type-check.log >> ../qa-evidence/story4-summary.txt
grep -c "warning" ../qa-evidence/story4-lint.log >> ../qa-evidence/story4-summary.txt
```

### Test Cases

#### TC-4.1: TypeScript type-check passes

- **Command**: `npm run type-check`
- **Expected**: Exit code 0
- **Evidence**: Exit code + output

#### TC-4.2: Lint passes with 0 warnings

- **Command**: `npm run lint`
- **Expected**: Exit code 0, output contains "0 warnings"
- **Evidence**: Full lint output

#### TC-4.3: Build completes

- **Command**: `npm run build`
- **Expected**: Exit code 0, dist files exist
- **Evidence**: Build artifacts

#### TC-4.4: Storybook builds

- **Command**: `npm run build-storybook`
- **Expected**: Exit code 0, storybook-static folder created
- **Evidence**: Build directory

---

## Story 5: Integration Test with Survey Builder

### QA Gate

Verify that the design system works correctly when integrated with Survey Builder running React 19.

### Test Environment

- **Primary**: `packages/design-system/`
- **Integration Target**: Survey Builder application (external or apps/survey-builder)
- **Survey Builder React Version**: 19.1.1

### Test Data

#### 5.1 Link design system into npm

```bash
cd packages/design-system
npm link
```

#### 5.2 Verify link in Survey Builder

```bash
# In Survey Builder directory
cd [SURVEY_BUILDER_PATH]
npm link @foresight/design-system
```

#### 5.3 Type-check Survey Builder

```bash
cd [SURVEY_BUILDER_PATH]
npx tsc --noEmit
```

#### 5.4 Start Survey Builder dev server

```bash
cd [SURVEY_BUILDER_PATH]
npm run dev
```

#### 5.5 Verify component renders

- Navigate to a page using design system components
- Check browser console for errors

### Pass Criteria

| #     | Criterion                  | Expected Output                        |
| ----- | -------------------------- | -------------------------------------- |
| 5.1.1 | npm link succeeds          | Exit code 0                            |
| 5.1.2 | Survey Builder type-checks | Exit code 0, no TS errors              |
| 5.1.3 | Dev server starts          | No "hooks from different React" errors |
| 5.1.4 | Components render          | No runtime errors in console           |

### Fail Patterns

| Pattern                | Error Message                          | Indicates                |
| ---------------------- | -------------------------------------- | ------------------------ |
| Link fails             | `ERR!` when running npm link           | Path/linkage issue       |
| Type conflict          | `TS2307: cannot find module`           | Missing dependency       |
| React version mismatch | `Warning: Invalid hook call`           | Different React versions |
| Runtime error          | `Uncaught Error: Minified React error` | React version conflict   |

### Evidence Collection

```bash
# Capture 1: Link operation
cd packages/design-system
npm link 2>&1 | tee ../qa-evidence/story5-link.log

# Capture 2: Survey Builder type-check (run in Survey Builder)
cd [SURVEY_BUILDER_PATH]
npx tsc --noEmit 2>&1 | tee ../qa-evidence/story5-sb-typecheck.log
echo "EXIT_CODE: $?" >> ../qa-evidence/story5-sb-typecheck.log

# Capture 3: Dev server output (capture startup)
timeout 30 npm run dev 2>&1 | tee ../qa-evidence/story5-dev-server.log

# Capture 4: Check for React version conflicts
grep -i "hook" ../qa-evidence/story5-dev-server.log | grep -i "react" >> ../qa-evidence/story5-react-conflicts.log
```

### Test Cases

#### TC-5.1: npm link succeeds

- **Command**: `npm link` in design-system
- **Expected**: Exit code 0, no errors
- **Evidence**: Link output

#### TC-5.2: Survey Builder compiles

- **Command**: `npx tsc --noEmit` in Survey Builder
- **Expected**: Exit code 0
- **Evidence**: Type-check output

#### TC-5.3: Dev server starts without conflicts

- **Command**: `npm run dev` + check for "hooks" error in output
- **Expected**: Server starts, no hook warnings
- **Evidence**: Server log

#### TC-5.4: Components render correctly

- **Manual Test**: Open browser, navigate to component
- **Expected**: Components render without React errors
- **Evidence**: Browser console screenshot/log

---

## Evidence Summary

All evidence should be saved to `/Users/tamyreslucas/foresight/qa-evidence/`

### Directory Structure

```
qa-evidence/
├── story1-npm-install.log
├── story1-deps-list.log
├── story1-peer-deps.json
├── story2-build.log
├── story2-dist-files.log
├── story2-exports.json
├── story3-type-check.log
├── story3-ts2339-errors.log
├── story3-error-count.txt
├── story4-type-check.log
├── story4-lint.log
├── story4-build.log
├── story4-storybook.log
├── story4-summary.txt
├── story5-link.log
├── story5-sb-typecheck.log
├── story5-dev-server.log
└── story5-react-conflicts.log
```

---

## Test Execution Order

For best results, execute stories in this order:

1. **Story 1**: Update All Dependencies (foundational)
2. **Story 2**: Fix Build Output Filename (uses Story 1 dependencies)
3. **Story 3**: Fix ReactElement TypeScript Generics (validates fixes)
4. **Story 4**: Run Validation Pipeline (full validation)
5. **Story 5**: Integration Test (end-to-end)

---

## Quick Reference

### Key Commands

```bash
cd packages/design-system

# Install dependencies
npm install

# Type-check
npm run type-check

# Lint
npm run lint

# Build
npm run build

# Build Storybook
npm run build-storybook

# Full validation
npm run type-check && npm run lint && npm run build && npm run build-storybook
```

---

## Notes

- Survey Builder integration (Story 5) requires the Survey Builder application to be available. If not present, skip integration test but ensure all design-system tests pass.
- All commands assume the workspace root is `/Users/tamyreslucas/foresight/`
- Use `2>&1 | tee` to capture all output including errors

---

**End of QA Test Plan**
