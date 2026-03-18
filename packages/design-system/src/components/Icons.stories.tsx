import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import * as Icons from './ui/icons';

// Catalog component — renders all exported icons in a grid
const IconCatalog = ({ size = 24 }: { size?: number }) => {
    const iconEntries = Object.entries(Icons) as [string, React.ComponentType<{ className?: string }>][];
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '16px', padding: '16px', maxWidth: '900px' }}>
            {iconEntries.map(([name, IconComponent]) => (
                <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '8px', border: '1px solid var(--border)', borderRadius: '6px' }}>
                    <IconComponent className={`h-${size / 4} w-${size / 4}`} />
                    <span style={{ fontSize: '10px', textAlign: 'center', color: 'var(--muted-foreground)', wordBreak: 'break-word' }}>{name}</span>
                </div>
            ))}
        </div>
    );
};

const meta = {
    title: 'ShadCn/Data Display/Icons',
    component: IconCatalog,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: [16, 20, 24, 32, 40, 48],
            description: 'Icon size in pixels (maps to Tailwind h-/w- classes).',
        },
    },
} satisfies Meta<typeof IconCatalog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 24,
    },
};

export const Large: Story = {
    args: {
        size: 32,
    },
};

export const Small: Story = {
    args: {
        size: 16,
    },
};
