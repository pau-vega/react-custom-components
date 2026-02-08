import type { Meta, StoryObj } from "@storybook/react"
import { Alert, AlertDescription, AlertTitle } from "@react-custom-components/ui/alert"
import { AlertCircle, Info, CheckCircle, XCircle } from "lucide-react"

const meta = {
  title: "Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>This is an alert description providing more context.</AlertDescription>
      </>
    ),
  },
  render: (args) => (
    <div className="w-96">
      <Alert {...args} />
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert>
        <Info className="size-4" />
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is a default alert with an info icon.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-96">
      <Alert>
        <Info className="size-4" />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This is an informational message.</AlertDescription>
      </Alert>
      <Alert>
        <CheckCircle className="size-4" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <XCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>There was an error processing your request.</AlertDescription>
      </Alert>
      <Alert>
        <AlertCircle className="size-4" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review your input before proceeding.</AlertDescription>
      </Alert>
    </div>
  ),
}

export const SimpleAlert: Story = {
  render: () => (
    <div className="w-96">
      <Alert>
        <AlertDescription>This is a simple alert without a title.</AlertDescription>
      </Alert>
    </div>
  ),
}

export const Destructive: Story = {
  render: () => (
    <div className="w-96">
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    </div>
  ),
}
