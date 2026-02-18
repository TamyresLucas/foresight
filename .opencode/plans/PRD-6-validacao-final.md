# PRD 6.1 a 6.4 - Validação Final

## 🎯 Objetivo Geral

Validar que toda a remoção foi bem-sucedida e que o sistema funciona perfeitamente com tokens estáticos.

## 📋 Tarefas Detalhadas

### PRD 6.1 - Testes de Dark Mode

**Objetivo**: Validar que dark mode continua funcionando corretamente.

**Testes**:

- [ ] Abrir Storybook
- [ ] Navegar para qualquer componente (ex: Button)
- [ ] Adicionar classe `.dark` ao container ou usar toggle
- [ ] Verificar que cores mudam para dark mode
- [ ] Verificar valores específicos:
  ```javascript
  // No console DevTools:
  getComputedStyle(document.documentElement).getPropertyValue("--background");
  // Light: deve ser "0 0% 100%"
  // Dark: deve ser "222.2 84% 4.9%"
  ```
- [ ] Testar 5 componentes diferentes em dark mode

**Critérios**:

- [ ] Dark mode funciona em todos os componentes testados
- [ ] Valores CSS computados corretos
- [ ] Transição visual suave (se aplicável)

---

### PRD 6.2 - Testes de Regressão Visual

**Objetivo**: Garantir que não houve mudanças visuais indesejadas.

**Testes**:

- [ ] Executar build de produção
- [ ] Abrir Storybook
- [ ] Comparar visualmente componentes principais:
  - Button (todos os variantes)
  - Card
  - Input
  - Select
  - Table
  - Alert
  - Badge
- [ ] Verificar tokens específicos:
  - `--secondary` (background de elementos secundários)
  - `--muted` (backgrounds sutis)
  - `--border` (bordas)
  - `--accent` (elementos de destaque)

**Critérios**:

- [ ] Componentes renderizam identicamente ao antes
- [ ] Nenhuma diferença visual perceptível
- [ ] Cores mantêm consistência

---

### PRD 6.3 - Limpeza de localStorage

**Objetivo**: Documentar e limpar chaves de localStorage obsoletas.

**Documentação**:
Criar arquivo `MIGRATION.md` ou atualizar README:

```markdown
## Limpeza de localStorage

Após a remoção da paleta dinâmica, as seguintes chaves podem ser removidas do localStorage:

- `global-colors-shared`
- `global-colors-Voxco`
- `global-colors-Ascribe`
- `global-colors-Discuss`
```

**Testes**:

- [ ] Abrir DevTools → Application → LocalStorage
- [ ] Verificar se chaves existem (se sim, documentar)
- [ ] Limpar chaves manualmente
- [ ] Recarregar aplicação
- [ ] Verificar que aplicação funciona normalmente

**Critérios**:

- [ ] Documentação criada
- [ ] Chaves identificadas
- [ ] Aplicação funciona com localStorage limpo

---

### PRD 6.4 - Documentação de Breaking Changes

**Objetivo**: Documentar alterações para consumidores externos.

**Documentação**:
Criar `BREAKING_CHANGES.md`:

```markdown
# Breaking Changes - Remoção de Paleta Dinâmica

## API Removida

- `getComputedColorRGB()` - Função removida
- `checkWCAGCompliance()` - Função removida
- `COLOR_TOKENS` - Objeto removido
- `isDynamicToken()` - Type guard removido
- `isStaticToken()` - Type guard removido

## Tokens Alterados

Tokens dinâmicos agora são estáticos:

- `--secondary`: Valor HSL fixo (antes calculado via color-mix)
- `--muted`: Valor HSL fixo
- `--accent`: Valor HSL fixo
- ... (listar todos)

## Migração

Se você usava as funções removidas:

1. Copiar funções necessárias para seu próprio código
2. Ou usar bibliotecas alternativas (chromajs, color, etc.)
```

**Testes**:

- [ ] Documento criado
- [ ] Lista completa de APIs removidas
- [ ] Instruções de migração claras

**Critérios**:

- [ ] Documentação completa
- [ ] Revisada por outro dev

---

## 🧪 Checklist Final Completo

### Build & Tests:

- [ ] `npm run build` passa sem erros
- [ ] `npm run lint` passa (se existir)
- [ ] `npm run type-check` passa (se existir)
- [ ] Storybook inicia sem erros
- [ ] Nenhum warning no console

### Funcionalidade:

- [ ] Dark mode funciona
- [ ] Light mode funciona
- [ ] Componentes principais renderizam corretamente
- [ ] Tokens estáticos aplicam corretamente
- [ ] lytenyte-grid funciona em ambos os modos

### Código:

- [ ] `color-mix` removido completamente do codebase
- [ ] `src/tokens/` removido
- [ ] `src/lib/color-utils.ts` removido
- [ ] Nenhum import quebrado
- [ ] Sem código morto

### Documentação:

- [ ] `BREAKING_CHANGES.md` criado
- [ ] README atualizado (se necessário)
- [ ] localStorage documentado para limpeza

---

## 📝 Instruções Finais

### Após Todas as Fases:

1. **Verificação Final**:

   ```bash
   # Buscar por resquícios
   grep -r "color-mix" packages/design-system/src/
   grep -r "COLOR_TOKENS" packages/design-system/src/
   grep -r "from.*tokens" packages/design-system/src/ --include="*.ts" --include="*.tsx"
   grep -r "from.*color-utils" packages/design-system/src/ --include="*.ts" --include="*.tsx"
   # Todas devem retornar vazio
   ```

2. **Teste de Build**:

   ```bash
   npm run build
   ```

3. **Teste de Storybook**:

   ```bash
   npm run storybook
   # Testar manualmente:
   # - Toggle dark mode
   # - Abrir 5 componentes diferentes
   # - Verificar cores
   ```

4. **Commit Final**:

   ```bash
   git add .
   git commit -m "feat: remove dynamic palette feature

   - Convert dynamic tokens to static HSL values
   - Remove color-utils library
   - Remove tokens module
   - Simplify ColorPaletteEditor to display-only
   - Maintain dark mode support
   - Remove Voxco/Ascribe/Discuss profiles"
   ```

## ✅ Aprovação Final

- [ ] Todas as 6 fases completas
- [ ] Todos os testes passando
- [ ] Documentação completa
- [ ] Code review aprovado
- [ ] Pronto para merge

**Status**: 🎉 FEATURE COMPLETA
