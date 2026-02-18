# PRD 5.1 a 5.3 - Remoção Core

## 🎯 Objetivo Geral

Remover completamente os arquivos core de tokens e color-utils, limpando exports e dependências.

## 📋 Tarefas Detalhadas

### PRD 5.1 - Remover color-utils da API Pública

**Arquivo**: `src/index.ts`

**Ações**:

```typescript
// REMOVER linha 53:
export * from "./lib/color-utils";
```

**Testes**:

- [ ] Export removido
- [ ] Build passa
- [ ] Nenhum erro de export não encontrado

---

### PRD 5.2 - Deletar Arquivos de Tokens

**Arquivos**:

- `src/tokens/colors.ts`
- `src/tokens/index.ts`

**Ações**:

- Deletar ambos os arquivos
- Remover pasta `src/tokens/` se vazia

**Testes**:

- [ ] Arquivos deletados
- [ ] Pasta removida (se vazia)
- [ ] Build passa
- [ ] Nenhum import quebrado restante

**Verificação de Imports**:

```bash
grep -r "from.*tokens" src/ --include="*.ts" --include="*.tsx"
grep -r "@/tokens" src/ --include="*.ts" --include="*.tsx"
# Deve retornar vazio ou apenas referências já removidas
```

---

### PRD 5.3 - Deletar color-utils

**Arquivo**: `src/lib/color-utils.ts`

**Ações**:

- Deletar arquivo

**Testes**:

- [ ] Arquivo deletado
- [ ] Build passa
- [ ] Nenhum import quebrado

**Verificação**:

```bash
grep -r "from.*color-utils" src/ --include="*.ts" --include="*.tsx"
grep -r "@/lib/color-utils" src/ --include="*.ts" --include="*.tsx"
# Deve retornar vazio
```

---

## 🧪 Critérios de Teste/Aceitação

### Após Cada Subtarefa:

- [ ] Arquivo(s) deletado(s) ou modificado(s)
- [ ] `npm run build` passa
- [ ] Nenhum erro TypeScript de módulo não encontrado

### Após Toda a Fase 5:

- [ ] `src/tokens/` não existe ou está vazia
- [ ] `src/lib/color-utils.ts` não existe
- [ ] `src/index.ts` não exporta color-utils
- [ ] Build passa
- [ ] Storybook inicia
- [ ] Aplicação funciona normalmente

## 📝 Instruções de Execução

### Ordem de Execução (Importante!)

1. **PRD 5.1 Primeiro**: Remover exports ANTES de deletar arquivos
   - Se deletar arquivo primeiro, builds vão quebrar
2. **PRD 5.2 Depois**: Deletar tokens
   - Verificar que nenhum story usa mais (Fase 4 deve estar completa)
3. **PRD 5.3 Por último**: Deletar color-utils
   - Verificar que color-utils não é mais importado em lugar nenhum

### Comandos de Verificação

```bash
# Antes de deletar, verificar se há imports:
find src -name "*.ts" -o -name "*.tsx" | xargs grep -l "color-utils\|COLOR_TOKENS"

# Deve retornar apenas os próprios arquivos que serão deletados
# Se retornar outros arquivos, a Fase 4 não está completa
```

## ⚠️ Notas Importantes

1. **Ordem é CRÍTICA**: Sempre remover exports antes de deletar arquivos
2. **Dependências**: Fase 4 DEVE estar 100% completa antes de começar
3. **Build entre passos**: Sempre fazer build após cada subtarefa
4. **Git**: Commit após cada subtarefa bem-sucedida

## ✅ Checklist Final da Fase 5

- [ ] PRD 5.1: Export de color-utils removido de `index.ts`
- [ ] PRD 5.2: Pasta `src/tokens/` removida
- [ ] PRD 5.3: `src/lib/color-utils.ts` removido
- [ ] Nenhum import quebrado no codebase
- [ ] Build passa
- [ ] Storybook funciona
- [ ] Todos os testes passam (se houver)

## 🔄 Próxima Tarefa

**PRD 6.1 - Testes de Dark Mode**
