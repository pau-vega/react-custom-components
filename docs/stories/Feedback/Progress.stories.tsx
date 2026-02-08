import type { Meta, StoryObj } from "@storybook/react"
import { Progress } from "@react-custom-components/ui/progress"

const meta = {
  title: "Feedback/Progress",
  component: Progress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
    },
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50,
  },
  render: (args) => (
    <div className="w-96">
      <Progress {...args} />
    </div>
  ),
}

export const Values: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>0%</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-96 space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Uploading file...</span>
        <span className="font-medium">67%</span>
      </div>
      <Progress value={67} />
    </div>
  ),
}

export const Indeterminate: Story = {
  render: () => (
    <div className="w-96">
      <Progress />
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Progress value={50} className="h-1" />
      <Progress value={50} className="h-2" />
      <Progress value={50} className="h-3" />
      <Progress value={50} className="h-4" />
    </div>
  ),
}
