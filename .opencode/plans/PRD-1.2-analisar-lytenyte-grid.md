# PRD 1.2 - Analisar lytenyte-grid.css

## 🎯 Objetivo

Documentar e calcular valores estáticos para os 7 usos de `color-mix()` no arquivo `lytenyte-grid.css`, garantindo suporte a light e dark mode.

## 📋 Contexto

O componente lytenyte-grid usa `color-mix()` inline no CSS para criar variações de cor. Estes precisam ser convertidos para valores HSL estáticos.

## 🔧 Alterações Esperadas

### Arquivo a Analisar

- `src/components/lytenyte-grid/lytenyte-grid.css`

### Uso de color-mix() Encontrados (7 ocorrências)

| Linha | Seletor            | Propriedade              | Fórmula Atual                                                                               |
| ----- | ------------------ | ------------------------ | ------------------------------------------------------------------------------------------- |
| 5     | `:root`            | `--lng1771-row-selected` | `color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))`                      |
| 12    | `:root`            | `--lng1771-gray-20`      | `color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))`                      |
| 41    | `.ag-row-selected` | `background-color`       | `color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background))) !important`           |
| 48    | `.ag-row-odd`      | `background-color`       | `color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)))`                      |
| 53    | `.ag-row-even`     | `background-color`       | `color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background))) !important`           |
| 74    | `.ag-header-cell`  | `border-bottom`          | `1px solid color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background))) !important` |
| 91    | `.ag-cell`         | `border-bottom`          | `1px solid color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background))) !important` |

### Cálculos Necessários

#### Variáveis Base (do colors.ts)

```
--primary:
  Light: 220 100% 50%
  Dark: 210 40% 98%

--background:
  Light: 0 0% 100%
  Dark: 222.2 84% 4.9%
```

#### Cálculos por Fórmula

**Fórmula 1: 20% primary + 80% background**

- Light: mix(220 100% 50% @ 20%, 0 0% 100% @ 80%)
- Dark: mix(210 40% 98% @ 20%, 222.2 84% 4.9% @ 80%)
- Resultado Light: ~220 40% 90%
- Resultado Dark: ~220 70% 23%

**Fórmula 2: 10% primary + 90% background**

- Light: mix(220 100% 50% @ 10%, 0 0% 100% @ 90%)
- Dark: mix(210 40% 98% @ 10%, 222.2 84% 4.9% @ 90%)
- Resultado Light: ~220 20% 95%
- Resultado Dark: ~220 45% 14%

### Estrutura de Saída

Adicionar ao arquivo `src/styles/tokens-reference.ts`:

```typescript
export const LYTENYTE_GRID_TOKENS = {
  // Usado para: --lng1771-row-selected, --lng1771-gray-20, borders
  "row-selected": {
    variable: "--lng1771-row-selected",
    light: "220 40% 90%", // 20% mix
    dark: "220 70% 23%",
  },
  // Usado para: background das rows
  "row-bg": {
    variable: "--lng1771-row-bg",
    light: "220 20% 95%", // 10% mix
    dark: "220 45% 14%",
  },
} as const;
```

## 🧪 Critérios de Teste/Aceitação

### Teste 1: Documentação Completa

- [ ] Todas as 7 ocorrências mapeadas
- [ ] Linha, seletor e propriedade documentados
- [ ] Cálculos light/dark documentados

### Teste 2: Valores Calculados

- [ ] 2 fórmulas únicas calculadas (20% e 10%)
- [ ] Cada fórmula tem valores light e dark
- [ ] Valores validados visualmente no Storybook

### Teste 3: Grid Funcional

- [ ] Verificar grid renderiza corretamente atualmente
- [ ] Anotar cores atuais via DevTools
- [ ] Confirmar valores estáticos correspondem

## 📝 Instruções de Teste Passo a Passo

### Passo 1: Identificar Todas as Ocorrências

```bash
grep -n "color-mix" src/components/lytenyte-grid/lytenyte-grid.css
```

### Passo 2: Documentar Contexto

Para cada ocorrência, anotar:

1. Número da linha
2. Seletor CSS
3. Propriedade
4. Fórmula completa

### Passo 3: Calcular Valores

1. Extrair valores base de `src/tokens/colors.ts`
2. Aplicar percentuais do color-mix
3. Calcular HSL resultante

**Método de cálculo simplificado:**

```
Para mistura de duas cores HSL:
- Hue: média ponderada
- Saturation: média ponderada
- Lightness: média ponderada

Ex: 20% of (220 100% 50%) + 80% of (0 0% 100%)
= (220*0.2 + 0*0.8) (100*0.2 + 0*0.8)% (50*0.2 + 100*0.8)%
= 44 20% 90%
```

_Nota: Cálculo real em OKLab é mais complexo, mas para referência usamos aproximação HSL_

### Passo 4: Validar Visualmente

1. Abrir Storybook
2. Navegar até o componente lytenyte-grid
3. Inspecionar elementos com DevTools
4. Anotar valores RGB/Hex reais computados
5. Converter para HSL e comparar com cálculos

### Passo 5: Adicionar ao Arquivo de Referência

```typescript
// src/styles/tokens-reference.ts

// Adicionar seção:
export const LYTENYTE_GRID_TOKENS = {
  // ... valores calculados
};
```

## ✅ Checklist de Validação

Antes de prosseguir para a PRÓXIMA tarefa:

- [ ] **7 ocorrências mapeadas**: Todas as linhas com color-mix documentadas
- [ ] **Valores calculados**: 2 fórmulas únicas com light/dark
- [ ] **Validação visual**: Cores do grid inspecionadas no DevTools
- [ ] **Arquivo atualizado**: `tokens-reference.ts` contém seção LYTENYTE_GRID_TOKENS
- [ ] **Build passando**: `npm run build` sem erros
- [ ] **Grid funcional**: Componente renderiza sem erros no Storybook

## ⚠️ Notas Importantes

1. **Apenas documentação**: Esta tarefa NÃO modifica o CSS ainda
2. **Manter nomes**: Preservar nomes das variáveis CSS originais
3. **IMPORTANTE**: Grid usa variáveis próprias (--lng1771-\*) que precisam ser preservadas
4. **Dark mode**: Validar que o grid funciona em ambos os modos no Storybook

## 🔄 Próxima Tarefa

Após completar esta: **PRD 2.1 - Criar CSS Estático Unificado**
