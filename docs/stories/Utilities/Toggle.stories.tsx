import type { Meta, StoryObj } from "@storybook/react"
import { Toggle } from "@react-custom-components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

const meta = {
  title: "Utilities/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <Bold />,
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle variant="default">
        <Bold />
      </Toggle>
      <Toggle variant="outline">
        <Italic />
      </Toggle>
    </div>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm">
        <Bold className="size-3" />
      </Toggle>
      <Toggle size="default">
        <Bold />
      </Toggle>
      <Toggle size="lg">
        <Bold className="size-5" />
      </Toggle>
    </div>
  ),
}

export const WithText: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle>
        <Bold className="mr-2" />
        Bold
      </Toggle>
      <Toggle>
        <Italic className="mr-2" />
        Italic
      </Toggle>
      <Toggle>
        <Underline className="mr-2" />
        Underline
      </Toggle>
    </div>
  ),
}

export const States: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle>Normal</Toggle>
      <Toggle defaultPressed>Pressed</Toggle>
      <Toggle disabled>Disabled</Toggle>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div className="flex gap-2">
      <Toggle variant="outline">
        <Bold />
      </Toggle>
      <Toggle variant="outline">
        <Italic />
      </Toggle>
      <Toggle variant="outline">
        <Underline />
      </Toggle>
    </div>
  ),
}
