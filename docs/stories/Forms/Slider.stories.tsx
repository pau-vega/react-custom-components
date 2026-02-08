import type { Meta, StoryObj } from "@storybook/react"
import { Slider } from "@react-custom-components/ui/slider"

const meta = {
  title: "Forms/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    min: {
      control: "number",
    },
    max: {
      control: "number",
    },
    step: {
      control: "number",
    },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: [50],
    max: 100,
    step: 1,
  },
  render: (args) => (
    <div className="w-80">
      <Slider {...args} />
    </div>
  ),
}

export const Range: Story = {
  render: () => (
    <div className="w-80">
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  ),
}

export const WithSteps: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <div>
        <div className="text-sm mb-2">Step 1</div>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>
      <div>
        <div className="text-sm mb-2">Step 10</div>
        <Slider defaultValue={[50]} max={100} step={10} />
      </div>
      <div>
        <div className="text-sm mb-2">Step 25</div>
        <Slider defaultValue={[50]} max={100} step={25} />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <Slider defaultValue={[50]} max={100} step={1} disabled />
    </div>
  ),
}
