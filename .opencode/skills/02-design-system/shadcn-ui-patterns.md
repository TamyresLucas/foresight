# shadcn/ui Patterns

## Descrição
Padrões e convenções para utilizar e estender componentes shadcn/ui no Foresight Design System.

## Regras Obrigatórias

### DO
- ✅ Usar CVA (Class Variance Authority) para variantes de componentes
- ✅ Utilizar a função `cn()` do `lib/utils` para merge de classes
- ✅ Seguir convenção de nomenclatura: `component-name.tsx`
- ✅ Estender componentes shadcn em vez de modificar diretamente
- ✅ Documentar todas as variantes e tamanhos
- ✅ Manter estrutura consistente de props

### DON'T
- ❌ Modificar arquivos shadcn diretamente no `components/ui/`
- ❌ Duplicar lógica de merge de classes
- ❌ Usar classes arbitrárias do Tailwind sem necessidade
- ❌ Ignorar a estrutura de variantes do CVA
- ❌ Misturar estilos inline com classes

## Exemplos de Código

### Estrutura de Variantes com CVA
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base classes - aplicadas sempre
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
```

### Estendendo Componente shadcn
```tsx
// components/custom/EnhancedButton.tsx
import { Button as ShadcnButton, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

// Estende variantes do botão original
const enhancedButtonVariants = cva(
  "",
  {
    variants: {
      ...buttonVariants, // Herda variantes do shadcn
      variant: {
        ...buttonVariants.variants.variant,
        gradient: "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20",
      },
      loading: {
        true: "cursor-not-allowed opacity-80",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      loading: false,
    },
  }
);

export interface EnhancedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof enhancedButtonVariants> {
  loading?: boolean;
  loadingText?: string;
}

export const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, variant, size, loading, loadingText, children, ...props }, ref) => {
    return (
      <ShadcnButton
        className={cn(enhancedButtonVariants({ variant, size, loading, className }))}
        ref={ref}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {loadingText || children}
          </>
        ) : (
          children
        )}
      </ShadcnButton>
    );
  }
);

EnhancedButton.displayName = "EnhancedButton";
```

### Uso da Função cn()
```tsx
import { cn } from "@/lib/utils";

// Merge condicional de classes
function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      className={cn(
        // Classes base
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        // Classes condicionais
        variant === "elevated" && "shadow-lg",
        variant === "flat" && "border-0 shadow-none",
        // Classes do usuário (sempre por último)
        className
      )}
      {...props}
    />
  );
}

// Uso com array de classes
function Badge({ className, color, ...props }: BadgeProps) {
  const colorClasses = {
    red: "bg-red-100 text-red-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        colorClasses[color],
        className
      )}
      {...props}
    />
  );
}
```

### Convenções de Nomenclatura
```
components/
  ui/                    # Componentes shadcn originais
    button.tsx
    card.tsx
    input.tsx
  custom/                # Extensões customizadas
    enhanced-button.tsx
    survey-card.tsx
  composites/            # Componentes compostos
    question-card.tsx
    survey-builder/
      canvas.tsx
      toolbar.tsx
```

## Checklist de Verificação
- [ ] CVA é usado para definir variantes
- [ ] Função `cn()` é usada para merge de classes
- [ ] Variantes incluem todos os estados necessários
- [ ] Classes do usuário são aplicadas por último
- [ ] Componente shadcn é estendido, não modificado
- [ ] displayName é definido
- [ ] Props estão corretamente tipadas com VariantProps
- [ ] Nomenclatura segue convenções do projeto

## Referências Úteis
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Class Variance Authority](https://cva.style/docs)
- [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- [clsx](https://github.com/lukeed/clsx)
