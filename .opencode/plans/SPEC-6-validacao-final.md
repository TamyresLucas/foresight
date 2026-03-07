# SPEC 6.x - Especificação Técnica: Validação Final

## 📋 Informação Geral

- **PRD Referência**: PRD-6-validacao-final.md
- **Complexidade**: Média
- **Tempo Estimado**: 3-4 horas
- **Dependências**: SPEC 5.x

---

## 💻 Especificação Técnica

### SPEC 6.1 - Testes de Dark Mode

#### Objetivo

Validar que dark mode continua funcionando corretamente com tokens estáticos.

#### Testes a Executar

**Teste 1: Valores Computados**

```javascript
// No console DevTools do Storybook:
const styles = getComputedStyle(document.documentElement);

// Light mode (default)
const lightTests = [
  ["--background", "0 0% 100%"],
  ["--foreground", "222.2 84% 4.9%"],
  ["--primary", "220 100% 50%"],
  ["--secondary", "220 5% 97.5%"],
  ["--muted", "220 5% 97.5%"],
  ["--border", "220 13% 85%"],
];

console.log("=== LIGHT MODE ===");
lightTests.forEach(([token, expected]) => {
  const actual = styles.getPropertyValue(token).trim();
  const match = actual === expected;
  console.log(
    `${match ? "✅" : "❌"} ${token}: ${actual} (expected: ${expected})`,
  );
});
```

**Teste 2: Alternância Dark/Light**

```javascript
// Adicionar classe dark
document.documentElement.classList.add("dark");

// Testar valores dark
const darkTests = [
  ["--background", "222.2 84% 4.9%"],
  ["--foreground", "210 40% 98%"],
  ["--primary", "210 40% 98%"],
  ["--secondary", "222 8% 9.5%"],
  ["--muted", "222 8% 9.5%"],
  ["--border", "220 13% 18%"],
];

console.log("=== DARK MODE ===");
darkTests.forEach(([token, expected]) => {
  const actual = styles.getPropertyValue(token).trim();
  const match = actual === expected;
  console.log(
    `${match ? "✅" : "❌"} ${token}: ${actual} (expected: ${expected})`,
  );
});

// Remover classe dark
document.documentElement.classList.remove("dark");
```

**Teste 3: Componentes em Dark Mode**

```bash
# No Storybook:
# 1. Abrir cada componente abaixo
# 2. Ativar dark mode
# 3. Verificar visualmente

Componentes a testar:
- Button (primary, secondary, outline)
- Card
- Input
- Select
- Table
- Alert
- Badge
```

---

### SPEC 6.2 - Testes de Regressão Visual

#### Objetivo

Garantir que não houve mudanças visuais indesejadas.

#### Componentes Críticos

**Lista de Verificação:**

- [ ] Button (all variants)
- [ ] Card
- [ ] Input / Textarea
- [ ] Select
- [ ] Table
- [ ] Alert
- [ ] Badge
- [ ] Dialog
- [ ] Dropdown Menu
- [ ] Tabs
- [ ] Toggle
- [ ] lytenyte-grid

#### Processo de Teste

1. **Abrir Storybook**

```bash
npm run storybook
```

2. **Para Cada Componente:**
   - Abrir story no Storybook
   - Verificar light mode
   - Verificar dark mode
   - Comparar com versão anterior (se possível)
   - Anotar discrepâncias

3. **Verificações Específicas:**
   - Cores de background
   - Cores de texto
   - Cores de borda
   - Estados hover/focus (se aplicável)
   - Estados disabled

#### Critérios de Aceitação

- [ ] Todos os componentes renderizam
- [ ] Nenhuma diferença visual perceptível
- [ ] Cores mantêm consistência entre componentes
- [ ] Estados interativos funcionam

---

### SPEC 6.3 - Limpeza de localStorage

#### Documentação

Criar arquivo `LOCALSTORAGE_CLEANUP.md`:

````markdown
# Limpeza de localStorage - Remoção de Paleta Dinâmica

## Chaves a Remover

Após a remoção da feature de paleta dinâmica, as seguintes chaves do localStorage
podem ser removidas pois não são mais utilizadas:

- `global-colors-shared`
- `global-colors-Voxco`
- `global-colors-Ascribe`
- `global-colors-Discuss`

## Como Limpar

### Opção 1: DevTools (Recomendado para desenvolvimento)

1. Abrir a aplicação no navegador
2. Abrir DevTools (F12)
3. Ir para Application (Chrome) ou Storage (Firefox)
4. Selecionar LocalStorage > [origem da aplicação]
5. Procurar as chaves listadas acima
6. Clicar com direito > Delete
7. Recarregar a página

### Opção 2: Console JavaScript

```javascript
// Remover chaves específicas
localStorage.removeItem("global-colors-shared");
localStorage.removeItem("global-colors-Voxco");
localStorage.removeItem("global-colors-Ascribe");
localStorage.removeItem("global-colors-Discuss");

// Ou limpar tudo (cuidado!)
localStorage.clear();
```
````

## Verificação

Após limpar, a aplicação deve:

- Funcionar normalmente
- Não recriar as chaves removidas
- Usar apenas tokens estáticos definidos no CSS

````

#### Teste de Validação
```bash
# 1. Verificar que aplicação funciona sem as chaves
# 2. Limpar localStorage
# 3. Recarregar
# 4. Verificar que não são recriadas
# 5. Verificar que tema estático é aplicado
````

---

### SPEC 6.4 - Documentação de Breaking Changes

#### Arquivo: `BREAKING_CHANGES.md`

````markdown
# Breaking Changes - v[X.0.0]

## Resumo

Remoção completa da feature de paleta dinâmica. Todos os tokens de cor agora são
estáticos (valores HSL fixos).

## APIs Removidas

### Funções

- `getComputedColorRGB()` - Não disponível
- `checkWCAGCompliance()` - Não disponível
- `getContrastRatioBetweenVariables()` - Não disponível
- `formatRGB()` - Não disponível

### Tipos

- `ColorToken` - Removido
- `StaticColorToken` - Removido
- `DynamicColorToken` - Removido
- `ColorTokenKey` - Removido

### Constantes

- `COLOR_TOKENS` - Removido

### Type Guards

- `isStaticToken()` - Removido
- `isDynamicToken()` - Removido

## Tokens Alterados

Tokens que antes eram dinâmicos (calculados via `color-mix()`) agora são estáticos:

| Token         | Valor Light  | Valor Dark  | Observação                      |
| ------------- | ------------ | ----------- | ------------------------------- |
| `--secondary` | 220 5% 97.5% | 222 8% 9.5% | Era mix de primary + background |
| `--muted`     | 220 5% 97.5% | 222 8% 9.5% | Era mix de primary + background |
| `--accent`    | 220 10% 95%  | 222 10% 14% | Era mix de primary + background |
| `--border`    | 220 13% 85%  | 220 13% 18% | Era fórmula aninhada complexa   |
| ...           | ...          | ...         | ...                             |

## Migração

### Se você usava as funções de cor:

**Antes:**

```typescript
import {
  getComputedColorRGB,
  checkWCAGCompliance,
} from "@company/design-system";

const rgb = getComputedColorRGB("--primary");
const compliance = checkWCAGCompliance(4.5);
```
````

**Depois:**

```typescript
// Opção 1: Copiar funções para seu projeto
// (copiar de uma versão anterior do design-system)

// Opção 2: Usar biblioteca de cores
import chroma from "chroma-js";
// ou
import { colord } from "colord";

// Implementar lógica equivalente
```

### Se você usava COLOR_TOKENS:

**Antes:**

```typescript
import { COLOR_TOKENS } from "@company/design-system";

const token = COLOR_TOKENS["primary"];
```

**Depois:**

```typescript
// Tokens agora estão apenas no CSS
// Acessar via:
const primaryValue = getComputedStyle(
  document.documentElement,
).getPropertyValue("--primary");
```

## Procedimento de Upgrade

1. Atualizar para a nova versão
2. Verificar erros de compilação relacionados às APIs removidas
3. Migrar código conforme seção acima
4. Limpar localStorage (ver LOCALSTORAGE_CLEANUP.md)
5. Testar aplicação

## Suporte

Para dúvidas ou problemas na migração, contatar:

- [Time/Email de suporte]

````

---

## 📊 Checklist Final Completo

### Build & TypeScript:
- [ ] `npm run build` passa
- [ ] `npm run type-check` passa (se existir)
- [ ] `npm run lint` passa (se existir)
- [ ] Sem warnings

### Funcionalidade:
- [ ] Dark mode funciona
- [ ] Light mode funciona
- [ ] Tokens estáticos aplicam
- [ ] Componentes principais renderizam
- [ ] lytenyte-grid funciona

### Código:
- [ ] `color-mix` removido completamente
- [ ] `src/tokens/` não existe
- [ ] `src/lib/color-utils.ts` não existe
- [ ] Nenhum import quebrado

### Documentação:
- [ ] `BREAKING_CHANGES.md` criado
- [ ] `LOCALSTORAGE_CLEANUP.md` criado
- [ ] README atualizado (se necessário)

### Validação Manual:
- [ ] Testado em [N] componentes
- [ ] Dark mode testado
- [ ] Storybook revisado
- [ ] Sem erros no console

---

## ✅ Aprovação Final

Quando TODOS os itens acima estiverem ✅:

```bash
# Commit final
git add .
git commit -m "feat: remove dynamic palette feature

- Convert all dynamic tokens to static HSL values
- Remove color-utils library
- Remove tokens module
- Simplify ColorPaletteEditor to display-only
- Maintain dark mode support
- Remove Voxco/Ascribe/Discuss profiles
- Update documentation

BREAKING CHANGE: Removes dynamic palette APIs
See BREAKING_CHANGES.md for migration guide"

# Push
git push origin feature/remove-dynamic-palette
````

---

## 🎉 Projeto Completo!

**Status**: ✅ REMOÇÃO DE PALETA DINÂMICA FINALIZADA

**Próximo passo**: Code review e merge para main.
