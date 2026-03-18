import type { Meta, StoryObj } from '@storybook/react';
import { DiagramCanvas } from './DiagramCanvas';
import type { Node } from '@xyflow/react';

const meta: Meta = {
    title: 'Survey Builder/Logic/Nodes/StartNode',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
**StartNode** marks the entry point of a survey flow.

- Always the first node in a diagram
- Has a single **output handle** (right side) to connect to the first question
- Uses \`border-success\` for its border, thicker when selected
- Label is configurable via \`data.label\` (defaults to \`"Start of Survey"\`)
                `,
            },
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: 400, height: 200 }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const baseNode = (overrides?: Partial<Node>): Node[] => [
    {
        id: 'start',
        type: 'start',
        position: { x: 100, y: 70 },
        data: { label: 'Start of Survey' },
        ...overrides,
    },
];

/** Default start node with the standard label. */
export const Default: Story = {
    render: () => (
        <DiagramCanvas
            nodes={baseNode()}
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

/** Start node in selected state — border becomes thicker. */
export const Selected: Story = {
    render: () => (
        <DiagramCanvas
            nodes={baseNode({ selected: true })}
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

/** Custom label text via \`data.label\`. */
export const CustomLabel: Story = {
    render: () => (
        <DiagramCanvas
            nodes={baseNode({ data: { label: 'Begin Onboarding' } })}
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
