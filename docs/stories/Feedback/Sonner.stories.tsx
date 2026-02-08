import type { Meta, StoryObj } from "@storybook/react"
import { Toaster } from "@react-custom-components/ui/sonner"
import { Button } from "@react-custom-components/ui/button"
import { toast } from "sonner"

const meta = {
  title: "Feedback/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Button onClick={() => toast("Event has been created")}>Show Toast</Button>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Event has been created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
    >
      Show Toast
    </Button>
  ),
}

export const Success: Story = {
  render: () => (
    <Button onClick={() => toast.success("Successfully saved!")}>Show Success Toast</Button>
  ),
}

export const Error: Story = {
  render: () => (
    <Button onClick={() => toast.error("Something went wrong")}>Show Error Toast</Button>
  ),
}

export const Warning: Story = {
  render: () => (
    <Button onClick={() => toast.warning("Please review your changes")}>Show Warning Toast</Button>
  ),
}

export const Info: Story = {
  render: () => (
    <Button onClick={() => toast.info("New update available")}>Show Info Toast</Button>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast("Event created", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Show Toast with Action
    </Button>
  ),
}

export const Promise: Story = {
  render: () => (
    <Button
      onClick={() =>
        toast.promise(
          new Promise((resolve) => setTimeout(resolve, 2000)),
          {
            loading: "Loading...",
            success: "Data loaded",
            error: "Error loading data",
          }
        )
      }
    >
      Show Promise Toast
    </Button>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button onClick={() => toast("First toast")}>Toast 1</Button>
      <Button onClick={() => toast("Second toast")}>Toast 2</Button>
      <Button onClick={() => toast("Third toast")}>Toast 3</Button>
    </div>
  ),
}
