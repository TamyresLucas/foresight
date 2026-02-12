# Foresight - Design System Monorepo

[![Build Status](https://img.shields.io/badge/build-passing-success)](https://github.com/tamyreslucas/foresight)
[![Tests](https://img.shields.io/badge/tests-100%25-success)](https://github.com/tamyreslucas/foresight)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1-blue)](https://react.dev/)

Workspace dedicado ao **Foresight Design System** - um sistema de design completo baseado em shadcn/ui, Radix UI e Tailwind CSS.

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Iniciar Design System (Storybook)
npm run dev:design-system

# Iniciar Playground
npm run dev:playground

# Build completo
npm run build
```

## 📁 Estrutura do Monorepo

```
foresight/
├── apps/
│   └── playground/          # App de testes e experimentos
├── packages/
│   └── design-system/       # Pacote principal do DS
├── tools/
│   ├── scripts/             # Scripts de automação
│   └── build-scripts/       # Scripts de build
├── docs/                    # Documentação completa
└── .opencode/
    └── skills/              # Skills organizadas por categoria
```

## 📚 Documentação

- [Getting Started](./docs/guides/getting-started.md)
- [Arquitetura do Monorepo](./docs/architecture/monorepo-structure.md)
- [Guia de Contribuição](./docs/guides/contributing.md)
- [Setup MCP](./docs/mcp/setup-guide.md)

## 🛠️ Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev              # Iniciar todos os pacotes em modo dev
npm run dev:design-system # Iniciar apenas o Design System

# Build
npm run build            # Build de todos os pacotes
npm run build:design-system # Build apenas do DS

# Qualidade
npm run lint            # Executar linting
npm run type-check      # Verificar tipos TypeScript
npm run test            # Executar testes
npm run format          # Formatar código com Prettier

# Limpeza
npm run clean           # Limpar builds e caches
```

## 🎨 Design System

O Design System inclui:

- **51+ componentes** baseados em shadcn/ui
- **Tokens semânticos** completos
- **Storybook** para documentação
- **Dark mode** nativo
- **Acessibilidade** (ARIA, keyboard navigation)
- **TypeScript** strict mode

### Componentes Principais

```typescript
import { Button, Input, Dialog, Card } from '@voxco/design-system';

// Uso
<Button variant="default" size="lg">
  Clique aqui
</Button>
```

## 🧠 Skills Disponíveis

As skills estão organizadas em categorias:

- **01-fundamentals/** - React, TypeScript, Tailwind, Patterns
- **02-design-system/** - Arquitetura DS, shadcn, Storybook
- **03-survey-builder/** - Domain-specific (Canvas, Editor, Logic)
- **04-quality/** - Code review, testing, quality gates

## 🔧 Configuração MCP

O projeto usa MCP servers para:

- **Notion** - Integração com documentação
- **shadcn/ui** - Gerenciamento de componentes
- **Tailwind CSS** - Utilitários e configuração

Ver [Setup MCP](./docs/mcp/setup-guide.md) para detalhes.

## 📝 Scripts Úteis

```bash
# Review de código
node tools/scripts/code-review-checklist.js

# Validar skills
node tools/scripts/validate-skills.js
```

## 🤝 Contribuição

1. Leia o [Guia de Contribuição](./docs/guides/contributing.md)
2. Siga as [Skills de Qualidade](./.opencode/skills/04-quality/)
3. Execute os checks antes do PR:
   ```bash
   npm run lint && npm run type-check && npm run test
   ```

## 📄 Licença

MIT - Veja [LICENSE](./LICENSE) para detalhes.

---

**Desenvolvido com ❤️ usando [Opencode](https://opencode.ai)**
