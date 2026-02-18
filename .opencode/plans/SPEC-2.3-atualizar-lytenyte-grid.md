# SPEC 2.3 - Especificação Técnica: Atualizar lytenyte-grid.css

## 📋 Informação Geral

- **PRD Referência**: PRD-2.3-atualizar-lytenyte-grid.md
- **Complexidade**: Baixa
- **Tempo Estimado**: 1 hora
- **Dependências**: SPEC 2.2

---

## 🔬 Substituições Necessárias

### Mapeamento Completo

| Linha | Seletor            | Propriedade              | ANTES                                       | DEPOIS                                                  |
| ----- | ------------------ | ------------------------ | ------------------------------------------- | ------------------------------------------------------- |
| 5     | `:root`            | `--lng1771-row-selected` | `color-mix(...20%...)`                      | `220 40% 90%`                                           |
| 12    | `:root`            | `--lng1771-gray-20`      | `color-mix(...20%...)`                      | `220 40% 90%`                                           |
| 41    | `.ag-row-selected` | `background-color`       | `color-mix(...10%...) !important`           | `hsl(var(--lng1771-row-bg)) !important`                 |
| 48    | `.ag-row-odd`      | `background-color`       | `color-mix(...10%...)`                      | `hsl(var(--lng1771-row-bg))`                            |
| 53    | `.ag-row-even`     | `background-color`       | `color-mix(...10%...) !important`           | `hsl(var(--lng1771-row-bg)) !important`                 |
| 74    | `.ag-header-cell`  | `border-bottom`          | `1px solid color-mix(...20%...) !important` | `1px solid hsl(var(--lng1771-row-selected)) !important` |
| 91    | `.ag-cell`         | `border-bottom`          | `1px solid color-mix(...20%...) !important` | `1px solid hsl(var(--lng1771-row-selected)) !important` |

### Valores dos Tokens (do SPEC 1.2)

```css
/* Light Mode */
--lng1771-row-selected: 220 40% 90%;
--lng1771-gray-20: 220 40% 90%;
--lng1771-row-bg: 220 20% 95%;

/* Dark Mode (definidos em tokens-static.css) */
.dark {
  --lng1771-row-selected: 220 70% 23%;
  --lng1771-gray-20: 220 70% 23%;
  --lng1771-row-bg: 220 45% 14%;
}
```

---

## 💻 Especificação Técnica

### Mudanças no Código

#### Seção :root do Grid (linhas ~1-20)

```css
/* ANTES */
:root {
  --lng1771-row-selected: color-mix(
    in oklab,
    hsl(var(--primary)) 20%,
    hsl(var(--background))
  );
  --lng1771-gray-20: color-mix(
    in oklab,
    hsl(var(--primary)) 20%,
    hsl(var(--background))
  );
}

/* DEPOIS */
:root {
  --lng1771-row-selected: 220 40% 90%; /* 20% mix calculated */
  --lng1771-gray-20: 220 40% 90%; /* 20% mix calculated */
  --lng1771-row-bg: 220 20% 95%; /* 10% mix calculated */
}
```

#### Classes de Row (linhas ~40-55)

```css
/* ANTES - Linha 41 */
.ag-row-selected {
  background-color: color-mix(
    in oklab,
    hsl(var(--primary)) 10%,
    hsl(var(--background))
  ) !important;
}

/* DEPOIS - Linha 41 */
.ag-row-selected {
  background-color: hsl(var(--lng1771-row-bg)) !important;
}

/* ANTES - Linha 48 */
.ag-row-odd {
  background-color: color-mix(
    in oklab,
    hsl(var(--primary)) 10%,
    hsl(var(--background))
  );
}

/* DEPOIS - Linha 48 */
.ag-row-odd {
  background-color: hsl(var(--lng1771-row-bg));
}

/* ANTES - Linha 53 */
.ag-row-even {
  background-color: color-mix(
    in oklab,
    hsl(var(--primary)) 10%,
    hsl(var(--background))
  ) !important;
}

/* DEPOIS - Linha 53 */
.ag-row-even {
  background-color: hsl(var(--lng1771-row-bg)) !important;
}
```

#### Borders (linhas ~70-95)

```css
/* ANTES - Linha 74 */
.ag-header-cell {
  border-bottom: 1px solid
    color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background))) !important;
}

/* DEPOIS - Linha 74 */
.ag-header-cell {
  border-bottom: 1px solid hsl(var(--lng1771-row-selected)) !important;
}

/* ANTES - Linha 91 */
.ag-cell {
  border-bottom: 1px solid
    color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background))) !important;
}

/* DEPOIS - Linha 91 */
.ag-cell {
  border-bottom: 1px solid hsl(var(--lng1771-row-selected)) !important;
}
```

---

## 🧪 Casos de Teste

### Teste 1: color-mix Removido

```bash
grep -c "color-mix" src/components/lytenyte-grid/lytenyte-grid.css
# Deve retornar: 0
```

### Teste 2: Variáveis Novas Presentes

```bash
grep -c "lng1771-row-bg" src/components/lytenyte-grid/lytenyte-grid.css
# Deve retornar: 3 (referências)

grep -c "lng1771-row-selected" src/components/lytenyte-grid/lytenyte-grid.css
# Deve retornar: 4 (referências)
```

### Teste 3: Build

```bash
npm run build
# Deve passar
```

### Teste 4: Visual - Light Mode

```javascript
// No Storybook, abrir componente lytenyte-grid
// Inspecionar .ag-row-selected
const row = document.querySelector(".ag-row-selected");
const bg = getComputedStyle(row).backgroundColor;
console.log("Row background:", bg);
// Esperado: rgb(243, 246, 252) aproximadamente (220 20% 95%)
```

### Teste 5: Visual - Dark Mode

```javascript
// Adicionar classe .dark
document.body.classList.add("dark");

const row = document.querySelector(".ag-row-selected");
const bg = getComputedStyle(row).backgroundColor;
console.log("Row background (dark):", bg);
// Esperado: rgb(20, 25, 35) aproximadamente (220 45% 14%)

document.body.classList.remove("dark");
```

### Teste 6: Grid Completo

```bash
# No Storybook:
# 1. Abrir story do lytenyte-grid
# 2. Verificar que rows têm background correto
# 3. Verificar que headers têm borders
# 4. Toggle dark mode
# 5. Verificar que cores mudam
```

---

## 📊 Checklist de Validação

- [ ] 7 substituições feitas conforme tabela
- [ ] `grep color-mix` retorna 0
- [ ] Build passa
- [ ] Grid renderiza no Storybook
- [ ] Light mode: cores corretas
- [ ] Dark mode: cores corretas
- [ ] Funcionalidade do grid preservada (seleção, hover, etc.)

---

## ⚠️ Notas Importantes

1. **Preservar !important**: Manter flags `!important` onde existiam
2. **Ordem das variáveis**: `--lng1771-row-bg` é nova, adicionar no `:root`
3. **Consistência**: Usar `hsl(var(--nome))` para consistência

---

## ✅ Handoff para SPEC 3.1

**Entregáveis:**

1. lytenyte-grid.css atualizado
2. 0 ocorrências de color-mix
3. Grid funcional em ambos os modos

**Próximo passo**: Desativar editor de paleta.
