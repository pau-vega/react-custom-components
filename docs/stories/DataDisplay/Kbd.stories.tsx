import type { Meta, StoryObj } from "@storybook/react"
import { Kbd } from "@react-custom-components/ui/kbd"

const meta = {
  title: "Data Display/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: "Ctrl",
  },
}

export const SingleKeys: Story = {
  render: () => (
    <div className="flex gap-2">
      <Kbd>Ctrl</Kbd>
      <Kbd>Alt</Kbd>
      <Kbd>Shift</Kbd>
      <Kbd>Enter</Kbd>
    </div>
  ),
}

export const KeyCombinations: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>C</Kbd>
        <span className="ml-2 text-sm text-muted-foreground">Copy</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>V</Kbd>
        <span className="ml-2 text-sm text-muted-foreground">Paste</span>
      </div>
      <div className="flex items-center gap-2">
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>Shift</Kbd>
        <span>+</span>
        <Kbd>P</Kbd>
        <span className="ml-2 text-sm text-muted-foreground">Command Palette</span>
      </div>
    </div>
  ),
}

export const InText: Story = {
  render: () => (
    <div className="max-w-md space-y-2">
      <p className="text-sm">
        Press <Kbd>Ctrl</Kbd> + <Kbd>K</Kbd> to open the command palette.
      </p>
      <p className="text-sm">
        Use <Kbd>↑</Kbd> and <Kbd>↓</Kbd> to navigate.
      </p>
      <p className="text-sm">
        Press <Kbd>Enter</Kbd> to select.
      </p>
    </div>
  ),
}

export const SpecialKeys: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>⇧</Kbd>
      <Kbd>⌥</Kbd>
      <Kbd>⌃</Kbd>
      <Kbd>↑</Kbd>
      <Kbd>↓</Kbd>
      <Kbd>←</Kbd>
      <Kbd>→</Kbd>
      <Kbd>⏎</Kbd>
      <Kbd>⌫</Kbd>
      <Kbd>⇥</Kbd>
    </div>
  ),
}
