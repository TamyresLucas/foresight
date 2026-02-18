# PRD 4.1 a 4.5 - Limpeza de Stories

## 🎯 Objetivo Geral

Remover todos os componentes de stories relacionados à paleta dinâmica que não são mais necessários.

## 📋 Tarefas Detalhadas

### PRD 4.1 - Remover ColorExportButton

**Arquivo**: `src/stories/ColorExportButton.tsx`

**Ações**:

- Deletar arquivo
- Remover imports onde for usado

**Testes**:

- [ ] Arquivo deletado
- [ ] Storybook inicia sem erros
- [ ] Nenhum import quebrado

---

### PRD 4.2 - Remover TokenUsageTable

**Arquivo**: `src/stories/TokenUsageTable.tsx`

**Ações**:

- Deletar arquivo
- Remover imports

**Testes**:

- [ ] Arquivo deletado
- [ ] Storybook inicia sem erros

---

### PRD 4.3 - Remover DynamicColorPalette

**Arquivo**: `src/stories/DynamicColorPalette.tsx`

**Ações**:

- Deletar arquivo
- Remover imports

**Testes**:

- [ ] Arquivo deletado
- [ ] Storybook inicia sem erros

---

### PRD 4.4 - Simplificar ColorPaletteEditor

**Arquivo**: `src/stories/ColorPaletteEditor.tsx`

**Ações**:

- Remover funcionalidades de edição
- Manter apenas visualização de tokens estáticos
- Transformar em componente de display apenas

**Testes**:

- [ ] Editor mostra tokens estáticos
- [ ] Não permite edição
- [ ] Storybook inicia sem erros

---

### PRD 4.5 - Remover ColorPalette.stories.tsx

**Arquivo**: `src/stories/ColorPalette.stories.tsx`

**Ações**:

- Deletar arquivo
- Ou atualizar para usar versão simplificada do editor

**Testes**:

- [ ] Arquivo deletado/atualizado
- [ ] Storybook inicia sem erros

---

## 🧪 Critérios de Teste/Aceitação Gerais

### Após Cada Subtarefa:

- [ ] Arquivo(s) deletado(s) ou modificado(s)
- [ ] `npm run build` passa
- [ ] Storybook inicia sem erros
- [ ] Nenhum erro no console do navegador

### Após Toda a Fase 4:

- [ ] Pasta `src/stories/` contém apenas stories necessários
- [ ] Nenhuma referência a tokens dinâmicos nos stories
- [ ] Nenhum import quebrado
- [ ] Build passa

## 📝 Instruções de Execução

### Passo a Passo por Subtarefa:

1. **Backup** (opcional): `cp arquivo.tsx arquivo.tsx.backup`
2. **Deletar** arquivo ou **modificar**
3. **Buscar imports**: `grep -r "ColorExportButton" src/`
4. **Remover imports** encontrados
5. **Build**: `npm run build`
6. **Storybook**: `npm run storybook` → verificar iniciação
7. **Repetir** para próxima subtarefa

## ✅ Checklist Final da Fase 4

- [ ] PRD 4.1: ColorExportButton removido
- [ ] PRD 4.2: TokenUsageTable removido
- [ ] PRD 4.3: DynamicColorPalette removido
- [ ] PRD 4.4: ColorPaletteEditor simplificado
- [ ] PRD 4.5: ColorPalette.stories.tsx removido/atualizado
- [ ] Build passando
- [ ] Storybook funcional
- [ ] Sem imports quebrados

## 🔄 Próxima Tarefa

**PRD 5.1 - Remover color-utils da API pública**
