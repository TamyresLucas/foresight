import type { Meta, StoryObj } from '@storybook/react';
import { ThemeEditor } from './ThemeEditor';
import { PresetPicker } from './PresetPicker';
import * as React from 'react';

const meta: Meta<typeof ThemeEditor> = {
  title: 'Blocks/Theme/ThemeEditor',
  component: ThemeEditor,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ThemeEditor>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Presets</h2>
          <PresetPicker />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Custom Editor</h2>
          <ThemeEditor />
        </div>
      </div>
    </div>
  ),
};
