# Getting Started

Guia rápido para começar a trabalhar no Foresight Design System.

## 📋 Pré-requisitos

- Node.js 18+
- npm 9+
- Git

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/tamyreslucas/foresight.git
cd foresight
```

### 2. Instale as dependências

```bash
npm install
```

Isso instalará todas as dependências do monorepo usando workspaces.

### 3. Configure o ambiente

```bash
# Copie o arquivo de exemplo (se houver)
cp .env.example .env.local
```

## 🏃 Primeiros Passos

### Iniciar o Design System (Storybook)

```bash
npm run dev:design-system
```

Acesse: http://localhost:6006

### Iniciar o Playground

```bash
npm run dev:playground
```

Acesse: http://localhost:5173

## 📁 Estrutura de Pastas

```
foresight/
├── apps/
│   └── playground/          # App para testar componentes
├── packages/
│   └── design-system/       # Componentes reutilizáveis
├── tools/
│   ├── scripts/             # Automação
│   └── build-scripts/       # Builds customizados
└── docs/                    # Documentação
```

## 🧪 Testando suas Mudanças

### 1. Verificar tipos

```bash
npm run type-check
```

### 2. Executar lint

```bash
npm run lint
```

### 3. Testes

```bash
npm run test
```

### 4. Build

```bash
npm run build
```

## 🎨 Usando o Design System

### Importar componentes

```typescript
import { Button, Input, Card } from '@voxco/design-system';

function MeuComponente() {
  return (
    <Card>
      <Input placeholder="Digite algo..." />
      <Button variant="default">Enviar</Button>
    </Card>
  );
}
```

### Usar tokens

```css
.meu-componente {
  background-color: var(--semantic-pri);
  color: var(--text-txt-on-primary);
}
```

## 🔧 Configurações Úteis

### VS Code

Instale as extensões recomendadas:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Importer

### Atalhos

```bash
# Lint automático ao salvar
# Configurado em .vscode/settings.json

# Format on save
# Prettier será executado automaticamente
```

## 🐛 Troubleshooting

### Problema: Erro de módulo não encontrado

**Solução:**

```bash
npm run clean
npm install
```

### Problema: Storybook não inicia

**Solução:**

```bash
cd packages/design-system
rm -rf node_modules
npm install
npm run storybook
```

### Problema: Type errors

**Solução:**

```bash
npm run type-check
# Corrija os erros apontados
```

## 📚 Próximos Passos

- Leia [Arquitetura do Monorepo](../architecture/monorepo-structure.md)
- Explore as [Skills](../../.opencode/skills/) disponíveis
- Veja o [Guia de Contribuição](./contributing.md)

## 💡 Dicas

1. **Sempre use o TypeScript strict** - Ajuda a pegar erros cedo
2. **Teste no Storybook** - Antes de integrar no app
3. **Siga as skills** - Elas guiam as melhores práticas
4. **Use os tokens** - Nunca hardcode cores
5. **Faça code review** - Use o checklist disponível

---

**Dúvidas?** Abra uma issue ou consulte as skills em `.opencode/skills/`
