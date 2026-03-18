import type { Meta, StoryObj } from '@storybook/react';
import { DiagramCanvas } from './DiagramCanvas';
import type { Node } from '@xyflow/react';

const meta: Meta = {
    title: 'Survey Builder/Logic/Nodes/MultipleChoiceNode',
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: `
**MultipleChoiceNode** renders a question with a list of selectable options.

Each option gets its own **output handle** on the right, allowing conditional branching — different choices can route respondents to different parts of the survey.

### Subtypes

| Subtype | Icon | Behavior |
|---------|------|----------|
| \`radio\` | ○ Circle | Single selection — respondent picks one |
| \`checkbox\` | □ Square | Multi-selection — respondent picks many |

### Structure
- **Header**: \`variableName\` (bold) + \`question\` (truncated)
- **Options list**: each option row has a radio/checkbox indicator, label text, and its own output handle
- **Input handle**: one on the left of the node (incoming connection)
                `,
            },
        },
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ width: 500, height: 340 }}>
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
        type: 'multipleChoice',
        position: { x: 80, y: 30 },
        data,
        ...overrides,
    },
];

const satisfactionOptions = [
    { id: 'opt1', text: 'Very Satisfied' },
    { id: 'opt2', text: 'Satisfied' },
    { id: 'opt3', text: 'Neutral' },
    { id: 'opt4', text: 'Dissatisfied' },
];

const recommendOptions = [
    { id: 'rec1', text: 'To friends' },
    { id: 'rec2', text: 'To family' },
    { id: 'rec3', text: 'To colleagues' },
];

/**
 * Radio subtype — single selection. Each option has its own output handle
 * so the flow can branch based on the respondent's answer.
 */
export const Radio: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node({
                variableName: 'Q1',
                question: 'How satisfied are you with our service?',
                subtype: 'radio',
                options: satisfactionOptions,
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

/**
 * Checkbox subtype — multi-selection. Same branching structure as radio
 * but the indicator is a square instead of a circle.
 */
export const Checkbox: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node({
                variableName: 'Q3',
                question: 'Who would you recommend us to?',
                subtype: 'checkbox',
                options: recommendOptions,
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

/** Selected state for a radio node — primary border and deeper shadow. */
export const RadioSelected: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node(
                {
                    variableName: 'Q1',
                    question: 'How satisfied are you with our service?',
                    subtype: 'radio',
                    options: satisfactionOptions,
                },
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

/** Only two options — minimal branching scenario. */
export const TwoOptions: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node({
                variableName: 'Q2',
                question: 'Have you used our product before?',
                subtype: 'radio',
                options: [
                    { id: 'yes', text: 'Yes' },
                    { id: 'no', text: 'No' },
                ],
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

/** Many options — shows how the node scales with more choices. */
export const ManyOptions: Story = {
    render: () => (
        <DiagramCanvas
            nodes={node({
                variableName: 'Dept',
                question: 'Which department do you work in?',
                subtype: 'radio',
                options: [
                    { id: 'd1', text: 'Engineering' },
                    { id: 'd2', text: 'Product' },
                    { id: 'd3', text: 'Design' },
                    { id: 'd4', text: 'Marketing' },
                    { id: 'd5', text: 'Sales' },
                    { id: 'd6', text: 'Operations' },
                ],
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
    decorators: [
        (Story) => (
            <div style={{ width: 500, height: 460 }}>
                <Story />
            </div>
        ),
    ],
};
