import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ToolboxItem } from './ui/toolbox-item';
import { Check, Search, Settings, Mail, Bell } from './ui/icons';

const meta = {
    title: 'Survey Builder/Build/ToolboxItem',
    component: ToolboxItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: {
            control: 'text',
            description: 'Label text displayed below the icon.',
        },
        isEnabled: {
            control: 'boolean',
            description: 'When false, renders the item in a disabled/muted state.',
        },
        isDragged: {
            control: 'boolean',
            description: 'When true, reduces the item\'s opacity to 30%, indicating it is being dragged.',
        },
        isDraggable: {
            control: 'boolean',
            description: 'When false, renders as a click-only item (no drag handle).',
        },
        endAction: {
            description: 'Optional content rendered at the trailing end of the item (e.g. a button or icon). Visible only on hover.',
        },
        icon: {
            description: 'The icon component to render. Accepts a React.ElementType.',
        },
    },
} satisfies Meta<typeof ToolboxItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: Check,
        label: 'Multiple Choice',
        isEnabled: true,
        isDragged: false,
        isDraggable: true,
    },
};

export const Disabled: Story = {
    args: {
        icon: Search,
        label: 'Search (disabled)',
        isEnabled: false,
        isDragged: false,
        isDraggable: true,
    },
};

export const Dragging: Story = {
    args: {
        icon: Settings,
        label: 'Settings Block',
        isEnabled: true,
        isDragged: true,
        isDraggable: true,
    },
};

export const NotDraggable: Story = {
    parameters: {
        docs: {
            description: {
                story: 'When isDraggable is false, the item renders without drag capability. Dragging is disabled and no drag events are fired.',
            },
        },
    },
    args: {
        icon: Mail,
        label: 'Email Question',
        isEnabled: true,
        isDragged: false,
        isDraggable: false,
    },
};

export const ToolboxGrid: Story = {
    render: () => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', padding: '16px', border: '1px solid var(--border)', borderRadius: '8px', width: '280px' }}>
            <ToolboxItem icon={Check} label="Multiple Choice" />
            <ToolboxItem icon={Search} label="Short Text" />
            <ToolboxItem icon={Settings} label="Rating Scale" />
            <ToolboxItem icon={Mail} label="Email" />
            <ToolboxItem icon={Bell} label="Notification" isEnabled={false} />
        </div>
    ),
};
