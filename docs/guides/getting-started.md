# Getting Started

Quick guide to get started working on Foresight Design System.

## 📋 Prerequisites

- Node.js 18+
- npm 9+
- Git

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/tamyreslucas/foresight.git
cd foresight
```

### 2. Install dependencies

```bash
npm install
```

This will install all monorepo dependencies using workspaces.

### 3. Configure environment

```bash
# Copy the example file (if available)
cp .env.example .env.local
```

## 🏃 Getting Started

### Start Design System (Storybook)

```bash
npm run dev:design-system
```

Access: http://localhost:6006

### Start Playground

```bash
npm run dev:playground
```

Access: http://localhost:5173

## 📁 Folder Structure

```
foresight/
├── apps/
│   └── playground/          # App to test components
├── packages/
│   └── design-system/       # Reusable components
├── tools/
│   ├── scripts/             # Automation
│   └── build-scripts/       # Custom builds
└── docs/                    # Documentation
```

## 🧪 Testing Your Changes

### 1. Check types

```bash
npm run type-check
```

### 2. Run lint

```bash
npm run lint
```

### 3. Tests

```bash
npm run test
```

### 4. Build

```bash
npm run build
```

## 🎨 Using the Design System

### Import components

```typescript
import { Button, Input, Card } from '@voxco/design-system';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Type something..." />
      <Button variant="default">Submit</Button>
    </Card>
  );
}
```

### Use tokens

```css
.my-component {
  background-color: var(--semantic-pri);
  color: var(--text-txt-on-primary);
}
```

## 🔧 Useful Settings

### VS Code

Install recommended extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Importer

### Shortcuts

```bash
# Auto lint on save
# Configured in .vscode/settings.json

# Format on save
# Prettier will run automatically
```

## 🐛 Troubleshooting

### Problem: Module not found error

**Solution:**

```bash
npm run clean
npm install
```

### Problem: Storybook doesn't start

**Solution:**

```bash
cd packages/design-system
rm -rf node_modules
npm install
npm run storybook
```

### Problem: Type errors

**Solution:**

```bash
npm run type-check
# Fix the pointed errors
```

## 📚 Next Steps

- Read [Monorepo Architecture](../architecture/monorepo-structure.md)
- Explore available [Skills](../../.opencode/skills/)
- See the [Contributing Guide](./contributing.md)

## 💡 Tips

1. **Always use strict TypeScript** - Helps catch errors early
2. **Test in Storybook** - Before integrating in the app
3. **Follow skills** - They guide best practices
4. **Use tokens** - Never hardcode colors
5. **Do code review** - Use the available checklist

---

**Questions?** Open an issue or consult skills in `.opencode/skills/`
