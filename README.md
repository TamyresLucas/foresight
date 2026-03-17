# Foresight - Design System Monorepo

[![Build Status](https://img.shields.io/badge/build-passing-success)](https://github.com/tamyreslucas/foresight)
[![Tests](https://img.shields.io/badge/tests-100%25-success)](https://github.com/tamyreslucas/foresight)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-blue)](https://react.dev/)

Workspace dedicated to **Foresight Design System** - a complete design system based on shadcn/ui, Radix UI and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start Design System (Storybook)
npm run dev:design-system

# Start Playground
npm run dev:playground

# Full build
npm run build
```

## 📁 Monorepo Structure

```
foresight/
├── apps/
│   └── playground/          # Testing and experiments app
├── packages/
│   └── design-system/       # Main DS package
├── tools/
│   ├── scripts/             # Automation scripts
│   └── build-scripts/       # Build scripts
├── docs/                    # Complete documentation
└── .opencode/
    └── skills/              # Skills organized by category
```

## 📚 Documentation

- [Getting Started](./docs/guides/getting-started.md)
- [Monorepo Architecture](./docs/architecture/monorepo-structure.md)
- [Contributing Guide](./docs/guides/contributing.md)
- [MCP Setup](./docs/mcp/setup-guide.md)

## 🛠️ Available Commands

```bash
# Development
npm run dev              # Start all packages in dev mode
npm run dev:design-system # Start only Design System

# Build
npm run build            # Build all packages
npm run build:design-system # Build only DS

# Quality
npm run lint            # Run linting
npm run type-check      # Check TypeScript types
npm run test            # Run tests
npm run format          # Format code with Prettier

# Cleanup
npm run clean           # Clean builds and caches
```

## 🎨 Design System

The Design System includes:

- **51+ components** based on shadcn/ui
- **Complete semantic tokens**
- **Storybook** for documentation
- **Native dark mode**
- **Accessibility** (ARIA, keyboard navigation)
- **TypeScript** strict mode

### Main Components

```typescript
import { Button, Input, Dialog, Card } from '@voxco/design-system';

// Usage
<Button variant="default" size="lg">
  Click here
</Button>
```

## 🧠 Available Skills

Skills are organized into categories:

- **01-fundamentals/** - React, TypeScript, Tailwind, Patterns
- **02-design-system/** - DS Architecture, shadcn, Storybook
- **03-survey-builder/** - Domain-specific (Canvas, Editor, Logic)
- **04-quality/** - Code review, testing, quality gates

## 🔧 MCP Configuration

The project uses MCP servers for:

- **Notion** - Documentation integration
- **shadcn/ui** - Component management
- **Tailwind CSS** - Utilities and configuration

See [MCP Setup](./docs/mcp/setup-guide.md) for details.

## 📝 Useful Scripts

```bash
# Code review
node tools/scripts/code-review-checklist.js

# Validate skills
node tools/scripts/validate-skills.js
```

## 🤝 Contribution

1. Read the [Contributing Guide](./docs/guides/contributing.md)
2. Follow the [Quality Skills](./.opencode/skills/04-quality/)
3. Run checks before PR:
   ```bash
   npm run lint && npm run type-check && npm run test
   ```

## 📄 License

MIT - See [LICENSE](./LICENSE) for details.

---

**Developed with ❤️ using [Opencode](https://opencode.ai)**
