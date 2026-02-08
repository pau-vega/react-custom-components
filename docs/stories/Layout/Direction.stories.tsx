import type { Meta, StoryObj } from "@storybook/react-vite"
import { DirectionProvider, useDirection } from "@react-custom-components/ui/direction"
import { Button } from "@react-custom-components/ui/button"

const meta = {
  title: "Layout/Direction",
  component: DirectionProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DirectionProvider>

export default meta
type Story = StoryObj<typeof meta>

function DirectionDemo() {
  const { dir, setDirection } = useDirection()

  return (
    <div className="space-y-4 w-96" dir={dir}>
      <div className="flex items-center justify-between rounded-lg border p-4">
        <span className="text-sm">Current direction: {dir}</span>
      </div>
      <div className="flex gap-2">
        <Button onClick={() => setDirection("ltr")} variant={dir === "ltr" ? "default" : "outline"}>
          LTR
        </Button>
        <Button onClick={() => setDirection("rtl")} variant={dir === "rtl" ? "default" : "outline"}>
          RTL
        </Button>
      </div>
      <div className="rounded-lg border p-4">
        <p className="text-sm">
          This is a demonstration of the Direction component. The text direction changes based on the selected option.
        </p>
      </div>
    </div>
  )
}

export const Default: Story = {
  render: () => (
    <DirectionProvider>
      <DirectionDemo />
    </DirectionProvider>
  ),
}

export const LTR: Story = {
  render: () => (
    <DirectionProvider dir="ltr">
      <div className="w-96 space-y-4" dir="ltr">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Left to Right</h3>
          <p className="text-sm text-muted-foreground">
            This content is displayed in left-to-right direction, which is the default for most languages.
          </p>
        </div>
      </div>
    </DirectionProvider>
  ),
}

export const RTL: Story = {
  render: () => (
    <DirectionProvider dir="rtl">
      <div className="w-96 space-y-4" dir="rtl">
        <div className="rounded-lg border p-4">
          <h3 className="font-semibold mb-2">Right to Left</h3>
          <p className="text-sm text-muted-foreground">
            هذا المحتوى معروض في اتجاه من اليمين إلى اليسار، وهو الافتراضي للغات مثل العربية والعبرية.
          </p>
        </div>
      </div>
    </DirectionProvider>
  ),
}
