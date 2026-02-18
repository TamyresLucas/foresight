# SPEC 2.1 - Especificação Técnica: Criar CSS Estático Unificado

## 📋 Informação Geral

- **PRD Referência**: PRD-2.1-criar-css-estatico.md
- **Complexidade**: Alta
- **Tempo Estimado**: 3-4 horas
- **Dependências**: SPEC 1.1, SPEC 1.2

---

## 🔬 Estrutura do Arquivo

### Seções Obrigatórias

1. **Header** (comentário com metadados)
2. **Light Mode** (`:root`)
3. **Dark Mode** (`.dark`)

### Tokens a Incluir

**Estáticos Originais** (~20 tokens):

- background, foreground
- primary, primary-foreground
- destructive, destructive-foreground
- success, success-foreground
- warning, warning-foreground
- ring, radius

**Convertidos de Dinâmicos** (15 tokens):

- secondary, secondary-hover, secondary-foreground
- muted, muted-foreground
- accent, accent-foreground
- background-destructive, border-destructive
- background-success, border-success
- background-warning, border-warning
- info, info-foreground, background-info, border-info
- border, input
- disabled-foreground

**Lytenyte Grid** (3 tokens):

- lng1771-row-selected
- lng1771-gray-20
- lng1771-row-bg

**Total**: ~38 variáveis CSS

---

## 💻 Especificação Técnica

### Template do Arquivo

```css
/**
 * Foresight Design System - Static Tokens
 * 
 * Este arquivo define todas as variáveis CSS de forma estática,
 * removendo a dependência de color-mix() dinâmico.
 * 
 * Modificado em: 2026-02-18
 * Autor: [Nome]
 */

/* ============================================
   LIGHT MODE (Default)
   ============================================ */
:root {
  /* -----------------------------------------
     Base Colors
     ----------------------------------------- */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;

  /* -----------------------------------------
     Primary
     ----------------------------------------- */
  --primary: 220 100% 50%;
  --primary-foreground: 210 40% 98%;

  /* -----------------------------------------
     Secondary (convertido de dinâmico)
     Original: color-mix(in oklab, primary 5%, background)
     ----------------------------------------- */
  --secondary: 220 5% 97.5%;
  --secondary-hover: 220 15% 92.5%;
  --secondary-foreground: 222.2 47.4% 11.2%;

  /* -----------------------------------------
     Muted (convertido)
     ----------------------------------------- */
  --muted: 220 5% 97.5%;
  --muted-foreground: 220 30% 18%;

  /* -----------------------------------------
     Accent (convertido)
     ----------------------------------------- */
  --accent: 220 10% 95%;
  --accent-foreground: 222.2 47.4% 11.2%;

  /* -----------------------------------------
     Destructive
     ----------------------------------------- */
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --background-destructive: 0 8% 96%; /* 10% mix */
  --border-destructive: 0 42% 80%; /* 50% mix */

  /* -----------------------------------------
     Success
     ----------------------------------------- */
  --success: 142 76% 36%;
  --success-foreground: 210 40% 98%;
  --background-success: 142 8% 96%; /* 10% mix */
  --border-success: 142 38% 68%; /* 50% mix */

  /* -----------------------------------------
     Warning
     ----------------------------------------- */
  --warning: 38 92% 50%;
  --warning-foreground: 222.2 47.4% 11.2%;
  --background-warning: 38 9% 95%; /* 10% mix */
  --border-warning: 38 46% 75%; /* 50% mix */

  /* -----------------------------------------
     Info
     ----------------------------------------- */
  --info: 220 70% 50%;
  --info-foreground: 210 40% 98%;
  --background-info: 220 7% 95%; /* 10% mix */
  --border-info: 220 35% 75%; /* 50% mix */

  /* -----------------------------------------
     Border & Input (convertido)
     ----------------------------------------- */
  --border: 220 13% 85%;
  --input: 220 13% 85%;
  --ring: 220 100% 50%;

  /* -----------------------------------------
     Disabled (convertido)
     ----------------------------------------- */
  --disabled-foreground: 220 40% 70%;

  /* -----------------------------------------
     Lytenyte Grid Tokens
     ----------------------------------------- */
  --lng1771-row-selected: 220 40% 90%; /* 20% mix */
  --lng1771-gray-20: 220 40% 90%; /* 20% mix */
  --lng1771-row-bg: 220 20% 95%; /* 10% mix */

  /* -----------------------------------------
     Radius
     ----------------------------------------- */
  --radius: 0.5rem;
}

/* ============================================
   DARK MODE
   ============================================ */
.dark {
  /* Base */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;

  /* Primary */
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;

  /* Secondary */
  --secondary: 222 8% 9.5%;
  --secondary-hover: 222 12% 19%;
  --secondary-foreground: 210 40% 98%;

  /* Muted */
  --muted: 222 8% 9.5%;
  --muted-foreground: 220 15% 65%;

  /* Accent */
  --accent: 222 10% 14%;
  --accent-foreground: 210 40% 98%;

  /* Destructive */
  --destructive: 0 62.8% 30.6%;
  --background-destructive: 0 6% 14%;
  --border-destructive: 0 31% 35%;

  /* Success */
  --background-success: 142 7% 14%;
  --border-success: 142 36% 35%;

  /* Warning */
  --background-warning: 38 9% 14%;
  --border-warning: 38 46% 35%;

  /* Info */
  --background-info: 220 7% 14%;
  --border-info: 220 35% 35%;

  /* Border & Input */
  --border: 220 13% 18%;
  --input: 220 13% 18%;
  --ring: 210 40% 98%;

  /* Disabled */
  --disabled-foreground: 220 16% 42%;

  /* Lytenyte Grid */
  --lng1771-row-selected: 220 70% 23%;
  --lng1771-gray-20: 220 70% 23%;
  --lng1771-row-bg: 220 45% 14%;
}
```

---

## 🧪 Casos de Teste

### Teste 1: Validação de Sintaxe CSS

```bash
# Verificar se há erros de sintaxe
npm run build

# Ou usar ferramenta online:
# https://jigsaw.w3.org/css-validator/
```

### Teste 2: Contagem de Variáveis

```bash
# Contar variáveis em :root
grep -c "^\s\+--" src/styles/tokens-static.css
# Deve ser ~38

# Verificar que cada variável em :root existe em .dark
grep "^\s\+--" src/styles/tokens-static.css | wc -l
# Deve ser par (light + dark para cada variável)
```

### Teste 3: Verificação de Duplicatas

```bash
# Verificar que não há variáveis duplicadas na mesma seção
grep "^\s\+--" src/styles/tokens-static.css | sort | uniq -d
# Deve retornar vazio
```

### Teste 4: Teste Visual

```javascript
// No console do DevTools:
const rootStyles = getComputedStyle(document.documentElement);

// Verificar tokens convertidos
console.log("secondary:", rootStyles.getPropertyValue("--secondary"));
// Esperado: "220 5% 97.5%" (sem color-mix)

console.log("muted:", rootStyles.getPropertyValue("--muted"));
// Esperado: "220 5% 97.5%"

console.log("border:", rootStyles.getPropertyValue("--border"));
// Esperado: "220 13% 85%"
```

---

## 📊 Critérios de Aceitação

| Critério           | Métrica            | Sucesso           |
| ------------------ | ------------------ | ----------------- |
| Total de variáveis | light + dark       | ~38               |
| Formato HSL        | % válido           | 100%              |
| Comentários        | tokens convertidos | 100% documentados |
| Sintaxe CSS        | erros              | 0                 |
| Duplicatas         | variáveis          | 0                 |

---

## ✅ Checklist de Implementação

- [ ] 1. Criar arquivo `src/styles/tokens-static.css`
- [ ] 2. Copiar valores do SPEC 1.1 e 1.2
- [ ] 3. Adicionar tokens estáticos originais
- [ ] 4. Criar seção `:root` (light mode)
- [ ] 5. Criar seção `.dark` (dark mode)
- [ ] 6. Adicionar comentários explicativos
- [ ] 7. Validar sintaxe CSS
- [ ] 8. Verificar duplicatas
- [ ] 9. Build passa
- [ ] 10. Documentar no PR

---

## 🔄 Handoff para SPEC 2.2

**Entregáveis:**

1. Arquivo `tokens-static.css` completo
2. ~38 variáveis definidas
3. Validação de sintaxe passada

**Próximo passo**: Integrar este CSS no index.css.
