# Setup MCP

Configuração dos Model Context Protocol servers para o Foresight.

## 🎯 O que é MCP?

MCP (Model Context Protocol) é um protocolo da Anthropic que permite conectar AI assistants a ferramentas externas como:

- Bancos de dados
- APIs
- Servidores de componentes
- Ferramentas de desenvolvimento

## 🔧 MCPs Disponíveis

### 1. Notion MCP

**Uso:** Integração com documentação do Notion

**Instalação:**

```bash
# Já configurado em .gemini/mcp_config.json
```

**Configuração:**

```json
{
  "mcpServers": {
    "notion": {
      "serverUrl": "https://mcp.notion.com/mcp"
    }
  }
}
```

**Como usar:**

```bash
# O Notion MCP é automaticamente disponível no Opencode
# quando você usa o workspace foresight
```

### 2. shadcn/ui MCP

**Uso:** Gerenciamento de componentes shadcn

**Instalação:**

```bash
npm install -g @sherifbutt/shadcn-ui-mcp-server
```

**Uso direto:**

```bash
# Listar componentes
npx @sherifbutt/shadcn-ui-mcp-server

# Ou executar servidor
shadcn-ui-mcp-server
```

**Funcionalidades:**

- Listar todos os componentes shadcn/ui
- Obter código fonte TypeScript
- Gerar exemplos de uso
- Instalar componentes via CLI
- Acessar blocks (dashboards, formulários)

### 3. Tailwind CSS MCP

**Uso:** Utilitários e documentação Tailwind

**Instalação:**

```bash
npm install -g tailwindcss-mcp-server
```

**Uso direto:**

```bash
# Buscar utilitários
npx tailwindcss-mcp-server get-tailwind-utilities layout

# Ver cores
npx tailwindcss-mcp-server get-tailwind-colors

# Converter CSS para Tailwind
npx tailwindcss-mcp-server convert-css-to-tailwind ".button { background: blue; }"
```

### 4. Storybook MCP

**Uso:** Acesso a componentes e stories

**Instalação:**

```bash
npm install -g storybook-mcp-server
```

**Uso direto:**

```bash
# Com Storybook rodando
STORYBOOK_URL=http://localhost:6006 npx storybook-mcp-server list-components
```

## 🚀 Configuração no Claude Desktop

Para usar MCPs no Claude Desktop, adicione ao arquivo de configuração:

**Arquivo:** `~/Library/Application Support/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/tamyreslucas"
      ]
    },
    "shadcn-ui": {
      "command": "npx",
      "args": ["-y", "@sherifbutt/shadcn-ui-mcp-server"]
    },
    "storybook": {
      "command": "npx",
      "args": ["-y", "storybook-mcp-server"],
      "env": {
        "STORYBOOK_URL": "http://localhost:6006"
      }
    },
    "tailwind": {
      "command": "npx",
      "args": ["-y", "tailwindcss-mcp-server"]
    }
  }
}
```

## 📝 Configuração no Opencode

No Opencode, usamos os MCPs via terminal:

```bash
# shadcn/ui
npx @sherifbutt/shadcn-ui-mcp-server list-components 2>/dev/null | head -20

# Tailwind
npx tailwindcss-mcp-server get-tailwind-colors 2>/dev/null | head -30

# Storybook (com servidor rodando)
STORYBOOK_URL=http://localhost:6006 npx storybook-mcp-server list-components 2>/dev/null
```

## 🎨 Exemplos de Uso

### Adicionar Componente shadcn

```bash
# Listar disponíveis
npx @sherifbutt/shadcn-ui-mcp-server list-components

# Ver código do Button
npx @sherifbutt/shadcn-ui-mcp-server get-component button

# Instalar no projeto
cd packages/design-system
npx shadcn add button
```

### Buscar Classes Tailwind

```bash
# Classes de layout
npx tailwindcss-mcp-server get-tailwind-utilities layout

# Paleta de cores
npx tailwindcss-mcp-server get-tailwind-colors

# Configuração
npx tailwindcss-mcp-server get-tailwind-config-guide react
```

### Acessar Stories

```bash
# Com Storybook rodando em http://localhost:6006
STORYBOOK_URL=http://localhost:6006 npx storybook-mcp-server list-components
```

## 🔧 Troubleshooting

### Erro: "command not found"

**Solução:**

```bash
# Reinstale globalmente
npm install -g @sherifbutt/shadcn-ui-mcp-server
npm install -g tailwindcss-mcp-server
npm install -g storybook-mcp-server
```

### Erro: "Connection refused"

**Storybook:**

- Certifique-se de que o Storybook está rodando: `npm run dev:design-system`
- Verifique a URL em `STORYBOOK_URL`

### Erro: "Module not found"

**Solução:**

```bash
# Limpar cache
npm cache clean --force

# Reinstalar
rm -rf node_modules
npm install
```

## 📚 Recursos

- [MCP Documentation](https://modelcontextprotocol.io/)
- [shadcn/ui MCP](https://github.com/Jpisnice/shadcn-ui-mcp-server)
- [Tailwind MCP](https://www.npmjs.com/package/tailwindcss-mcp-server)
- [Storybook MCP](https://github.com/stefanoamorelli/storybook-mcp-server)

---

**MCPs configurados e prontos para uso!** 🚀
