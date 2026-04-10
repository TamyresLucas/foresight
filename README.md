# Foresight - AI-Native Design System & Governance

[![Build Status](https://img.shields.io/badge/build-passing-success)](https://github.com/tamyreslucas/foresight)
[![Tests](https://img.shields.io/badge/tests-100%25-success)](https://github.com/tamyreslucas/foresight)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-blue)](https://react.dev/)

Foresight is an **AI-native design system and governance framework**. It is structured so AI can operate inside it, connecting design, code, and documentation into one seamless operational workflow.

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
│   └── playground/          # AI-assisted testing and experiments app
├── packages/
│   └── design-system/       # Main AI-native DS package (shadcn/ui base)
├── tools/
│   ├── scripts/             # Automation and governance scripts
│   └── build-scripts/       # Build pipelines
├── docs/                    # Integrated documentation (Notion knowledge layer)
└── .opencode/
    └── skills/              # AI agent skills and workflow definitions
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
npm run lint            # Run syntax and governance checks
npm run type-check      # Check TypeScript types
npm run test            # Run automated tests
npm run format          # Format code with Prettier
```

## 🎨 Design System

The system is built on **shadcn/ui**, **Radix UI**, and **Tailwind CSS**, optimized for AI governance:

- **AI-Native Governance**: Structure optimized for code agents via MCP.
- **Notion Knowledge Layer**: Bi-directional documentation sync for AI agents.
- **Semantic Token Naming**: Token roles follow component-native conventions.
- **Auto-Documentation Loop**: Knowledge stays current via automated agent updates.

### Usage Example

```typescript
import { Button, Input, Dialog, Card } from '@foresight/design-system';

// AI-native components follow standardized roles
<Button variant="default" size="lg">
  Operational Action
</Button>
```

## 🧠 Core Skills

Skills are organized to guide AI and human collaboration:

- **01-fundamentals/** - Core languages, tools, and design patterns.
- **02-design-system/** - AI-native architecture and component governance.
- **04-quality/** - Automated review, testing, and compliance gates.

## 🔧 MCP Configuration

Foresight leverages Model Context Protocol (MCP) to expose system internals to AI:

- **Notion** - Context-aware documentation access.
- **shadcn/ui** - Native component registration and search.
- **Tailwind CSS** - Intelligent utility and token mapping.

See [MCP Setup](./docs/mcp/setup-guide.md) for detailed configuration.

---

**Developed with ❤️ using [Opencode](https://opencode.ai)**
