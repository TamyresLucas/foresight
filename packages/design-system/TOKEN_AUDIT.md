# Token Audit & Migration Mapping (Story 1)

## 📋 Audit Summary
- **Legacy Pattern Usage**: 2 occurrences found.
- **Components Affected**: `StatsCard`, `Calendar`.
- **Legacy Files**: `tokens.css` (DELETED).

## 🗺️ Migration Mapping
| File | Legacy Token | Target shadcn Token | Notes |
| :--- | :--- | :--- | :--- |
| `src/blocks/dashboard/StatsCard.tsx` | `--foundation-chart-blueberry` | `--primary` | Direct mapping to primary brand color. |
| `src/components/ui/calendar.tsx` | `--foundation-periwinkle-light` | `--accent` or `--primary/10` | Needs careful check of opacity. |

## 🧪 Search Results (Detailed)
### Foundation Tokens (--foundation-*)
- `packages/design-system/src/blocks/dashboard/StatsCard.tsx`: `bg-[var(--foundation-chart-blueberry)]`
- `packages/design-system/src/components/ui/calendar.tsx`: `bg-[var(--foundation-periwinkle-light)]`

### Semantic Tokens (--semantic-*)
- **0 results found outside reference files.** (Likely already migrated or unused).

### Component-Specific Tokens
- **0 results found outside reference files.** (Likely already migrated or unused).

## 🧱 Justified Exceptions
The following token sets are explicitly excluded from shadcn consolidation per Epic rules:

1. **Chart Tokens (`--chart-1..8`, `sentiment`, `NPS`)**: Required for data visualization accessibility and contrast.
2. **Survey Theme Tokens (`packages/tokens-survey/`)**: Required for per-survey dynamic branding.
3. **LyteNyte Grid Tokens (`--lng1771-*`)**: Bridge tokens for the third-party grid library.

## 📊 Final Inventory Summary
- **Total Legacy Tokens (in tokens.css)**: 547
- **Actual Code Occurrences**: 2
- **Inventory Reduction Potential**: 99.6%
- **Action Plan**: Migrate the 2 identified occurrences in Story 3, then proceed to delete `tokens.css` in Story 5.
