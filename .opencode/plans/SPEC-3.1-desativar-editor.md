# SPEC 3.1 - Especificação Técnica: Desativar Editor de Paleta

## 📋 Informação Geral

- **PRD Referência**: PRD-3.1-desativar-editor.md
- **Complexidade**: Média
- **Tempo Estimado**: 2 horas
- **Dependências**: SPEC 2.3

---

## 🔬 Análise do Código Atual

### Funcionalidades a Desativar

1. **Injeção de Estilo Dinâmico**

   ```typescript
   // Código atual (exemplo aproximado)
   const styleEl =
     document.getElementById("dynamic-theme-styles") ||
     document.createElement("style");
   styleEl.id = "dynamic-theme-styles";
   styleEl.textContent = cssRules; // CSS dinâmico
   document.head.appendChild(styleEl);
   ```

2. **Dispatch de Eventos**

   ```typescript
   window.dispatchEvent(
     new CustomEvent("color-changed", {
       detail: { colors: newColors },
     }),
   );
   ```

3. **Aplicação em Tempo Real**
   - Atualmente altera o DOM diretamente
   - Precisa virar "visualização apenas"

### Funcionalidades a Manter

1. **Estado do React**: Para mostrar valores na UI
2. **Inputs de Cor**: Para visualização (não aplicam)
3. **UI em Geral**: Layout, labels, etc.

---

## 💻 Especificação Técnica

### Passo 1: Identificar Código de Injeção

```typescript
// Em src/stories/ColorPaletteEditor.tsx
// Buscar por padrões:

// Padrão 1: getElementById("dynamic-theme-styles")
// Padrão 2: createElement("style")
// Padrão 3: document.head.appendChild
// Padrão 4: styleEl.textContent
```

### Passo 2: Comentar/Remover Injeção

#### Opção A: Comentar (recomendado para teste)

```typescript
// REMOVER ou COMENTAR:
/*
const styleEl = document.getElementById("dynamic-theme-styles");
if (!styleEl) {
  const newStyle = document.createElement("style");
  newStyle.id = "dynamic-theme-styles";
  document.head.appendChild(newStyle);
}
styleEl.textContent = generatedCSS;
*/
```

#### Opção B: Substituir por Log (para debug)

```typescript
// SUBSTITUIR por:
console.log("[ColorPaletteEditor] Styles would be applied:", generatedCSS);
// Não injetar no DOM
```

### Passo 3: Remover Eventos

```typescript
// REMOVER:
/*
window.dispatchEvent(new CustomEvent("color-changed", {
  detail: { hslColors, product }
}));
*/

// Se necessário, substituir por log:
console.log("[ColorPaletteEditor] Color change event (disabled):", {
  hslColors,
  product,
});
```

### Passo 4: Atualizar Interface (Opcional)

Se houver botão "Aplicar" ou similar:

```typescript
// Opcional: Desabilitar ou mudar label
<button
  disabled  // Desabilitar
  // OU
  onClick={() => alert("Aplicação de cores dinâmicas desativada")}
>
  Aplicar (Desativado)
</button>
```

Ou simplesmente remover o botão:

```typescript
// REMOVER botão de aplicar se existir
```

### Passo 5: Manter Estado para Visualização

```typescript
// MANTER: Estado React
const [colors, setColors] = useState({
  primary: '220 100% 50%',
  // ...
});

// MANTER: Renderização dos inputs
<input
  type="color"
  value={hslToHex(colors.primary)}
  onChange={(e) => {
    // Atualizar estado local APENAS (não aplicar)
    setColors({ ...colors, primary: hexToHsl(e.target.value) });
  }}
/>

// MANTER: Exibição dos valores
<div>Primary: {colors.primary}</div>
```

---

## 🧪 Casos de Teste

### Teste 1: Não Cria dynamic-theme-styles

```javascript
// No DevTools Elements:
// 1. Abrir ColorPaletteEditor no Storybook
// 2. Inspecionar <head>
// 3. Verificar que NÃO há tag <style id="dynamic-theme-styles">

const styleEl = document.getElementById("dynamic-theme-styles");
console.log("Dynamic styles element:", styleEl); // Deve ser null
```

### Teste 2: Evento Não É Disparado

```javascript
// Adicionar listener para verificar
window.addEventListener("color-changed", (e) => {
  console.log("Event received:", e);
});

// Mudar uma cor no editor
// Verificar que evento NÃO foi disparado
```

### Teste 3: UI Ainda Funciona

```bash
# No Storybook:
# 1. Abrir ColorPaletteEditor
# 2. Verificar que inputs de cor aparecem
# 3. Mudar valor de um input
# 4. Verificar que valor na UI muda
# 5. Verificar que tema NÃO muda (cores dos componentes ao redor)
```

### Teste 4: Build

```bash
npm run build
# Deve passar sem erros
```

### Teste 5: Console

```bash
# Abrir console do navegador
# Verificar que não há erros
# Opcional: ver logs de debug se adicionados
```

---

## 📊 Checklist de Validação

- [ ] Código de injeção identificado
- [ ] Injeção de estilo removida/comentada
- [ ] Dispatch de evento removido
- [ ] `dynamic-theme-styles` não aparece no DOM
- [ ] Evento `color-changed` não é disparado
- [ ] UI do editor ainda renderiza
- [ ] Inputs de cor ainda funcionam (estado local)
- [ ] Valores de cor ainda são exibidos
- [ ] Tema não muda ao alterar cores no editor
- [ ] Build passa
- [ ] Storybook inicia sem erros

---

## ⚠️ Riscos e Mitigações

| Risco               | Probabilidade | Impacto | Mitigação                                   |
| ------------------- | ------------- | ------- | ------------------------------------------- |
| Componente quebra   | Baixa         | Alto    | Manter estado React intacto                 |
| Erros de TypeScript | Baixa         | Médio   | Verificar tipos após remoção                |
| UX confusa          | Média         | Médio   | Adicionar label "(Visualização)" ou similar |

---

## ✅ Handoff para SPEC 3.2

**Entregáveis:**

1. ColorPaletteEditor sem injeção de estilos
2. Evento color-changed removido
3. UI funcional como display-only
4. Build passando

**Próximo passo**: Remover persistência de perfis.
