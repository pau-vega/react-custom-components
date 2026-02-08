# Plan: Storybook Showcase for All Components

## Context

The `@react-custom-components/ui` package has 55 components but no documentation or visual showcase. A Storybook setup in `docs/` will provide interactive documentation, variant exploration, and a11y testing. The `docs/` folder already has empty scaffolding and Storybook 8.6.15 in `node_modules`, but all config and story files were removed.

## Overview

Set up Storybook 8 with Vite in `docs/`, import components from the workspace UI package via source (not dist), provide Tailwind v4 theme CSS, and create stories for all 55 components organized by category.

---

## Step 1: Root Config Changes

**`pnpm-workspace.yaml`** — add `"docs"` to packages list

**`turbo.json`** — add `storybook-static/**` to build outputs

## Step 2: Docs Package Setup

### `docs/package.json`
- Name: `@react-custom-components/docs`, private
- Scripts: `dev` (storybook dev), `build` (storybook build), `clean`
- Dependencies: `@react-custom-components/ui: workspace:*`, all peer deps (`@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `react`, `react-dom`)
- Runtime deps from UI: `cmdk`, `date-fns`, `embla-carousel-react`, `input-otp`, `next-themes`, `react-day-picker`, `react-resizable-panels`, `recharts`, `sonner`, `vaul`
- DevDeps: `@storybook/*` packages, `@tailwindcss/vite`, `tailwindcss`, `typescript`, `vite`

### `docs/tsconfig.json`
- Extends `../tsconfig.base.json`, adds `jsx: "react-jsx"`, includes stories and .storybook dirs

## Step 3: Storybook Configuration

### `docs/.storybook/main.ts`
- Framework: `@storybook/react-vite`
- Stories glob: `../stories/**/*.stories.@(ts|tsx)`
- Addons: essentials, interactions, a11y
- Autodocs enabled
- Vite config: `@tailwindcss/vite` plugin, dedupe react/react-dom

### `docs/.storybook/preview.ts`
- Import global CSS with Tailwind v4 theme
- Layout: centered
- Controls matchers for color/date
- Tags: `["autodocs"]` for all stories

### `docs/src/styles/globals.css`
- `@import "tailwindcss"`
- `@source` directive pointing to `../../packages/ui/src/**/*.{ts,tsx}` (so Tailwind scans component classes)
- `@theme` block defining all CSS custom properties the components use: colors (background, foreground, primary, secondary, muted, accent, destructive, border, input, ring, card, popover), border-radius tokens, and shadcn animation keyframes

## Step 4: Story Files (55 components + 1 hook)

### Organization by category in `docs/stories/`:

**Forms/** (15 stories):
Button, ButtonGroup, Input, InputGroup, InputOtp, Textarea, Checkbox, RadioGroup, Select, NativeSelect, Switch, Slider, Label, Field, Calendar

**Overlays/** (10 stories):
Dialog, Sheet, Drawer, AlertDialog, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu, Menubar

**Navigation/** (5 stories):
NavigationMenu, Breadcrumb, Pagination, Tabs, Sidebar

**Data Display/** (8 stories):
Card, Table, Badge, Avatar, Kbd, Chart, Carousel, Empty

**Feedback/** (5 stories):
Alert, Spinner, Skeleton, Progress, Sonner

**Layout/** (7 stories):
Separator, AspectRatio, ScrollArea, Resizable, Accordion, Collapsible, Direction

**Utilities/** (5 stories):
Toggle, ToggleGroup, Item, Command, Combobox

**Hooks/** (1 story):
UseMobile

### Story patterns (each file):

1. **Simple + CVA variants** (Button, Badge, Alert, Toggle): Default story with args/controls, Variants render showing all options, Sizes render, States (disabled etc.)

2. **Composite components** (Dialog, Sheet, Select, Accordion, Tabs): Default usage assembling sub-components, With Form / rich content example, Controlled state example

3. **Styled wrappers** (Card, Input, Table, Separator): Default render, Size variants if applicable, Composition examples (e.g. Card with image, Table with data)

Import components from `@react-custom-components/ui/<component>` (sub-path imports).

## Critical Files

| File | Action |
|------|--------|
| `pnpm-workspace.yaml` | Edit — add `"docs"` |
| `turbo.json` | Edit — add storybook output |
| `docs/package.json` | Create |
| `docs/tsconfig.json` | Create |
| `docs/.storybook/main.ts` | Create |
| `docs/.storybook/preview.ts` | Create |
| `docs/src/styles/globals.css` | Create |
| `docs/stories/**/*.stories.tsx` | Create (56 files) |

## Verification

1. `pnpm install` from root — workspace resolves correctly
2. `pnpm --filter @react-custom-components/ui build` — UI package builds
3. `pnpm --filter @react-custom-components/docs dev` — Storybook starts on port 6006
4. Visually verify stories render with correct styling (Tailwind theme applied)
5. Check autodocs pages generate prop tables
6. `pnpm --filter @react-custom-components/docs build` — static build succeeds
