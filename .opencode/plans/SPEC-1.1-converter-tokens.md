# SPEC 1.1 - Especificação Técnica: Converter Tokens Dinâmicos para Estáticos

## 📋 Informação Geral

- **PRD Referência**: PRD-1.1-converter-tokens-dinamicos.md
- **Complexidade**: Média
- **Tempo Estimado**: 2-3 horas
- **Dependências**: Nenhuma

---

## 🔬 Análise Técnica

### Tokens Dinâmicos Identificados

A partir do `src/tokens/colors.ts`, identificamos **15 tokens dinâmicos**:

```typescript
// Estrutura do token dinâmico:
{
  type: 'dynamic',
  variable: '--nome',
  derivedFrom: ['--var1', '--var2'],
  formula: 'color-mix(in oklab, hsl(var(--var1)) X%, hsl(var(--var2)))'
}
```

### Cálculo Necessário

Para cada token dinâmico, precisamos calcular:

1. Valor HSL em modo **light**
2. Valor HSL em modo **dark**

**Fórmula de Mistura OKLab** (simplificada para HSL):

```
Resultado = (cor1 * porcentagem1 + cor2 * porcentagem2) / 100

Onde:
- cor1, cor2 são vetores HSL
- porcentagem1 + porcentagem2 = 100%
```

---

## 💻 Especificação Técnica

### Arquivo de Saída

```
src/styles/tokens-reference.ts
```

### Interface do Arquivo

```typescript
/**
 * Referência de tokens estáticos calculados
 * Gerado a partir dos tokens dinâmicos originais
 */

export interface StaticTokenValue {
  variable: string;
  light: string; // Format: "H S% L%"
  dark: string; // Format: "H S% L%"
  originalFormula: string; // Para referência
}

export const STATIC_TOKEN_REFERENCE: Record<string, StaticTokenValue> = {
  // Tokens serão adicionados aqui
};

// Token groups for organization
export const TOKEN_CATEGORIES = {
  secondary: ["secondary", "secondary-hover", "secondary-foreground"],
  muted: ["muted", "muted-foreground"],
  accent: ["accent", "accent-foreground"],
  destructive: ["background-destructive", "border-destructive"],
  success: ["background-success", "border-success"],
  warning: ["background-warning", "border-warning"],
  info: ["info", "info-foreground", "background-info", "border-info"],
  border: ["border", "input"],
  disabled: ["disabled-foreground"],
};
```

### Tokens a Implementar (15 total)

#### 1. Secondary Group (3 tokens)

**secondary**:

- Formula: `color-mix(in oklab, hsl(var(--primary)) 5%, hsl(var(--background)))`
- Base light: primary=220 100% 50%, background=0 0% 100%
- Base dark: primary=210 40% 98%, background=222.2 84% 4.9%
- Cálculo light: ~220 5% 97.5%
- Cálculo dark: ~222 8% 9.5%

**secondary-hover**:

- Formula: `color-mix(in oklab, hsl(var(--primary)) 15%, hsl(var(--background)))`
- Cálculo light: ~220 15% 92.5%
- Cálculo dark: ~222 12% 19%

**secondary-foreground** (já é estático, incluir para completude):

- light: 222.2 47.4% 11.2%
- dark: 210 40% 98%

#### 2. Muted Group (2 tokens)

**muted**:

- Formula: `color-mix(in oklab, hsl(var(--primary)) 5%, hsl(var(--background)))`
- Mesmo cálculo que secondary
- light: 220 5% 97.5%
- dark: 222 8% 9.5%

**muted-foreground**:

- Formula: `color-mix(in oklab, hsl(var(--primary)) 30%, hsl(var(--foreground)))`
- Base light: foreground=222.2 84% 4.9%
- Base dark: foreground=210 40% 98%
- Cálculo light: ~220 30% 18%
- Cálculo dark: ~220 15% 65%

#### 3. Accent Group (2 tokens)

**accent**:

- Formula: `color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)))`
- Cálculo light: ~220 10% 95%
- Cálculo dark: ~222 10% 14%

**accent-foreground** (já é estático):

- light: 222.2 47.4% 11.2%
- dark: 210 40% 98%

#### 4. Destructive Group (2 tokens)

**destructive** (base):

- light: 0 84.2% 60.2%
- dark: 0 62.8% 30.6%

**background-destructive**:

- Formula: `color-mix(in oklab, hsl(var(--destructive)) 10%, hsl(var(--background)))`
- Cálculo light: ~0 8% 96%
- Cálculo dark: ~0 6% 14%

**border-destructive**:

- Formula: `color-mix(in oklab, hsl(var(--destructive)) 50%, hsl(var(--background)))`
- Cálculo light: ~0 42% 80%
- Cálculo dark: ~0 31% 35%

#### 5. Success Group (2 tokens)

**success** (base):

- light: 142 76% 36%
- dark: 142 71% 29%

**background-success**:

- Formula: `color-mix(in oklab, hsl(var(--success)) 10%, hsl(var(--background)))`
- Cálculo light: ~142 8% 96%
- Cálculo dark: ~142 7% 14%

**border-success**:

- Formula: `color-mix(in oklab, hsl(var(--success)) 50%, hsl(var(--background)))`
- Cálculo light: ~142 38% 68%
- Cálculo dark: ~142 36% 35%

#### 6. Warning Group (2 tokens)

**warning** (base):

- light: 38 92% 50%
- dark: 38 92% 50%

**background-warning**:

- Formula: `color-mix(in oklab, hsl(var(--warning)) 10%, hsl(var(--background)))`
- Cálculo light: ~38 9% 95%
- Cálculo dark: ~38 9% 14%

**border-warning**:

- Formula: `color-mix(in oklab, hsl(var(--warning)) 50%, hsl(var(--background)))`
- Cálculo light: ~38 46% 75%
- Cálculo dark: ~38 46% 35%

#### 7. Info Group (4 tokens)

**info**:

- light: 220 70% 50%
- dark: 220 70% 50%

**info-foreground**:

- light: 210 40% 98%
- dark: 210 40% 98%

**background-info**:

- Formula: `color-mix(in oklab, hsl(var(--info)) 10%, hsl(var(--background)))`
- Cálculo light: ~220 7% 95%
- Cálculo dark: ~220 7% 14%

**border-info**:

- Formula: `color-mix(in oklab, hsl(var(--info)) 50%, hsl(var(--background)))`
- Cálculo light: ~220 35% 75%
- Cálculo dark: ~220 35% 35%

#### 8. Border Group (2 tokens)

**border**:

- Formula complexa aninhada: `color-mix(in oklab, color-mix(in oklab, hsl(var(--primary)), hsl(0 0% 70%) 40%) 50%, hsl(var(--background)))`
- Cálculo light: ~220 13% 85%
- Cálculo dark: ~220 13% 18%

**input**:

- Mesma fórmula que border
- light: 220 13% 85%
- dark: 220 13% 18%

#### 9. Disabled Group (1 token)

**disabled-foreground**:

- Formula: `color-mix(in oklab, hsl(var(--primary)) 40%, hsl(var(--background)))`
- Cálculo light: ~220 40% 70%
- Cálculo dark: ~220 16% 42%

---

## 🧪 Casos de Teste

### Teste 1: Validação de Formato

```typescript
// Teste: Todos os valores devem estar no formato HSL correto
const hslRegex = /^(\d{1,3})\s+(\d{1,3})%\s+(\d{1,3})%$/;

Object.entries(STATIC_TOKEN_REFERENCE).forEach(([key, token]) => {
  expect(token.light).toMatch(hslRegex);
  expect(token.dark).toMatch(hslRegex);
});
```

### Teste 2: Validação de Range

```typescript
// Teste: Valores HSL devem estar dentro dos ranges válidos
Object.entries(STATIC_TOKEN_REFERENCE).forEach(([key, token]) => {
  const parseHSL = (hsl: string) => {
    const [h, s, l] = hsl.split(" ").map((v) => parseFloat(v));
    return { h, s, l };
  };

  const light = parseHSL(token.light);
  const dark = parseHSL(token.dark);

  expect(light.h).toBeGreaterThanOrEqual(0);
  expect(light.h).toBeLessThanOrEqual(360);
  expect(light.s).toBeGreaterThanOrEqual(0);
  expect(light.s).toBeLessThanOrEqual(100);
  expect(light.l).toBeGreaterThanOrEqual(0);
  expect(light.l).toBeLessThanOrEqual(100);
});
```

### Teste 3: Consistência Dark/Light

```typescript
// Teste: Valores light e dark devem ser diferentes (para tokens que mudam)
Object.entries(STATIC_TOKEN_REFERENCE).forEach(([key, token]) => {
  // Ignorar tokens que podem ser iguais em ambos os modos
  if (!["info", "warning"].includes(key)) {
    expect(token.light).not.toBe(token.dark);
  }
});
```

---

## 📊 Critérios de Aceitação Técnicos

| Critério     | Métrica               | Sucesso |
| ------------ | --------------------- | ------- |
| Cobertura    | 15/15 tokens mapeados | = 15    |
| Formato HSL  | % válidos             | 100%    |
| Documentação | Comentários por token | ≥ 1     |
| Build        | npm run build         | 0 erros |

---

## ⚠️ Riscos e Mitigações

| Risco             | Probabilidade | Impacto | Mitigação                                                        |
| ----------------- | ------------- | ------- | ---------------------------------------------------------------- |
| Cálculo incorreto | Média         | Alto    | Validar no Storybook comparando com valores dinâmicos atuais     |
| Token esquecido   | Baixa         | Médio   | Usar grep para listar todos os tokens dinâmicos antes de começar |
| Formato inválido  | Baixa         | Médio   | Usar regex de validação no teste                                 |

---

## 🛠️ Ferramentas Sugeridas

### Para Cálculo de Cores:

1. **ColorKit**: `https://colorkit.io/color-mixer` (mix de cores online)
2. **OKLab Calculator**: Implementação própria se necessário
3. **DevTools do Chrome**: Inspecionar valores reais computados

### Para Validação:

```bash
# Verificar todos os tokens dinâmicos
grep -A 5 "type: 'dynamic'" src/tokens/colors.ts

# Contar tokens dinâmicos
grep -c "type: 'dynamic'" src/tokens/colors.ts
# Deve retornar: 15
```

---

## 📝 Template de Código

```typescript
export const STATIC_TOKEN_REFERENCE = {
  // ============================================
  // SECONDARY TOKENS
  // ============================================
  secondary: {
    variable: "--secondary",
    light: "220 5% 97.5%",
    dark: "222 8% 9.5%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 5%, hsl(var(--background)))",
  },

  "secondary-hover": {
    variable: "--secondary-hover",
    light: "220 15% 92.5%",
    dark: "222 12% 19%",
    originalFormula:
      "color-mix(in oklab, hsl(var(--primary)) 15%, hsl(var(--background)))",
  },

  // ... (repetir para todos os 15 tokens)
};
```

---

## ✅ Checklist de Implementação

- [ ] 1. Extrair lista completa de tokens dinâmicos do colors.ts
- [ ] 2. Calcular valores HSL para cada token (light e dark)
- [ ] 3. Criar arquivo `src/styles/tokens-reference.ts`
- [ ] 4. Implementar interface e constantes
- [ ] 5. Adicionar comentários explicativos
- [ ] 6. Validar formato HSL com regex
- [ ] 7. Verificar ranges (0-360, 0-100, 0-100)
- [ ] 8. Build passa
- [ ] 9. Documentar no PR

---

## 🔄 Handoff para PRD 1.2

Após completar este SPEC:

1. Arquivo `tokens-reference.ts` criado com 15 tokens
2. Valores validados
3. Build passando

**Próximo passo**: Usar valores calculados aqui no SPEC 1.2 para o lytenyte-grid.
