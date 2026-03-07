# PRD 1.1 - Converter Tokens Dinâmicos para Estáticos

## 🎯 Objetivo

Extrair e converter todos os 15 tokens dinâmicos (que usam `color-mix()`) para valores HSL estáticos pré-calculados com suporte a light/dark mode.

## 📋 Contexto

Atualmente existem tokens dinâmicos no arquivo `src/tokens/colors.ts` que calculam cores em runtime via `color-mix()`. Estes precisam ser convertidos para valores HSL estáticos para remover a dependência de cálculo dinâmico.

## 🔧 Alterações Esperadas

### Arquivos Modificados

- **Novo arquivo**: `src/styles/tokens-reference.ts` (arquivo de referência temporário)

### Tokens a Converter (15 tokens dinâmicos)

| Token                      | Fórmula Atual                                                              | Valor Light Estático                                                             | Valor Dark Estático                                                                |
| -------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `--secondary`              | `color-mix(in oklab, hsl(var(--primary)) 5%, hsl(var(--background)))`      | Calcular baseado em: primary light (220 100% 50%) + background light (0 0% 100%) | Calcular baseado em: primary dark (210 40% 98%) + background dark (222.2 84% 4.9%) |
| `--secondary-hover`        | `color-mix(in oklab, hsl(var(--primary)) 15%, hsl(var(--background)))`     | Calcular                                                                         | Calcular                                                                           |
| `--muted`                  | `color-mix(in oklab, hsl(var(--primary)) 5%, hsl(var(--background)))`      | Calcular                                                                         | Calcular                                                                           |
| `--muted-foreground`       | `color-mix(in oklab, hsl(var(--primary)) 30%, hsl(var(--foreground)))`     | Calcular                                                                         | Calcular                                                                           |
| `--disabled-foreground`    | `color-mix(in oklab, hsl(var(--primary)) 40%, hsl(var(--background)))`     | Calcular                                                                         | Calcular                                                                           |
| `--accent`                 | `color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)))`     | Calcular                                                                         | Calcular                                                                           |
| `--background-destructive` | `color-mix(in oklab, hsl(var(--destructive)) 10%, hsl(var(--background)))` | Calcular                                                                         | Calcular                                                                           |
| `--border-destructive`     | `color-mix(in oklab, hsl(var(--destructive)) 50%, hsl(var(--background)))` | Calcular                                                                         | Calcular                                                                           |
| `--background-success`     | `color-mix(in oklab, hsl(var(--success)) 10%, hsl(var(--background)))`     | Calcular                                                                         | Calcular                                                                           |
| `--border-success`         | `color-mix(in oklab, hsl(var(--success)) 50%, hsl(var(--background)))`     | Calcular                                                                         | Calcular                                                                           |
| `--background-warning`     | `color-mix(in oklab, hsl(var(--warning)) 10%, hsl(var(--background)))`     | Calcular                                                                         | Calcular                                                                           |
| `--border-warning`         | `color-mix(in oklab, hsl(var(--warning)) 50%, hsl(var(--background)))`     | Calcular                                                                         | Calcular                                                                           |
| `--background-info`        | `color-mix(in oklab, hsl(var(--info)) 10%, hsl(var(--background)))`        | Calcular                                                                         | Calcular                                                                           |
| `--border-info`            | `color-mix(in oklab, hsl(var(--info)) 50%, hsl(var(--background)))`        | Calcular                                                                         | Calcular                                                                           |
| `--border` / `--input`     | Fórmula aninhada complexa                                                  | Calcular                                                                         | Calcular                                                                           |

### Formato do Arquivo de Referência

```typescript
// src/styles/tokens-reference.ts
export const STATIC_TOKENS = {
  secondary: {
    variable: "--secondary",
    light: "220 50% 97.5%", // Valor calculado
    dark: "210 40% 20%", // Valor calculado
  },
  // ... outros tokens
} as const;
```

## 🧪 Critérios de Teste/Aceitação

### Teste 1: Valores Calculados Corretamente

- [ ] Todos os 15 tokens dinâmicos estão mapeados
- [ ] Cada token tem valores light e dark calculados
- [ ] Valores estão no formato HSL correto (hue saturation% lightness%)

### Teste 2: Validação Visual (Manual)

- [ ] Comparar valores calculados com renderização atual do Storybook
- [ ] Abrir ColorPaletteEditor e anotar valores RGB computados
- [ ] Verificar se valores estáticos correspondem aos dinâmicos

### Teste 3: Documentação Completa

- [ ] Arquivo `tokens-reference.ts` criado
- [ ] Todos os tokens documentados com comentários
- [ ] Fórmula original preservada em comentário para referência

## 📝 Instruções de Teste Passo a Passo

### Passo 1: Verificar Tokens no Código Fonte

```bash
# Listar todos os tokens dinâmicos
grep -n "type: 'dynamic'" src/tokens/colors.ts
```

### Passo 2: Calcular Valores

Para cada token dinâmico:

1. Identificar as cores base (ex: primary, background)
2. Pegar valores HSL das cores base em modo light e dark
3. Aplicar a porcentagem do color-mix
4. Calcular valor HSL resultante

**Exemplo de cálculo:**

```
--secondary: color-mix(in oklab, hsl(var(--primary)) 5%, hsl(var(--background)))

Light mode:
- primary: 220 100% 50%
- background: 0 0% 100%
- mix: 5% primary + 95% background
- resultado: 220 10% 97.5%

Dark mode:
- primary: 210 40% 98%
- background: 222.2 84% 4.9%
- mix: 5% primary + 95% background
- resultado: ~222 80% 10%
```

### Passo 3: Validar no Browser

1. Iniciar Storybook: `npm run storybook`
2. Abrir ColorPaletteEditor
3. Anotar valores RGB mostrados para cada token dinâmico
4. Converter RGB para HSL
5. Comparar com valores calculados no arquivo

### Passo 4: Build

```bash
npm run build
```

## ✅ Checklist de Validação

Antes de prosseguir para a PRÓXIMA tarefa:

- [ ] **Arquivo criado**: `src/styles/tokens-reference.ts` existe
- [ ] **Todos tokens mapeados**: 15 tokens dinâmicos documentados
- [ ] **Valores calculados**: Cada token tem light e dark values
- [ ] **Build passando**: `npm run build` sem erros
- [ ] **Revisão de código**: Valores revisados por outro dev (ou auto-revisão cuidadosa)
- [ ] **Documentação**: Comentários explicativos adicionados

## ⚠️ Notas Importantes

1. **Preservar Dark Mode**: Cada token DEVE ter valores distintos para light e dark
2. **Formato HSL**: Manter formato `H S% L%` (ex: `220 100% 50%`)
3. **Não modificar outros arquivos ainda**: Esta tarefa é apenas documentação/cálculo
4. **Fórmulas complexas**: Tokens `--border` e `--input` têm fórmulas aninhadas - requerem cálculo mais cuidadoso

## 🔄 Próxima Tarefa

Após completar esta: **PRD 1.2 - Analisar lytenyte-grid.css**
