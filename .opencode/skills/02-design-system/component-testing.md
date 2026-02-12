# Component Testing

## Descrição
Estratégias e padrões para testes de componentes no Foresight Design System, garantindo qualidade e confiabilidade.

## Regras Obrigatórias

### DO
- ✅ Usar Storybook Interaction Tests para testes visuais
- ✅ Usar Testing Library para testes de comportamento
- ✅ Incluir testes de acessibilidade com axe
- ✅ Criar snapshot tests para regressões visuais
- ✅ Usar Chromatic para testes visuais automatizados
- ✅ Manter cobertura mínima de 80%

### DON'T
- ❌ Testar detalhes de implementação interna
- ❌ Usar enzyme (preferir Testing Library)
- ❌ Testar estilos inline diretamente
- ❌ Ignorar testes de interação
- ❌ Deixar console.errors nos testes

## Exemplos de Código

### Storybook Interaction Tests
```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, expect, waitFor } from '@storybook/testing-library';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ClickTest: Story = {
  args: {
    children: 'Click me',
    onClick: () => console.log('Clicked!'),
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });
    
    // Test initial state
    await expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
    
    // Test click
    await userEvent.click(button);
    
    // Test focus
    await userEvent.tab();
    await expect(button).toHaveFocus();
  },
};

export const LoadingTest: Story = {
  args: {
    children: 'Submit',
    loading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    
    await expect(button).toBeDisabled();
    await expect(canvas.getByRole('status')).toBeInTheDocument();
  },
};

export const FormIntegration: Story = {
  render: () => {
    const [submitted, setSubmitted] = useState(false);
    return (
      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <input type="text" name="email" placeholder="Email" />
        <Button type="submit">Submit</Button>
        {submitted && <div role="alert">Form submitted!</div>}
      </form>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('Email');
    const button = canvas.getByRole('button', { name: /submit/i });
    
    await userEvent.type(input, 'test@example.com');
    await userEvent.click(button);
    
    await waitFor(() => {
      expect(canvas.getByRole('alert')).toHaveTextContent('Form submitted!');
    });
  },
};
```

### Testing Library - Comportamento
```tsx
// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('shows loading spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('forwards ref correctly', () => {
    const ref = jest.fn();
    render(<Button ref={ref}>Button</Button>);
    expect(ref).toHaveBeenCalled();
  });

  it('is keyboard accessible', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Press Enter</Button>);
    
    const button = screen.getByRole('button');
    button.focus();
    await userEvent.keyboard('{Enter}');
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

### Testes de Acessibilidade (axe)
```tsx
// accessibility.test.tsx
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from './Button';
import { Card } from './Card';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('Button has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Card has no accessibility violations', async () => {
    const { container } = render(
      <Card title="Test Card" description="Test description">
        Content
      </Card>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('Form components have proper labels', async () => {
    const { container } = render(
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <Button type="submit">Submit</Button>
      </form>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Snapshot Testing
```tsx
// __snapshots__/Button.test.tsx.snap
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('Button Snapshots', () => {
  it('matches snapshot with default props', () => {
    const { container } = render(<Button>Default</Button>);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with primary variant', () => {
    const { container } = render(<Button variant="primary">Primary</Button>);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with loading state', () => {
    const { container } = render(<Button loading>Loading</Button>);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with disabled state', () => {
    const { container } = render(<Button disabled>Disabled</Button>);
    expect(container).toMatchSnapshot();
  });
});
```

### Testes Visuais (Chromatic)
```tsx
// .storybook/preview.js
export const parameters = {
  chromatic: {
    // Delay to ensure animations complete
    delay: 300,
    // Viewport sizes to test
    viewports: [320, 768, 1280],
    // Diff threshold
    diffThreshold: 0.2,
  },
};

// Button.stories.tsx
export const ChromaticVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};

export const ChromaticSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
```

### Configuração de Cobertura
```json
// jest.config.js
module.exports = {
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ['text', 'text-summary', 'lcov', 'html'],
};
```

### Testes de Integração
```tsx
// SurveyBuilder.integration.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SurveyBuilder } from './SurveyBuilder';

describe('SurveyBuilder Integration', () => {
  it('allows creating a complete survey', async () => {
    render(<SurveyBuilder />);
    
    // Add title
    await userEvent.type(
      screen.getByLabelText(/survey title/i),
      'Customer Feedback'
    );
    
    // Add question
    await userEvent.click(screen.getByText(/add question/i));
    await userEvent.type(
      screen.getByPlaceholderText(/question text/i),
      'How satisfied are you?'
    );
    
    // Add options
    await userEvent.click(screen.getByText(/add option/i));
    await userEvent.type(
      screen.getAllByPlaceholderText(/option/i)[0],
      'Very Satisfied'
    );
    
    // Save survey
    await userEvent.click(screen.getByText(/save/i));
    
    await waitFor(() => {
      expect(screen.getByText(/survey saved/i)).toBeInTheDocument();
    });
  });

  it('validates required fields', async () => {
    render(<SurveyBuilder />);
    
    await userEvent.click(screen.getByText(/save/i));
    
    expect(screen.getByText(/title is required/i)).toBeInTheDocument();
  });
});
```

## Checklist de Verificação
- [ ] Storybook interaction tests para cada componente
- [ ] Testing Library tests para comportamento
- [ ] axe accessibility tests incluídos
- [ ] Snapshot tests para regressões visuais
- [ ] Chromatic configurado para visual regression
- [ ] Cobertura mínima de 80% atingida
- [ ] Testes de integração para fluxos principais
- [ ] Nenhum console.error nos testes
- [ ] Mock functions limpos após cada teste

## Referências Úteis
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Storybook Interaction Testing](https://storybook.js.org/docs/react/writing-tests/interaction-testing)
- [jest-axe](https://github.com/nickcolley/jest-axe)
[Chromatic](https://www.chromatic.com/)
[Jest Snapshot Testing](https://jestjs.io/docs/snapshot-testing)
