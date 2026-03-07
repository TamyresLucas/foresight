# Índice de SPECs - Remoção da Paleta Dinâmica

## 📋 Sobre os SPECs

Esta pasta contém **Especificações Técnicas (SPECs)** detalhadas para implementação do plano de remoção da paleta dinâmica. Cada SPEC complementa seu respectivo PRD com detalhes técnicos, exemplos de código e casos de teste.

---

## 🗂️ Estrutura dos SPECs

### **Fase 1: Preparação**

#### [SPEC 1.1](SPEC-1.1-converter-tokens.md) - Converter Tokens Dinâmicos

- **Foco**: Mapear 15 tokens dinâmicos com valores HSL calculados
- **Entrega**: `src/styles/tokens-reference.ts`
- **Cálculos**: Fórmulas de mix OKLab → HSL estático
- **Templates**: Interface TypeScript completa

#### [SPEC 1.2](SPEC-1.2-analisar-lytenyte-grid.md) - Analisar lytenyte-grid.css

- **Foco**: Documentar 7 ocorrências de color-mix no grid
- **Entrega**: Valores calculados para tokens do grid
- **Mapeamento**: Linha, seletor, fórmula, valor estático

---

### **Fase 2: Implementação CSS**

#### [SPEC 2.1](SPEC-2.1-criar-css-estatico.md) - Criar CSS Estático

- **Foco**: Criar `tokens-static.css` completo
- **Entrega**: ~38 variáveis CSS (light + dark)
- **Template**: Arquivo CSS com comentários
- **Organização**: Base, Primary, Secondary, Semantic, Grid tokens

#### [SPEC 2.2](SPEC-2.2-atualizar-index-css.md) - Atualizar index.css

- **Foco**: Integrar CSS estático e remover color-mix
- **Entrega**: index.css atualizado
- **Substituições**: 2 ocorrências de color-mix → variáveis estáticas
- **Testes**: Validação de tokens via DevTools

#### [SPEC 2.3](SPEC-2.3-atualizar-lytenyte-grid.md) - Atualizar Grid CSS

- **Foco**: Substituir 7 ocorrências de color-mix
- **Entrega**: `lytenyte-grid.css` estático
- **Mapeamento**: Tabela completa de substituições
- **Preservação**: Manter !important onde existia

---

### **Fase 3: Remoção de Funcionalidade**

#### [SPEC 3.1](SPEC-3.1-desativar-editor.md) - Desativar Editor

- **Foco**: Remover injeção dinâmica de estilos
- **Entrega**: ColorPaletteEditor como display-only
- **Remoções**: style injection, event dispatch
- **Preservação**: Estado React, UI, inputs

#### [SPEC 3.2](SPEC-3.2-remover-persistencia-perfis.md) - Remover Perfis

- **Foco**: Simplificar para um tema único
- **Entrega**: Editor sem Voxco/Ascribe/Discuss
- **Remoções**: localStorage, tipo Product, UI de seleção
- **Documentação**: Guia de limpeza de localStorage

---

### **Fase 4: Limpeza**

#### [SPEC 4.x](SPEC-4-limpeza-stories.md) - Limpeza de Stories

- **Foco**: Deletar componentes de stories obsoletos
- **Arquivos**: 4 deletados + 1 simplificado
- **Lista**: ColorExportButton, TokenUsageTable, DynamicColorPalette, ColorPalette.stories
- **Verificação**: Sem imports quebrados

---

### **Fase 5: Remoção Core**

#### [SPEC 5.x](SPEC-5-remocao-core.md) - Remoção Core

- **⚠️ Ordem crítica**: Exports → Tokens → color-utils
- **Arquivos deletados**:
  - `src/tokens/` (pasta completa)
  - `src/lib/color-utils.ts`
- **Modificações**: `src/index.ts` (remover exports)
- **Pré-verificação**: grep para garantir sem dependências

---

### **Fase 6: Validação**

#### [SPEC 6.x](SPEC-6-validacao-final.md) - Validação Final

- **Foco**: Testes finais e documentação
- **Testes**: Dark mode, regressão visual, componentes
- **Documentação**:
  - BREAKING_CHANGES.md
  - LOCALSTORAGE_CLEANUP.md
- **Checklist**: 20+ itens de validação

---

## 🚀 Ordem de Execução

```
SPEC 1.1 → SPEC 1.2 → SPEC 2.1 → SPEC 2.2 → SPEC 2.3 →
SPEC 3.1 → SPEC 3.2 → SPEC 4.x → SPEC 5.x → SPEC 6.x → ✅
```

**Total**: 11 SPECs

---

## 📊 Comparação PRD vs SPEC

| Aspecto      | PRD                                | SPEC                            |
| ------------ | ---------------------------------- | ------------------------------- |
| **Foco**     | O que fazer                        | Como fazer tecnicamente         |
| **Público**  | Stakeholders, PMs                  | Desenvolvedores                 |
| **Conteúdo** | Requisitos, critérios de aceitação | Código, comandos, exemplos      |
| **Detalhe**  | Alto nível                         | Implementação detalhada         |
| **Testes**   | O que testar                       | Como testar (comandos, scripts) |

---

## 🎯 Como Usar

### Para Desenvolvedores:

1. **Leia o PRD primeiro**: Entenda o objetivo geral
2. **Depois o SPEC**: Veja como implementar
3. **Siga a ordem**: Não pule etapas
4. **Execute testes**: Cada SPEC tem sua checklist

### Exemplo de Uso:

```bash
# 1. Ler PRD para contexto
cat PRD-1.1-converter-tokens-dinamicos.md

# 2. Ler SPEC para implementação
cat SPEC-1.1-converter-tokens.md

# 3. Implementar seguindo o SPEC
# ... código ...

# 4. Validar usando checklist do SPEC
# ... testes ...

# 5. Prosseguir para PRD/SPEC 1.2
```

---

## 📁 Arquivos Relacionados

### PRDs (Requisitos)

- `PRD-1.1-converter-tokens-dinamicos.md`
- `PRD-1.2-analisar-lytenyte-grid.md`
- `PRD-2.1-criar-css-estatico.md`
- ... (11 PRDs no total)

### SPECs (Implementação)

- `SPEC-1.1-converter-tokens.md`
- `SPEC-1.2-analisar-lytenyte-grid.md`
- `SPEC-2.1-criar-css-estatico.md`
- ... (11 SPECs no total)

### Índices

- `README.md` (este arquivo) - Índice de SPECs
- `../README.md` - Índice mestre de PRDs

---

## ⚠️ Notas Importantes

1. **Não pule SPECs**: Cada um é dependência do próximo
2. **Valide antes de prosseguir**: Use a checklist de cada SPEC
3. **Build entre passos**: Sempre rode `npm run build`
4. **Git commits**: Commit após cada SPEC bem-sucedido
5. **Ordem no SPEC 5.x é CRÍTICA**: Exports antes de deletar arquivos

---

## 🆘 Troubleshooting

### "Module not found"

- **Causa**: Deletou arquivo antes de remover imports
- **Solução**: Restaurar arquivo, remover imports, tentar novamente
- **Prevenção**: Sempre siga a ordem dos SPECs

### Erros de build

- **Causa**: Dependência de SPEC anterior incompleta
- **Solução**: Voltar ao SPEC anterior, completar checklist
- **Verificação**: `npm run build` em cada SPEC

### Dúvidas sobre valores

- **Referência**: Consulte SPEC 1.1 e 1.2 para valores calculados
- **Validação**: Use ColorPaletteEditor no Storybook para comparar

---

## ✅ Progresso

### Fases:

- [ ] Fase 1: Preparação (SPEC 1.1, 1.2)
- [ ] Fase 2: CSS Estático (SPEC 2.1, 2.2, 2.3)
- [ ] Fase 3: Remoção Funcionalidade (SPEC 3.1, 3.2)
- [ ] Fase 4: Limpeza (SPEC 4.x)
- [ ] Fase 5: Remoção Core (SPEC 5.x)
- [ ] Fase 6: Validação (SPEC 6.x)

### Estatísticas:

- **Total de SPECs**: 11
- **Tempo estimado**: 18-25 horas
- **Arquivos afetados**: ~15
- **Arquivos deletados**: ~12

---

## 🎉 Resultado Esperado

Ao completar todos os SPECs:

✅ Zero `color-mix()` no codebase  
✅ Tokens 100% estáticos  
✅ Dark mode funcional  
✅ Um tema único  
✅ Build passando  
✅ Storybook funcional  
✅ Documentação completa

---

**Última atualização**: 2026-02-18  
**Versão**: 1.0  
**Status**: Pronto para implementação
