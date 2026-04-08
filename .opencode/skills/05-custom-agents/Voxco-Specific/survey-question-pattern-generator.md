---
name: "survey-question-pattern-generator"
description: "Generate complete question type implementations for Survey Builder"
category: "Voxco-Specific"
source: "notion"
status: "installed"
date_installed: "2026-04-07"
---

title: survey-question-pattern-generator

description: Generate complete question type implementations for Survey Builder

allowed-tools: Read, Write, Edit, Glob, Grep, Bash

# Survey Question Pattern Generator

## 🎯 Purpose

Accelerate Survey Builder development by auto-generating:

## 🚀 When to Use

## 📋 What It Generates

```javascript
apps/survey-builder/src/components/questions/
├── rating-scale/
│   ├── RatingScaleEditor.tsx      # Edit mode component
│   ├── RatingScalePreview.tsx     # Preview/display component
│   ├── RatingScaleSettings.tsx    # Settings panel
│   ├── RatingScale.types.ts       # TypeScript types
│   ├── RatingScale.schema.ts      # Zod validation
│   ├── RatingScale.stories.tsx    # Storybook stories
│   ├── RatingScale.test.tsx       # Unit tests
│   ├── RatingScale.utils.ts       # Utility functions
│   │   │   index.ts                    # Barrel export
│   │   │   README.md                   # Documentation
```

```typescript
// RatingScale.types.ts
import { BaseQuestion, QuestionSettings } from '@/types/question';

export interface RatingScaleQuestion extends BaseQuestion {
  type: 'rating_scale';
  settings: RatingScaleSettings;
  data?: RatingScaleData;
}

export interface RatingScaleSettings extends QuestionSettings {
  // Scale settings
  min: number;
  max: number;
  step: number;
  
  // Display settings
  showLabels: boolean;
  minLabel?: string;
  maxLabel?: string;
  shape: 'circle' | 'square' | 'star';
  
  // Validation settings
  required: boolean;
  
  // Advanced settings
  allowHalf: boolean;
  showValue: boolean;
}

export interface RatingScaleData {
  value: number;
  timestamp: string;
}

export const DEFAULT_RATING_SCALE_SETTINGS: RatingScaleSettings = {
  min: 1,
  max: 5,
  step: 1,
  showLabels: true,
  shape: 'star',
  required: false,
  allowHalf: false,
  showValue: false
};
```

```typescript
// RatingScale.schema.ts
import { z } from 'zod';

export const ratingScaleSettingsSchema = z.object({
  min: z.number().int().min(0),
  max: z.number().int().max(10),
  step: z.number().positive(),
  showLabels: z.boolean(),
  minLabel: z.string().optional(),
  maxLabel: z.string().optional(),
  shape: z.enum(['circle', 'square', 'star']),
  required: z.boolean(),
  allowHalf: z.boolean(),
  showValue: z.boolean()
}).refine(data => data.max > data.min, {
  message: 'Max must be greater than min'
});

export const ratingScaleDataSchema = z.object({
  value: z.number(),
  timestamp: z.string().datetime()
});

export const ratingScaleQuestionSchema = z.object({
  id: z.string().uuid(),
  type: z.literal('rating_scale'),
  title: z.string().min(1),
  description: z.string().optional(),
  settings: ratingScaleSettingsSchema,
  data: ratingScaleDataSchema.optional()
});
```

```typescript
// RatingScaleEditor.tsx
import React from 'react';
import { RatingScaleQuestion } from './RatingScale.types';
import { Card, Label, RatingInput } from '@voxco/design-system';
import { QuestionEditorProps } from '@/types/question';

export function RatingScaleEditor({
  question,
  onChange,
  onBlur
}: QuestionEditorProps<RatingScaleQuestion>) {
  const { settings } = question;

  return (
    <Card>
      <Label required={settings.required}>
        {question.title}
      </Label>
      
      {question.description && (
        <p className="text-sm text-muted-foreground">
          {question.description}
        </p>
      )}

      <RatingInput
        min={settings.min}
        max={settings.max}
        value={question.data?.value}
        onChange={(value) => {
          onChange({
            ...question,
            data: { value, timestamp: new Date().toISOString() }
          });
        }}
        onBlur={onBlur}
        shape={settings.shape}
        showLabels={settings.showLabels}
        minLabel={settings.minLabel}
        maxLabel={settings.maxLabel}
      />
    </Card>
  );
}
```

```typescript
// RatingScalePreview.tsx
import React from 'react';
import { RatingScaleQuestion } from './RatingScale.types';
import { QuestionPreviewProps } from '@/types/question';

export function RatingScalePreview({
  question,
  showData = true
}: QuestionPreviewProps<RatingScaleQuestion>) {
  const { settings, data } = question;

  return (
    <div className="space-y-2">
      <h3 className="font-medium">{question.title}</h3>
      
      {question.description && (
        <p className="text-sm text-muted-foreground">
          {question.description}
        </p>
      )}

      {showData && data && (
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">{data.value}</span>
          <span className="text-sm text-muted-foreground">
            / {settings.max}
          </span>
        </div>
      )}
    </div>
  );
}
```

```typescript
// RatingScaleSettings.tsx
import React from 'react';
import { RatingScaleSettings as Settings } from './RatingScale.types';
import { Label, Input, Switch, Select } from '@voxco/design-system';
import { SettingsSection } from '@/components/SettingsSection';

export function RatingScaleSettings({
  settings,
  onChange
}: {
  settings: Settings;
  onChange: (settings: Settings) => void;
}) {
  return (
    <div className="space-y-6">
      <SettingsSection title="Scale Settings">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label>Minimum</Label>
            <Input
              type="number"
              value={settings.min}
              onChange={(e) => 
                onChange({ ...settings, min: Number(e.target.value) })
              }
            />
          </div>
          
          <div>
            <Label>Maximum</Label>
            <Input
              type="number"
              value={settings.max}
              onChange={(e) => 
                onChange({ ...settings, max: Number(e.target.value) })
              }
            />
          </div>
          
          <div>
            <Label>Step</Label>
            <Input
              type="number"
              value={settings.step}
              onChange={(e) => 
                onChange({ ...settings, step: Number(e.target.value) })
              }
            />
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title="Display">
        <div className="space-y-4">
          <div>
            <Label>Shape</Label>
            <Select
              value={settings.shape}
              onChange={(value) => 
                onChange({ ...settings, shape: value as any })
              }
              options={[
                { value: 'circle', label: 'Circle' },
                { value: 'square', label: 'Square' },
                { value: 'star', label: 'Star' }
              ]}
            />
          </div>
          
          <Switch
            checked={settings.showLabels}
            onChange={(checked) => 
              onChange({ ...settings, showLabels: checked })
            }
            label="Show labels"
          />
          
          {settings.showLabels && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Min label</Label>
                <Input
                  value={settings.minLabel}
                  onChange={(e) => 
                    onChange({ ...settings, minLabel: e.target.value })
                  }
                  placeholder="e.g., Poor"
                />
              </div>
              
              <div>
                <Label>Max label</Label>
                <Input
                  value={settings.maxLabel}
                  onChange={(e) => 
                    onChange({ ...settings, maxLabel: e.target.value })
                  }
                  placeholder="e.g., Excellent"
                />
              </div>
            </div>
          )}
        </div>
      </SettingsSection>

      <SettingsSection title="Validation">
        <Switch
          checked={settings.required}
          onChange={(checked) => 
            onChange({ ...settings, required: checked })
          }
          label="Required"
        />
      </SettingsSection>
    </div>
  );
}
```

```typescript
// RatingScale.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { RatingScaleEditor } from './RatingScaleEditor';
import { RatingScaleQuestion, DEFAULT_RATING_SCALE_SETTINGS } from './RatingScale.types';

const meta: Meta<typeof RatingScaleEditor> = {
  title: 'Questions/RatingScale',
  component: RatingScaleEditor,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof RatingScaleEditor>;

const baseQuestion: RatingScaleQuestion = {
  id: '1',
  type: 'rating_scale',
  title: 'How satisfied are you with our service?',
  settings: DEFAULT_RATING_SCALE_SETTINGS
};

export const Default: Story = {
  args: {
    question: baseQuestion,
    onChange: (q) => console.log('Changed:', q),
    onBlur: () => console.log('Blurred')
  }
};

export const WithDescription: Story = {
  args: {
    question: {
      ...baseQuestion,
      description: 'Please rate your overall satisfaction'
    },
    onChange: (q) => console.log('Changed:', q)
  }
};

export const Required: Story = {
  args: {
    question: {
      ...baseQuestion,
      settings: { ...DEFAULT_RATING_SCALE_SETTINGS, required: true }
    },
    onChange: (q) => console.log('Changed:', q)
  }
};

export const CustomRange: Story = {
  args: {
    question: {
      ...baseQuestion,
      title: 'On a scale of 1-10, how likely are you to recommend us?',
      settings: {
        ...DEFAULT_RATING_SCALE_SETTINGS,
        min: 1,
        max: 10,
        minLabel: 'Not likely',
        maxLabel: 'Very likely'
      }
    },
    onChange: (q) => console.log('Changed:', q)
  }
};
```

```typescript
// RatingScale.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { RatingScaleEditor } from './RatingScaleEditor';
import { DEFAULT_RATING_SCALE_SETTINGS } from './RatingScale.types';

describe('RatingScaleEditor', () => {
  const mockQuestion = {
    id: '1',
    type: 'rating_scale' as const,
    title: 'Test question',
    settings: DEFAULT_RATING_SCALE_SETTINGS
  };

  it('renders question title', () => {
    render(
      <RatingScaleEditor
        question={mockQuestion}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    );
    
    expect(screen.getByText('Test question')).toBeInTheDocument();
  });

  it('calls onChange when rating is selected', () => {
    const onChange = jest.fn();
    render(
      <RatingScaleEditor
        question={mockQuestion}
        onChange={onChange}
        onBlur={jest.fn()}
      />
    );
    
    // Simulate rating selection
    const rating = screen.getByRole('slider');
    fireEvent.change(rating, { target: { value: '4' } });
    
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({ value: 4 })
      })
    );
  });

  it('shows required indicator when required', () => {
    render(
      <RatingScaleEditor
        question={{
          ...mockQuestion,
          settings: { ...DEFAULT_RATING_SCALE_SETTINGS, required: true }
        }}
        onChange={jest.fn()}
        onBlur={jest.fn()}
      />
    );
    
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
```

```markdown
# Rating Scale Question Type

## Overview
Allows respondents to rate something on a numeric scale.

## Settings

### Scale Settings
- **min** (number): Minimum value (default: 1)
- **max** (number): Maximum value (default: 5)
- **step** (number): Increment step (default: 1)

### Display Settings
- **shape** ('circle' | 'square' | 'star'): Visual style
- **showLabels** (boolean): Show min/max labels
- **minLabel** (string): Label for minimum value
- **maxLabel** (string): Label for maximum value

### Validation
- **required** (boolean): Make question required

## Data Format
```

{

}

```javascript

## Usage Example
```

import { RatingScaleEditor } from './questions/rating-scale';

const question: RatingScaleQuestion = {

};

```javascript

### 9. Notion Database Entry
Auto-creates entry in "Survey Question Types" database:

- **Name:** Rating Scale
- **Type:** rating_scale
- **Category:** Input
- **Status:** ✅ Active
- **Complexity:** Low
- **Use Cases:** Satisfaction surveys, NPS, feedback
- **Settings Count:** 10
- **Has Validation:** Yes
- **Storybook:** \[Link\]
- **Code:** \[GitHub Link\]
```

## 🚀 Usage

```bash
npm run generate:question -- --type "Rating Scale" --category input

# Interactive prompts:
# ? Question type name: Rating Scale
# ? Internal type ID: rating_scale
# ? Category: input
# ? Has custom settings: Yes
# ? Needs validation: Yes
# ? Generate Storybook stories: Yes
# ? Generate tests: Yes
```

```javascript
✅ Generated Rating Scale question type:
   ├── RatingScaleEditor.tsx
   ├── RatingScalePreview.tsx
   ├── RatingScaleSettings.tsx
   ├── RatingScale.types.ts
   ├── RatingScale.schema.ts
   ├── RatingScale.stories.tsx
   ├── RatingScale.test.tsx
   ├── RatingScale.utils.ts
   ├── index.ts
   └── README.md

✅ Created Notion database entry
✅ Registered in question type registry

Next steps:
1. Review generated files
2. Customize settings if needed
3. Run tests: npm test RatingScale
4. View in Storybook: npm run storybook
```

## 🎯 Settings Taxonomy

Ensures compliance with Survey Builder settings taxonomy:

## 📊 Success Metrics

## 🔗 Related Skills

Last Updated:

Status:

Maintained By:

```javascript

```