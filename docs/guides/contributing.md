# Guia de Contribuição

Como contribuir para o Foresight Design System.

## 🎯 Antes de Começar

1. **Leia as Skills** - Confira `.opencode/skills/` para entender os padrões
2. **Configure o ambiente** - Veja [Getting Started](../guides/getting-started.md)
3. **Entenda a arquitetura** - Leia sobre a [estrutura do monorepo](../architecture/monorepo-structure.md)

## 🔄 Fluxo de Trabalho

### 1. Crie uma Branch

```bash
git checkout -b feat/nome-da-feature
# ou
git checkout -b fix/nome-do-bug
```

**Prefixos:**

- `feat/` - Nova funcionalidade
- `fix/` - Correção de bug
- `docs/` - Documentação
- `refactor/` - Refatoração
- `test/` - Testes

### 2. Faça suas Mudanças

```bash
# Edite os arquivos
# ...

# Verifique os tipos
npm run type-check

# Execute lint
npm run lint

# Rode os testes
npm run test

# Build
npm run build
```

### 3. Commit

Use [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Novo componente
git commit -m "feat: add AlertDialog component"

# Bug fix
git commit -m "fix: resolve focus trap in Modal"

# Documentação
git commit -m "docs: update Button usage examples"

# Breaking change
git commit -m "feat!: remove deprecated prop 'variant'"
```

### 4. Code Review

```bash
# Execute o checklist de review
node tools/scripts/code-review-checklist.js
```

### 5. Push e PR

```bash
git push origin feat/nome-da-feature
```

Abra um Pull Request com:

- Título descritivo
- Descrição das mudanças
- Screenshots (se UI)
- Checklist completado

## 🎨 Padrões de Código

### Componentes

```typescript
// ✅ BOM
import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  variant?: 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', ...props }, ref) => {
    return <button ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

// ❌ RUIM
const Button = (props) => <button {...props} />;
```

### Estilos

```typescript
// ✅ Usar tokens
className = "bg-primary text-primary-foreground";

// ❌ Nunca hardcode
className = "bg-blue-500 text-white";
```

### Testes

```typescript
// ✅ Testar comportamento
import { render, screen, fireEvent } from '@testing-library/react';

test('button calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);
  fireEvent.click(screen.getByText('Click'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

## 📝 Documentação

### Componentes

Todo componente deve ter:

1. **JSDoc** descrevendo o propósito
2. **Storybook** com todas as variantes
3. **README** (se complexo)
4. **CHANGELOG** (se breaking change)

````typescript
/**
 * Button - Componente de botão interativo
 *
 * @example
 * ```tsx
 * <Button variant="default" size="lg" onClick={handleClick}>
 *   Clique aqui
 * </Button>
 * ```
 */
export interface ButtonProps {
  /** Variante visual do botão */
  variant?: "default" | "destructive" | "outline";
  /** Tamanho do botão */
  size?: "sm" | "md" | "lg";
}
````

### Stories

```typescript
// Button.stories.tsx
const meta: Meta<typeof Button> = {
  title: 'Components/Actions/Button',
  component: Button,
  tags: ['autodocs'],
};

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};
```

## 🧪 Testando

### Local

```bash
# Testes unitários
npm run test

# Testes no Storybook
npm run test:storybook

# Testes e2e
npm run test:e2e
```

### CI/CD

Todos os PRs rodam:

1. Type checking
2. Linting
3. Testes
4. Build

## 🐛 Reportando Bugs

### Issues

Use o template:

```markdown
**Descrição**
Breve descrição do bug

**Reprodução**

1. Vá para '...'
2. Clique em '...'
3. Veja o erro

**Comportamento Esperado**
O que deveria acontecer

**Screenshots**
Se aplicável

**Ambiente**

- OS: [e.g. macOS]
- Browser: [e.g. Chrome]
- Versão: [e.g. 0.1.0]
```

## 🎨 Design System

### Adicionando Componentes

1. Criar em `packages/design-system/src/components/ui/`
2. Seguir o padrão existente
3. Exportar em `packages/design-system/src/index.ts`
4. Criar stories
5. Documentar em Storybook

### Tokens

Para adicionar novos tokens:

1. Editar `packages/design-system/src/styles/tokens.css`
2. Atualizar `packages/design-system/tailwind.config.js`
3. Documentar no Storybook

## ✅ Checklist de PR

Antes de submeter:

- [ ] Código passa em `npm run lint`
- [ ] Tipos passam em `npm run type-check`
- [ ] Testes passam em `npm run test`
- [ ] Build passa em `npm run build`
- [ ] Stories criadas/atualizadas
- [ ] Documentação atualizada
- [ ] Sem console.logs
- [ ] Sem código comentado
- [ ] Commits seguem conventional commits
- [ ] PR tem descrição clara

## 🤝 Código de Conduta

- Seja respeitoso
- Aceite feedback construtivo
- Foque no que é melhor para a comunidade
- Ajude outros contribuidores

## 📞 Dúvidas?

- Abra uma issue
- Consulte as skills em `.opencode/skills/`
- Veja os exemplos existentes

---

**Obrigado por contribuir!** 🎉
