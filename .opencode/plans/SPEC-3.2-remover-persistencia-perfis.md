# SPEC 3.2 - Especificação Técnica: Remover Persistência de Perfis

## 📋 Informação Geral

- **PRD Referência**: PRD-3.2-remover-persistencia-perfis.md
- **Complexidade**: Média
- **Tempo Estimado**: 2 horas
- **Dependências**: SPEC 3.1

---

## 🔬 Análise do Código Atual

### Elementos a Remover

1. **Tipo Product**

   ```typescript
   type Product = "Voxco" | "Ascribe" | "Discuss";
   ```

2. **Estado de Produto**

   ```typescript
   const [selectedProduct, setSelectedProduct] = useState<Product>("Voxco");
   ```

3. **Chaves de localStorage**

   ```typescript
   const SHARED_STORAGE_KEY = "global-colors-shared";
   const getProductStorageKey = (product: Product) =>
     `global-colors-${product}`;
   // Resulta em:
   // - "global-colors-Voxco"
   // - "global-colors-Ascribe"
   // - "global-colors-Discuss"
   ```

4. **Funções de Load/Save**

   ```typescript
   const loadColors = (product: Product) => { ... };
   const saveColors = (product: Product, colors: Colors) => { ... };
   ```

5. **UI de Seleção**
   ```typescript
   // Tabs, dropdown, ou botões para selecionar produto
   <Tabs value={selectedProduct} onValueChange={setSelectedProduct}>
     <Tab value="Voxco">Voxco</Tab>
     <Tab value="Ascribe">Ascribe</Tab>
     <Tab value="Discuss">Discuss</Tab>
   </Tabs>
   ```

### Elementos a Simplificar

1. **Estado de Cores**: De `Record<Product, Colors>` para `Colors` apenas
2. **Valor Padrão**: Usar apenas um tema default (ex: Voxco ou novo tema unificado)

---

## 💻 Especificação Técnica

### Passo 1: Remover Tipo Product

```typescript
// REMOVER:
type Product = "Voxco" | "Ascribe" | "Discuss";

// Não substituir por nada - não precisa mais deste tipo
```

### Passo 2: Simplificar Estado

#### Antes

```typescript
const [productColors, setProductColors] = useState<Record<Product, Colors>>({
  Voxco: { primary: '220 100% 50%', ... },
  Ascribe: { primary: '210 100% 45%', ... },
  Discuss: { primary: '230 100% 55%', ... },
});
const [selectedProduct, setSelectedProduct] = useState<Product>('Voxco');
const currentColors = productColors[selectedProduct];
```

#### Depois

```typescript
// Simplificar para apenas um tema
const [colors, setColors] = useState<Colors>({
  primary: "220 100% 50%",
  // ... outros tokens
});
// Não precisa de selectedProduct nem productColors
```

### Passo 3: Remover localStorage

```typescript
// REMOVER constantes:
// const SHARED_STORAGE_KEY = "global-colors-shared";
// const getProductStorageKey = ...

// REMOVER funções de load/save do localStorage:
/*
useEffect(() => {
  // Load from localStorage
  const saved = localStorage.getItem(getProductStorageKey(selectedProduct));
  if (saved) {
    setProductColors({ ...productColors, [selectedProduct]: JSON.parse(saved) });
  }
}, [selectedProduct]);

useEffect(() => {
  // Save to localStorage
  localStorage.setItem(
    getProductStorageKey(selectedProduct), 
    JSON.stringify(productColors[selectedProduct])
  );
}, [productColors, selectedProduct]);
*/

// Opcional: Adicionar log indicando que persistência foi removida
console.log(
  "[ColorPaletteEditor] Persistência removida - usando valores padrão",
);
```

### Passo 4: Remover UI de Seleção

```typescript
// REMOVER tabs/dropdown/botões de seleção de produto:
/*
<Tabs value={selectedProduct} onValueChange={(p) => setSelectedProduct(p as Product)}>
  <TabsList>
    <TabsTrigger value="Voxco">Voxco</TabsTrigger>
    <TabsTrigger value="Ascribe">Ascribe</TabsTrigger>
    <TabsTrigger value="Discuss">Discuss</TabsTrigger>
  </TabsList>
</Tabs>
*/

// SUBSTITUIR por título simples:
<div>
  <h2>Tema Padrão</h2>
  <p>Visualização das cores do tema</p>
</div>
```

### Passo 5: Atualizar Referências

```typescript
// ONDE HAVIA: productColors[selectedProduct].primary
// SUBSTITUIR POR: colors.primary

// ONDE HAVIA: setProductColors({ ...productColors, [selectedProduct]: newColors })
// SUBSTITUIR POR: setColors(newColors)
```

---

## 🧪 Casos de Teste

### Teste 1: localStorage Não é Usado

```javascript
// Limpar localStorage
localStorage.clear();

// Abrir ColorPaletteEditor
// Verificar que não são criadas chaves:
// - global-colors-shared
// - global-colors-Voxco
// - global-colors-Ascribe
// - global-colors-Discuss

console.log(Object.keys(localStorage));
// Deve retornar array vazio ou sem as chaves acima
```

### Teste 2: UI Simplificada

```bash
# No Storybook:
# 1. Abrir ColorPaletteEditor
# 2. Verificar que NÃO há tabs para Voxco/Ascribe/Discuss
# 3. Verificar que há apenas um tema mostrado
# 4. Verificar que título é "Tema Padrão" ou similar
```

### Teste 3: Estado Funciona

```typescript
// Testar que mudanças no input atualizam estado:
// 1. Abrir editor
// 2. Mudar valor de Primary
// 3. Verificar que valor no estado mudou (console.log ou React DevTools)
// 4. Verificar que valor exibido mudou
```

### Teste 4: Valores Padrão Corretos

```typescript
// Verificar que valores iniciais são os esperados:
console.log(colors);
// Deve mostrar valores do tema escolhido (ex: Voxco)
```

### Teste 5: Build

```bash
npm run build
# Deve passar sem erros
```

### Teste 6: TypeScript

```bash
# Se houver type-check:
npm run type-check
# Deve passar (não deve haver erros de tipo Product não encontrado)
```

---

## 📊 Checklist de Validação

- [ ] Tipo `Product` removido
- [ ] Estado simplificado (sem Record<Product, Colors>)
- [ ] localStorage keys removidas
- [ ] Funções load/save do localStorage removidas
- [ ] UI de seleção de produto removida
- [ ] Nenhuma referência a "Voxco", "Ascribe", "Discuss" no código
- [ ] Valores padrão aplicados corretamente
- [ ] UI mostra apenas um tema
- [ ] Estado de cores ainda funciona (inputs atualizam estado)
- [ ] Build passa
- [ ] Type-check passa (se aplicável)

---

## 🧹 Limpeza de localStorage (Documentação)

Criar documentação para limpeza:

```markdown
## Limpeza de localStorage

Após esta mudança, as seguintes chaves do localStorage podem ser removidas:

- `global-colors-shared`
- `global-colors-Voxco`
- `global-colors-Ascribe`
- `global-colors-Discuss`

Como remover:

1. Abrir DevTools (F12)
2. Ir para Application/Storage > LocalStorage
3. Deletar as chaves acima
4. Recarregar a página
```

---

## ✅ Handoff para SPEC 4.x

**Entregáveis:**

1. ColorPaletteEditor simplificado (um tema apenas)
2. Sem localStorage
3. Sem seleção de produto
4. Estado funcional para visualização
5. Build passando

**Próximo passo**: Limpeza de stories (remover componentes não utilizados).
