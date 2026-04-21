[Skip to content](https://www.notion.so/Upgrade-Foresight-Design-System-from-React-18-to-React-19-33e4b1b31a6e81d0b16fe92ca549addc#main)

![🏔️ Page icon](<Base64-Image-Removed>)![🏔️ Page icon](https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f3d4-fe0f.svg)

# Upgrade Foresight Design System from React 18 to React 19

Blocked

Empty

DoD

All checks pass: tsc --noEmit (0 errors), npm run lint, npm run build (produces dist/index.mjs, index.cjs, index.css), npm run build-storybook, Storybook visual QA (Button, Badge, StatsCard, Dialog, Forms, Dark mode), npm link works with Survey Builder on React 19.1.1, no duplicate React errors, peer dep range supports both React 18 and 19.

Epic ID

Empty

Execution Plan

Empty

PRD

Empty

Project Docs

PRD: Foresight Design System — React 19 Compatibility

SPEC: Foresight Design System — React 19 Compatibility

Project ID

Empty

QA Test Plan

Empty

QA Test Plan required

Ready for decomposition

Roadmap

![🗺️](<Base64-Image-Removed>)

Foresight

Specs

Empty

Started

Empty

Status

Planned

Stories

feat: Update package.json peerDeps, @types/react, and fix vite.config.ts fileName

fix: Narrow ReactElement generics in badge.tsx and StatsCard.tsx for @types/react v19

qa: Automated QA, Storybook visual review, and npm link integration test

Summary

Foresight DS targets React 18 peerDeps; Survey Builder is on 19.1.1. Widen peerDeps, fix 4 files (6 targeted edits), fix build output mismatch. Low risk, 1-2 days estimated.

Target End

Empty

### Context

The Foresight design system (

@foresight/design-system

) currently targets React 18 (

peerDependencies: "^18.0.0"

). Survey Builder is already on React 19.1.1. To share components between projects via

npm link

, Foresight must support React 19. No deprecated React APIs were found in the codebase, making this a low-risk upgrade.

### Scope of Changes — Confirmed: 4 files, 6 targeted edits

> Spec analysis (deep file scan, 195 source files) confirmed scope is smaller and more precise than originally estimated.

| # | File | Lines | Change |
| --- | --- | --- | --- |
| 1a | packages/design-system/package.json | 41–44 | peerDeps <br>^18.0.0<br>→ <br>^18.0.0 \|\| ^19.0.0 |
| 1b | packages/design-system/package.json | 112–113 | @types/react<br>• <br>@types/react-dom<br>^18.3.3<br>→ <br>^19.0.0 |
| 1c | packages/design-system/package.json | new lines | Add <br>react: ^19.0.0<br>• <br>react-dom: ^19.0.0<br>to devDeps |
| 2 | packages/design-system/vite.config.ts | 12 | foresight-design-system.\*<br>→ <br>index.\* |
| 3 | packages/design-system/src/components/ui/badge.tsx | 42, 45 | ReactElement<unknown><br>→ <br>ReactElement<{ className?: string }> |
| 4 | packages/design-system/src/blocks/dashboard/StatsCard.tsx | 318, 319 | ReactElement<br>→ <br>ReactElement<{ className?: string; fill?: boolean }><br>(note: <br>fill?: boolean<br>added — original estimate missed this) |

### Confirmed Non-Changes (removed from scope)

toast.tsx

line 121 —

ReactElement<typeof ToastAction>

is already explicit, safe in React 19. NO change needed.

useRef()

bare calls — 0 bare

useRef()

calls found across all 195 source files. All 18 usages already use

useRef<Type>(null)

. NO changes needed.

forwardRef

usages — 141 usages found. Deprecated but NOT removed in React 19. No migration needed.

Survey Builder

vite.config.ts

—

dedupe: \['react', 'react-dom'\]

already present at line 47. NO change needed.

### Phases

#### Phase 1: Safety Branch

Create branch

feat/react-19-upgrade

#### Phase 2: Update Dependencies

Widen peerDependencies to

"^18.0.0 \|\| ^19.0.0"

for react and react-dom

Update devDependencies:

@types/react

and

@types/react-dom

to

^19.0.0

Add

react

and

react-dom

^19.0.0

as devDependencies

Run

npm install

#### Phase 3: Fix TypeScript Errors

Fix

ReactElement<unknown>

→

ReactElement<{ className?: string }>

in

badge.tsx

(lines 42, 45)

Fix

ReactElement

→

ReactElement<{ className?: string; fill?: boolean }>

in

StatsCard.tsx

(lines 318, 319)

toast.tsx

— NO change needed (already explicit)

useRef()

— NO changes needed (all 18 usages already typed)

Run

npx tsc --noEmit

iteratively until 0 errors

#### Phase 4: Fix Build Output Mismatch

Update

vite.config.ts

fileName to produce

index.mjs

/

index.cjs

#### Phase 5: Automated QA Validation

Type-check:

npx tsc --noEmit

Lint:

npm run lint

Build:

npm run build

Verify outputs:

dist/index.mjs

,

dist/index.cjs

,

dist/index.css

Storybook build:

npm run build-storybook

Verify React externalized

#### Phase 6: Manual Visual QA (Storybook)

Button (all variants), Badge (with icons), StatsCard (with icon), Dialog/AlertDialog, Form components, Dark mode, No console errors

#### Phase 7: Integration Test with Survey Builder

npm link Foresight in Survey Builder

Verify imports, no duplicate React, Button renders

### Acceptance Criteria

npx tsc --noEmit

passes (0 errors)

npm run lint

passes

npm run build

produces correct outputs

npm run build-storybook

succeeds

Storybook components render correctly

npm link

works with Survey Builder (React 19.1.1)

No "hooks from different React" errors

Peer dep range supports React 18 and 19

### Rollback Plan

cd ~/foresight && git checkout main

​

Widened peer dep range means React 18 consumers are unaffected.