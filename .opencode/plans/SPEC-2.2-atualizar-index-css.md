# SPEC 2.2 - Especificação Técnica: Atualizar index.css

## 📋 Informação Geral

- **PRD Referência**: PRD-2.2-atualizar-index-css.md
- **Complexidade**: Média
- **Tempo Estimado**: 2-3 horas
- **Dependências**: SPEC 2.1

---

## 🔬 Análise do Arquivo Atual

### Estrutura Esperada do index.css

```
src/index.css
├── Imports (@import ...)
├── Tailwind directives (@tailwind ...)
├── Custom CSS classes
│   └── color-mix() inline (2 ocorrências)
└── Theme definitions
```

### Ocorrências de color-mix a Substituir

**Ocorrência 1 (linha ~229):**

```css
/* ANTES */
border-color: color-mix(
  in oklab,
  hsl(var(--primary)) 20%,
  hsl(var(--background))
);

/* DEPOIS */
border-color: hsl(var(--lng1771-row-selected)); /* ou --border */
```

**Ocorrência 2 (linha ~236):**

```css
/* ANTES */
background-color: color-mix(
  in oklab,
  hsl(var(--primary)) 10%,
  hsl(var(--background))
);

/* DEPOIS */
background-color: hsl(var(--secondary)); /* ou --lng1771-row-bg) */
```

---

## 💻 Especificação Técnica

### Passo 1: Adicionar Import

```css
/* No topo do arquivo, após outros imports */
@import "./styles/tokens-static.css";

/* OU substituir import existente se houver */
/* @import './styles/tokens.css'; */
```

### Passo 2: Identificar e Substituir color-mix

```bash
# Encontrar todas as ocorrências
grep -n "color-mix" src/index.css
```

#### Substituição 1: Table/Grid borders

```css
/* Contexto típico: .table-body-row ou similar */
/* ANTES */
.table-body-row {
  border-color: color-mix(
    in oklab,
    hsl(var(--primary)) 20%,
    hsl(var(--background))
  );
}

/* DEPOIS */
.table-body-row {
  border-color: hsl(var(--border));
}
```

#### Substituição 2: Row backgrounds

```css
/* Contexto típico: rows alternadas ou hover */
/* ANTES */
.row-alternate {
  background-color: color-mix(
    in oklab,
    hsl(var(--primary)) 10%,
    hsl(var(--background))
  );
}

/* DEPOIS */
.row-alternate {
  background-color: hsl(var(--secondary));
}
```

### Passo 3: Verificar Outras Ocorrências

Se houver mais ocorrências, mapear:

- Contexto (qual componente/classe)
- Fórmula atual
- Variável estática equivalente

---

## 🧪 Casos de Teste

### Teste 1: color-mix Removido

```bash
# Verificar que não há mais color-mix
grep -c "color-mix" src/index.css
# Deve retornar: 0
```

### Teste 2: Import Correto

```bash
# Verificar que import está correto
grep "tokens-static.css" src/index.css
# Deve encontrar: @import './styles/tokens-static.css';
```

### Teste 3: Build

```bash
npm run build
# Deve passar sem erros
```

### Teste 4: Validação Visual - Tokens Estáticos

```javascript
// No DevTools console:
const styles = getComputedStyle(document.documentElement);

// Testar tokens que eram dinâmicos
const tests = [
  ["--secondary", "220 5% 97.5%"],
  ["--muted", "220 5% 97.5%"],
  ["--border", "220 13% 85%"],
  ["--accent", "220 10% 95%"],
];

tests.forEach(([token, expected]) => {
  const actual = styles.getPropertyValue(token).trim();
  console.log(
    `${token}: ${actual === expected ? "✅" : "❌"} (expected: ${expected}, got: ${actual})`,
  );
});
```

### Teste 5: Validação Visual - Dark Mode

```javascript
// 1. Adicionar classe .dark ao html
document.documentElement.classList.add("dark");

// 2. Verificar valores mudaram
const darkTests = [
  ["--secondary", "222 8% 9.5%"],
  ["--background", "222.2 84% 4.9%"],
];

darkTests.forEach(([token, expected]) => {
  const actual = styles.getPropertyValue(token).trim();
  console.log(`${token} (dark): ${actual === expected ? "✅" : "❌"}`);
});

// 3. Remover classe
document.documentElement.classList.remove("dark");
```

### Teste 6: Componentes Principais

```bash
# Abrir Storybook
npm run storybook

# Testar manualmente:
# 1. Button (todos os variants)
# 2. Card
# 3. Input
# 4. Table
# 5. Toggle dark mode em cada um
```

---

## 📊 Checklist de Validação

- [ ] Backup de index.css criado
- [ ] Import de tokens-static.css adicionado
- [ ] Ocorrência 1 substituída
- [ ] Ocorrência 2 substituída
- [ ] `grep color-mix src/index.css` retorna vazio
- [ ] Build passa
- [ ] Storybook inicia
- [ ] Tokens estáticos aplicam corretamente
- [ ] Dark mode funciona
- [ ] Componentes principais renderizam corretamente

---

## ⚠️ Riscos e Mitigações

| Risco                 | Probabilidade | Impacto | Mitigação                                            |
| --------------------- | ------------- | ------- | ---------------------------------------------------- |
| Import circular       | Baixa         | Alto    | Verificar ordem dos imports                          |
| Variável não definida | Média         | Alto    | Verificar que tokens-static.css vem antes do uso     |
| Ordem do CSS          | Baixa         | Médio   | Garantir que variáveis são definidas antes de usadas |

---

## ✅ Handoff para SPEC 2.3

**Entregáveis:**

1. index.css atualizado
2. Sem color-mix
3. Import correto
4. Build passando

**Próximo passo**: Atualizar lytenyte-grid.css.
