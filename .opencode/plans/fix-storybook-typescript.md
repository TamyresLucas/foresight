# Plano de Correção: Erros TypeScript Storybook

**Status**: Pronto para execução  
**Autorizado por**: usuário

## Arquivos a serem corrigidos

### 1. calendar.tsx

- [x] Mesclar propriedades dropdown duplicadas
- [x] Mesclar propriedades caption_label duplicadas
- [x] Corrigir uso de className para chevronClass

### 2. LyteNyteGrid.stories.tsx

- [ ] Remover imports não utilizados de DropdownMenu
- [ ] Remover import não utilizado de Button
- [ ] Mover import de TableRowActions para o topo

### 3. EmptyState.stories.tsx

- [ ] Remover 'Story' do import duplicado
- [ ] Remover tipagem any

### 4. ToolboxItem.stories.tsx

- [ ] Remover imports de ícones não utilizados
- [ ] Adicionar tipagem a sampleToolboxItems

### 5. Command.stories.tsx

- [ ] Remover imports não utilizados de Dialog

### 6. ColorPaletteEditor.tsx

- [ ] Adicionar verificação de segurança em split

### 7. DarkModeStressTest.tsx

- [ ] Remover imports não utilizados
- [ ] Remover variável EXPECTED_TOKENS

### 8. toolbox-items.ts

- [ ] Remover ReactElement do import
- [ ] Remover imports duplicados

### 9. Avatar.stories.tsx

- [ ] Renomear args para \_args

### 10. chart.tsx

- [ ] Remover função getCSSVariable não utilizada

## Critérios de sucesso

- [ ] npm run type-check passa sem erros
- [ ] Storybook inicia e permanece acessível
