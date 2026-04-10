# Figma Code Connect - Foresight Design System

## 📋 Overview

This setup connects the **Foresight Design System** to Figma using Code Connect. When configured, designers and developers can see real component code directly in Figma's Dev Mode.

## ✅ Setup Complete

The following has been configured:

- ✅ `@figma/code-connect` CLI installed
- ✅ `.env` file with `FIGMA_ACCESS_TOKEN`
- ✅ `figma.config.json` with component paths
- ✅ Example Code Connect file for Button component
- ✅ npm scripts for Code Connect workflow

## 🚀 Quick Start

### 1. Get Figma Component URLs

For each component you want to connect:

1. Open your Figma design system file
2. Select the main component (not an instance)
3. Copy the link (it contains the file key and node-id)
4. The URL looks like: `https://www.figma.com/file/ABC123/Design-System?node-id=123:456`

### 2. Create Code Connect Files

Use the CLI to generate a Code Connect file for a specific component:

```bash
# Generate a Code Connect file for a specific Figma component
npx figma connect create "https://www.figma.com/file/ABC123/Design-System?node-id=123:456" \
  --outFile packages/design-system/src/components/ui/button.figma.tsx
```

Or manually create/edit `*.figma.tsx` files (see example below).

### 3. Publish to Figma

```bash
# Test run (recommended first)
npm run figma:connect:dry-run

# Check connections
npm run figma:connect:check

# Publish to Figma
npm run figma:connect
```

## 📁 File Structure

```
foresight/
├── .env                              # Figma access token (gitignored)
├── figma.config.json                 # Code Connect configuration
├── package.json                      # npm scripts for Code Connect
└── packages/design-system/
    └── src/components/
        ├── ui/
        │   ├── button.tsx            # Actual component
        │   ├── button.meta.json      # Component metadata
        │   └── button.figma.tsx      # Code Connect file ← NEW
        └── ...
```

## 🔧 Configuration

### figma.config.json

```json
{
  "codeConnect": {
    "include": [
      "packages/design-system/src/components/ui/*.tsx",
      "packages/design-system/src/components/**/*.figma.tsx"
    ],
    "parser": "react",
    "importPaths": {
      "packages/design-system/src/components/ui/*": "@foresight/design-system"
    }
  }
}
```

### Example: Button.figma.tsx

```typescript
import figma from "@figma/code-connect";
import { Button } from "./button";

const FIGMA_BUTTON_URL = "https://www.figma.com/design/YOUR_KEY/...";

figma.connect(FIGMA_BUTTON_URL, {
  variant: {
    "Button": "Default",
  },
  props: {
    children: figma.string("content"),
    variant: figma.enum("Variant", {
      Primary: "default",
      Destructive: "destructive",
      // ... map Figma variants to component props
    }),
    size: figma.enum("Size", {
      Small: "sm",
      Default: "default",
      Large: "lg",
    }),
    disabled: figma.boolean("Disabled"),
    isLoading: figma.boolean("Loading"),
  },
  example: ({ children, variant, size, disabled, isLoading }) => (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      isLoading={isLoading}
    >
      {children}
    </Button>
  ),
});
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run figma:connect` | Publish all Code Connect files to Figma |
| `npm run figma:connect:dry-run` | Test publish without actually publishing |
| `npm run figma:connect:check` | Validate Code Connect files |

## 🔄 Workflow

### For Developers

1. **Create component** in `packages/design-system/src/components/ui/`
2. **Get Figma URL** from designer (or copy from Figma)
3. **Create `.figma.tsx` file** using `npx figma connect create <url>`
4. **Map props** from Figma to component (variants, strings, booleans)
5. **Test** with `npm run figma:connect:dry-run`
6. **Publish** with `npm run figma:connect`

### For Designers

1. **Create/update component** in Figma
2. **Share component URL** with developer
3. **View code** in Dev Mode after publish

## 🔐 Security

- The `.env` file containing `FIGMA_ACCESS_TOKEN` is gitignored
- Never commit tokens to version control
- Rotate tokens regularly in Figma account settings

## 📚 Resources

- [Figma Code Connect Documentation](https://www.figma.com/developers/code-connect)
- [Code Connect GitHub Repo](https://github.com/figma/code-connect)
- [Figma Dev Mode](https://www.figma.com/dev-mode/)

## 🐛 Troubleshooting

### "Couldn't find a Figma access token"
- Ensure `.env` file exists in the project root
- Verify `FIGMA_ACCESS_TOKEN` is set correctly
- Or pass token directly: `npx figma connect publish --token <token>`

### "No files matched the include patterns"
- Check `figma.config.json` include patterns
- Verify `.figma.tsx` files exist in specified paths
- Run with `--verbose` flag: `npx figma connect publish --verbose`

### Component not showing correct code in Figma
- Verify Figma URL matches the component exactly
- Check variant mappings match Figma component properties
- Run `npm run figma:connect:check` to validate

## 📝 Next Steps

- [ ] Create Code Connect files for all UI components
- [ ] Map all variants (Button, Input, Card, etc.)
- [ ] Add to CI/CD pipeline for auto-publish on component updates
- [ ] Document component property mappings
