# MCP Setup

Configuration of Model Context Protocol servers for Foresight.

## 🎯 What is MCP?

MCP (Model Context Protocol) is an Anthropic protocol that allows connecting AI assistants to external tools such as:

- Databases
- APIs
- Component servers
- Development tools

## 🔧 Available MCPs

### 1. Notion MCP

**Usage:** Integration with Notion documentation

**Installation:**

```bash
# Already configured in .gemini/mcp_config.json
```

**Configuration:**

```json
{
  "mcpServers": {
    "notion": {
      "serverUrl": "https://mcp.notion.com/mcp"
    }
  }
}
```

**How to use:**

```bash
# Notion MCP is automatically available in Opencode
# when you use the foresight workspace
```

### 2. shadcn/ui MCP

**Usage:** shadcn component management

**Installation:**

```bash
npm install -g @sherifbutt/shadcn-ui-mcp-server
```

**Direct usage:**

```bash
# List components
npx @sherifbutt/shadcn-ui-mcp-server

# Or run server
shadcn-ui-mcp-server
```

**Features:**

- List all shadcn/ui components
- Get TypeScript source code
- Generate usage examples
- Install components via CLI
- Access blocks (dashboards, forms)

### 3. Tailwind CSS MCP

**Usage:** Tailwind utilities and documentation

**Installation:**

```bash
npm install -g tailwindcss-mcp-server
```

**Direct usage:**

```bash
# Search utilities
npx tailwindcss-mcp-server get-tailwind-utilities layout

# View colors
npx tailwindcss-mcp-server get-tailwind-colors

# Convert CSS to Tailwind
npx tailwindcss-mcp-server convert-css-to-tailwind ".button { background: blue; }"
```

### 4. Storybook MCP

**Usage:** Access to components and stories

**Installation:**

```bash
npm install -g storybook-mcp-server
```

**Direct usage:**

```bash
# With Storybook running
STORYBOOK_URL=http://localhost:6006 npx storybook-mcp-server list-components
```

## 🚀 Configuration in Claude Desktop

To use MCPs in Claude Desktop, add to the configuration file:

**File:** `~/Library/Application Support/Claude/claude_desktop_config.json`

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

## 📝 Configuration in Opencode

In Opencode, we use MCPs via terminal:

```bash
# shadcn/ui
npx @sherifbutt/shadcn-ui-mcp-server list-components 2>/dev/null | head -20

# Tailwind
npx tailwindcss-mcp-server get-tailwind-colors 2>/dev/null | head -30

# Storybook (with server running)
STORYBOOK_URL=http://localhost:6006 npx storybook-mcp-server list-components 2>/dev/null
```

## 🎨 Usage Examples

### Add shadcn Component

```bash
# List available
npx @sherifbutt/shadcn-ui-mcp-server list-components

# View Button code
npx @sherifbutt/shadcn-ui-mcp-server get-component button

# Install in project
cd packages/design-system
npx shadcn add button
```

### Search Tailwind Classes

```bash
# Layout classes
npx tailwindcss-mcp-server get-tailwind-utilities layout

# Color palette
npx tailwindcss-mcp-server get-tailwind-colors

# Configuration
npx tailwindcss-mcp-server get-tailwind-config-guide react
```

### Access Stories

```bash
# With Storybook running at http://localhost:6006
STORYBOOK_URL=http://localhost:6006 npx storybook-mcp-server list-components
```

## 🔧 Troubleshooting

### Error: "command not found"

**Solution:**

```bash
# Reinstall globally
npm install -g @sherifbutt/shadcn-ui-mcp-server
npm install -g tailwindcss-mcp-server
npm install -g storybook-mcp-server
```

### Error: "Connection refused"

**Storybook:**

- Make sure Storybook is running: `npm run dev:design-system`
- Check the URL in `STORYBOOK_URL`

### Error: "Module not found"

**Solution:**

```bash
# Clean cache
npm cache clean --force

# Reinstall
rm -rf node_modules
npm install
```

## 📚 Resources

- [MCP Documentation](https://modelcontextprotocol.io/)
- [shadcn/ui MCP](https://github.com/Jpisnice/shadcn-ui-mcp-server)
- [Tailwind MCP](https://www.npmjs.com/package/tailwindcss-mcp-server)
- [Storybook MCP](https://github.com/stefanoamorelli/storybook-mcp-server)

---

**MCPs configured and ready to use!** 🚀
