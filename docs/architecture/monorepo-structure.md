# Monorepo Structure

Architecture and organization of Foresight Design System.

## 🏗️ Overview

Foresight uses a monorepo managed by:

- **npm workspaces** - Dependency management
- **Turbo** - Build system and caching
- **TypeScript** - Type checking across all packages

## 📁 Folder Organization

```
foresight/
│
├── 📁 apps/                    # Applications
│   └── playground/            # Testing and examples app
│
├── 📁 packages/               # Publishable packages
│   └── design-system/         # DS components
│       ├── src/
│       │   ├── components/    # UI components
│       │   ├── hooks/         # Reusable hooks
│       │   ├── lib/           # Utilities
│       │   └── styles/        # CSS and tokens
│       ├── .storybook/        # Storybook config
│       └── package.json
│
├── 📁 tools/                  # Tools and scripts
│   ├── scripts/               # Automation scripts
│   │   ├── code-review-checklist.js
│   │   └── validate-skills.js
│   └── build-scripts/         # Build scripts
│
├── 📁 docs/                   # Documentation
│   ├── architecture/          # ADRs and decisions
│   ├── guides/                # Tutorials
│   └── mcp/                   # MCP docs
│
├── 📁 .opencode/              # AI-native setup
│   └── skills/                # AI agent skills
│       ├── 01-fundamentals/   # Core patterns
│       ├── 02-design-system/  # AI-native DS
│       └── 04-quality/        # Governance gates
│
└── 📁 .github/                # CI/CD
    └── workflows/
```

## 🔄 Workflow

### Development

1. **Edit** code in `packages/design-system/`
2. **Test** in Storybook: `npm run dev:design-system`
3. **Validate** in Playground: `npm run dev:playground`
4. **Build**: `npm run build`
5. **Commit**: Following conventional commits

### Dependencies

**Between packages:**

```json
// packages/design-system/package.json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.0.0"
  }
}

// apps/playground/package.json
{
  "dependencies": {
    "@foresight/design-system": "workspace:*"
  }
}
```

**At root (shared):**

```json
// package.json (root)
{
  "devDependencies": {
    "turbo": "^1.11.0",
    "typescript": "^5.3.0"
  }
}
```

## ⚡ Turbo Pipeline

```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "test": {
      "dependsOn": ["build"]
    },
    "dev": {
      "cache": false
    }
  }
}
```

**How it works:**

- `build` only executes after dependencies have built
- `test` only runs after build
- `dev` doesn't use cache (always updated)

## 🎯 Conventions

### Naming

- **Folders**: `kebab-case` (design-system, build-scripts)
- **Components**: `PascalCase` (Button.tsx, Card.tsx)
- **Hooks**: `camelCase` with `use` prefix (use-toast.ts)
- **Utils**: `kebab-case` (cn.ts, format-date.ts)

### Imports

```typescript
// ✅ GOOD: Organized imports
import * as React from "react";
import { useState } from "react";

import { Button } from "@foresight/design-system";

import { MeuHook } from "@/hooks";
import { formatDate } from "@/lib/utils";

import { MeuComponente } from "./MeuComponente";

// ❌ BAD: Messy imports
import { Button } from "@foresight/design-system";
import { useState } from "react";
```

### Component Structure

```typescript
// 1. Imports
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 2. Variants (CVA)
const buttonVariants = cva(
  'base-classes',
  {
    variants: {
      variant: { default: '', destructive: '' },
      size: { sm: '', md: '', lg: '' }
    },
    defaultVariants: { variant: 'default', size: 'md' }
  }
);

// 3. Interface
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 4. Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// 5. Export
export { Button, buttonVariants };
export type { ButtonProps };
```

## 📦 Versioning

### Packages

Each package in `packages/` has its own versioning:

```
packages/design-system/
├── package.json    # v0.1.0
├── CHANGELOG.md    # History of changes
└── README.md       # Specific documentation
```

### Strategy

- **Patch** (0.0.x): Bug fixes
- **Minor** (0.x.0): New components
- **Major** (x.0.0): Breaking changes

## 🔒 Isolation

### Why monorepo?

✅ **Shared code** - Reusable components
✅ **Consistency** - Same configs everywhere
✅ **Easy refactoring** - Changes across multiple apps
✅ **Unified CI/CD** - One pipeline for everything

### But be careful:

⚠️ **Don't couple too much** - Keep packages independent
⚠️ **Avoid circular dependencies** - packages/A → packages/B ❌
⚠️ **Test in isolation** - Each package should work alone

## 🚀 Build and Deploy

### Local build

```bash
# Build everything
npm run build

# Build only DS
npm run build --filter=@foresight/design-system

# Build only Playground
npm run build --filter=playground
```

### Deploy

```bash
# Design System (Storybook)
npm run build:design-system
# Deploy dist/ to GitHub Pages/Vercel

# Playground
npm run build:playground
# Deploy apps/playground/dist/
```

## 📝 New Package Checklist

- [ ] Create folder in `packages/` or `apps/`
- [ ] Add `package.json` with name and version
- [ ] Configure `tsconfig.json`
- [ ] Add scripts: build, dev, test, lint
- [ ] Update `turbo.json` if necessary
- [ ] Add to CI/CD pipeline
- [ ] Document in `docs/`

---

**Also read:**

- [Getting Started](../guides/getting-started.md)
- [Design System Architecture](../../.opencode/skills/02-design-system/design-system-architecture.md)
