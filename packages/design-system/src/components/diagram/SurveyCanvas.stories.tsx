import type { Meta, StoryObj } from '@storybook/react';

/**
 * Placeholder for the Survey Canvas section.
 * Survey Canvas components will be documented here.
 */
const meta: Meta = {
    title: 'Survey Builder/Survey Canvas',
    parameters: {
        docs: {
            description: {
                component: `
# Survey Canvas

The **Survey Canvas** is the main editing area where survey authors drag, arrange, and configure question blocks.

## Planned Components

- **CanvasBoard** — the droppable canvas surface
- **QuestionBlock** — draggable question card within the canvas
- **SectionDivider** — visual separator between survey sections
- **CanvasToolbar** — floating toolbar for canvas-level actions (add, delete, reorder)
                `,
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
    render: () => (
        <div className="p-8 text-muted-foreground text-sm">
            Survey Canvas components coming soon.
        </div>
    ),
};
