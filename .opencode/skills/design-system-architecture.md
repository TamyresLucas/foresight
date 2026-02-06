# Design System Architecture

## Descrição
Arquitetura e estrutura do Foresight Design System, incluindo tokens, temas, exports e versionamento.

## Regras Obrigatórias

### DO
- ✅ Usar tokens CSS para valores consistentes
- ✅ Organizar temas em arquivos separados
- ✅ Usar barrel exports (`index.ts`) para facilitar imports
- ✅ Separar componentes UI básicos de componentes customizados
- ✅ Seguir versionamento semântico (semver)
- ✅ Documentar breaking changes

### DON'T
- ❌ Hardcode valores de cor, espaçamento ou tipografia
- ❌ Misturar tokens de light e dark theme
- ❌ Criar múltiplos pontos de entrada desnecessários
- ❌ Exportar componentes sem testes
- ❌ Mudar APIs sem versão major

## Exemplos de Código

### Estrutura de Tokens CSS
```css
/* tokens/colors.css */
:root {
  /* Brand Colors */
  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-200: #bfdbfe;
  --color-brand-300: #93c5fd;
  --color-brand-400: #60a5fa;
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --color-brand-700: #1d4ed8;
  --color-brand-800: #1e40af;
  --color-brand-900: #1e3a8a;

  /* Semantic Colors */
  --color-success-50: #f0fdf4;
  --color-success-500: #22c55e;
  --color-success-700: #15803d;
  
  --color-warning-50: #fffbeb;
  --color-warning-500: #f59e0b;
  --color-warning-700: #b45309;
  
  --color-error-50: #fef2f2;
  --color-error-500: #ef4444;
  --color-error-700: #b91c1c;

  /* Neutral Colors */
  --color-gray-50: #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
}

/* tokens/spacing.css */
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}

/* tokens/typography.css */
:root {
  --font-family-sans: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-mono: 'Fira Code', monospace;

  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;
}
```

### Organização de Temas
```css
/* themes/light.css */
:root {
  --theme-background: var(--color-gray-50);
  --theme-foreground: var(--color-gray-900);
  --theme-card: #ffffff;
  --theme-card-foreground: var(--color-gray-900);
  --theme-border: var(--color-gray-200);
  --theme-primary: var(--color-brand-600);
  --theme-primary-foreground: #ffffff;
  --theme-secondary: var(--color-gray-100);
  --theme-secondary-foreground: var(--color-gray-900);
  --theme-muted: var(--color-gray-100);
  --theme-muted-foreground: var(--color-gray-500);
  --theme-accent: var(--color-brand-50);
  --theme-accent-foreground: var(--color-brand-900);
}

/* themes/dark.css */
[data-theme='dark'] {
  --theme-background: var(--color-gray-900);
  --theme-foreground: var(--color-gray-50);
  --theme-card: var(--color-gray-800);
  --theme-card-foreground: var(--color-gray-50);
  --theme-border: var(--color-gray-700);
  --theme-primary: var(--color-brand-500);
  --theme-primary-foreground: var(--color-gray-900);
  --theme-secondary: var(--color-gray-800);
  --theme-secondary-foreground: var(--color-gray-50);
  --theme-muted: var(--color-gray-800);
  --theme-muted-foreground: var(--color-gray-400);
  --theme-accent: var(--color-brand-900);
  --theme-accent-foreground: var(--color-brand-100);
}
```

### Barrel Exports (index.ts)
```typescript
// components/ui/index.ts
export * from './button';
export * from './card';
export * from './input';
export * from './label';
export * from './select';
export * from './checkbox';
export * from './radio-group';
export * from './dialog';
export * from './dropdown-menu';
export * from './tabs';
export * from './accordion';
export * from './toast';

// hooks/index.ts
export * from './use-toast';
export * from './use-media-query';
export * from './use-debounce';

// lib/index.ts
export * from './utils';

// Main export
// index.ts
export * from './components/ui';
export * from './hooks';
export * from './lib';
export * from './tokens';
```

### Separação de Componentes
```
src/
  components/
    ui/                    # Componentes shadcn/ui base
      button.tsx
      card.tsx
      input.tsx
      ...
    
    custom/                # Extensões customizadas
      enhanced-button.tsx
      question-card.tsx
      survey-canvas.tsx
    
    composites/            # Componentes compostos complexos
      survey-builder/
        canvas.tsx
        toolbar.tsx
        question-list.tsx
        properties-panel.tsx
```

### Versionamento Semântico
```json
{
  "name": "@foresight/design-system",
  "version": "2.3.1",
  "description": "Foresight Design System - Component library",
  "scripts": {
    "version:patch": "npm version patch",
    "version:minor": "npm version minor", 
    "version:major": "npm version major"
  }
}
```

### Configuração de Publicação
```json
{
  "name": "@foresight/design-system",
  "version": "2.3.1",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles.css",
    "./tokens": "./dist/tokens/index.css"
  },
  "files": [
    "dist"
  ],
  "publishConfig": {
    "access": "public",
    "registry": "https://registry.npmjs.org/"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

## Checklist de Verificação
- [ ] Tokens CSS estão definidos centralmente
- [ ] Temas light/dark estão organizados separadamente
- [ ] Barrel exports facilitam imports
- [ ] UI components estão separados de custom components
- [ ] Versionamento segue semver
- [ ] package.json configurado para publicação
- [ ] Breaking changes documentados no CHANGELOG
- [ ] Peer dependencies declaradas

## Referências Úteis
- [Design Tokens](https://www.designtokens.org/)
[CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
[Semantic Versioning](https://semver.org/)
[NPM Package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
