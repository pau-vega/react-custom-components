import type { Meta, StoryObj } from "@storybook/react"
import { Calendar } from "@react-custom-components/ui/calendar"
import { useState } from "react"

const meta = {
  title: "Forms/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return <Calendar mode="single" selected={date} onSelect={setDate} />
  },
}

export const Range: Story = {
  render: () => {
    const [range, setRange] = useState<{ from?: Date; to?: Date }>({
      from: new Date(),
      to: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    })
    return <Calendar mode="range" selected={range} onSelect={setRange} />
  },
}

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = useState<Date[] | undefined>([new Date()])
    return <Calendar mode="multiple" selected={dates} onSelect={setDates} />
  },
}

export const Disabled: Story = {
  render: () => {
    return <Calendar mode="single" disabled />
  },
}

export const WithDisabledDates: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    const disabledDays = [
      { from: new Date(2024, 0, 1), to: new Date(2024, 0, 7) },
      new Date(2024, 0, 15),
    ]
    return <Calendar mode="single" selected={date} onSelect={setDate} disabled={disabledDays} />
  },
}
