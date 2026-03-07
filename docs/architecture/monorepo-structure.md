# Estrutura do Monorepo

Arquitetura e organização do Foresight Design System.

## 🏗️ Visão Geral

O Foresight usa um monorepo gerenciado por:

- **npm workspaces** - Gerenciamento de dependências
- **Turbo** - Build system e caching
- **TypeScript** - Type checking em todos os pacotes

## 📁 Organização das Pastas

```
foresight/
│
├── 📁 apps/                    # Aplicações
│   └── playground/            # App de testes e exemplos
│
├── 📁 packages/               # Pacotes publicáveis
│   └── design-system/         # Componentes do DS
│       ├── src/
│       │   ├── components/    # Componentes UI
│       │   ├── hooks/         # Hooks reutilizáveis
│       │   ├── lib/           # Utilitários
│       │   └── styles/        # CSS e tokens
│       ├── .storybook/        # Config Storybook
│       └── package.json
│
├── 📁 tools/                  # Ferramentas e scripts
│   ├── scripts/               # Scripts de automação
│   │   ├── code-review-checklist.js
│   │   └── validate-skills.js
│   └── build-scripts/         # Scripts de build
│
├── 📁 docs/                   # Documentação
│   ├── architecture/          # ADRs e decisões
│   ├── guides/                # Tutoriais
│   └── mcp/                   # Docs MCP
│
├── 📁 .opencode/              # Config Opencode
│   └── skills/                # Skills organizadas
│       ├── 01-fundamentals/
│       ├── 02-design-system/
│       ├── 03-survey-builder/
│       └── 04-quality/
│
└── 📁 .github/                # CI/CD
    └── workflows/
```

## 🔄 Fluxo de Trabalho

### Desenvolvimento

1. **Edite** o código em `packages/design-system/`
2. **Teste** no Storybook: `npm run dev:design-system`
3. **Valide** no Playground: `npm run dev:playground`
4. **Build**: `npm run build`
5. **Commit**: Seguindo conventional commits

### Dependências

**Entre pacotes:**

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
    "@voxco/design-system": "workspace:*"
  }
}
```

**Na raiz (compartilhadas):**

```json
// package.json (raiz)
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

**Como funciona:**

- `build` só executa depois que dependências fizeram build
- `test` só roda depois do build
- `dev` não usa cache (sempre atualizado)

## 🎯 Convenções

### Nomenclatura

- **Pastas**: `kebab-case` (design-system, build-scripts)
- **Componentes**: `PascalCase` (Button.tsx, Card.tsx)
- **Hooks**: `camelCase` com prefixo `use` (use-toast.ts)
- **Utils**: `kebab-case` (cn.ts, format-date.ts)

### Imports

```typescript
// ✅ BOM: Imports organizados
import * as React from "react";
import { useState } from "react";

import { Button } from "@voxco/design-system";

import { MeuHook } from "@/hooks";
import { formatDate } from "@/lib/utils";

import { MeuComponente } from "./MeuComponente";

// ❌ RUIM: Imports bagunçados
import { Button } from "@voxco/design-system";
import { useState } from "react";
```

### Estrutura de Componentes

```typescript
// 1. Imports
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// 2. Variantes (CVA)
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

// 4. Componente
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

## 📦 Versionamento

### Pacotes

Cada pacote em `packages/` tem seu próprio versionamento:

```
packages/design-system/
├── package.json    # v0.1.0
├── CHANGELOG.md    # Histórico de mudanças
└── README.md       # Documentação específica
```

### Estratégia

- **Patch** (0.0.x): Bug fixes
- **Minor** (0.x.0): Novos componentes
- **Major** (x.0.0): Breaking changes

## 🔒 Isolamento

### Por que monorepo?

✅ **Código compartilhado** - Components reutilizáveis
✅ **Consistência** - Mesmas configs em todo lugar
✅ **Refatoração fácil** - Mudanças em múltiplos apps
✅ **CI/CD unificado** - Um pipeline para tudo

### Mas atenção:

⚠️ **Não acople demais** - Mantenha pacotes independentes
⚠️ **Evite dependências circulares** - packages/A → packages/B ❌
⚠️ **Teste isoladamente** - Cada pacote deve funcionar sozinho

## 🚀 Build e Deploy

### Build local

```bash
# Build tudo
npm run build

# Build apenas DS
npm run build --filter=@voxco/design-system

# Build apenas Playground
npm run build --filter=playground
```

### Deploy

```bash
# Design System (Storybook)
npm run build:design-system
# Deploy dist/ para GitHub Pages/Vercel

# Playground
npm run build:playground
# Deploy apps/playground/dist/
```

## 📝 Checklist de Novo Pacote

- [ ] Criar pasta em `packages/` ou `apps/`
- [ ] Adicionar `package.json` com nome e version
- [ ] Configurar `tsconfig.json`
- [ ] Adicionar scripts: build, dev, test, lint
- [ ] Atualizar `turbo.json` se necessário
- [ ] Adicionar ao pipeline de CI/CD
- [ ] Documentar em `docs/`

---

**Leia também:**

- [Getting Started](../guides/getting-started.md)
- [Design System Architecture](../../.opencode/skills/02-design-system/design-system-architecture.md)
