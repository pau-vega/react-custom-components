import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputGroup } from "@react-custom-components/ui/input-group"
import { Input } from "@react-custom-components/ui/input"
import { Search, Mail } from "lucide-react"

const meta = {
  title: "Forms/Input Group",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <InputGroup className="w-80">
      <Search />
      <Input placeholder="Search..." />
    </InputGroup>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <InputGroup>
        <Search />
        <Input placeholder="Search with icon..." />
      </InputGroup>
      <InputGroup>
        <Mail />
        <Input type="email" placeholder="Email with icon..." />
      </InputGroup>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <InputGroup>
        <Search />
        <Input placeholder="With start icon" />
      </InputGroup>
      <InputGroup>
        <Input placeholder="With end icon" />
        <Search />
      </InputGroup>
    </div>
  ),
}
