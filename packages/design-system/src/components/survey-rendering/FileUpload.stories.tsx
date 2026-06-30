import type { Meta, StoryObj } from '@storybook/react';
import { FileUpload, type FileUploadFile } from './FileUpload';

const meta = {
  title: 'Survey Rendering/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-screen max-w-[390px] md:max-w-2xl mx-auto">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty state — drag-and-drop prompt and browse button. */
export const Default: Story = {
  args: {},
};

const allStates: FileUploadFile[] = [
  { id: 'f1', name: 'Resume.pdf', size: 20 * 1024 * 1024, progress: 100 },
  { id: 'f2', name: 'Design Essentials.pdf', size: 100 * 1024 * 1024, progress: 70 },
  { id: 'f3', name: 'Graduation.jpeg', size: 600 * 1024 * 1024, progress: 0 },
];

/** All three states: completed (100%), uploading (1–99%), and empty (0%). */
export const AllStates: Story = {
  args: {
    files: allStates,
  },
};

/** Size hidden — only the percentage/Completed label is shown in the subtitle. */
export const NoFileSize: Story = {
  args: {
    files: allStates,
    showFileSize: false,
  },
};

