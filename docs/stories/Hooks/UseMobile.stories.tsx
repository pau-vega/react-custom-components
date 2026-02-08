import type { Meta, StoryObj } from "@storybook/react-vite"
import { useIsMobile } from "@react-custom-components/ui/hooks/use-mobile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@react-custom-components/ui/card"

const meta = {
  title: "Hooks/useIsMobile",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function UseMobileDemo() {
  const isMobile = useIsMobile()

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>useIsMobile Hook</CardTitle>
        <CardDescription>Detects if the viewport is mobile-sized</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-lg border p-4">
            <span className="text-sm font-medium">Current viewport:</span>
            <span className="text-sm font-semibold">{isMobile ? "Mobile" : "Desktop"}</span>
          </div>
          <div className="text-xs text-muted-foreground">
            Resize your browser window to see the value change. The breakpoint is at 768px (md breakpoint).
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export const Default: Story = {
  render: () => <UseMobileDemo />,
}

function ConditionalRenderDemo() {
  const isMobile = useIsMobile()

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Conditional Rendering</CardTitle>
        <CardDescription>Different content based on viewport size</CardDescription>
      </CardHeader>
      <CardContent>
        {isMobile ? (
          <div className="rounded-lg bg-blue-50 dark:bg-blue-950 p-4">
            <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Mobile View</p>
            <p className="text-xs text-blue-700 dark:text-blue-300 mt-1">
              This content is optimized for mobile devices
            </p>
          </div>
        ) : (
          <div className="rounded-lg bg-green-50 dark:bg-green-950 p-4">
            <p className="text-sm font-medium text-green-900 dark:text-green-100">Desktop View</p>
            <p className="text-xs text-green-700 dark:text-green-300 mt-1">
              This content is optimized for desktop screens
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export const ConditionalRendering: Story = {
  render: () => <ConditionalRenderDemo />,
}

function ResponsiveLayoutDemo() {
  const isMobile = useIsMobile()

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Responsive Layout</CardTitle>
        <CardDescription>Layout adapts to viewport size</CardDescription>
      </CardHeader>
      <CardContent>
        <div className={isMobile ? "space-y-2" : "flex gap-4"}>
          <div className="flex-1 rounded-md bg-muted p-3">
            <p className="text-xs">Section 1</p>
          </div>
          <div className="flex-1 rounded-md bg-muted p-3">
            <p className="text-xs">Section 2</p>
          </div>
          <div className="flex-1 rounded-md bg-muted p-3">
            <p className="text-xs">Section 3</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          {isMobile ? "Stacked layout for mobile" : "Horizontal layout for desktop"}
        </p>
      </CardContent>
    </Card>
  )
}

export const ResponsiveLayout: Story = {
  render: () => <ResponsiveLayoutDemo />,
}
