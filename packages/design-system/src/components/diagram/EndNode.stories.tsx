import type { Meta, StoryObj } from '@storybook/react';
import { DiagramCanvas } from './DiagramCanvas';
import type { Node } from '@xyflow/react';

const meta: Meta = {
    title: 'Survey Builder/Logic/Nodes/EndNode',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
**EndNode** marks the exit point of a survey flow.

- Always the last node in a diagram
- Has a single **input handle** (left side) to receive connections from question nodes
- Uses \`border-success\` for its border and a green check-circle icon
- Label is configurable via \`data.label\` (defaults to \`"End of Survey"\`)
- A survey can have multiple end nodes for branching flows that terminate differently
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
        id: 'end',
        type: 'end',
        position: { x: 100, y: 70 },
        data: { label: 'End of Survey' },
        ...overrides,
    },
];

/** Default end node with the standard label. */
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

/** End node in selected state — border becomes thicker. */
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

/** Custom label for a specific survey completion state. */
export const CustomLabel: Story = {
    render: () => (
        <DiagramCanvas
            nodes={baseNode({ data: { label: 'Survey Complete' } })}
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
