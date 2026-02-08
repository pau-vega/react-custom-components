import type { Meta, StoryObj } from "@storybook/react"
import { NativeSelect } from "@react-custom-components/ui/native-select"

const meta = {
  title: "Forms/Native Select",
  component: NativeSelect,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <NativeSelect className="w-48">
      <option value="">Select a fruit</option>
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
      <option value="grape">Grape</option>
    </NativeSelect>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <NativeSelect className="w-48">
      <option value="">Select a food</option>
      <optgroup label="Fruits">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </optgroup>
      <optgroup label="Vegetables">
        <option value="carrot">Carrot</option>
        <option value="broccoli">Broccoli</option>
        <option value="spinach">Spinach</option>
      </optgroup>
    </NativeSelect>
  ),
}

export const WithDefaultValue: Story = {
  render: () => (
    <NativeSelect className="w-48" defaultValue="banana">
      <option value="apple">Apple</option>
      <option value="banana">Banana</option>
      <option value="orange">Orange</option>
    </NativeSelect>
  ),
}

export const Disabled: Story = {
  render: () => (
    <NativeSelect className="w-48" disabled>
      <option value="">Disabled select</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
    </NativeSelect>
  ),
}
