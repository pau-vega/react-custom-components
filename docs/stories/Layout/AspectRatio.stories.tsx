import type { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "@react-custom-components/ui/aspect-ratio"

const meta = {
  title: "Layout/Aspect Ratio",
  component: AspectRatio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <AspectRatio ratio={16 / 9}>
        <div className="flex h-full items-center justify-center rounded-md bg-muted">
          <span className="text-sm text-muted-foreground">16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
  ),
}

export const Ratios: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <div>
        <p className="mb-2 text-sm font-medium">1:1 (Square)</p>
        <AspectRatio ratio={1 / 1}>
          <div className="flex h-full items-center justify-center rounded-md bg-muted">
            <span className="text-sm text-muted-foreground">1:1</span>
          </div>
        </AspectRatio>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">16:9 (Widescreen)</p>
        <AspectRatio ratio={16 / 9}>
          <div className="flex h-full items-center justify-center rounded-md bg-muted">
            <span className="text-sm text-muted-foreground">16:9</span>
          </div>
        </AspectRatio>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium">4:3 (Standard)</p>
        <AspectRatio ratio={4 / 3}>
          <div className="flex h-full items-center justify-center rounded-md bg-muted">
            <span className="text-sm text-muted-foreground">4:3</span>
          </div>
        </AspectRatio>
      </div>
    </div>
  ),
}

export const WithImage: Story = {
  render: () => (
    <div className="w-96">
      <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
          <span className="text-white text-lg font-semibold">Image Placeholder</span>
        </div>
      </AspectRatio>
    </div>
  ),
}
