import type { Meta, StoryObj } from "@storybook/react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@react-custom-components/ui/collapsible"
import { Button } from "@react-custom-components/ui/button"
import { ChevronsUpDown } from "lucide-react"

const meta = {
  title: "Layout/Collapsible",
  component: Collapsible,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Collapsible className="w-96 space-y-2">
      <div className="flex items-center justify-between space-x-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="size-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-2 text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-2 text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const Simple: Story = {
  render: () => (
    <Collapsible className="w-96">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Show more
          <ChevronsUpDown className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        <div className="rounded-md border p-4">
          <p className="text-sm">Additional content 1</p>
        </div>
        <div className="rounded-md border p-4">
          <p className="text-sm">Additional content 2</p>
        </div>
        <div className="rounded-md border p-4">
          <p className="text-sm">Additional content 3</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-96 space-y-2">
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Details (Open by default)
          <ChevronsUpDown className="size-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border p-4">
          <p className="text-sm text-muted-foreground">
            This collapsible is open by default. Click the button above to collapse it.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}

export const WithContent: Story = {
  render: () => (
    <Collapsible className="w-96 rounded-lg border">
      <div className="flex items-center justify-between p-4">
        <h3 className="font-semibold">Project Details</h3>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm">
            <ChevronsUpDown className="size-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="border-t p-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Status</span>
            <span>Active</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Created</span>
            <span>Jan 1, 2024</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Team</span>
            <span>5 members</span>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  ),
}
