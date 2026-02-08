import type { Meta, StoryObj } from "@storybook/react-vite"
import { Combobox } from "@react-custom-components/ui/combobox"
import { useState } from "react"

const meta = {
  title: "Utilities/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof meta>

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "angular", label: "Angular" },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-80">
        <Combobox options={frameworks} value={value} onValueChange={setValue} placeholder="Select framework..." />
      </div>
    )
  },
}

export const WithSearch: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-80">
        <Combobox
          options={frameworks}
          value={value}
          onValueChange={setValue}
          placeholder="Search framework..."
          searchPlaceholder="Search..."
        />
      </div>
    )
  },
}

export const Preselected: Story = {
  render: () => {
    const [value, setValue] = useState("react")
    return (
      <div className="w-80">
        <Combobox options={frameworks} value={value} onValueChange={setValue} placeholder="Select framework..." />
      </div>
    )
  },
}

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
  { value: "it", label: "Italian" },
  { value: "pt", label: "Portuguese" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "zh", label: "Chinese" },
]

export const LongList: Story = {
  render: () => {
    const [value, setValue] = useState("")
    return (
      <div className="w-80">
        <Combobox options={languages} value={value} onValueChange={setValue} placeholder="Select language..." />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <Combobox options={frameworks} value="" onValueChange={() => {}} placeholder="Disabled combobox" disabled />
    </div>
  ),
}
