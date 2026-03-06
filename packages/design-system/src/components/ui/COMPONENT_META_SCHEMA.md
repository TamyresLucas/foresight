# Component Metadata Schema

Each component in `ui/` may have a corresponding `<componentId>.meta.json` file in the same directory.

## Schema

```json
{
  "componentId": "string (kebab-case, must match filename)",
  "description": "string (1-2 objective sentences derived from code/stories)",
  "useCases": ["string", "..."],
  "keywords": ["string", "..."]
}
```

## Rules

- `componentId` must match the filename kebab-case (e.g., `button.tsx` → `"button"`).
- `description` and `useCases` may be `"TBD: ..."` if not objectively derivable from code.
- `keywords`: minimum 3. Use `componentId` + additional terms derived from code/stories.
- Do **not** invent data. If unsure, use `"TBD: <reason>"`.

## Purpose

These files are the source of truth for the Notion Design System Components registry.
They are consumed by the `component-registry-upserter` skill to populate `Description`, `Use Cases`, and `Keywords` fields without manual entry.

## Examples

See `button.meta.json`, `alert.meta.json`, `card.meta.json` in this directory.
