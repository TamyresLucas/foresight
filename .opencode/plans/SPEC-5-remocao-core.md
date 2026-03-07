# SPEC 5.x - Especificação Técnica: Remoção Core

## 📋 Informação Geral

- **PRD Referência**: PRD-5-remocao-core.md
- **Complexidade**: Alta
- **Tempo Estimado**: 3-4 horas
- **Dependências**: SPEC 4.x

---

## ⚠️ IMPORTANTE: Ordem de Execução

**DEVE seguir esta ordem exata:**

1. **SPEC 5.1** - Remover exports (para não quebrar builds)
2. **SPEC 5.2** - Deletar arquivos de tokens
3. **SPEC 5.3** - Deletar color-utils

**NUNCA deletar arquivos antes de remover exports!**

---

## 💻 Especificação Técnica

### SPEC 5.1 - Remover color-utils da API Pública

#### Arquivo

- **Modificar**: `src/index.ts`

#### Mudança

```typescript
// ANTES (linha ~53)
export * from "./lib/color-utils";

// DEPOIS
// Linha removida
```

#### Verificar

```bash
# Confirmar que export foi removido
grep "color-utils" src/index.ts
# Deve retornar vazio
```

#### Teste

```bash
npm run build
# Deve passar (pois ainda existe o arquivo, apenas não é exportado)
```

---

### SPEC 5.2 - Deletar Arquivos de Tokens

#### Arquivos

- **Deletar**: `src/tokens/colors.ts`
- **Deletar**: `src/tokens/index.ts`
- **Deletar pasta** (se vazia): `src/tokens/`

#### Pré-verificação (CRÍTICO)

```bash
# ANTES de deletar, verificar que nenhum arquivo usa:
grep -r "from.*tokens" src/ --include="*.ts" --include="*.tsx"
grep -r "@/tokens" src/ --include="*.ts" --include="*.tsx"
grep -r "COLOR_TOKENS" src/ --include="*.ts" --include="*.tsx"

# Todos devem retornar vazio
# Se retornar algo, a Fase 4 não está completa
```

#### Comando para Deletar

```bash
rm src/tokens/colors.ts
rm src/tokens/index.ts
rmdir src/tokens/  # Só funciona se vazia
```

#### Teste

```bash
# Build deve passar
npm run build

# Não deve haver pasta tokens
ls src/tokens/
# Deve retornar: No such file or directory
```

---

### SPEC 5.3 - Deletar color-utils

#### Arquivo

- **Deletar**: `src/lib/color-utils.ts`

#### Pré-verificação (CRÍTICO)

```bash
# ANTES de deletar, verificar que nenhum arquivo usa:
grep -r "from.*color-utils" src/ --include="*.ts" --include="*.tsx"
grep -r "@/lib/color-utils" src/ --include="*.ts" --include="*.tsx"

# Deve retornar vazio
```

#### Comando para Deletar

```bash
rm src/lib/color-utils.ts
```

#### Teste Final Completo

```bash
# 1. Build
npm run build

# 2. Storybook
npm run storybook

# 3. Verificar que não há referências restantes
grep -r "COLOR_TOKENS" packages/design-system/src/ || echo "✅ Nenhuma referência"
grep -r "color-utils" packages/design-system/src/ || echo "✅ Nenhuma referência"
grep -r "from.*tokens" packages/design-system/src/ || echo "✅ Nenhuma referência"
```

---

## 🧪 Casos de Teste

### Após Cada Subtarefa:

#### Teste 1: Build Passa

```bash
npm run build
# Deve passar sem erros
```

#### Teste 2: Sem Imports Quebrados

```bash
# Procurar erros de "Cannot find module"
npm run build 2>&1 | grep -i "error" || echo "✅ Sem erros"
```

#### Teste 3: Arquivos Deletados

```bash
# 5.2:
ls src/tokens/colors.ts 2>&1 | grep "No such file"
ls src/tokens/index.ts 2>&1 | grep "No such file"

# 5.3:
ls src/lib/color-utils.ts 2>&1 | grep "No such file"
```

### Testes Finais (após 5.3):

#### Teste 4: Storybook Funciona

```bash
npm run storybook
# Deve iniciar
# Componentes devem renderizar
```

#### Teste 5: Tokens Estáticos Funcionam

```javascript
// No console do Storybook:
getComputedStyle(document.documentElement).getPropertyValue("--secondary");
// Deve retornar valor HSL (não vazio)
```

#### Teste 6: Aplicação Funciona

```bash
# Se houver app/playground:
cd apps/playground && npm run dev
# Ou apenas verificar build
npm run build
```

---

## 📊 Checklist de Validação

### SPEC 5.1:

- [ ] Export de color-utils removido de `src/index.ts`
- [ ] Build passa

### SPEC 5.2:

- [ ] `src/tokens/colors.ts` deletado
- [ ] `src/tokens/index.ts` deletado
- [ ] Pasta `src/tokens/` removida
- [ ] `grep "from.*tokens"` retorna vazio
- [ ] Build passa

### SPEC 5.3:

- [ ] `src/lib/color-utils.ts` deletado
- [ ] `grep "from.*color-utils"` retorna vazio
- [ ] Build passa

### Validação Final:

- [ ] Storybook inicia
- [ ] Componentes renderizam
- [ ] Tokens estáticos aplicam
- [ ] Dark mode funciona
- [ ] Nenhum erro no console

---

## 🆘 Troubleshooting

### "Module not found" ao fazer build

**Causa**: Tentou deletar arquivo antes de remover imports
**Solução**:

1. Restaurar arquivo deletado
2. Encontrar e remover imports
3. Tentar deletar novamente

### Erros de TypeScript

**Causa**: Algo ainda referencia os tipos exportados
**Solução**:

```bash
# Encontrar referências
grep -r "ColorToken\|StaticColorToken\|DynamicColorToken" src/

# Remover ou substituir
```

### Storybook quebra

**Causa**: Stories ainda importam arquivos deletados
**Solução**: Verificar todos os arquivos `.stories.tsx`

---

## ✅ Handoff para SPEC 6.x

**Entregáveis:**

1. `src/tokens/` removido completamente
2. `src/lib/color-utils.ts` removido
3. Exports limpos
4. Build passando
5. Storybook funcional

**Próximo passo**: Validação final (testes de dark mode e regressão visual).
