# Storybook Patterns

## Descrição
Padrões para criação de stories no Storybook para documentação e teste de componentes do Foresight Design System.

## Regras Obrigatórias

### DO
- ✅ Usar estrutura padrão: Meta e StoryObj
- ✅ Definir args para todos os casos comuns
- ✅ Usar argTypes para controlar props nos controls
- ✅ Criar stories para todas as variantes do componente
- ✅ Documentar componentes com JSDoc
- ✅ Usar decorators quando necessário
- ✅ Adicionar testes de interação

### DON'T
- ❌ Criar stories sem tipagem TypeScript
- ❌ Deixar props sem controle nos controls
- ❌ Duplicar código entre stories
- ❌ Ignorar casos de erro/loading
- ❌ Criar stories sem contexto realista

## Exemplos de Código

### Estrutura Básica de Story
```tsx
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether to show loading state',
    },
    children: {
      control: 'text',
      description: 'Button content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading...',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};
```

### Componente com JSDoc
```tsx
// Card.tsx
import * as React from 'react';

export interface CardProps {
  /**
   * The title displayed at the top of the card
   */
  title?: string;
  /**
   * Optional description text
   */
  description?: string;
  /**
   * Content of the card
   */
  children?: React.ReactNode;
  /**
   * Visual style variant
   * @default 'default'
   */
  variant?: 'default' | 'outline' | 'elevated';
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Click handler for the entire card
   */
  onClick?: () => void;
}

/**
 * Card component for displaying content in a contained format.
 * 
 * ## Usage
 * ```tsx
 * <Card title="My Card" description="Card description">
 *   Card content goes here
 * </Card>
 * ```
 * 
 * ## Accessibility
 * - When onClick is provided, card is keyboard accessible
 * - Title is rendered as h3 for proper heading hierarchy
 */
export function Card({ 
  title, 
  description, 
  children, 
  variant = 'default',
  className,
  onClick 
}: CardProps) {
  // ... implementation
}
```

### Usando Decorators
```tsx
// SurveyCard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SurveyCard } from './SurveyCard';

const meta: Meta<typeof SurveyCard> = {
  title: 'Survey/Card',
  component: SurveyCard,
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-50">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    status: {
      control: 'select',
      options: ['draft', 'active', 'completed', 'archived'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof SurveyCard>;

export const Default: Story = {
  args: {
    title: 'Customer Satisfaction Survey',
    description: 'Q2 2024 customer feedback survey',
    status: 'active',
    responseCount: 152,
  },
};

export const WithCanvasDecorator: Story = {
  decorators: [
    (Story) => (
      <div className="w-[800px] h-[600px] bg-white border rounded-lg">
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Canvas View',
    description: 'Displayed within canvas',
    status: 'draft',
  },
};
```

### Testes de Interação
```tsx
// Button.stories.tsx
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const ClickInteraction: Story = {
  args: {
    children: 'Click me',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });
    
    // Test click interaction
    await userEvent.click(button);
    
    // Verify button is still in document
    await expect(button).toBeInTheDocument();
    
    // Test focus state
    await userEvent.tab();
    await expect(button).toHaveFocus();
  },
};

export const FormSubmit: Story = {
  render: (args) => (
    <form onSubmit={(e) => { e.preventDefault(); alert('Submitted!'); }}>
      <Button type="submit" {...args}>Submit</Button>
    </form>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const submitButton = canvas.getByRole('button', { name: /submit/i });
    
    await userEvent.click(submitButton);
    
    // Wait for alert (or mock submission handler)
    await waitFor(() => {
      // Assertions here
    });
  },
};
```

### Story com Dados Complexos
```tsx
// SurveyBuilder.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { SurveyBuilder } from './SurveyBuilder';

const meta: Meta<typeof SurveyBuilder> = {
  title: 'Survey/Builder',
  component: SurveyBuilder,
};

export default meta;

type Story = StoryObj<typeof SurveyBuilder>;

const sampleSurvey = {
  id: 'survey-1',
  title: 'Employee Engagement',
  questions: [
    {
      id: 'q1',
      type: 'multiple_choice',
      title: 'How satisfied are you with your job?',
      options: [
        { id: 'opt1', label: 'Very Satisfied' },
        { id: 'opt2', label: 'Satisfied' },
        { id: 'opt3', label: 'Neutral' },
        { id: 'opt4', label: 'Dissatisfied' },
      ],
    },
    {
      id: 'q2',
      type: 'text',
      title: 'What can we improve?',
      required: true,
    },
  ],
};

export const Empty: Story = {
  args: {
    initialData: {
      id: 'new-survey',
      title: 'New Survey',
      questions: [],
    },
  },
};

export const WithQuestions: Story = {
  args: {
    initialData: sampleSurvey,
  },
};

export const Loading: Story = {
  args: {
    initialData: sampleSurvey,
    loading: true,
  },
};
```

## Checklist de Verificação
- [ ] Meta e StoryObj estão tipados corretamente
- [ ] Todos os args possuem valores default
- [ ] argTypes controlam todas as props interativas
- [ ] Stories cobrem todas as variantes
- [ ] Componente possui JSDoc completo
- [ ] Decorators são usados para contexto visual
- [ ] Testes de interação são incluídos quando apropriado
- [ ] Stories incluem casos de loading/error
- [ ] Organização segue hierarquia: UI/Survey/etc.

## Referências Úteis
- [Storybook for React](https://storybook.js.org/docs/react/get-started/introduction)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Args](https://storybook.js.org/docs/react/writing-stories/args)
- [Interaction Testing](https://storybook.js.org/docs/react/writing-tests/interaction-testing)
- [JSDoc](https://storybook.js.org/docs/react/api/doc-block-description)
