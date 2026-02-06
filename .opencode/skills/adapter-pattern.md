# Adapter Pattern

## Descrição
Padrão de adapters para migração gradual de componentes legados para o Design System, mantendo compatibilidade retroativa.

## Regras Obrigatórias

### DO
- ✅ Criar adapters quando necessário manter compatibilidade
- ✅ Mapear props legadas para novas props
- ✅ Manter comportamento equivalente
- ✅ Documentar props deprecadas
- ✅ Fornecer caminho de migração claro
- ✅ Adicionar console.warn para props obsoletas

### DON'T
- ❌ Modificar componentes legados diretamente
- ❌ Quebrar APIs existentes sem adaptação
- ❌ Manter adapters indefinidamente
- ❌ Adicionar lógica complexa no adapter
- ❌ Esquecer de testar compatibilidade

## Exemplos de Código

### Adapter Básico
```tsx
// adapters/ButtonAdapter.tsx
import { Button as DSButton } from '@/components/ui/button';
import { ButtonProps as DSButtonProps } from '@/components/ui/button';

/**
 * @deprecated Use Button from '@/components/ui/button' instead
 * Adapter para compatibilidade com componente Button legado
 */
interface LegacyButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

function mapLegacyVariant(variant?: string): DSButtonProps['variant'] {
  const variantMap: Record<string, DSButtonProps['variant']> = {
    primary: 'default',
    secondary: 'secondary',
    danger: 'destructive',
  };
  return variantMap[variant || 'primary'];
}

function mapLegacySize(size?: string): DSButtonProps['size'] {
  const sizeMap: Record<string, DSButtonProps['size']> = {
    small: 'sm',
    medium: 'default',
    large: 'lg',
  };
  return sizeMap[size || 'medium'];
}

export function LegacyButton({
  label,
  onClick,
  variant,
  size,
  disabled,
  loading,
  icon,
  children,
  ...props
}: LegacyButtonProps) {
  // Warning em desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.warn(
      '[Deprecated] LegacyButton is deprecated. ' +
      'Please migrate to Button from @/components/ui/button. ' +
      'This component will be removed in v3.0.0'
    );
    
    if (label && children) {
      console.warn(
        '[LegacyButton] Both label and children provided. ' +
        'Children will take precedence.'
      );
    }
  }

  return (
    <DSButton
      onClick={onClick}
      variant={mapLegacyVariant(variant)}
      size={mapLegacySize(size)}
      disabled={disabled}
      loading={loading}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children || label}
    </DSButton>
  );
}
```

### Adapter com Múltiplos Props
```tsx
// adapters/CardAdapter.tsx
import { Card as DSCard } from '@/components/ui/card';

interface LegacyCardProps {
  title?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  headerAction?: React.ReactNode;
  bordered?: boolean;
  shadow?: 'none' | 'small' | 'medium' | 'large';
  padding?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
  children?: React.ReactNode;
}

function mapShadow(shadow?: string): string {
  const shadowMap: Record<string, string> = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
  };
  return shadowMap[shadow || 'small'];
}

function mapPadding(padding?: string): string {
  const paddingMap: Record<string, string> = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8',
  };
  return paddingMap[padding || 'medium'];
}

export function LegacyCard({
  title,
  content,
  footer,
  headerAction,
  bordered = true,
  shadow,
  padding,
  className,
  children,
}: LegacyCardProps) {
  const shadowClass = mapShadow(shadow);
  const paddingClass = mapPadding(padding);

  return (
    <DSCard
      className={cn(
        shadowClass,
        !bordered && 'border-0',
        className
      )}
    >
      {(title || headerAction) && (
        <DSCard.Header className="flex justify-between items-center">
          {title && <DSCard.Title>{title}</DSCard.Title>}
          {headerAction}
        </DSCard.Header>
      )}
      
      <DSCard.Body className={paddingClass}>
        {children || content}
      </DSCard.Body>
      
      {footer && (
        <DSCard.Footer>
          {footer}
        </DSCard.Footer>
      )}
    </DSCard>
  );
}
```

### Adapter com Comportamento Compatível
```tsx
// adapters/InputAdapter.tsx
import { Input as DSInput } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface LegacyInputProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export function LegacyInput({
  name,
  value,
  defaultValue,
  placeholder,
  label,
  error,
  helperText,
  required,
  disabled,
  readOnly,
  onChange,
  onBlur,
  onFocus,
  inputProps,
}: LegacyInputProps) {
  const inputId = name || useId();
  const hasError = Boolean(error);

  // Legacy onChange recebia string, DS recebe evento
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    inputProps?.onChange?.(e);
  };

  return (
    <div className="space-y-2">
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      )}
      
      <DSInput
        id={inputId}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={hasError}
        aria-describedby={error ? `${inputId}-error` : undefined}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        className={cn(hasError && "border-red-500 focus-visible:ring-red-500")}
        {...inputProps}
      />
      
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-500">
          {error}
        </p>
      )}
      
      {helperText && !error && (
        <p className="text-sm text-muted-foreground">
          {helperText}
        </p>
      )}
    </div>
  );
}
```

### Quando Criar um Adapter vs Migrar Direto

| Situação | Recomendação |
|----------|--------------|
| Componente usado em 50+ lugares | Criar adapter |
| Breaking change em props | Criar adapter com warnings |
| Migration simples (1-2 props) | Migrar direto |
| Componente crítico para negócio | Criar adapter + testes extensivos |
| Deadline curto | Criar adapter, migrar depois |
| Testes não existem | Criar adapter, adicionar testes, depois migrar |

## Checklist de Verificação
- [ ] Props legadas mapeadas corretamente
- [ ] console.warn adicionado para uso do adapter
- [ ] Comportamento preservado da API antiga
- [ ] Documentação de migração incluída
- [ ] Adapter testado contra componente legado
- [ ] Data de deprecação definida
- [ ] Testes cobrem casos edge da API legada
- [ ] Adapter exportado com nome Legacy*

## Referências Úteis
- [Adapter Pattern](https://refactoring.guru/design-patterns/adapter)
[Deprecation Strategies](https://semver.org/)
[console.warn MDN](https://developer.mozilla.org/en-US/docs/Web/API/console/warn)
