# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
### Added
- Completed comprehensive design token audit comparing all Foresight CSS custom properties against Shadcn/ui canonical naming conventions. Identified 21/21 core tokens conformant, ~70 well-named extensions, 3 critical `--lng1771-*` naming violations, and ~15 naming divergences (mostly `--background-{status}` / `--border-{status}` patterns).
- Created Milestone 5 Story in Notion ("Shadcn token naming audit cleanup") under Epic "3 layer architecture" with 8 tasks (S1 spec, S2 implement ×6, S3 QA). Sequenced before Milestone 4 (tokens.css deprecation).
- Created Notion API workflow automation scripts to interact with internal Kanban and Execution Log DBs (stored as untracked scratch files).

- Restored custom `paper` MCP server configuration in `opencode.jsonc` that was overwritten during reformatting.
- Created "Red Core" design artboard in Paper Design Tool, featuring a vibrant red-to-dark gradient background, modern typography (Outfit), and a centered login experience with glassmorphism effects and primary action buttons.

### Removed
- Deleted legacy `src/components/survey/_reference` directory from `@foresight/design-system`. This directory contained 18 broken, dead-code files copied from the main Survey Builder application that were no longer maintainable or needed.
- Removed the `src/components/survey/_reference` exclusion from `packages/design-system/tsconfig.json`.

### Fixed
- Fixed syntax error (extra closing brace) in `opencode.jsonc` configuration file preventing MCP server initialization.
- Fixed a ghost syntax error (Expected comma at EOF) in `opencode.jsonc` by re-formatting the JSON to enforce a trailing newline.
- Fixed the `Calendar` component in `@foresight/design-system` not displaying day numbers. The custom `CalendarDayButton` component has been refactored to correctly implement the `useDayRender` hook from `react-day-picker` v8, ensuring that day numbers are rendered and properly styled with all required modifiers (e.g. `selected`, `disabled`, `range_start`).
### Changed
- Replaced hardcoded surface hover tokens in `lytenyte-grid.css` with precise `--primary` CSS variable mappings to strictly adhere to the updated token audit requirements.
- Addressed 80 legacy TypeScript/ESLint strict errors within `_reference` components using an AST auto-fixer: eliminated unused imports, removed deprecated payload hooks, and coerced implicit `any` assignments to `unknown`.
- Upgraded local `zod` module to immediately resolve `ERR_PACKAGE_PATH_NOT_EXPORTED` pipeline halts, allowing the re-enablement of strict `react-hooks` and `storybook` configuration validations.
- Applied targeted inline suppressions for 43 remaining hook exhaustive-deps/rules constraints strictly for unmigrated legacy `_reference` survey components.

- Updated `ghost-primary` button variant hover state to match the standard `ghost` variant hover styles (primary background with 10% opacity and primary text color).
- Updated `Badge` component: variants (`secondary`, `destructive`, `success`, `warning`) now implement a layered background system. In light mode, a pure white base is used under a 10% opacity color overlay (matching `ghost` button hover) to ensure accurate color rendering. The text remains standard `text-foreground` for legibility. The `warning` variant is now aligned with the primary design tokens.
- Updated `Switch` component: the background color when in the "on" (checked) state now correctly uses the primary color token.
- Updated `Checkbox` component: Fixed styling issue where checkboxes appeared circular; they are now rounded squares with soft borders in the unchecked state and correctly use design tokens.
- Standardized border colors across the design system: `border-primary/20` for containers (Cards, Dialogs, Popovers, Tabs, Collapsible sections) and `border-primary/40` for interactive elements and data display (Inputs, Selects, Tables).
- Updated `Table` component: row hover background now uses 10% opacity primary color, matching the `ghost` button hover state.
- Refactored `Collapsible` component to follow standard project patterns, including `forwardRef` support and built-in entry/exit animations (`collapsible-down`, `collapsible-up`).
- Updated `Collapsible` stories to use standardized `border-primary/40` token, matching interactive elements like `Input` and `Select`.
- Added `collapsible-down` and `collapsible-up` keyframes and animations to `tailwind.config.js`.
- Updated `Alert` component: the `default` variant background now matches the `ghost` button hover state (`bg-primary/10`).
- Refined dashboard aesthetics: Updated `Popover`, `DropdownMenu`, `SelectContent`, and `Tooltip` to use `bg-card` and improved `shadow-lg` for better visual hierarchy and consistency.
- Standardized `Tabs`: Added border and shadow to `TabsList`, and refined `TabsTrigger` active state.
