import type { Meta, StoryObj } from "@storybook/react-vite"
import { Item } from "@react-custom-components/ui/item"
import { User, Mail, Settings, LogOut } from "lucide-react"

const meta = {
  title: "Utilities/Item",
  component: Item,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-64 space-y-1">
      <Item>
        <User className="mr-2" />
        Profile
      </Item>
      <Item>
        <Mail className="mr-2" />
        Messages
      </Item>
      <Item>
        <Settings className="mr-2" />
        Settings
      </Item>
    </div>
  ),
}

export const Active: Story = {
  render: () => (
    <div className="w-64 space-y-1">
      <Item data-active>
        <User className="mr-2" />
        Profile
      </Item>
      <Item>
        <Mail className="mr-2" />
        Messages
      </Item>
      <Item>
        <Settings className="mr-2" />
        Settings
      </Item>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="w-64 space-y-1">
      <Item>
        <User className="mr-2" />
        Profile
      </Item>
      <Item disabled>
        <Mail className="mr-2" />
        Messages (Disabled)
      </Item>
      <Item>
        <Settings className="mr-2" />
        Settings
      </Item>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="w-80 space-y-1">
      <Item>
        <div className="flex items-start gap-3">
          <User className="mt-1" />
          <div>
            <div className="font-medium">Profile</div>
            <div className="text-xs text-muted-foreground">View and edit your profile information</div>
          </div>
        </div>
      </Item>
      <Item>
        <div className="flex items-start gap-3">
          <Mail className="mt-1" />
          <div>
            <div className="font-medium">Messages</div>
            <div className="text-xs text-muted-foreground">Check your inbox and sent messages</div>
          </div>
        </div>
      </Item>
      <Item>
        <div className="flex items-start gap-3">
          <Settings className="mt-1" />
          <div>
            <div className="font-medium">Settings</div>
            <div className="text-xs text-muted-foreground">Manage your account preferences</div>
          </div>
        </div>
      </Item>
    </div>
  ),
}

export const Destructive: Story = {
  render: () => (
    <div className="w-64 space-y-1">
      <Item>
        <User className="mr-2" />
        Profile
      </Item>
      <Item>
        <Settings className="mr-2" />
        Settings
      </Item>
      <Item className="text-destructive focus:text-destructive">
        <LogOut className="mr-2" />
        Logout
      </Item>
    </div>
  ),
}
