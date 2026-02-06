# Vite Library Build

## Descrição
Configuração do Vite para build de biblioteca de componentes no Foresight Design System.

## Regras Obrigatórias

### DO
- ✅ Usar Vite em modo library para builds otimizadas
- ✅ Configurar entry point (index.ts) para exports
- ✅ Gerar builds ESM e CJS
- ✅ Incluir sourcemaps para debugging
- ✅ Externalizar peer dependencies (React, ReactDOM)
- ✅ Configurar CSS injection quando necessário

### DON'T
- ❌ Bundlear React/ReactDOM na biblioteca
- ❌ Ignorar tree-shaking
- ❌ Esquecer tipos TypeScript (d.ts)
- ❌ Publicar builds desnecessários
- ❌ Usar configurações de app para library

## Exemplos de Código

### Configuração Vite (vite.config.ts)
```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import { peerDependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ForesightDS",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies || {}),
        "react",
        "react-dom",
        "react/jsx-runtime",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    minify: "terser",
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
```

### Package.json Configurado
```json
{
  "name": "@foresight/design-system",
  "version": "1.0.0",
  "description": "Foresight Design System - Component library",
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.mjs"
      },
      "require": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      }
    },
    "./styles": {
      "import": "./dist/style.css",
      "require": "./dist/style.css"
    }
  },
  "files": [
    "dist"
  ],
  "sideEffects": [
    "**/*.css"
  ],
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:watch": "vite build --watch",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "typecheck": "tsc --noEmit"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "dependencies": {
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "vite-plugin-dts": "^3.7.0"
  }
}
```

### Entry Point (src/index.ts)
```typescript
// src/index.ts - Barrel exports
// Components
export * from "./components/ui/button";
export * from "./components/ui/card";
export * from "./components/ui/input";
export * from "./components/ui/label";
export * from "./components/ui/select";
export * from "./components/ui/dialog";
export * from "./components/ui/tabs";

// Hooks
export * from "./hooks/use-toast";
export * from "./hooks/use-media-query";

// Utils
export { cn } from "./lib/utils";

// Styles
import "./styles/globals.css";
```

### Build com CSS Injection
```typescript
// vite.config.ts - Com CSS injection
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    libInjectCss(), // Injeta CSS automaticamente
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "mjs" : "js"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
    },
  },
});
```

### TypeScript Config (tsconfig.json)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "declaration": true,
    "declarationDir": "dist",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### Scripts de Build
```json
{
  "scripts": {
    "build": "npm run clean && tsc && vite build",
    "build:watch": "vite build --watch",
    "clean": "rm -rf dist",
    "prepublishOnly": "npm run build",
    "analyze": "vite-bundle-visualizer"
  }
}
```

### Consumindo a Biblioteca
```typescript
// App.tsx - Usando a biblioteca
import { Button, Card, Input } from "@foresight/design-system";
import "@foresight/design-system/styles";

function App() {
  return (
    <Card>
      <h1>Hello Foresight</h1>
      <Input placeholder="Type something..." />
      <Button>Click me</Button>
    </Card>
  );
}
```

## Checklist de Verificação
- [ ] vite.config.ts configurado para library
- [ ] Plugin vite-plugin-dts instalado
- [ ] Entry point (index.ts) com exports
- [ ] Peer dependencies externalizadas
- [ ] Package.json com exports ESM/CJS
- [ ] Sourcemaps habilitados
- [ ] CSS split ou injetado
- [ ] tsconfig.json com declaration
- [ ] Scripts de build e clean
- [ ] Tree-shaking funcionando

## Referências Úteis
- [Vite Library Mode](https://vitejs.dev/guide/build.html#library-mode)
[vite-plugin-dts](https://github.com/qmhc/vite-plugin-dts)
[vite-plugin-lib-inject-css](https://github.com/emosheeep/vite-plugin-lib-inject-css)
[TypeScript Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html)
