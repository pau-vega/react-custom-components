import type { Meta, StoryObj } from "@storybook/react-vite"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@react-custom-components/ui/card"
import { Button } from "@react-custom-components/ui/button"

const meta = {
  title: "Data Display/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here. This can be any content you want to display.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a simple card with just a title and content.</p>
      </CardContent>
    </Card>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Click the button below to create your project.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  ),
}

export const WithImage: Story = {
  render: () => (
    <Card className="w-96 overflow-hidden">
      <div className="h-48 bg-muted" />
      <CardHeader>
        <CardTitle>Photo Album</CardTitle>
        <CardDescription>Your favorite memories</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">Browse through your collection of photos and videos.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Album</Button>
      </CardFooter>
    </Card>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">First card content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Second card content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Third card content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 4</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Fourth card content</p>
        </CardContent>
      </Card>
    </div>
  ),
}
