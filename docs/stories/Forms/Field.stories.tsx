import type { Meta, StoryObj } from "@storybook/react"
import { Field } from "@react-custom-components/ui/field"
import { Input } from "@react-custom-components/ui/input"
import { Textarea } from "@react-custom-components/ui/textarea"
import { Checkbox } from "@react-custom-components/ui/checkbox"

const meta = {
  title: "Forms/Field",
  component: Field.Root,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Field.Root>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Field.Root className="w-80">
      <Field.Label>Email</Field.Label>
      <Input type="email" placeholder="you@example.com" />
      <Field.Description>We'll never share your email.</Field.Description>
    </Field.Root>
  ),
}

export const WithError: Story = {
  render: () => (
    <Field.Root className="w-80" invalid>
      <Field.Label>Username</Field.Label>
      <Input type="text" defaultValue="ab" aria-invalid />
      <Field.Error>Username must be at least 3 characters.</Field.Error>
    </Field.Root>
  ),
}

export const WithTextarea: Story = {
  render: () => (
    <Field.Root className="w-80">
      <Field.Label>Bio</Field.Label>
      <Textarea placeholder="Tell us about yourself" />
      <Field.Description>Write a short bio about yourself.</Field.Description>
    </Field.Root>
  ),
}

export const WithCheckbox: Story = {
  render: () => (
    <Field.Root>
      <div className="flex items-center gap-2">
        <Checkbox id="marketing" />
        <Field.Label htmlFor="marketing">Marketing emails</Field.Label>
      </div>
      <Field.Description>Receive emails about new products and features.</Field.Description>
    </Field.Root>
  ),
}

export const Required: Story = {
  render: () => (
    <Field.Root className="w-80" required>
      <Field.Label>
        Full Name <span className="text-destructive">*</span>
      </Field.Label>
      <Input type="text" placeholder="John Doe" required />
      <Field.Description>This field is required.</Field.Description>
    </Field.Root>
  ),
}
