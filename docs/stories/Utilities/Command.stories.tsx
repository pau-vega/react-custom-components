import type { Meta, StoryObj } from "@storybook/react-vite"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@react-custom-components/ui/command"
import { Calendar, Settings, User, CreditCard, Smile } from "lucide-react"

const meta = {
  title: "Utilities/Command",
  component: Command,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-96">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2" />
            <span>Billing</span>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

function Calculator() {
  return null
}

export const Simple: Story = {
  render: () => (
    <Command className="rounded-lg border w-80">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          <CommandItem>Apple</CommandItem>
          <CommandItem>Banana</CommandItem>
          <CommandItem>Orange</CommandItem>
          <CommandItem>Grape</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Command className="rounded-lg border w-96">
      <CommandInput placeholder="Search files..." />
      <CommandList>
        <CommandEmpty>No files found.</CommandEmpty>
        <CommandGroup heading="Recent">
          <CommandItem>Document.pdf</CommandItem>
          <CommandItem>Image.jpg</CommandItem>
          <CommandItem>Spreadsheet.xlsx</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="All Files">
          <CommandItem>Project.zip</CommandItem>
          <CommandItem>Presentation.pptx</CommandItem>
          <CommandItem>Notes.txt</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Dialog: Story = {
  render: () => (
    <Command className="rounded-lg border shadow-md w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>New File</CommandItem>
          <CommandItem>New Folder</CommandItem>
          <CommandItem>Open File</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tools">
          <CommandItem>Search</CommandItem>
          <CommandItem>Replace</CommandItem>
          <CommandItem>Go to Line</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}
