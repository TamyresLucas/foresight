# PRD 3.1 - Desativar Editor de Paleta

## 🎯 Objetivo

Remover a funcionalidade de aplicação dinâmica de cores do `ColorPaletteEditor.tsx` enquanto mantém a UI para visualização.

## 📋 Contexto

O editor atual injeta um `<style id="dynamic-theme-styles">` no DOM para aplicar cores em runtime. Precisamos remover isso mas manter a interface visual.

## 🔧 Alterações Esperadas

### Arquivo Modificado

- `src/stories/ColorPaletteEditor.tsx`

### Mudanças

#### 1. Remover Injeção de Estilo

```typescript
// REMOVER/Comentar código que cria/injeta:
// const styleEl = document.getElementById("dynamic-theme-styles");
// styleEl.textContent = cssRules;
```

#### 2. Manter Estado Local (para visualização)

```typescript
// MANTER: Estado do React para mostrar valores na UI
// REMOVER: Efeitos colaterais que aplicam ao DOM
```

#### 3. Remover Eventos

```typescript
// REMOVER dispatch de CustomEvent:
// new CustomEvent("color-changed", ...)
```

## 🧪 Critérios de Teste/Aceitação

- [ ] **Editor renderiza**: UI aparece no Storybook
- [ ] **Sem injeção**: Não cria tag `<style id="dynamic-theme-styles">`
- [ ] **Valores visíveis**: Mostra valores de cores (somente leitura)
- [ ] **Build**: Sem erros
- [ ] **Funcionalidade preservada**: Inputs de seleção de cor funcionam (mas não aplicam)

## 📝 Instruções de Teste

1. Abrir arquivo `ColorPaletteEditor.tsx`
2. Identificar código de injeção de estilo
3. Comentar/remover injeção
4. Verificar que estado local é mantido para UI
5. Build: `npm run build`
6. Storybook: Abrir ColorPaletteEditor
7. DevTools → Elements: Confirmar que `dynamic-theme-styles` NÃO existe
8. Testar: Mudar cor no editor → tema NÃO deve mudar

## ✅ Checklist

- [ ] Código de injeção removido
- [ ] Evento `color-changed` removido
- [ ] UI ainda funcional
- [ ] Build passando
- [ ] `dynamic-theme-styles` não aparece no DOM
- [ ] Valores de cor ainda visíveis na interface

## 🔄 Próxima Tarefa

**PRD 3.2 - Remover Persistência de Perfis**
