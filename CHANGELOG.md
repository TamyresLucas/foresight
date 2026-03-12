# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
### Fixed
- Fixed the `Calendar` component in `@foresight/design-system` not displaying day numbers. The custom `CalendarDayButton` component has been refactored to correctly implement the `useDayRender` hook from `react-day-picker` v8, ensuring that day numbers are rendered and properly styled with all required modifiers (e.g. `selected`, `disabled`, `range_start`).
### Changed
- Updated `ghost-primary` button variant hover state to match the standard `ghost` variant hover styles (primary background with 10% opacity and primary text color).
