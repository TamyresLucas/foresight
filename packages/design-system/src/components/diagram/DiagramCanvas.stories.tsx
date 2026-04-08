import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
    useNodesState,
    useEdgesState,
    BackgroundVariant,
    type Node,
    type Edge,
} from '@xyflow/react';
import { DiagramCanvas } from './DiagramCanvas';

// ---------------------------------------------------------------------------
// Seed data — nodes & edges já no formato React Flow
// ---------------------------------------------------------------------------
const START_NODE: Node = {
    id: 'start',
    type: 'start',
    position: { x: 300, y: 40 },
    data: { label: 'Start' },
};

const END_NODE: Node = {
    id: 'end',
    type: 'end',
    position: { x: 300, y: 600 },
    data: { label: 'End' },
};

const MC_NODE: Node = {
    id: 'mc-1',
    type: 'multipleChoice',
    position: { x: 200, y: 160 },
    data: {
        variableName: 'Q1',
        question: 'How satisfied are you?',
        subtype: 'radio',
        options: [
            { id: 'opt1', text: 'Very satisfied' },
            { id: 'opt2', text: 'Satisfied' },
            { id: 'opt3', text: 'Neutral' },
            { id: 'opt4', text: 'Dissatisfied' },
        ],
    },
};

const TEXT_NODE: Node = {
    id: 'text-1',
    type: 'textEntry',
    position: { x: 200, y: 360 },
    data: {
        variableName: 'Q2',
        question: 'Any additional comments?',
    },
};

const DESC_NODE: Node = {
    id: 'desc-1',
    type: 'description',
    position: { x: 600, y: 160 },
    data: {
        question: 'Please answer the following questions honestly.',
    },
};

// Edges
const BASE_EDGES: Edge[] = [
    { id: 'e-start-mc', source: 'start', target: 'mc-1', animated: false },
    {
        id: 'e-mc-text',
        source: 'mc-1',
        sourceHandle: 'opt1',
        target: 'text-1',
        targetHandle: 'input',
        label: 'Very satisfied',
    },
    {
        id: 'e-mc-end',
        source: 'mc-1',
        sourceHandle: 'opt4',
        target: 'end',
        targetHandle: 'input',
        label: 'Dissatisfied',
    },
    { id: 'e-text-end', source: 'text-1', sourceHandle: 'output', target: 'end', targetHandle: 'input' },
];

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------
const meta: Meta<typeof DiagramCanvas> = {
    title: 'Survey Builder/Logic/DiagramCanvas',
    component: DiagramCanvas,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'A React Flow-based diagram canvas for visualizing survey flows. ' +
                    'Accepts pre-formatted `nodes` and `edges` — survey-to-diagram ' +
                    'conversion must happen upstream (e.g. via a `useSurveyDiagram` hook). ' +
                    'Wrapped internally in `ReactFlowProvider`; no external provider needed.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        showControls: { control: 'boolean' },
        showBackground: { control: 'boolean' },
        backgroundVariant: {
            control: 'select',
            options: Object.values(BackgroundVariant),
        },
        nodesDraggable: { control: 'boolean' },
        panOnDrag: { control: 'boolean' },
        zoomOnScroll: { control: 'boolean' },
        fitView: { control: 'boolean' },
        // handlers — hide from controls table, keep in props table
        onNodeClick: { action: 'nodeClicked' },
        onNodesChange: { action: 'nodesChanged' },
        onEdgesChange: { action: 'edgesChanged' },
        // slots rendered by ReactFlow — suppress docgen noise
        nodes: { control: false },
        edges: { control: false },
    },
};

export default meta;
type Story = StoryObj<typeof DiagramCanvas>;

// ---------------------------------------------------------------------------
// Helper: interactive wrapper (useNodesState / useEdgesState)
// ---------------------------------------------------------------------------
function InteractiveCanvas(
    props: React.ComponentProps<typeof DiagramCanvas> & {
        initialNodes: Node[];
        initialEdges: Edge[];
    },
) {
    const { initialNodes, initialEdges, ...rest } = props;
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);
    return (
        <DiagramCanvas
            {...rest}
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
        />
    );
}

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------
/**
 * Full interactive survey flow with all node types connected.
 * Nodes are draggable and edges are live — mirrors real usage.
 */
export const FullSurveyFlow: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Full Survey Flow',
    render: (args) => (
        <div style={{ width: '100%', height: '600px' }}>
            <InteractiveCanvas
                {...args}
                initialNodes={[START_NODE, MC_NODE, TEXT_NODE, DESC_NODE, END_NODE]}
                initialEdges={BASE_EDGES}
            />
        </div>
    ),
    args: {
        showControls: true,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Dots,
        nodesDraggable: true,
        panOnDrag: true,
        zoomOnScroll: true,
        fitView: true,
    },
};

/**
 * Minimal flow — Start → End only.
 * Useful for testing the canvas renders with the smallest valid input.
 */
export const MinimalFlow: Story = {
// eslint-disable-next-line storybook/no-redundant-story-name
    name: 'Minimal Flow',
    render: (args) => (
        <div style={{ width: '100%', height: '400px' }}>
            <InteractiveCanvas
                {...args}
                initialNodes={[START_NODE, END_NODE]}
                initialEdges={[{ id: 'e-start-end', source: 'start', target: 'end' }]}
            />
        </div>
    ),
    args: {
        showControls: true,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Dots,
        nodesDraggable: true,
        panOnDrag: true,
        zoomOnScroll: true,
        fitView: true,
    },
};

/**
 * Start node in isolation — verifies --success border and label rendering.
 */
export const StartNodeStory: Story = {
    name: 'Node › Start',
    render: (args) => (
        <div style={{ width: '100%', height: '300px' }}>
            <DiagramCanvas
                {...args}
                nodes={[{ ...START_NODE, position: { x: 200, y: 100 } }]}
                edges={[]}
            />
        </div>
    ),
    args: {
        showControls: false,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Dots,
        nodesDraggable: false,
        fitView: true,
    },
};

/**
 * End node in isolation — verifies --success border and label rendering.
 */
export const EndNodeStory: Story = {
    name: 'Node › End',
    render: (args) => (
        <div style={{ width: '100%', height: '300px' }}>
            <DiagramCanvas
                {...args}
                nodes={[{ ...END_NODE, position: { x: 200, y: 100 } }]}
                edges={[]}
            />
        </div>
    ),
    args: {
        showControls: false,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Dots,
        nodesDraggable: false,
        fitView: true,
    },
};

/**
 * MultipleChoice node with 4 choices — each choice renders its own
 * output handle on the right side.
 */
export const MultipleChoiceNodeStory: Story = {
    name: 'Node › Multiple Choice',
    render: (args) => (
        <div style={{ width: '100%', height: '360px' }}>
            <DiagramCanvas
                {...args}
                nodes={[{ ...MC_NODE, position: { x: 200, y: 80 } }]}
                edges={[]}
            />
        </div>
    ),
    args: {
        showControls: false,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Dots,
        nodesDraggable: false,
        fitView: true,
    },
};

/**
 * TextEntry node — open-ended question with a single output handle.
 */
export const TextEntryNodeStory: Story = {
    name: 'Node › Text Entry',
    render: (args) => (
        <div style={{ width: '100%', height: '300px' }}>
            <DiagramCanvas
                {...args}
                nodes={[{ ...TEXT_NODE, position: { x: 200, y: 80 } }]}
                edges={[]}
            />
        </div>
    ),
    args: {
        showControls: false,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Dots,
        nodesDraggable: false,
        fitView: true,
    },
};

/**
 * Description node — informational content block, no question handles.
 */
export const DescriptionNodeStory: Story = {
    name: 'Node › Description',
    render: (args) => (
        <div style={{ width: '100%', height: '300px' }}>
            <DiagramCanvas
                {...args}
                nodes={[{ ...DESC_NODE, position: { x: 200, y: 80 } }]}
                edges={[]}
            />
        </div>
    ),
    args: {
        showControls: false,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Dots,
        nodesDraggable: false,
        fitView: true,
    },
};

/**
 * Read-only canvas — all interaction disabled.
 * Mirrors an embed or preview context.
 */
export const ReadOnly: Story = {
    name: 'Read-Only Canvas',
    render: (args) => (
        <div style={{ width: '100%', height: '600px' }}>
            <DiagramCanvas
                {...args}
                nodes={[START_NODE, MC_NODE, TEXT_NODE, END_NODE]}
                edges={BASE_EDGES}
            />
        </div>
    ),
    args: {
        showControls: false,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Lines,
        nodesDraggable: false,
        panOnDrag: false,
        zoomOnScroll: false,
        fitView: true,
    },
};

/**
 * Background variants — visually compare Dots vs Lines vs Cross.
 */
export const BackgroundDots: Story = {
    name: 'Background › Dots',
    render: (args) => (
        <div style={{ width: '100%', height: '400px' }}>
            <DiagramCanvas
                {...args}
                nodes={[START_NODE, END_NODE]}
                edges={[{ id: 'e', source: 'start', target: 'end' }]}
            />
        </div>
    ),
    args: {
        showControls: false,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Dots,
        nodesDraggable: false,
        fitView: true,
    },
};

export const BackgroundLines: Story = {
    name: 'Background › Lines',
    render: (args) => (
        <div style={{ width: '100%', height: '400px' }}>
            <DiagramCanvas
                {...args}
                nodes={[START_NODE, END_NODE]}
                edges={[{ id: 'e', source: 'start', target: 'end' }]}
            />
        </div>
    ),
    args: {
        showControls: false,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Lines,
        nodesDraggable: false,
        fitView: true,
    },
};

export const BackgroundCross: Story = {
    name: 'Background › Cross',
    render: (args) => (
        <div style={{ width: '100%', height: '400px' }}>
            <DiagramCanvas
                {...args}
                nodes={[START_NODE, END_NODE]}
                edges={[{ id: 'e', source: 'start', target: 'end' }]}
            />
        </div>
    ),
    args: {
        showControls: false,
        showBackground: true,
        backgroundVariant: BackgroundVariant.Cross,
        nodesDraggable: false,
        fitView: true,
    },
};
