import type { Meta, StoryObj } from "@storybook/react"
import { SectionLabel } from "./section-label"

const meta: Meta<typeof SectionLabel> = {
  title: "Survey Builder/SectionLabel",
  component: SectionLabel,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[600px] p-10">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["s2-subsection", "s2-section"],
    },
  },
}

export default meta
type Story = StoryObj<typeof SectionLabel>

export const S2Subsection: Story = {
  args: {
    children: "Subsection",
    variant: "s2-subsection",
  },
}

export const S2Section: Story = {
  args: {
    children: "S2 Section",
    variant: "s2-section",
  },
}
