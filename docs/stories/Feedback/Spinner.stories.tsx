import type { Meta, StoryObj } from "@storybook/react-vite"
import { Spinner } from "@react-custom-components/ui/spinner"

const meta = {
  title: "Feedback/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: "md",
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="md" />
        <span className="text-xs text-muted-foreground">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted-foreground">Large</span>
      </div>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-4">
      <Spinner />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
      <Spinner size="sm" />
      Loading
    </button>
  ),
}

export const Centered: Story = {
  render: () => (
    <div className="flex h-48 w-96 items-center justify-center border rounded-md">
      <Spinner />
    </div>
  ),
}
