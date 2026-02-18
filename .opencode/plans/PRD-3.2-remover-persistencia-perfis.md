# PRD 3.2 - Remover Persistência de Perfis

## 🎯 Objetivo

Remover toda a lógica de múltiplos perfis de produto (Voxco, Ascribe, Discuss) e manter apenas um tema padrão único.

## 📋 Contexto

O sistema atual suporta múltiplos perfis salvos no localStorage. Vamos simplificar para um único tema.

## 🔧 Alterações Esperadas

### Arquivo Modificado

- `src/stories/ColorPaletteEditor.tsx`

### Remover

1. **Chaves de localStorage**
   - `global-colors-shared`
   - `global-colors-Voxco`
   - `global-colors-Ascribe`
   - `global-colors-Discuss`

2. **Tipo Product**

   ```typescript
   // REMOVER: type Product = 'Voxco' | 'Ascribe' | 'Discuss'
   ```

3. **Estado de Produto Selecionado**

   ```typescript
   // REMOVER: Estado que controla qual produto está ativo
   // Simplificar para tema único
   ```

4. **UI de Seleção de Produto**
   ```typescript
   // REMOVER: Dropdown, tabs ou botões de seleção de produto
   ```

### Manter

- Visualização das cores atuais
- Estado local para demonstração

## 🧪 Critérios de Teste/Aceitação

- [ ] **Sem localStorage**: Não salva nem lê `global-colors-*`
- [ ] **Sem seleção**: UI não tem opção de trocar produto
- [ ] **Tema único**: Apenas um conjunto de cores mostrado
- [ ] **Build**: Sem erros
- [ ] **Visual**: Editor mostra tema padrão

## 📝 Instruções de Teste

1. Remover tipo `Product` e estados relacionados
2. Remover funções de load/save de localStorage
3. Remover UI de seleção de produto
4. Simplificar para mostrar apenas cores do tema padrão
5. Build: `npm run build`
6. Storybook: Abrir editor → deve mostrar apenas um tema
7. DevTools → Application → LocalStorage: confirmar que não salva `global-colors-*`

## ✅ Checklist

- [ ] Tipo `Product` removido
- [ ] localStorage `global-colors-*` removido
- [ ] UI de seleção de produto removida
- [ ] Build passando
- [ ] Editor mostra tema único
- [ ] Sem erros no console

## 🔄 Próxima Tarefa

**PRD 4.1 - Remover ColorExportButton**
