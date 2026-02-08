import type { Meta, StoryObj } from "@storybook/react"
import { Empty } from "@react-custom-components/ui/empty"
import { Button } from "@react-custom-components/ui/button"
import { Inbox, Search, FileX } from "lucide-react"

const meta = {
  title: "Data Display/Empty",
  component: Empty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Empty
      icon={<Inbox className="size-12" />}
      title="No data"
      description="There is no data to display at the moment."
    />
  ),
}

export const WithAction: Story = {
  render: () => (
    <Empty
      icon={<Inbox className="size-12" />}
      title="No messages"
      description="You don't have any messages yet. Start a conversation to see your messages here."
      action={<Button>Start conversation</Button>}
    />
  ),
}

export const SearchResults: Story = {
  render: () => (
    <Empty
      icon={<Search className="size-12" />}
      title="No results found"
      description="We couldn't find any results for your search. Try adjusting your query."
      action={
        <Button variant="outline" size="sm">
          Clear search
        </Button>
      }
    />
  ),
}

export const FileNotFound: Story = {
  render: () => (
    <Empty
      icon={<FileX className="size-12" />}
      title="File not found"
      description="The file you're looking for doesn't exist or has been moved."
      action={
        <div className="flex gap-2">
          <Button variant="outline">Go back</Button>
          <Button>Browse files</Button>
        </div>
      }
    />
  ),
}

export const Simple: Story = {
  render: () => <Empty title="Nothing here" />,
}

export const WithoutIcon: Story = {
  render: () => (
    <Empty
      title="No notifications"
      description="You're all caught up! Check back later for new notifications."
      action={<Button variant="ghost">Refresh</Button>}
    />
  ),
}
