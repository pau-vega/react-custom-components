import type { Meta, StoryObj } from "@storybook/react-vite"
import { Textarea } from "@react-custom-components/ui/textarea"

const meta = {
  title: "Forms/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: "Type your message here...",
  },
  render: (args) => <Textarea className="w-80" {...args} />,
}

export const WithValue: Story = {
  render: () => (
    <Textarea
      className="w-80"
      defaultValue="This is a textarea with some default content that spans multiple lines."
    />
  ),
}

export const Disabled: Story = {
  render: () => (
    <Textarea className="w-80" placeholder="This textarea is disabled" disabled />
  ),
}

export const WithRows: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Textarea rows={3} placeholder="3 rows" />
      <Textarea rows={5} placeholder="5 rows" />
      <Textarea rows={10} placeholder="10 rows" />
    </div>
  ),
}
