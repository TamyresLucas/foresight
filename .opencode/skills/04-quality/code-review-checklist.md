# Code Review Checklist

Checklist completo para revisão de código no Foresight Design System.

## ✅ Checklist Geral

### Arquitetura & Estrutura

- [ ] Código segue a estrutura do monorepo
- [ ] Componentes estão no lugar correto (packages/design-system/)
- [ ] Não há imports relativos proibidos (`../../design-system`)
- [ ] Pacotes não têm dependências circulares
- [ ] Build passa sem erros (`npm run build`)

### TypeScript

- [ ] Tipos definidos para todas as props
- [ ] Sem uso de `any`
- [ ] Generics usados corretamente quando aplicável
- [ ] Interfaces exportadas quando necessário
- [ ] forwardRef implementado corretamente

```typescript
// ✅ BOM
interface ButtonProps {
  variant?: 'default' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', ...props }, ref) => {
    return <button ref={ref} {...props} />;
  }
);

// ❌ RUIM
const Button = (props: any) => <button {...props} />;
```

### Estilos & Design System

- [ ] Usa tokens semânticos (nunca hardcoded)
- [ ] Usa `cn()` para merge de classes
- [ ] Variantes com CVA (Class Variance Authority)
- [ ] Suporte a dark mode
- [ ] Responsivo quando aplicável

```typescript
// ✅ BOM
className={cn(
  "bg-primary text-primary-foreground",
  buttonVariants({ variant, size }),
  className
)}

// ❌ RUIM
className="bg-blue-500 text-white p-4"
```

### Componentes React

- [ ] forwardRef para ref forwarding
- [ ] displayName definido
- [ ] Props espalhadas corretamente
- [ ] Callbacks memoizados quando necessário
- [ ] Sem side effects desnecessários

```typescript
// ✅ BOM
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// ❌ RUIM
const Button = ({ className, ...props }) => (
  <button className={className} {...props} />
);
```

### Acessibilidade (a11y)

- [ ] Atributos ARIA quando necessário
- [ ] Navegação por teclado funciona
- [ ] Contraste de cores adequado
- [ ] Focus management correto
- [ ] Screen reader friendly

```typescript
// ✅ BOM
<button
  aria-label="Fechar dialog"
  aria-expanded={isOpen}
  onClick={onClose}
>
  <XIcon aria-hidden="true" />
</button>

// ❌ RUIM
<button onClick={onClose}>
  <XIcon />
</button>
```

### Testes

- [ ] Testes unitários para lógica
- [ ] Stories para todas as variantes
- [ ] Testes de acessibilidade (axe)
- [ ] Testes de interação quando aplicável
- [ ] Cobertura mínima de 80%

### Performance

- [ ] Componentes memoizados quando necessário
- [ ] useMemo/useCallback usados corretamente
- [ ] Sem re-renders desnecessários
- [ ] Bundle size considerado
- [ ] Lazy loading quando apropriado

```typescript
// ✅ BOM
const MemoizedComponent = React.memo(Component, (prev, next) => {
  return prev.id === next.id;
});

// ✅ BOM
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

### Documentação

- [ ] JSDoc com descrição e exemplos
- [ ] Stories no Storybook
- [ ] README atualizado (se breaking change)
- [ ] CHANGELOG.md atualizado
- [ ] Tipos exportados

````typescript
/**
 * Button - Componente de botão interativo
 *
 * @description Botão primário para ações principais
 * @example
 * ```tsx
 * <Button variant="default" onClick={handleClick}>
 *   Clique aqui
 * </Button>
 * ```
 */
export interface ButtonProps {
  /** Variante visual do botão */
  variant?: "default" | "destructive";
}
````

### Qualidade de Código

- [ ] Sem código morto (comentado ou não usado)
- [ ] Sem console.logs
- [ ] Sem TODOs não resolvidos
- [ ] Código formatado (Prettier)
- [ ] Lint passa sem erros (`npm run lint`)

### Git & Commits

- [ ] Commits seguem conventional commits
- [ ] Mensagens descritivas
- [ ] Branch com prefixo correto (feat/, fix/, docs/)
- [ ] Rebase feito na main se necessário
- [ ] Conflitos resolvidos

```bash
# ✅ BOM
feat: add AlertDialog component
fix: resolve focus trap in Modal
docs: update Button usage examples

# ❌ RUIM
update
fix bug
changes
```

## 🔍 Review por Tipo de Mudança

### Novo Componente

- [ ] Segue o template de componente
- [ ] Todas as variantes documentadas
- [ ] Exportado em index.ts
- [ ] Story criada
- [ ] Testes adicionados

### Bug Fix

- [ ] Teste que reproduz o bug
- [ ] Fix resolve o problema
- [ ] Não introduz regressões
- [ ] Teste atualizado

### Refatoração

- [ ] Comportamento mantido
- [ ] Código mais limpo
- [ ] Testes ainda passam
- [ ] Performance não degradou

### Breaking Change

- [ ] Documentado no CHANGELOG
- [ ] Migration guide fornecido
- [ ] Deprecated avisado antes
- [ ] Major version bump

## 🎯 Métricas de Qualidade

| Métrica       | Mínimo | Ideal |
| ------------- | ------ | ----- |
| Type Coverage | 95%    | 100%  |
| Test Coverage | 80%    | 90%+  |
| Lint Errors   | 0      | 0     |
| Build         | ✓      | ✓     |
| Docs          | ✓      | ✓     |

## 🚀 Scripts de Validação

```bash
# Verificar tudo
npm run lint
npm run type-check
npm run test
npm run build

# Ou use o script automatizado
node tools/scripts/code-review-checklist.js
```

## 📝 Template de PR

```markdown
## Descrição

Breve descrição das mudanças

## Tipo de Mudança

- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Checklist

- [ ] Código segue padrões do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Build passa
- [ ] Self-review feito

## Screenshots

Se aplicável, adicione screenshots
```

## 💡 Dicas para Reviewers

1. **Teste localmente** - Rode o código antes de aprovar
2. **Verifique a11y** - Use ferramentas como axe DevTools
3. **Pense no futuro** - Código vai ser mantido por outros
4. **Seja construtivo** - Feedback ajuda a melhorar
5. **Pergunte** - Se não entender algo, pergunte

---

**Lembre-se:** Code review é sobre código, não sobre pessoas! 🤝
