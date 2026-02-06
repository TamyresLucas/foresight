# Context7 Explicado

## O que é Context7?

É um **MCP server que fornece documentação atualizada** para LLMs (Model Context Protocol).

## 🎯 Para que serve:

### 1. **Evita informações desatualizadas**
- LLMs são treinados com dados até uma data específica
- Context7 busca documentação **atualizada** de bibliotecas
- Injeta docs relevantes direto no contexto da IA

### 2. **Documentação sob demanda**
- Quando você precisa de info sobre uma biblioteca (React, Next.js, etc.)
- Context7 puxa a documentação mais recente automaticamente
- Ex: instead de "use useEffect antigo", ele te dá a versão atual

### 3. **Ferramentas MCP expostas:**
- **resolve-library-id**: Encontra ID da biblioteca
- **get-library-docs**: Puxa documentação filtrada
- **get-code-examples**: Obtém exemplos de código

## 🚀 Exemplo prático:

Em vez de pedir para a IA:
```
"Como usa React Router v6?"
```

Com Context7, a IA já tem a info atualizada:
- Puxa documentação do React Router v6.4+  
- Dá exemplos funcionais
- Evita código deprecated

## 🔧 Como usar:

### Se já Claude/OpenCode:
Já está configurado no seu setup! ✅

### Se quiser ativar:
1. **Criar conta**: https://context7.com
2. **Pegar API key**: Dashboard → API Keys
3. **Configurar**: 
   ```bash
   export CONTEXT7_API_KEY="sua-key-aqui"
   npx @upstash/context7-mcp --transport stdio
   ```

### Para projetos web:
```javascript
// Context7 injeta documentação automaticamente
const docs = await context7.getLibraryDocs('react', 'hooks');
// docs contém info atualizada do React 18
```

## 💡 Benefícios:

✅ **Precisão**: Sem mais APIs desatualizadas  
✅ **Velocidade**: Docs disponíveis instantaneamente  
✅ **Qualidade**: Código baseado em documentação atual  
✅ **Integração**: Funciona com Claude, Cursor, VS Code

**É como ter uma "Google por dentro" da IA, mas só que com 100% de informação atualizada!**