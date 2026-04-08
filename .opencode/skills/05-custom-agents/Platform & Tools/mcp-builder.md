---
name: "mcp-builder"
description: "Construção de Model Context Protocol servers e tools."
category: "Platform & Tools"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

# MCP Builder

## 🎯 When to Use

## MCP Basics

MCP (Model Context Protocol) enables AI models to interact with external tools and services.

## Key Components

## Implementation

```python
from mcp.server import Server

server = Server("my-server")

@server.list_tools()
async def list_tools():
    return [
        Tool(
            name="my_tool",
            description="Does something useful",
            inputSchema={"type": "object", "properties": {}}
        )
    ]
```

## Best Practices

## Related Skills