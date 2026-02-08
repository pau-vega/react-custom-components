import type { Meta, StoryObj } from "@storybook/react-vite"
import { Label } from "@react-custom-components/ui/label"
import { Input } from "@react-custom-components/ui/input"
import { Checkbox } from "@react-custom-components/ui/checkbox"

const meta = {
  title: "Forms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Label",
    htmlFor: "input",
  },
}

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
}

export const Required: Story = {
  render: () => (
    <div className="flex flex-col gap-2 w-80">
      <Label htmlFor="username">
        Username <span className="text-destructive">*</span>
      </Label>
      <Input id="username" type="text" placeholder="Enter your username" required />
    </div>
  ),
}
