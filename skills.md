# Skills.md - OpenCode para Foresight/Voxco Workspace

## 🎯 **Skills Essenciais para Este Workspace**

### 1. **MCP Server Management** ⭐
**Por quê?** Seu Notion menciona extensivo uso de MCP (Model Context Protocol)
```bash
# Exemplo de uso
echo "Analisar problema X" | npx @modelcontextprotocol/server-sequential-thinking
```

### 2. **Design System Integration** 
**Por quê?** Documentação menciona migração contínua para Design System v2.4
```typescript
// Exemplo: Usando DS integrado
import { Button } from '@voxco/design-system';
import { cn } from '@/lib/utils';
```

### 3. **React Component Development** 
**Por quê?** Foco em Survey Builder com Shadcn UI
```typescript
// Boas práticas mencionadas
const { useState, useEffect } = 'react';
import { z } from 'zod';

interface QuestionConfig {
  type: 'multiple-choice' | 'open-end';
  required: boolean;
  options?: string[];
}
```

### 4. **Notion API Integration** 
**Por quê?** Já funciona mas precisa de melhorias
```typescript
// Exemplo de uso com MCP Notion
const notionResponse = await notion.pages.create({
  parent: { database_id: "survey_db_id" },
  properties: {
    "Title": { title: [ "Survey Title" ] },
    "Status": { select: { name: "In Progress" } }
  }
});
```

### 5. **Sequential Thinking** 🧠
**Por quê?** Para análise complexa e múltiplas soluções
```bash
# Fluxo de trabalho sugerido
npx @modelcontextprotocol/server-sequential-thinking << EOF
Problema: O usuário reporta erro X no componente Y
Possíveis causas: A, B, C
Soluções: 1. Verificar props, 2. Debugar estado, 3. Revisar implementação
Análise: A causa mais provável é B, pois...
EOF
```

---

## 🚀 **Skills Populares que deveria ter**

### Development Workflow:
- **Vibe Coding**: Planejamento estruturado antes de codar
- **Component-First**: Criar componentes reutilizáveis
- **Schema-First**: Definir dados antes da UI
- **Token-Based Design**: Usar CSS custom properties

### Testing & Quality:
- **Storybook Integration**: Para documentação de componentes
- **Automated Testing**: Testes unitários e de integração
- **Type Safety**: TypeScript rigoroso
- **Code Review**: Revisão sistemática de código

### Tooling & Automation:
- **Build Optimization**: Vite/Rollup configurados
- **Linting & Formatting**: ESLint, Prettier, Tailwind
- **Git Workflow**: Conventional commits, branches semânticas
- **MCP Integration**: Servidores para IA assistida

### Workspace-Specific:
- **Survey Builder**: Foco em questionários e forms
- **Design System**: Componentes unificados e tokens
- **Color Palette**: Sistema dinâmico de cores
- **Dark Mode**: Suporte a temas claros/escuros

---

## 🛡️ **Melhores Práticas para Este Workspace**

1. **Sempre consultar o Notion primeiro** 📖
Seu Notion é a "fonte da verdade" do projeto
```bash
# Antes de qualquer implementação
npm run notion-check  # Script para consultar docs
```

2. **Usar MCP para decisões técnicas** 🧠
```bash
# Para problemas complexos
echo "Decisão: implementar X vs Y" | npx @modelcontextprotocol/server-sequential-thinking
```

3. **Seguir estrutura de tokens do DS** 🎨
```css
/* Sempre usar tokens semânticos */
.component {
  background-color: var(--color-primary);
  color: var(--text-primary);
}
```

4. **Validar com Survey Builder** ✅
```bash
# Pipeline sugerido
npm run type-check
npm run lint  
npm run test
npm run build
```

---

## 🔧 **Comandos Úteis**

```bash
# Verificar status dos MCP servers
./mcp-manager.sh status

# Reiniciar servidores MCP
./mcp-manager.sh restart-all

# Consultar documentação rápida
cat skills.md

# Ver configuração atual
./mcp-manager.sh config

# Reiniciar OpenCode/Claude
# Para carregar nova configuração MCP
```

---

## 🎯 **Status Atual do Workspace**

✅ **OpenCode**: Conectado ao Notion para skill management  
✅ **MCP Servers**: Sequential Thinking + Context7 + Notion configurados  
✅ **Design System**: Em migração para v2.4  
✅ **Dependencies**: Todas instaladas  
✅ **Skills.md**: Criado e alinhado com documentação oficial

**Seu workspace está pronto para desenvolvimento profissional com IA assistida!** 🚀