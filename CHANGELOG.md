# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
### Added
- Implemented core theme system foundation:
  - Introduced `--brand-*` tokens (primary, secondary, destructive, radius, fonts) in `tokens-static.css` for both light and dark modes.
  - Created Zod-backed `ThemeSchema` and `Theme` types for robust validation and persistence.
  - Implemented `applyTheme()` function to dynamically apply CSS custom properties and load Google Fonts.
  - Added WCAG AA contrast verification logic using `culori`.
  - Added `default.json` theme preset with brand-aligned values.
- Enhanced theme system with auto-derivation (Story 2):
  - Added intelligent foreground color selection based on background luminance (WCAG AA).
  - Implemented automatic generation of dark mode color variants with optimized lightness and saturation.
  - Added derivation of surface tokens (backgrounds and borders) for semantic variants like destructive.
  - Aligned `--ring`, borders, and chart tokens to automatically scale with the primary brand color in both light and dark modes.
- Standardized `secondary` color and `disabled` foreground to `tailwind.config.js` to align with shadcn conventions.
- Added raw HSL definitions for `muted-foreground` and `disabled-foreground` in `tokens-static.css` to support Tailwind opacity modifiers.
- Integrated `@foresight/tokens-survey` as a monorepo workspace dependency.
- Added missing `--chart-3`, `--chart-5`, and `--chart-7` shade variants to `tokens-static.css` for both light and dark modes.

### Removed
- Deleted deprecated `tokens.css` file from `packages/design-system` after migrating all remaining typography, elevation, animation, and surface system tokens to `tokens-static.css`.

### Changed
- Standardized `Button.tsx` variants (`secondary`, `disabled`) and `index.css` components (Vibe variants, table rows, React Flow) to use unified Tailwind classes instead of manual HSL lookups.
- Refactored `index.css` to use `@apply` with standardized tokens for improved maintainability.
- Consolidated color tokens across `packages/design-system` per shadcn conventions, ensuring consistency between CSS variables and Tailwind configuration.
- Updated canonical CSS import order in `index.css` to follow the 3-layer architecture: Platform Primitives → Survey Tokens → Component Utilities.

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
