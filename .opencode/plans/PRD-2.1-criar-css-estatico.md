# PRD 2.1 - Criar CSS Estático Unificado

## 🎯 Objetivo

Criar arquivo CSS `tokens-static.css` com definições estáticas de todas as variáveis de cor, mantendo suporte completo a light e dark mode.

## 📋 Contexto

Com base nos valores calculados nas tarefas 1.1 e 1.2, criar um arquivo CSS que define todas as variáveis de forma estática, sem uso de `color-mix()`.

## 🔧 Alterações Esperadas

### Arquivo Novo

- **Criar**: `src/styles/tokens-static.css`

### Estrutura do Arquivo

```css
/* ============================================
   STATIC DESIGN TOKENS
   Light & Dark Mode Support
   ============================================ */

/* Light Mode (Default) */
:root {
  /* Base Colors */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;

  /* Primary */
  --primary: 220 100% 50%;
  --primary-foreground: 210 40% 98%;

  /* Secondary (antes dinâmico, agora estático) */
  --secondary: 220 10% 97.5%; /* Calculado: 5% mix */
  --secondary-hover: 220 15% 95%; /* Calculado: 15% mix */
  --secondary-foreground: 222.2 47.4% 11.2%;

  /* Muted (antes dinâmico) */
  --muted: 220 10% 97.5%; /* Calculado: 5% mix */
  --muted-foreground: 220 30% 35%; /* Calculado: 30% mix */

  /* Accent */
  --accent: 220 10% 95%; /* Calculado: 10% mix */
  --accent-foreground: 222.2 47.4% 11.2%;

  /* Destructive */
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --background-destructive: 0 40% 95%; /* Calculado: 10% mix */
  --border-destructive: 0 40% 80%; /* Calculado: 50% mix */

  /* Success */
  --success: 142 76% 36%;
  --success-foreground: 210 40% 98%;
  --background-success: 142 30% 95%; /* Calculado: 10% mix */
  --border-success: 142 30% 75%; /* Calculado: 50% mix */

  /* Warning */
  --warning: 38 92% 50%;
  --warning-foreground: 222.2 47.4% 11.2%;
  --background-warning: 38 40% 95%; /* Calculado: 10% mix */
  --border-warning: 38 40% 75%; /* Calculado: 50% mix */

  /* Info */
  --info: 220 70% 50%;
  --info-foreground: 210 40% 98%;
  --background-info: 220 30% 95%; /* Calculado: 10% mix */
  --border-info: 220 30% 75%; /* Calculado: 50% mix */

  /* Border & Input (antes fórmula aninhada) */
  --border: 220 20% 88%; /* Calculado */
  --input: 220 20% 88%; /* Calculado */
  --ring: 220 100% 50%;

  /* Disabled */
  --disabled-foreground: 220 15% 65%; /* Calculado: 40% mix */

  /* Lytenyte Grid Tokens */
  --lng1771-row-selected: 220 40% 90%; /* 20% mix */
  --lng1771-gray-20: 220 40% 90%; /* 20% mix */
  --lng1771-row-bg: 220 20% 95%; /* 10% mix */

  /* Additional tokens from tokens.css... */
}

/* Dark Mode */
.dark {
  /* Base Colors */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;

  /* Primary */
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;

  /* Secondary */
  --secondary: 220 80% 10%; /* Calculado dark */
  --secondary-hover: 220 70% 15%; /* Calculado dark */
  --secondary-foreground: 210 40% 98%;

  /* Muted */
  --muted: 220 80% 10%; /* Calculado dark */
  --muted-foreground: 220 40% 70%; /* Calculado dark */

  /* Accent */
  --accent: 220 70% 15%; /* Calculado dark */
  --accent-foreground: 210 40% 98%;

  /* Destructive */
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 210 40% 98%;
  --background-destructive: 0 30% 15%; /* Calculado dark */
  --border-destructive: 0 30% 35%; /* Calculado dark */

  /* Success */
  --background-success: 142 20% 15%; /* Calculado dark */
  --border-success: 142 20% 35%; /* Calculado dark */

  /* Warning */
  --background-warning: 38 30% 15%; /* Calculado dark */
  --border-warning: 38 30% 35%; /* Calculado dark */

  /* Info */
  --background-info: 220 20% 15%; /* Calculado dark */
  --border-info: 220 20% 35%; /* Calculado dark */

  /* Border & Input */
  --border: 220 20% 18%; /* Calculado dark */
  --input: 220 20% 18%; /* Calculado dark */
  --ring: 210 40% 98%;

  /* Disabled */
  --disabled-foreground: 220 15% 45%; /* Calculado dark */

  /* Lytenyte Grid Tokens */
  --lng1771-row-selected: 220 70% 23%; /* 20% mix dark */
  --lng1771-gray-20: 220 70% 23%; /* 20% mix dark */
  --lng1771-row-bg: 220 45% 14%; /* 10% mix dark */
}
```

## 🧪 Critérios de Teste/Aceitação

### Teste 1: Estrutura do Arquivo

- [ ] Arquivo criado em `src/styles/tokens-static.css`
- [ ] Seção `:root` com todas as variáveis light
- [ ] Seção `.dark` com todas as variáveis dark
- [ ] Nomes das variáveis idênticos aos atuais

### Teste 2: Completude

- [ ] Todos os tokens estáticos originais incluídos
- [ ] Todos os 15 tokens dinâmicos convertidos
- [ ] Tokens do lytenyte-grid incluídos
- [ ] Nenhuma variável faltando

### Teste 3: Valores HSL Válidos

- [ ] Todos os valores no formato `H S% L%`
- [ ] Hue entre 0-360
- [ ] Saturation e Lightness com %
- [ ] Sem valores negativos ou >100%

### Teste 4: Consistência Dark Mode

- [ ] Cada variável em `:root` tem correspondente em `.dark`
- [ ] Valores dark são logicamente diferentes dos light
- [ ] Contraste adequado preservado

## 📝 Instruções de Teste Passo a Passo

### Passo 1: Criar Arquivo Base

```bash
touch src/styles/tokens-static.css
```

### Passo 2: Adicionar Estrutura

Copiar estrutura acima com valores calculados nas tarefas 1.1 e 1.2.

### Passo 3: Validar Sintaxe CSS

```bash
# Verificar se há erros de sintaxe
npm run build
```

### Passo 4: Verificar Variáveis

```bash
# Listar todas as variáveis definidas
grep -oE "--[a-zA-Z0-9-]+:" src/styles/tokens-static.css | sort | uniq

# Contar quantas têm definição light e dark
# Devem existir pares (uma em :root e outra em .dark)
```

### Passo 5: Teste Visual (Storybook)

1. Importar o novo CSS temporariamente no Storybook
2. Verificar se as cores aplicam corretamente
3. Testar toggle light/dark

## ✅ Checklist de Validação

Antes de prosseguir para a PRÓXIMA tarefa:

- [ ] **Arquivo criado**: `src/styles/tokens-static.css` existe
- [ ] **Build passando**: `npm run build` sem erros de CSS
- [ ] **Todas as variáveis**: Lista completa de variáveis em ambas as seções
- [ ] **Sem color-mix**: Arquivo NÃO contém `color-mix()`
- [ ] **Validação de sintaxe**: CSS válido (pode usar ferramenta online)
- [ ] **Revisão**: Outro dev revisou os valores (ou auto-revisão cuidadosa)

## ⚠️ Notas Importantes

1. **Copiar de tokens.css**: Verificar se há mais variáveis em `src/styles/tokens.css` que precisam ser incluídas
2. **Manter comentários**: Adicionar comentários indicando quais eram dinâmicos
3. **Consistência**: Garantir que `--border` e `--input` tenham valores idênticos (como no sistema atual)
4. **Ordem**: Manter ordem lógica das variáveis (base → semantic → component)

## 🔄 Próxima Tarefa

Após completar esta: **PRD 2.2 - Atualizar index.css**
