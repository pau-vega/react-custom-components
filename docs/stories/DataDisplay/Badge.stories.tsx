import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "@react-custom-components/ui/badge"

const meta = {
  title: "Data Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Badge>New</Badge>
        <Badge variant="secondary">Updated</Badge>
        <Badge variant="destructive">Deleted</Badge>
      </div>
      <div className="flex gap-2">
        <Badge>Active</Badge>
        <Badge variant="secondary">Pending</Badge>
        <Badge variant="outline">Inactive</Badge>
      </div>
    </div>
  ),
}

export const WithNumbers: Story = {
  render: () => (
    <div className="flex gap-4">
      <Badge>99+</Badge>
      <Badge variant="secondary">12</Badge>
      <Badge variant="destructive">5</Badge>
      <Badge variant="outline">1</Badge>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm">Status:</span>
        <Badge>Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Priority:</span>
        <Badge variant="destructive">High</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Category:</span>
        <Badge variant="secondary">Feature</Badge>
      </div>
    </div>
  ),
}
