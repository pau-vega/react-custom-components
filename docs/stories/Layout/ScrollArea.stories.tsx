import type { Meta, StoryObj } from "@storybook/react"
import { ScrollArea } from "@react-custom-components/ui/scroll-area"
import { Separator } from "@react-custom-components/ui/separator"

const meta = {
  title: "Layout/Scroll Area",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 50 }).map((_, i) => `Tag ${i + 1}`)

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="h-32 w-32 shrink-0 rounded-md bg-muted flex items-center justify-center"
          >
            <span className="text-sm">Item {i + 1}</span>
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const WithContent: Story = {
  render: () => (
    <ScrollArea className="h-96 w-96 rounded-md border p-4">
      <h3 className="mb-4 text-lg font-semibold">Long Content</h3>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} className="mb-4">
          <h4 className="font-medium">Section {i + 1}</h4>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      ))}
    </ScrollArea>
  ),
}

export const Compact: Story = {
  render: () => (
    <ScrollArea className="h-40 w-64 rounded-md border p-3">
      <div className="space-y-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}
