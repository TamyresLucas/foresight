# PRD 2.2 - Atualizar index.css

## 🎯 Objetivo

Substituir as definições dinâmicas no `index.css` pelas definições estáticas do `tokens-static.css`, mantendo a estrutura de dark mode e toda a funcionalidade existente.

## 📋 Contexto

O arquivo `index.css` atual contém definições dinâmicas usando `color-mix()`. Precisamos migrar para valores estáticos pré-calculados.

## 🔧 Alterações Esperadas

### Arquivo Modificado

- `src/index.css`

### Mudanças Específicas

#### 1. Substituir Import (se houver)

```css
/* ANTES (se existir) */
@import "./styles/tokens.css";

/* DEPOIS */
@import "./styles/tokens-static.css";
```

#### 2. Remover color-mix Inline (2 ocorrências)

```css
/* ANTES - Linha ~229 */
border-color: color-mix(
  in oklab,
  hsl(var(--primary)) 20%,
  hsl(var(--background))
);

/* DEPOIS */
border-color: hsl(var(--border));
```

```css
/* ANTES - Linha ~236 */
background-color: color-mix(
  in oklab,
  hsl(var(--primary)) 10%,
  hsl(var(--background))
);

/* DEPOIS */
background-color: hsl(var(--secondary));
```

#### 3. Verificar Outras Ocorrências

Buscar por `color-mix` em todo o arquivo e substituir por variáveis estáticas equivalentes.

### Estratégia de Migração

1. **Preservar estrutura**: Manter imports, camadas e organização
2. **Substituir valores**: Trocar `color-mix()` por `hsl(var(--nome))`
3. **Atualizar comentários**: Remover referências a "dinâmico" se houver

## 🧪 Critérios de Teste/Aceitação

### Teste 1: Build

- [ ] `npm run build` passa sem erros
- [ ] Nenhum warning de CSS

### Teste 2: Storybook

- [ ] Storybook inicia sem erros
- [ ] Nenhum erro no console do navegador

### Teste 3: Tokens Estáticos Aplicados

- [ ] Abrir DevTools → Elements → Computed
- [ ] Verificar que `--secondary`, `--muted`, etc. têm valores HSL
- [ ] Confirmar que NÃO há `color-mix()` nos valores computados

### Teste 4: Dark Mode

- [ ] Adicionar classe `.dark` no HTML
- [ ] Verificar que valores mudam para dark
- [ ] Toggle de tema funciona no Storybook

### Teste 5: Componentes Principais

- [ ] Botões renderizam com cores corretas
- [ ] Cards com fundo `--muted` aparecem corretamente
- [ ] Inputs e borders têm aparência correta

## 📝 Instruções de Teste Passo a Passo

### Passo 1: Backup

```bash
cp src/index.css src/index.css.backup
```

### Passo 2: Substituir Definições

1. Importar `tokens-static.css` no topo (ou substituir import existente)
2. Remover/substituir definições dinâmicas inline

### Passo 3: Buscar color-mix

```bash
grep -n "color-mix" src/index.css
# Substituir todas as ocorrências
```

### Passo 4: Build

```bash
npm run build
```

### Passo 5: Teste Visual

1. Iniciar Storybook: `npm run storybook`
2. Abrir página de cores/tokens
3. Verificar renderização
4. Testar toggle light/dark

### Passo 6: Inspecionar com DevTools

```javascript
// No console do DevTools, verificar variáveis
getComputedStyle(document.documentElement).getPropertyValue("--secondary");
// Deve retornar: "220 10% 97.5%" (ou valor estático calculado)
// NÃO deve conter "color-mix"
```

## ✅ Checklist de Validação

Antes de prosseguir para a PRÓXIMA tarefa:

- [ ] **Backup criado**: `index.css.backup` existe
- [ ] **Import atualizado**: Referência a `tokens-static.css` correta
- [ ] **Sem color-mix**: `grep color-mix src/index.css` retorna vazio
- [ ] **Build passando**: Sem erros de CSS
- [ ] **Storybook funcionando**: Inicia sem erros
- [ ] **Tokens aplicados**: DevTools mostra valores HSL estáticos
- [ ] **Dark mode funciona**: Toggle muda as cores
- [ ] **Componentes ok**: Visualmente idênticos ao anterior

## ⚠️ Notas Importantes

1. **Não quebrar outros imports**: Preservar imports de Tailwind, fontes, etc.
2. **Ordem do CSS**: Tokens devem ser definidos ANTES de serem usados
3. **Fallback**: Se algo quebrar, restaurar do backup
4. **Testar componentes específicos**: Button, Card, Input são críticos

## 🔄 Próxima Tarefa

Após completar esta: **PRD 2.3 - Atualizar lytenyte-grid.css**
