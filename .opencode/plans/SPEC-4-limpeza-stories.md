# SPEC 4.x - Especificação Técnica: Limpeza de Stories

## 📋 Informação Geral

- **PRD Referência**: PRD-4-limpeza-stories.md
- **Complexidade**: Baixa
- **Tempo Estimado**: 2-3 horas
- **Dependências**: SPEC 3.2

---

## 🔬 Lista de Arquivos a Remover

### Arquivos Principais

1. `src/stories/ColorExportButton.tsx`
2. `src/stories/TokenUsageTable.tsx`
3. `src/stories/DynamicColorPalette.tsx`
4. `src/stories/ColorPalette.stories.tsx`

### Arquivo a Modificar

5. `src/stories/ColorPaletteEditor.tsx` (simplificar)

---

## 💻 Especificação Técnica por Arquivo

### SPEC 4.1 - Remover ColorExportButton

#### Arquivos

- **Deletar**: `src/stories/ColorExportButton.tsx`

#### Verificar Imports

```bash
# Buscar imports deste arquivo
grep -r "ColorExportButton" src/ --include="*.ts" --include="*.tsx"
```

#### Remover Imports

```typescript
// Em arquivos que importam ColorExportButton:
// REMOVER:
import { ColorExportButton } from "./ColorExportButton";
// ou
import { ColorExportButton } from "@/stories/ColorExportButton";

// REMOVER uso:
// <ColorExportButton ... />
```

---

### SPEC 4.2 - Remover TokenUsageTable

#### Arquivos

- **Deletar**: `src/stories/TokenUsageTable.tsx`

#### Verificar Imports

```bash
grep -r "TokenUsageTable" src/ --include="*.ts" --include="*.tsx"
```

#### Remover Imports

```typescript
// Remover imports e usos similares ao SPEC 4.1
```

---

### SPEC 4.3 - Remover DynamicColorPalette

#### Arquivos

- **Deletar**: `src/stories/DynamicColorPalette.tsx`

#### Verificar Imports

```bash
grep -r "DynamicColorPalette" src/ --include="*.ts" --include="*.tsx"
```

---

### SPEC 4.4 - Simplificar ColorPaletteEditor

#### Alterações

**Manter:**

- Estrutura básica do componente
- Estado React para visualização
- Renderização de inputs de cor
- Exibição de valores

**Remover:**

- Botões de ação (se houver)
- Funcionalidades de export
- Referências a tokens dinâmicos
- Imports de color-utils

#### Exemplo de Simplificação

```typescript
// ANTES - Exemplo complexo
export const ColorPaletteEditor = () => {
  const [colors, setColors] = useState(...);
  const [product, setProduct] = useState(...);

  useEffect(() => {
    // Load from localStorage
    // Apply dynamic styles
    // Dispatch events
  }, []);

  const handleExport = () => { ... };
  const handleApply = () => { ... };

  return (
    <div>
      <ProductSelector />
      <ColorInputs />
      <TokenDisplay />
      <ExportButton onClick={handleExport} />
      <ApplyButton onClick={handleApply} />
    </div>
  );
};

// DEPOIS - Versão simplificada
export const ColorPaletteEditor = () => {
  const [colors, setColors] = useState({
    primary: '220 100% 50%',
    // ... valores estáticos
  });

  // Sem useEffects de side effects
  // Sem handlers de aplicação

  return (
    <div>
      <h2>Tema Padrão - Visualização</h2>
      <ColorInputs
        colors={colors}
        onChange={setColors}  // Apenas atualiza estado local
      />
      <TokenDisplay colors={colors} />
      {/* Sem botões de export/apply */}
    </div>
  );
};
```

---

### SPEC 4.5 - Remover ColorPalette.stories.tsx

#### Arquivos

- **Deletar**: `src/stories/ColorPalette.stories.tsx`

#### Verificar

```bash
# Verificar se há referências
grep -r "ColorPalette" src/stories/*.stories.tsx
```

#### Nota

Se este arquivo define stories para o ColorPaletteEditor, temos duas opções:

**Opção A: Deletar completamente** (se não for mais necessário)

**Opção B: Simplificar** (se quiser manter visualização)

```typescript
// Simplificar para apenas mostrar o editor
export default {
  title: 'Design System/ColorPalette',
  component: ColorPaletteEditor,
};

export const Visualizacao = () => <ColorPaletteEditor />;
```

---

## 🧪 Casos de Teste por Subtarefa

### Após Cada Remoção (4.1, 4.2, 4.3, 4.5):

#### Teste 1: Arquivo Deletado

```bash
ls src/stories/ColorExportButton.tsx
# Deve retornar: No such file or directory
```

#### Teste 2: Sem Imports Quebrados

```bash
npm run build
# Deve passar sem erros de "module not found"
```

#### Teste 3: Storybook Inicia

```bash
npm run storybook
# Deve iniciar sem erros
```

### Para 4.4 (Simplificação):

#### Teste 4: Editor Renderiza

```bash
# No Storybook:
# 1. Abrir ColorPaletteEditor
# 2. Verificar que componente renderiza
# 3. Verificar que mostra valores de cor
```

#### Teste 5: Funcionalidade Mínima

```bash
# Verificar que:
# - Não há botões de export
# - Não há botões de apply
# - Não há seleção de produto
# - Inputs atualizam estado visual
```

---

## 📊 Checklist de Validação

### Para Cada Subtarefa (4.1-4.3, 4.5):

- [ ] Arquivo deletado
- [ ] Imports removidos de outros arquivos
- [ ] Build passa
- [ ] Storybook inicia
- [ ] Sem erros no console

### Para 4.4:

- [ ] Editor simplificado
- [ ] Sem botões de ação
- [ ] Sem referências a tokens dinâmicos
- [ ] Visualização funcional
- [ ] Build passa

### Geral:

- [ ] Pasta `src/stories/` apenas com arquivos necessários
- [ ] Nenhum arquivo órfão (importado mas não existe)
- [ ] Nenhum arquivo morto (existe mas não é importado)

---

## 🛠️ Comandos Úteis

```bash
# Verificar arquivos na pasta stories
ls -la src/stories/

# Verificar quais arquivos são importados
grep -r "from.*stories" src/ --include="*.ts" --include="*.tsx"

# Verificar arquivos não importados (possíveis órfãos)
# (requer script ou análise manual)
```

---

## ✅ Handoff para SPEC 5.x

**Entregáveis:**

1. 4 arquivos deletados
2. ColorPaletteEditor simplificado
3. Storybook funcional
4. Build passando

**Próximo passo**: Remover tokens e color-utils (core).
