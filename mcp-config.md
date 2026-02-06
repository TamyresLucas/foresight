# MCP Configuration

## Servers Disponíveis

### 1. Context7 MCP
- **Package**: `@upstash/context7-mcp`
- **Uso**: Gerenciamento de contexto e documentação
- **Comando**: `npx @upstash/context7-mcp --transport stdio`
- **API Key**: Necessária (setar `CONTEXT7_API_KEY`)

### 2. Notion MCP Server  
- **Package**: `@notionhq/notion-mcp-server`
- **Uso**: Integração com Notion API
- **Comando**: `npx @notionhq/notion-mcp-server --transport stdio`
- **Token**: Necessário (`NOTION_TOKEN`)

### 3. MCP Server (com plugins)
- **Package**: `mcp-server`  
- **Uso**: Server genérico com plugins echo/helloworld
- **Comando**: `npx mcp-server`
- **Porta**: 4333 (HTTP)

### 4. MCP Inspector
- **Package**: `@modelcontextprotocol/inspector`
- **Uso**: Interface web para gerenciar MCP servers
- **Comando**: `npx @modelcontextprotocol/inspector`
- **URL**: http://localhost:6274
- **Auth Token**: Gerado automaticamente

## Dependências Instaladas ✅
- `color` - Manipulação de cores
- `react-dropzone` - Upload components
- `tailwindcss-animate` - Animações
- `@types/color` - TypeScript definitions

## Como Configurar no Cliente

### Para Claude Desktop/Opencode:
1. Vá em configurações (três pontinhos)
2. Procure por "MCP Servers" ou "Developer"
3. Adicione novo server com:
   - **Name**: Context7, Notion, etc.
   - **Command**: `npx @upstash/context7-mcp --transport stdio`
   - **Args**: (opcional)

### Para uso via HTTP:
```bash
# Context7
npx @upstash/context7-mcp --transport http --port 3000

# Notion  
npx @notionhq/notion-mcp-server --transport http --port 8080
```

## Tokens Necessários
- `CONTEXT7_API_KEY` - Para Context7
- `NOTION_TOKEN` - Para Notion integration

## Próximos Passos
1. Configurar variáveis de ambiente
2. Adicionar servers no cliente MCP
3. Testar conexão com cada server