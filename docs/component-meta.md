# component.meta.json — Schema & Validation Rules

Every component in `packages/design-system/src/components/ui/` **must** have a corresponding `{componentId}.meta.json` file in the same directory.

## Schema

```json
{
  "componentId": "button",
  "description": "1–2 objective sentences describing what the component does.",
  "useCases": [
    "Primary action trigger in forms",
    "Confirmation dialogs"
  ],
  "keywords": ["button", "action", "form"]
}
```

### Fields

| Field | Type | Required | Rules |
|---|---|---|---|
| `componentId` | `string` | ✅ | Non-empty. Must match the filename (e.g. `button.meta.json` → `"button"`). |
| `description` | `string` | ✅ | Non-empty. 1–2 objective sentences. Do not invent behaviour. |
| `useCases` | `string[]` | ✅ | At least 1 item. No empty strings. Derive from code + stories only. |
| `keywords` | `string[]` | ✅ | Can be empty `[]`. If items are present, none may be empty strings. |

## Validation (CI)

The GitHub Actions workflow **Component meta lint** (`.github/workflows/component-meta-lint.yml`) runs on every pull request that touches `*.meta.json` files and enforces all rules above.

Run the validator locally before pushing:

```bash
node scripts/validate-component-meta.mjs
```

Exit code `0` = all files pass. Exit code `1` = one or more files failed.

## Adding a new component

1. Create `packages/design-system/src/components/ui/{componentId}.tsx`.
2. Create `packages/design-system/src/components/ui/{componentId}.meta.json` following the schema above.
3. Create `packages/design-system/src/components/{ComponentName}.stories.tsx` with at least one story.
4. Run `node scripts/validate-component-meta.mjs` locally to confirm the meta file passes.
5. Open a PR — the CI check will run automatically.

## Keywords policy

Keywords are **not validated against an allowlist** in this iteration (D3-A). A future iteration (D3-B) may introduce an allowlist check as a warning or blocking step.

## Notes

- `componentId` is always the kebab-case filename without extension.
- `description` and `useCases` must be derived from code and `.stories.tsx` only — do not invent behaviour.
- If information is insufficient to fill a field accurately, use a conservative placeholder and open a follow-up task.
