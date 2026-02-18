# QA Test Plans - Remoção da Paleta Dinâmica

## 🎯 Objetivo

Planos de teste automatizados via CLI que validam cada tarefa antes de prosseguir para a próxima.

## 📋 Regras de Execução

- **APENAS** prossigo para próxima tarefa se TODOS os testes da atual passarem
- Testes devem ser **idempotentes** (posso rodar múltiplas vezes)
- **Zero tolerância**: Um teste falhando = tarefa incompleta

---

## 🔧 Ferramentas Utilizadas

### Disponíveis para mim:

- `grep` / `rg` (ripgrep) - busca em arquivos
- `test` / `[ ]` - testes de arquivos
- `npm` - build e scripts
- `find` - localizar arquivos
- `wc` - contagem
- `diff` - comparação
- `curl` (se necessário) - requisições HTTP

### Não disponíveis:

- Testes de integração complexos (requerem execução)
- Testes visuais automatizados
- Acesso a browsers headless

---

## QA-TEST-1.1 - Validar Tokens Mapeados

### Pré-condições

- SPEC 1.1 foi implementado

### Testes Automatizados

#### Test 1: Arquivo existe

```bash
[ -f "packages/design-system/src/styles/tokens-reference.ts" ] && echo "✅ PASS" || echo "❌ FAIL: Arquivo não encontrado"
```

#### Test 2: Tokens dinâmicos mapeados

```bash
COUNT=$(grep -c "variable:" packages/design-system/src/styles/tokens-reference.ts 2>/dev/null || echo "0")
[ "$COUNT" -ge 15 ] && echo "✅ PASS: $COUNT tokens mapeados" || echo "❌ FAIL: Esperado 15, encontrado $COUNT"
```

#### Test 3: Valores light e dark presentes

```bash
LIGHT_COUNT=$(grep -c "light:" packages/design-system/src/styles/tokens-reference.ts 2>/dev/null || echo "0")
DARK_COUNT=$(grep -c "dark:" packages/design-system/src/styles/tokens-reference.ts 2>/dev/null || echo "0")
[ "$LIGHT_COUNT" -ge 15 ] && [ "$DARK_COUNT" -ge 15 ] && echo "✅ PASS: Light=$LIGHT_COUNT, Dark=$DARK_COUNT" || echo "❌ FAIL: Light=$LIGHT_COUNT, Dark=$DARK_COUNT"
```

#### Test 4: Formato HSL válido

```bash
# Verificar se há valores HSL no formato correto
HSL_COUNT=$(grep -oE "[0-9]+ [0-9]+% [0-9.]+%" packages/design-system/src/styles/tokens-reference.ts | wc -l)
[ "$HSL_COUNT" -ge 30 ] && echo "✅ PASS: $HSL_COUNT valores HSL encontrados" || echo "❌ FAIL: Esperado 30+, encontrado $HSL_COUNT"
```

#### Test 5: Build passa

```bash
cd packages/design-system && npm run build > /tmp/build-1.1.log 2>&1 && echo "✅ PASS: Build OK" || echo "❌ FAIL: Build falhou"
```

### Critérios de Aceitação

- Todos os 5 testes devem PASS
- Se qualquer teste FAIL, não prosseguir

---

## QA-TEST-1.2 - Validar lytenyte-grid Mapeado

### Pré-condições

- QA-TEST-1.1 passou
- SPEC 1.2 foi implementado

### Testes

#### Test 1: Ocorrências documentadas

```bash
grep -c "lng1771-row-selected" packages/design-system/src/styles/tokens-reference.ts && echo "✅ PASS" || echo "❌ FAIL"
grep -c "lng1771-gray-20" packages/design-system/src/styles/tokens-reference.ts && echo "✅ PASS" || echo "❌ FAIL"
grep -c "lng1771-row-bg" packages/design-system/src/styles/tokens-reference.ts && echo "✅ PASS" || echo "❌ FAIL"
```

#### Test 2: Valores calculados presentes

```bash
grep -A 5 "lng1771-row-selected" packages/design-system/src/styles/tokens-reference.ts | grep -q "light:" && echo "✅ PASS" || echo "❌ FAIL"
grep -A 5 "lng1771-row-selected" packages/design-system/src/styles/tokens-reference.ts | grep -q "dark:" && echo "✅ PASS" || echo "❌ FAIL"
```

#### Test 3: Build passa

```bash
cd packages/design-system && npm run build > /tmp/build-1.2.log 2>&1 && echo "✅ PASS" || echo "❌ FAIL"
```

---

## QA-TEST-2.1 - Validar CSS Estático

### Testes

#### Test 1: Arquivo existe

```bash
[ -f "packages/design-system/src/styles/tokens-static.css" ] && echo "✅ PASS" || echo "❌ FAIL"
```

#### Test 2: Estrutura completa

```bash
grep -q ":root" packages/design-system/src/styles/tokens-static.css && echo "✅ PASS :root" || echo "❌ FAIL :root"
grep -q "\.dark" packages/design-system/src/styles/tokens-static.css && echo "✅ PASS .dark" || echo "❌ FAIL .dark"
```

#### Test 3: Sem color-mix

```bash
COUNT=$(grep -c "color-mix" packages/design-system/src/styles/tokens-static.css 2>/dev/null || echo "0")
[ "$COUNT" -eq 0 ] && echo "✅ PASS: Sem color-mix" || echo "❌ FAIL: $COUNT ocorrências de color-mix"
```

#### Test 4: Variáveis suficientes

```bash
ROOT_VARS=$(grep "^\s*--" packages/design-system/src/styles/tokens-static.css | wc -l)
[ "$ROOT_VARS" -ge 30 ] && echo "✅ PASS: $ROOT_VARS variáveis" || echo "❌ FAIL: Esperado 30+, encontrado $ROOT_VARS"
```

#### Test 5: Tokens dinâmicos convertidos presentes

```bash
grep -q "\-\-secondary:" packages/design-system/src/styles/tokens-static.css && echo "✅ PASS --secondary" || echo "❌ FAIL"
grep -q "\-\-muted:" packages/design-system/src/styles/tokens-static.css && echo "✅ PASS --muted" || echo "❌ FAIL"
grep -q "\-\-border:" packages/design-system/src/styles/tokens-static.css && echo "✅ PASS --border" || echo "❌ FAIL"
```

#### Test 6: Build passa

```bash
cd packages/design-system && npm run build > /tmp/build-2.1.log 2>&1 && echo "✅ PASS" || echo "❌ FAIL"
```

---

## QA-TEST-2.2 - Validar index.css

### Testes

#### Test 1: Import correto

```bash
grep -q "tokens-static.css" packages/design-system/src/index.css && echo "✅ PASS" || echo "❌ FAIL: Import não encontrado"
```

#### Test 2: Sem color-mix

```bash
COUNT=$(grep -c "color-mix" packages/design-system/src/index.css 2>/dev/null || echo "0")
[ "$COUNT" -eq 0 ] && echo "✅ PASS: Sem color-mix" || echo "❌ FAIL: $COUNT ocorrências"
```

#### Test 3: Build passa

```bash
cd packages/design-system && npm run build > /tmp/build-2.2.log 2>&1 && echo "✅ PASS" || echo "❌ FAIL"
```

---

## QA-TEST-2.3 - Validar lytenyte-grid.css

### Testes

#### Test 1: Sem color-mix

```bash
COUNT=$(grep -c "color-mix" packages/design-system/src/components/lytenyte-grid/lytenyte-grid.css 2>/dev/null || echo "0")
[ "$COUNT" -eq 0 ] && echo "✅ PASS: Sem color-mix" || echo "❌ FAIL: $COUNT ocorrências"
```

#### Test 2: Usando variáveis estáticas

```bash
grep -q "lng1771-row-selected" packages/design-system/src/components/lytenyte-grid/lytenyte-grid.css && echo "✅ PASS" || echo "❌ FAIL"
grep -q "lng1771-row-bg" packages/design-system/src/components/lytenyte-grid/lytenyte-grid.css && echo "✅ PASS" || echo "❌ FAIL"
```

#### Test 3: Build passa

```bash
cd packages/design-system && npm run build > /tmp/build-2.3.log 2>&1 && echo "✅ PASS" || echo "❌ FAIL"
```

---

## QA-TEST-3.1 - Validar Editor Desativado

### Testes

#### Test 1: Sem injeção de style

```bash
grep -q "dynamic-theme-styles" packages/design-system/src/stories/ColorPaletteEditor.tsx && echo "❌ FAIL: Ainda injeta estilos" || echo "✅ PASS: Sem injeção"
```

#### Test 2: Sem dispatch de evento

```bash
grep -q "color-changed" packages/design-system/src/stories/ColorPaletteEditor.tsx && echo "❌ FAIL: Ainda dispara evento" || echo "✅ PASS: Sem evento"
```

#### Test 3: Build passa

```bash
cd packages/design-system && npm run build > /tmp/build-3.1.log 2>&1 && echo "✅ PASS" || echo "❌ FAIL"
```

---

## QA-TEST-3.2 - Validar Perfis Removidos

### Testes

#### Test 1: Sem localStorage keys

```bash
grep -q "global-colors-" packages/design-system/src/stories/ColorPaletteEditor.tsx && echo "❌ FAIL: Ainda usa localStorage" || echo "✅ PASS: Sem localStorage"
```

#### Test 2: Sem tipo Product

```bash
grep -q "type Product" packages/design-system/src/stories/ColorPaletteEditor.tsx && echo "❌ FAIL: Tipo Product existe" || echo "✅ PASS: Sem tipo Product"
grep -q "'Voxco'" packages/design-system/src/stories/ColorPaletteEditor.tsx && echo "❌ FAIL: Referência a Voxco" || echo "✅ PASS"
grep -q "'Ascribe'" packages/design-system/src/stories/ColorPaletteEditor.tsx && echo "❌ FAIL: Referência a Ascribe" || echo "✅ PASS"
grep -q "'Discuss'" packages/design-system/src/stories/ColorPaletteEditor.tsx && echo "❌ FAIL: Referência a Discuss" || echo "✅ PASS"
```

#### Test 3: Build passa

```bash
cd packages/design-system && npm run build > /tmp/build-3.2.log 2>&1 && echo "✅ PASS" || echo "❌ FAIL"
```

---

## QA-TEST-4.x - Validar Limpeza de Stories

### Testes

#### Test 1: Arquivos deletados

```bash
[ ! -f "packages/design-system/src/stories/ColorExportButton.tsx" ] && echo "✅ PASS" || echo "❌ FAIL: ColorExportButton existe"
[ ! -f "packages/design-system/src/stories/TokenUsageTable.tsx" ] && echo "✅ PASS" || echo "❌ FAIL: TokenUsageTable existe"
[ ! -f "packages/design-system/src/stories/DynamicColorPalette.tsx" ] && echo "✅ PASS" || echo "❌ FAIL: DynamicColorPalette existe"
[ ! -f "packages/design-system/src/stories/ColorPalette.stories.tsx" ] && echo "✅ PASS" || echo "❌ FAIL: ColorPalette.stories existe"
```

#### Test 2: Sem imports quebrados

```bash
grep -r "ColorExportButton" packages/design-system/src/ --include="*.ts" --include="*.tsx" && echo "❌ FAIL: Import existente" || echo "✅ PASS"
grep -r "TokenUsageTable" packages/design-system/src/ --include="*.ts" --include="*.tsx" && echo "❌ FAIL: Import existente" || echo "✅ PASS"
grep -r "DynamicColorPalette" packages/design-system/src/ --include="*.ts" --include="*.tsx" && echo "❌ FAIL: Import existente" || echo "✅ PASS"
```

#### Test 3: Build passa

```bash
cd packages/design-system && npm run build > /tmp/build-4.log 2>&1 && echo "✅ PASS" || echo "❌ FAIL"
```

---

## QA-TEST-5.x - Validar Remoção Core

### ⚠️ ORDEM CRÍTICA

### QA-TEST-5.1 - Export removido

```bash
# Deve ser executado ANTES de deletar arquivos
grep -q "from.*color-utils" packages/design-system/src/index.ts && echo "❌ FAIL: Export existe" || echo "✅ PASS: Export removido"
```

### QA-TEST-5.2 - Tokens deletados

```bash
# Executar APÓS 5.1 passar
[ ! -d "packages/design-system/src/tokens" ] && echo "✅ PASS: Pasta tokens removida" || echo "❌ FAIL"
[ ! -f "packages/design-system/src/tokens/colors.ts" ] && echo "✅ PASS" || echo "❌ FAIL"
[ ! -f "packages/design-system/src/tokens/index.ts" ] && echo "✅ PASS" || echo "❌ FAIL"
grep -r "from.*tokens" packages/design-system/src/ --include="*.ts" --include="*.tsx" && echo "❌ FAIL: Imports restantes" || echo "✅ PASS"
```

### QA-TEST-5.3 - color-utils deletado

```bash
# Executar APÓS 5.2 passar
[ ! -f "packages/design-system/src/lib/color-utils.ts" ] && echo "✅ PASS" || echo "❌ FAIL"
grep -r "from.*color-utils" packages/design-system/src/ --include="*.ts" --include="*.tsx" && echo "❌ FAIL: Imports restantes" || echo "✅ PASS"
```

### Teste 4: Build final

```bash
cd packages/design-system && npm run build > /tmp/build-5.log 2>&1 && echo "✅ PASS" || echo "❌ FAIL"
```

---

## QA-TEST-6.x - Validação Final

### Testes de Sanidade

#### Test 1: Zero color-mix no codebase

```bash
COUNT=$(grep -r "color-mix" packages/design-system/src/ --include="*.css" --include="*.ts" --include="*.tsx" | wc -l)
[ "$COUNT" -eq 0 ] && echo "✅ PASS: Zero color-mix" || echo "❌ FAIL: $COUNT ocorrências"
```

#### Test 2: Zero referências a tokens

```bash
grep -r "COLOR_TOKENS" packages/design-system/src/ --include="*.ts" --include="*.tsx" && echo "❌ FAIL" || echo "✅ PASS: Sem COLOR_TOKENS"
grep -r "from.*tokens" packages/design-system/src/ --include="*.ts" --include="*.tsx" && echo "❌ FAIL" || echo "✅ PASS: Sem imports de tokens"
```

#### Test 3: Zero referências a color-utils

```bash
grep -r "from.*color-utils" packages/design-system/src/ --include="*.ts" --include="*.tsx" && echo "❌ FAIL" || echo "✅ PASS"
```

#### Test 4: Tokens estáticos existem

```bash
[ -f "packages/design-system/src/styles/tokens-static.css" ] && echo "✅ PASS" || echo "❌ FAIL"
```

#### Test 5: Build passa

```bash
cd packages/design-system && npm run build > /tmp/build-final.log 2>&1 && echo "✅ PASS" || echo "❌ FAIL"
```

---

## 📊 Dashboard de Execução

### Formato de Report

```
========================================
QA TEST REPORT - Tarefa [X.Y]
Data: $(date)
========================================

TEST 1: [descrição]
Status: ✅ PASS / ❌ FAIL
Detalhes: [output]

TEST 2: [descrição]
Status: ✅ PASS / ❌ FAIL
Detalhes: [output]

...

RESULTADO FINAL: [APROVADO / REPROVADO]
Próxima Tarefa: [Próxima / Nenhuma - Projeto Completo]
```

### Regras de Decisão

- **APROVADO**: Todos os testes PASS
- **REPROVADO**: Um ou mais testes FAIL
- **Ação em caso de REPROVADO**:
  1. Reportar falhas
  2. NÃO prosseguir
  3. Corrigir e re-testar
  4. Só prosseguir quando 100% PASS

---

## 🚀 Execução

### Modo de Uso

```bash
# Para cada tarefa, executar:
./qa-test-[numero].sh

# Ou manualmente, copiar comandos dos testes acima
```

### Exemplo de Fluxo

```
Tarefa 1.1 → QA-TEST-1.1 → ✅ PASS → Tarefa 1.2
Tarefa 1.2 → QA-TEST-1.2 → ✅ PASS → Tarefa 2.1
Tarefa 2.1 → QA-TEST-2.1 → ❌ FAIL → Corrigir → Re-testar → ✅ PASS → Tarefa 2.2
...
```

---

## 📁 Arquivos

- **Este documento**: `QA-TEST-PLANS.md`
- **Scripts individuais**: `qa-test-1.1.sh`, `qa-test-1.2.sh`, etc.
- **Logs**: `/tmp/build-*.log`, `/tmp/test-*.log`

---

**Status**: Pronto para execução
**Metodologia**: Zero tolerância a falhas
