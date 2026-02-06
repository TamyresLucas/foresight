# React + TypeScript

## Descrição
Padrões e melhores práticas para desenvolvimento de componentes React utilizando TypeScript no Foresight Design System.

## Regras Obrigatórias

### DO
- ✅ Usar componentes funcionais com tipagem explícita
- ✅ Definir interfaces para props com nomes descritivos
- ✅ Usar `forwardRef` com tipagem correta para componentes que precisam de ref
- ✅ Criar hooks personalizados com tipagem completa
- ✅ Utilizar generics quando necessário para componentes reutilizáveis
- ✅ Usar `React.FC` apenas quando necessário para legibilidade
- ✅ Memoizar componentes com `React.memo` quando há props complexas
- ✅ Usar `useMemo` e `useCallback` para otimização de performance

### DON'T
- ❌ Usar `any` sem justificativa
- ❌ Esquecer de tipar retornos de funções
- ❌ Usar type assertions (`as`) sem necessidade
- ❌ Criar componentes com props não documentadas
- ❌ Usar `Function` ou `Object` como tipos
- ❌ Exportar componentes sem tipar props opcionais com `?`

## Exemplos de Código

### Componente Funcional Tipado
```tsx
import React, { forwardRef, useMemo, useCallback } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading = false, children, ...props }, ref) => {
    const buttonClasses = useMemo(() => {
      return `btn btn-${variant} btn-${size} ${loading ? 'btn-loading' : ''}`;
    }, [variant, size, loading]);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!loading && props.onClick) {
          props.onClick(event);
        }
      },
      [loading, props.onClick]
    );

    return (
      <button ref={ref} className={buttonClasses} onClick={handleClick} {...props}>
        {loading ? <Spinner /> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

### Hook Personalizado Tipado
```tsx
import { useState, useCallback } from 'react';

interface UseToggleReturn {
  value: boolean;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
}

export function useToggle(initialValue = false): UseToggleReturn {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse };
}
```

### Componente com Generics
```tsx
import React from 'react';

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

export function List<T>({ items, renderItem, keyExtractor }: ListProps<T>): React.ReactElement {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}
```

## Checklist de Verificação
- [ ] Props estão tipadas com interfaces
- [ ] forwardRef possui tipagem genérica correta
- [ ] Hooks retornam tipos definidos
- [ ] Generics são usados quando apropriado
- [ ] useMemo/useCallback são aplicados para performance
- [ ] Componentes complexos usam React.memo
- [ ] displayName é definido para componentes com forwardRef
- [ ] Não há uso de `any` sem comentário explicativo

## Referências Úteis
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [React forwardRef](https://react.dev/reference/react/forwardRef)
