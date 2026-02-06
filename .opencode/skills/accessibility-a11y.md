# Accessibility (A11y)

## Descrição
Diretrizes de acessibilidade para componentes do Foresight Design System, garantindo inclusão e conformidade com WCAG.

## Regras Obrigatórias

### DO
- ✅ Usar elementos HTML semânticos apropriados
- ✅ Implementar atributos ARIA quando necessário
- ✅ Garantir navegação completa por teclado
- ✅ Manter contraste de cor mínimo 4.5:1 (WCAG AA)
- ✅ Fornecer labels para inputs
- ✅ Gerenciar focus visibility
- ✅ Testar com screen readers

### DON'T
- ❌ Usar divs para botões ou links
- ❌ Esquecer alt text em imagens
- ❌ Criar conteúdo que só é acessível via mouse
- ❌ Usar cores como único indicador de estado
- ❌ Definir outline: none sem substituto
- ❌ Esquecer aria-label em ícones

## Exemplos de Código

### Atributos ARIA Essenciais
```tsx
// Dialog/Modal
function Dialog({ isOpen, onClose, title, children }: DialogProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className={cn("dialog", isOpen && "dialog-open")}
    >
      <h2 id="dialog-title">{title}</h2>
      <div id="dialog-description">{children}</div>
      <button onClick={onClose} aria-label="Close dialog">
        <XIcon />
      </button>
    </div>
  );
}

// Alert
function Alert({ type, message }: AlertProps) {
  return (
    <div
      role="alert"
      aria-live="polite"
      aria-atomic="true"
      className={`alert alert-${type}`}
    >
      {message}
    </div>
  );
}

// Tabs
function Tabs({ children, activeTab }: TabsProps) {
  return (
    <div role="tablist" aria-label="Survey sections">
      {children}
    </div>
  );
}

function Tab({ isActive, onClick, children }: TabProps) {
  return (
    <button
      role="tab"
      aria-selected={isActive}
      aria-controls={`panel-${children}`}
      tabIndex={isActive ? 0 : -1}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### Navegação por Teclado
```tsx
// Keyboard navigation for dropdown
function Dropdown({ trigger, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        triggerRef.current?.focus();
        break;
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex((prev) => 
          prev < items.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex((prev) => 
          prev > 0 ? prev - 1 : items.length - 1
        );
        break;
      case 'Home':
        event.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        event.preventDefault();
        setActiveIndex(items.length - 1);
        break;
    }
  };

  useEffect(() => {
    if (isOpen && activeIndex >= 0) {
      itemRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex, isOpen]);

  return (
    <div onKeyDown={handleKeyDown}>
      <button
        ref={triggerRef}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </button>
      {isOpen && (
        <div role="menu">
          {items.map((item, index) => (
            <button
              key={item.id}
              ref={(el) => { itemRefs.current[index] = el; }}
              role="menuitem"
              tabIndex={-1}
              onClick={item.onClick}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Screen Readers
```tsx
// Visually hidden text for screen readers
function VisuallyHidden({ children }: { children: React.ReactNode }) {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
}

// Status announcements
function useAnnouncer() {
  const announce = useCallback((message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', priority);
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  }, []);

  return { announce };
}

// Usage
function SurveyBuilder() {
  const { announce } = useAnnouncer();
  
  const handleDelete = () => {
    deleteQuestion();
    announce('Question deleted successfully', 'polite');
  };
}
```

### Contrastes de Cor
```tsx
// Helper para verificar contraste
function getContrastRatio(color1: string, color2: string): number {
  // Implementação simplificada
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

// Componente com validação de contraste
function AccessibleButton({ 
  bgColor = '#3b82f6', 
  textColor = '#ffffff',
  children 
}: ButtonProps) {
  const ratio = getContrastRatio(bgColor, textColor);
  
  if (ratio < 4.5) {
    console.warn(`Contrast ratio ${ratio.toFixed(2)} does not meet WCAG AA standards`);
  }
  
  return (
    <button 
      style={{ backgroundColor: bgColor, color: textColor }}
      className="px-4 py-2 rounded"
    >
      {children}
    </button>
  );
}
```

### Labels e Inputs
```tsx
// Always associate labels with inputs
function FormField({ 
  id, 
  label, 
  error,
  required = false,
  children 
}: FormFieldProps) {
  const fieldId = id || useId();
  const errorId = `${fieldId}-error`;
  
  return (
    <div className="form-field">
      <label htmlFor={fieldId}>
        {label}
        {required && <span aria-label="required"> *</span>}
      </label>
      {React.cloneElement(children as React.ReactElement, {
        id: fieldId,
        'aria-invalid': !!error,
        'aria-describedby': error ? errorId : undefined,
        'aria-required': required,
      })}
      {error && (
        <span id={errorId} role="alert" className="error">
          {error}
        </span>
      )}
    </div>
  );
}

// Icon buttons must have accessible labels
function IconButton({ icon, label, ...props }: IconButtonProps) {
  return (
    <button 
      type="button"
      aria-label={label}
      {...props}
    >
      {icon}
    </button>
  );
}
```

## Checklist de Verificação
- [ ] Componente usa elementos semânticos HTML5
- [ ] ARIA attributes são aplicados quando necessário
- [ ] Navegação por teclado funciona completamente
- [ ] Focus é gerenciado em modais/dropdowns
- [ ] Contrast ratio é >= 4.5:1
- [ ] Imagens possuem alt text significativo
- [ ] Formulários possuem labels associados
- [ ] Status/erros são anunciados via aria-live
- [ ] Componente foi testado com NVDA/VoiceOver
- [ ] Skip links estão disponíveis quando necessário

## Referências Úteis
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [a11y Project Checklist](https://www.a11yproject.com/checklist/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Accessibility Tool](https://wave.webaim.org/)
