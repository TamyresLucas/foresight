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
        isDragging: {
            control: 'boolean',
            description: 'When true, applies dragging visual state.',
        },
        isDraggable: {
            control: 'boolean',
            description: 'When false, renders as a click-only item (no drag handle).',
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
        isDragging: false,
        isDraggable: true,
    },
};

export const Disabled: Story = {
    args: {
        icon: Search,
        label: 'Search (disabled)',
        isEnabled: false,
        isDragging: false,
        isDraggable: true,
    },
};

export const Dragging: Story = {
    args: {
        icon: Settings,
        label: 'Settings Block',
        isEnabled: true,
        isDragging: true,
        isDraggable: true,
    },
};

export const NotDraggable: Story = {
    args: {
        icon: Mail,
        label: 'Email Question',
        isEnabled: true,
        isDragging: false,
        isDraggable: false,
        onClick: () => alert('Clicked — insert question'),
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
