# PRD 2.3 - Atualizar lytenyte-grid.css

## 🎯 Objetivo

Substituir os 7 usos de `color-mix()` no `lytenyte-grid.css` por valores HSL estáticos usando as variáveis definidas em `tokens-static.css`.

## 📋 Contexto

O componente lytenyte-grid usa `color-mix()` inline. Agora que temos valores estáticos calculados, podemos substituir por variáveis CSS.

## 🔧 Alterações Esperadas

### Arquivo Modificado

- `src/components/lytenyte-grid/lytenyte-grid.css`

### Substituições

| Linha | ANTES                                                                  | DEPOIS                             |
| ----- | ---------------------------------------------------------------------- | ---------------------------------- |
| 5     | `color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))` | `hsl(var(--lng1771-row-selected))` |
| 12    | `color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))` | `hsl(var(--lng1771-gray-20))`      |
| 41    | `color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)))` | `hsl(var(--lng1771-row-bg))`       |
| 48    | `color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)))` | `hsl(var(--lng1771-row-bg))`       |
| 53    | `color-mix(in oklab, hsl(var(--primary)) 10%, hsl(var(--background)))` | `hsl(var(--lng1771-row-bg))`       |
| 74    | `color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))` | `hsl(var(--lng1771-row-selected))` |
| 91    | `color-mix(in oklab, hsl(var(--primary)) 20%, hsl(var(--background)))` | `hsl(var(--lng1771-row-selected))` |

## 🧪 Critérios de Teste/Aceitação

- [ ] **7 substituições**: Todas as ocorrências de `color-mix` removidas
- [ ] **Variáveis novas**: Usando `--lng1771-*` do tokens-static.css
- [ ] **Build**: Sem erros
- [ ] **Grid visual**: Componente renderiza identicamente
- [ ] **Dark mode**: Grid funciona em ambos os modos

## 📝 Instruções de Teste

1. Backup do arquivo
2. Substituir cada ocorrência conforme tabela
3. Verificar: `grep -c "color-mix" src/components/lytenyte-grid/lytenyte-grid.css` = 0
4. Build: `npm run build`
5. Storybook: Testar componente lytenyte-grid
6. DevTools: Inspecionar cores das rows

## ✅ Checklist

- [ ] Backup criado
- [ ] 7 substituições feitas
- [ ] `color-mix` removido completamente
- [ ] Build passando
- [ ] Grid funcional no Storybook
- [ ] Dark mode testado

## 🔄 Próxima Tarefa

**PRD 3.1 - Desativar Editor de Paleta**
