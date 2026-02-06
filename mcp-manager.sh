#!/bin/bash

# MCP Servers Launcher Script
# Para gerenciar todos os MCP servers facilmente

echo "🚀 MCP Servers Manager"
echo "====================="

# Função para verificar se um server está rodando
check_server() {
    local server_name=$1
    if pgrep -f "$server_name" > /dev/null; then
        echo "✅ $server_name está rodando"
        return 0
    else
        echo "❌ $server_name não está rodando"
        return 1
    fi
}

# Menu interativo
case "$1" in
    "start-all")
        echo "🔄 Iniciando todos os MCP servers..."
        npx @modelcontextprotocol/server-sequential-thinking &
        npx @upstash/context7-mcp --transport stdio &
        npx @notionhq/notion-mcp-server --transport stdio &
        echo "✅ Todos os servers iniciados em background"
        ;;
    "stop-all")
        echo "🛑 Parando todos os MCP servers..."
        pkill -f "sequential-thinking"
        pkill -f "context7-mcp"
        pkill -f "notion-mcp-server"
        echo "✅ Todos os servers parados"
        ;;
    "status")
        echo "📊 Status dos MCP Servers:"
        echo ""
        check_server "sequential-thinking"
        check_server "context7-mcp"
        check_server "notion-mcp-server"
        ;;
    "test-sequential")
        echo "🧪 Testando Sequential Thinking..."
        npx @modelcontextprotocol/server-sequential-thinking
        ;;
    "inspector")
        echo "🔍 Abrindo MCP Inspector..."
        npx @modelcontextprotocol/inspector
        ;;
    "config")
        echo "⚙️  Configuração atual:"
        cat /Users/tamyreslucas/foresight/.claude_desktop_config.json
        ;;
    *)
        echo "📋 Uso: $0 [comando]"
        echo ""
        echo "Comandos disponíveis:"
        echo "  start-all     - Inicia todos os MCP servers"
        echo "  stop-all      - Para todos os MCP servers"
        echo "  status        - Mostra status dos servers"
        echo "  test-sequential - Testa Sequential Thinking"
        echo "  inspector     - Abre MCP Inspector"
        echo "  config        - Mostra configuração atual"
        ;;
esac