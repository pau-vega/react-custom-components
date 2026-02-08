import type { Meta, StoryObj } from "@storybook/react"
import { Separator } from "@react-custom-components/ui/separator"

const meta = {
  title: "Layout/Separator",
  component: Separator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <div className="space-y-1">
        <h4 className="text-sm font-medium">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <div>Section 1</div>
      <Separator />
      <div>Section 2</div>
      <Separator />
      <div>Section 3</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="flex h-32 items-center space-x-4">
      <div>Item 1</div>
      <Separator orientation="vertical" />
      <div>Item 2</div>
      <Separator orientation="vertical" />
      <div>Item 3</div>
    </div>
  ),
}

export const InCard: Story = {
  render: () => (
    <div className="w-96 rounded-lg border p-4">
      <div className="mb-4">
        <h3 className="font-semibold">Settings</h3>
        <p className="text-sm text-muted-foreground">Manage your account settings</p>
      </div>
      <Separator />
      <div className="mt-4 space-y-3">
        <div>Profile</div>
        <div>Security</div>
        <div>Notifications</div>
      </div>
    </div>
  ),
}
