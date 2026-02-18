# SPEC 1.2 - Especificação Técnica: Analisar lytenyte-grid.css

## 📋 Informação Geral

- **PRD Referência**: PRD-1.2-analisar-lytenyte-grid.md
- **Complexidade**: Baixa
- **Tempo Estimado**: 1-2 horas
- **Dependências**: SPEC 1.1

---

## 🔬 Análise Técnica

### Ocorrências Encontradas (7 total)

```bash
# Comando para listar todas as ocorrências
grep -n "color-mix" src/components/lytenyte-grid/lytenyte-grid.css
```

**Resultado esperado:**

```
5:    --lng1771-row-selected: color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)));
12:    --lng1771-gray-20: color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)));
41:    background-color: color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background))) !important;
48:    background-color: color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)));
53:    background-color: color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background))) !important;
74:    border-bottom: 1px solid color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background))) !important;
91:    border-bottom: 1px solid color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background))) !important;
```

### Agrupamento por Fórmula

**Fórmula A (20% mix) - 4 ocorrências:**

- Linhas: 5, 12, 74, 91
- Uso: `--lng1771-row-selected`, `--lng1771-gray-20`, borders

**Fórmula B (10% mix) - 3 ocorrências:**

- Linhas: 41, 48, 53
- Uso: backgrounds de rows

### Valores Base

```css
/* Valores do tokens.ts */
--primary: light: 220 100% 50% dark: 210 40% 98% --background: light: 0 0% 100%
  dark: 222.2 84% 4.9%;
```

---

## 💻 Cálculos Técnicos

### Fórmula A: 20% mix

**Cálculo Light:**

```
Primary (220 100% 50%) @ 20%
Background (0 0% 100%) @ 80%

H: (220 * 0.2 + 0 * 0.8) = 44
S: (100 * 0.2 + 0 * 0.8) = 20%
L: (50 * 0.2 + 100 * 0.8) = 90%

Resultado: 44 20% 90% (aproximado para OKLab)
Ajustado: 220 40% 90%
```

**Cálculo Dark:**

```
Primary (210 40% 98%) @ 20%
Background (222.2 84% 4.9%) @ 80%

Ajustado: 220 70% 23%
```

### Fórmula B: 10% mix

**Cálculo Light:**

```
Primary (220 100% 50%) @ 10%
Background (0 0% 100%) @ 90%

Resultado aproximado: 220 20% 95%
```

**Cálculo Dark:**

```
Resultado aproximado: 220 45% 14%
```

---

## 💻 Especificação Técnica

### Adição ao tokens-reference.ts

```typescript
// src/styles/tokens-reference.ts

// Adicionar após STATIC_TOKEN_REFERENCE:

export const LYTENYTE_GRID_TOKENS = {
  rowSelected: {
    variable: "--lng1771-row-selected",
    light: "220 40% 90%",
    dark: "220 70% 23%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))",
    usage: "Selected row background, header borders, cell borders",
    occurrences: 4,
  },

  gray20: {
    variable: "--lng1771-gray-20",
    light: "220 40% 90%",
    dark: "220 70% 23%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))",
    usage: "Gray variant (mesmo cálculo que row-selected)",
    occurrences: 1,
  },

  rowBackground: {
    variable: "--lng1771-row-bg",
    light: "220 20% 95%",
    dark: "220 45% 14%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)))",
    usage: "Row backgrounds (selected, odd, even)",
    occurrences: 3,
  },
};
```

---

## 🧪 Casos de Teste

### Teste 1: Documentação Completa

```typescript
// Verificar que todos os tokens estão documentados
const expectedTokens = ["rowSelected", "gray20", "rowBackground"];
const actualTokens = Object.keys(LYTENYTE_GRID_TOKENS);

expect(actualTokens).toEqual(expect.arrayContaining(expectedTokens));
expect(actualTokens).toHaveLength(3);
```

### Teste 2: Validação de Ocorrências

```typescript
// Verificar que soma das ocorrências = 7
const totalOccurrences = Object.values(LYTENYTE_GRID_TOKENS).reduce(
  (sum, token) => sum + token.occurrences,
  0,
);

expect(totalOccurrences).toBe(7);
```

### Teste 3: Validação Visual

```bash
# 1. Abrir Storybook
npm run storybook

# 2. Navegar até lytenyte-grid
# 3. Inspecionar elemento com DevTools
# 4. Anotar valor RGB computado
# 5. Converter para HSL
# 6. Comparar com valores calculados
```

---

## 📊 Checklist de Validação

- [ ] Comando grep executado e output salvo
- [ ] 7 ocorrências mapeadas (4 da Fórmula A, 3 da Fórmula B)
- [ ] Linhas e seletores documentados
- [ ] Valores HSL calculados (light e dark)
- [ ] LYTENYTE_GRID_TOKENS adicionado ao tokens-reference.ts
- [ ] Build passa
- [ ] Validação visual feita no Storybook

---

## 🛠️ Comandos Úteis

```bash
# Extrair contexto completo de cada ocorrência
grep -B 2 -A 2 "color-mix" src/components/lytenyte-grid/lytenyte-grid.css

# Contar ocorrências por tipo de mix (10% vs 20%)
grep -c "10%" src/components/lytenyte-grid/lytenyte-grid.css  # Deve ser 3
grep -c "20%" src/components/lytenyte-grid/lytenyte-grid.css  # Deve ser 4
```

---

## ✅ Handoff para SPEC 2.1

**Entregáveis:**

1. Valores calculados para lytenyte-grid
2. 3 tokens documentados no tokens-reference.ts
3. Validação visual confirmada

**Próximo passo**: Usar esses valores no tokens-static.css.
