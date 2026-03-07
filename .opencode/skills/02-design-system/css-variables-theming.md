# CSS Variables Theming

## Descrição
Sistema de temas baseado em CSS Variables para o Foresight Design System, permitindo customização dinâmica e consistência visual.

## Regras Obrigatórias

### DO
- ✅ Usar CSS Custom Properties (variables) para todos os tokens
- ✅ Definir variáveis em :root para tema light
- ✅ Usar atributo data-theme para tema dark
- ✅ Manter nomenclatura consistente (--color-* , --space-*)
- ✅ Agrupar variáveis por categoria (cores, espaçamento, tipografia)
- ✅ Permitir override em escopo local quando necessário

### DON'T
- ❌ Hardcode valores de cor ou espaçamento
- ❌ Usar HSL sem documentar
- ❌ Criar variáveis com nomes genéricos (--color-1, --color-2)
- ❌ Misturar tokens de temas diferentes
- ❌ Esquecer fallback para navegadores antigos

## Exemplos de Código

### Estrutura de Tokens
```css
/* tokens/colors.css */
:root {
  /* Brand - Blue */
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

  /* Semantic - Success */
  --color-success-50: #f0fdf4;
  --color-success-100: #dcfce7;
  --color-success-200: #bbf7d0;
  --color-success-500: #22c55e;
  --color-success-600: #16a34a;
  --color-success-700: #15803d;

  /* Semantic - Warning */
  --color-warning-50: #fffbeb;
  --color-warning-100: #fef3c7;
  --color-warning-500: #f59e0b;
  --color-warning-600: #d97706;
  --color-warning-700: #b45309;

  /* Semantic - Error */
  --color-error-50: #fef2f2;
  --color-error-100: #fee2e2;
  --color-error-500: #ef4444;
  --color-error-600: #dc2626;
  --color-error-700: #b91c1c;

  /* Neutral - Gray Scale */
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
  --space-32: 8rem;     /* 128px */
  --space-40: 10rem;    /* 160px */
  --space-48: 12rem;    /* 192px */
  --space-56: 14rem;    /* 224px */
  --space-64: 16rem;    /* 256px */
}

/* tokens/typography.css */
:root {
  --font-family-sans: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'Fira Code', 'Monaco', 'Consolas', monospace;

  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 3.75rem;   /* 60px */

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  --line-height-tight: 1.25;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
}

/* tokens/shadows.css */
:root {
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
}

/* tokens/radius.css */
:root {
  --radius-none: 0;
  --radius-sm: 0.125rem;   /* 2px */
  --radius-md: 0.375rem;   /* 6px */
  --radius-lg: 0.5rem;     /* 8px */
  --radius-xl: 0.75rem;    /* 12px */
  --radius-2xl: 1rem;      /* 16px */
  --radius-3xl: 1.5rem;    /* 24px */
  --radius-full: 9999px;
}
```

### Tema Light (Default)
```css
/* themes/light.css */
:root {
  /* Background */
  --theme-background: var(--color-gray-50);
  --theme-foreground: var(--color-gray-900);
  
  /* Card */
  --theme-card: #ffffff;
  --theme-card-foreground: var(--color-gray-900);
  
  /* Popover */
  --theme-popover: #ffffff;
  --theme-popover-foreground: var(--color-gray-900);
  
  /* Primary */
  --theme-primary: var(--color-brand-600);
  --theme-primary-foreground: #ffffff;
  
  /* Secondary */
  --theme-secondary: var(--color-gray-100);
  --theme-secondary-foreground: var(--color-gray-900);
  
  /* Muted */
  --theme-muted: var(--color-gray-100);
  --theme-muted-foreground: var(--color-gray-500);
  
  /* Accent */
  --theme-accent: var(--color-brand-50);
  --theme-accent-foreground: var(--color-brand-900);
  
  /* Destructive */
  --theme-destructive: var(--color-error-500);
  --theme-destructive-foreground: #ffffff;
  
  /* Border & Input */
  --theme-border: var(--color-gray-200);
  --theme-input: var(--color-gray-200);
  --theme-ring: var(--color-brand-500);
  
  /* Radius */
  --theme-radius: var(--radius-lg);
}
```

### Tema Dark
```css
/* themes/dark.css */
[data-theme="dark"] {
  /* Background */
  --theme-background: var(--color-gray-900);
  --theme-foreground: var(--color-gray-50);
  
  /* Card */
  --theme-card: var(--color-gray-800);
  --theme-card-foreground: var(--color-gray-50);
  
  /* Popover */
  --theme-popover: var(--color-gray-800);
  --theme-popover-foreground: var(--color-gray-50);
  
  /* Primary */
  --theme-primary: var(--color-brand-500);
  --theme-primary-foreground: var(--color-gray-900);
  
  /* Secondary */
  --theme-secondary: var(--color-gray-800);
  --theme-secondary-foreground: var(--color-gray-50);
  
  /* Muted */
  --theme-muted: var(--color-gray-800);
  --theme-muted-foreground: var(--color-gray-400);
  
  /* Accent */
  --theme-accent: var(--color-brand-900);
  --theme-accent-foreground: var(--color-brand-100);
  
  /* Destructive */
  --theme-destructive: var(--color-error-600);
  --theme-destructive-foreground: #ffffff;
  
  /* Border & Input */
  --theme-border: var(--color-gray-700);
  --theme-input: var(--color-gray-700);
  --theme-ring: var(--color-brand-400);
  
  /* Radius */
  --theme-radius: var(--radius-lg);
}
```

### Import Global
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@import './tokens/colors.css';
@import './tokens/spacing.css';
@import './tokens/typography.css';
@import './tokens/shadows.css';
@import './tokens/radius.css';
@import './themes/light.css';
@import './themes/dark.css';

@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-family-sans);
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
```

### Uso em Tailwind
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        border: "var(--theme-border)",
        input: "var(--theme-input)",
        ring: "var(--theme-ring)",
        background: "var(--theme-background)",
        foreground: "var(--theme-foreground)",
        primary: {
          DEFAULT: "var(--theme-primary)",
          foreground: "var(--theme-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--theme-secondary)",
          foreground: "var(--theme-secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--theme-destructive)",
          foreground: "var(--theme-destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--theme-muted)",
          foreground: "var(--theme-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--theme-accent)",
          foreground: "var(--theme-accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--theme-popover)",
          foreground: "var(--theme-popover-foreground)",
        },
        card: {
          DEFAULT: "var(--theme-card)",
          foreground: "var(--theme-card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--theme-radius)",
        md: "calc(var(--theme-radius) - 2px)",
        sm: "calc(var(--theme-radius) - 4px)",
      },
    },
  },
};
```

## Checklist de Verificação
- [ ] Tokens organizados por categoria
- [ ] Nomenclatura consistente (--categoria-token)
- [ ] Tema light definido em :root
- [ ] Tema dark usando [data-theme="dark"]
- [ ] Variáveis mapeadas no tailwind.config.js
- [ ] Font families configuradas
- [ ] Espaçamentos escaláveis
- [ ] Cores usando HSL ou hex consistente
- [ ] Documentação de tokens atualizada

## Referências Úteis
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Design Tokens](https://www.designtokens.org/)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [CSS Variables Best Practices](https://cube.fyi/css-variables.html)
