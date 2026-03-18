import type { Meta, StoryObj } from '@storybook/react';
import { DiagramCanvas } from './DiagramCanvas';
import type { Node } from '@xyflow/react';

const meta: Meta = {
    title: 'Survey Builder/Logic/Nodes/DescriptionNode',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
**DescriptionNode** is a read-only informational block — no question, no answer.

Use it to:
- Display instructions before a section of questions
- Show conditional messages ("Thank you for your positive feedback!")
- Add section headers or explanatory context between questions

The body scrolls if content exceeds 6 lines (\`max-h-24 overflow-y-auto\`).
Has one **input handle** (left) and one **output handle** (right).
                `,
            },
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: 500, height: 280 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const node = (data: Record<string, unknown>, overrides?: Partial<Node>): Node[] => [
    {
        id: 'desc1',
        type: 'description',
        position: { x: 80, y: 60 },
        data,
        ...overrides,
    },
];

/** Short informational message shown conditionally in a flow. */
export const Default: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node({ question: 'Thank you for your positive feedback! We appreciate your support.' })}
            edges={[]}
            showControls={false}
            showBackground={false}
            fitView
            nodesDraggable={false}
            panOnDrag={false}
            zoomOnScroll={false}
        />
    ),
};

/** Instructions block before a group of questions. */
export const Instructions: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node({
                question:
                    'The following questions are about your recent purchase. Please answer as accurately as possible. This section should take about 2 minutes.',
            })}
            edges={[]}
            showControls={false}
            showBackground={false}
            fitView
            nodesDraggable={false}
            panOnDrag={false}
            zoomOnScroll={false}
        />
    ),
};

/** Long content that activates internal scroll. */
export const LongContent: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node({
                question:
                    'Welcome to our annual satisfaction survey.\n\nYour feedback is invaluable and helps us improve our services. ' +
                    'This survey will take approximately 5 minutes to complete.\n\n' +
                    'All responses are anonymous and will only be used in aggregate form.\n\n' +
                    'Thank you for taking the time to share your thoughts with us.',
            })}
            edges={[]}
            showControls={false}
            showBackground={false}
            fitView
            nodesDraggable={false}
            panOnDrag={false}
            zoomOnScroll={false}
        />
    ),
};

/** Selected state — primary border and deeper shadow. */
export const Selected: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node(
                { question: 'Please complete the section below.' },
                { selected: true }
            )}
            edges={[]}
            showControls={false}
            showBackground={false}
            fitView
            nodesDraggable={false}
            panOnDrag={false}
            zoomOnScroll={false}
        />
    ),
};
