import type { Meta, StoryObj } from '@storybook/react';
import { DiagramCanvas } from './DiagramCanvas';
import type { Node } from '@xyflow/react';

const meta: Meta = {
    title: 'Survey Builder/Logic/Nodes/TextEntryNode',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
**TextEntryNode** represents an open-ended question where the respondent types a free-text answer.

- Header shows \`variableName\` (bold) + \`question\` text
- Body shows a static placeholder: *"Respondent provides a text-based answer."*
- Has one **input handle** (left) and one **output handle** (right)
- Use for: names, emails, comments, open feedback, numeric inputs
                `,
            },
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: 500, height: 250 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const node = (data: Record<string, unknown>, overrides?: Partial<Node>): Node[] => [
    {
        id: 'q1',
        type: 'textEntry',
        position: { x: 80, y: 60 },
        data,
        ...overrides,
    },
];

/** A short question with a variable name. */
export const Default: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node({ variableName: 'Q1', question: 'What is your name?' })}
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

/** Long question text that gets truncated in the header. */
export const LongQuestion: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node({
                variableName: 'Feedback',
                question: 'Please describe in detail your overall experience with our product and support team.',
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
                { variableName: 'Email', question: 'What is your email address?' },
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
