# Índice de PRDs - Remoção da Paleta Dinâmica

## 📋 Sumário Executivo

Este diretório contém 11 PRDs (Product Requirement Documents) detalhando a remoção completa da feature de paleta dinâmica do design system.

**Objetivo**: Converter tokens dinâmicos (`color-mix`) para estáticos, remover perfis de produto (Voxco/Ascribe/Discuss), e manter apenas um tema unificado com suporte a dark mode.

---

## 📚 Documentação Relacionada

- **[PRDs](README.md)** (você está aqui) - Requisitos e planejamento
- **[SPECs](SPECS-INDEX.md)** - Especificações técnicas de implementação
- **Relação**: Cada PRD tem um SPEC correspondente com detalhes técnicos

---

## 🗂️ Estrutura dos PRDs

### **Fase 1: Preparação** (2 PRDs)

#### [PRD 1.1](PRD-1.1-converter-tokens-dinamicos.md) - Converter Tokens Dinâmicos para Estáticos

- **Status**: PENDENTE
- **Arquivo**: Novo `src/styles/tokens-reference.ts`
- **Entrega**: 15 tokens dinâmicos mapeados com valores HSL light/dark calculados
- **Próximo**: PRD 1.2

#### [PRD 1.2](PRD-1.2-analisar-lytenyte-grid.md) - Analisar lytenyte-grid.css

- **Status**: PENDENTE
- **Arquivo**: `src/components/lytenyte-grid/lytenyte-grid.css`
- **Entrega**: 7 ocorrências de color-mix documentadas e calculadas
- **Próximo**: PRD 2.1

---

### **Fase 2: Implementação de CSS Estático** (3 PRDs)

#### [PRD 2.1](PRD-2.1-criar-css-estatico.md) - Criar CSS Estático Unificado

- **Status**: PENDENTE
- **Arquivo**: Novo `src/styles/tokens-static.css`
- **Entrega**: CSS com todas as variáveis em :root e .dark
- **Próximo**: PRD 2.2

#### [PRD 2.2](PRD-2.2-atualizar-index-css.md) - Atualizar index.css

- **Status**: PENDENTE
- **Arquivo**: `src/index.css`
- **Entrega**: CSS usando valores estáticos, sem color-mix
- **Próximo**: PRD 2.3

#### [PRD 2.3](PRD-2.3-atualizar-lytenyte-grid.md) - Atualizar lytenyte-grid.css

- **Status**: PENDENTE
- **Arquivo**: `src/components/lytenyte-grid/lytenyte-grid.css`
- **Entrega**: 7 substituições de color-mix para variáveis estáticas
- **Próximo**: PRD 3.1

---

### **Fase 3: Remoção de Funcionalidade Dinâmica** (2 PRDs)

#### [PRD 3.1](PRD-3.1-desativar-editor.md) - Desativar Editor de Paleta

- **Status**: PENDENTE
- **Arquivo**: `src/stories/ColorPaletteEditor.tsx`
- **Entrega**: Editor como display-only (sem injeção de estilos)
- **Próximo**: PRD 3.2

#### [PRD 3.2](PRD-3.2-remover-persistencia-perfis.md) - Remover Persistência de Perfis

- **Status**: PENDENTE
- **Arquivo**: `src/stories/ColorPaletteEditor.tsx`
- **Entrega**: localStorage limpo, apenas um tema padrão
- **Próximo**: PRD 4.1

---

### **Fase 4: Limpeza de Stories** (5 subtarefas em 1 PRD)

#### [PRD 4](PRD-4-limpeza-stories.md) - Limpeza de Stories

- **Status**: PENDENTE
- **Arquivos**:
  - 4.1: `ColorExportButton.tsx`
  - 4.2: `TokenUsageTable.tsx`
  - 4.3: `DynamicColorPalette.tsx`
  - 4.4: `ColorPaletteEditor.tsx` (simplificado)
  - 4.5: `ColorPalette.stories.tsx`
- **Entrega**: Stories desnecessários removidos
- **Próximo**: PRD 5.1

---

### **Fase 5: Remoção Core** (3 subtarefas em 1 PRD)

#### [PRD 5](PRD-5-remocao-core.md) - Remoção Core

- **Status**: PENDENTE
- **Arquivos**:
  - 5.1: `src/index.ts` (remover export)
  - 5.2: `src/tokens/` (deletar pasta)
  - 5.3: `src/lib/color-utils.ts` (deletar)
- **Entrega**: Código core removido, builds passando
- **Próximo**: PRD 6.1

---

### **Fase 6: Validação Final** (4 subtarefas em 1 PRD)

#### [PRD 6](PRD-6-validacao-final.md) - Validação Final

- **Status**: PENDENTE
- **Entregas**:
  - 6.1: Dark mode funcional
  - 6.2: Regressão visual validada
  - 6.3: localStorage documentado
  - 6.4: Breaking changes documentados
- **Próximo**: 🎉 PROJETO COMPLETO

---

## 🚀 Fluxo de Execução

```
PRD 1.1 → PRD 1.2 → PRD 2.1 → PRD 2.2 → PRD 2.3 →
PRD 3.1 → PRD 3.2 → PRD 4.x → PRD 5.x → PRD 6.x → ✅
```

**Regras Importantes**:

1. **Executar em ordem**: Cada PRD deve ser completado antes do próximo
2. **Testar antes de prosseguir**: Cada PRD tem checklist de validação
3. **Build entre passos**: Sempre rodar `npm run build` após cada PRD
4. **Commits**: Fazer commit após cada PRD bem-sucedido

---

## 📊 Checklist Mestre

### Progresso

- [ ] Fase 1: Preparação (0/2)
- [ ] Fase 2: CSS Estático (0/3)
- [ ] Fase 3: Remoção Dinâmica (0/2)
- [ ] Fase 4: Limpeza Stories (0/5)
- [ ] Fase 5: Remoção Core (0/3)
- [ ] Fase 6: Validação (0/4)

**Progresso Total**: 0/19 subtarefas

---

## 🎯 Critérios de Sucesso do Projeto

Ao final de todos os PRDs:

- ✅ Zero ocorrências de `color-mix` no codebase
- ✅ Todos os tokens são estáticos (valores HSL fixos)
- ✅ Dark mode funciona perfeitamente
- ✅ Apenas um tema (sem Voxco/Ascribe/Discuss)
- ✅ `src/tokens/` removido completamente
- ✅ `src/lib/color-utils.ts` removido
- ✅ Builds passando (npm run build)
- ✅ Storybook funcional
- ✅ Documentação de breaking changes completa

---

## 🆘 Troubleshooting

### Se um build falhar:

1. Verificar qual foi o último PRD completado
2. Revisar o checklist desse PRD
3. Verificar se há imports quebrados: `grep -r "from.*tokens" src/`
4. Restaurar do backup se necessário

### Se o dark mode parar de funcionar:

1. Verificar `tokens-static.css` tem seção `.dark`
2. Verificar `index.css` está importando CSS correto
3. Verificar classe `.dark` está sendo aplicada no HTML

### Se Storybook não iniciar:

1. Verificar se todos os imports em stories estão válidos
2. Verificar se arquivos deletados não têm imports restantes
3. Limpar cache: `rm -rf node_modules/.cache`

---

## 📞 Contato

Para dúvidas ou problemas durante a execução:

- Revisar o PRD específico com atenção
- Verificar exemplos de código nos PRDs
- Consultar o arquivo original antes de modificações

---

**Última atualização**: 2026-02-18
**Versão**: 1.0
