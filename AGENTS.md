# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **pnpm monorepo** managed with **Turborepo** for building React component libraries. The repository contains:
- A Vite + React + TypeScript demo app with shadcn/ui components (`apps/vite-app`)
- A placeholder UI component library package (`packages/ui`)

The workspace is configured to support multiple apps and packages with shared build tooling.

## Package Manager

This project uses **pnpm 10.29.1** exclusively. Always use `pnpm` commands, never `npm` or `yarn`.

## Monorepo Structure

```
react-custom-components/
├── apps/
│   └── vite-app/          # Demo Vite app with shadcn/ui components
│       └── src/
│           ├── components/
│           │   ├── ui/    # shadcn/ui components
│           │   └── *.tsx  # Custom components
│           ├── lib/       # Utilities (cn helper)
│           └── hooks/     # React hooks
├── packages/
│   └── ui/                # Component library package (placeholder)
└── examples/              # Reserved for example apps
```

Workspaces are defined in `pnpm-workspace.yaml` covering `apps/*`, `packages/*`, and `examples/*`.

## Common Commands

### Development
```bash
# Run dev server for vite-app
cd apps/vite-app && pnpm dev

# Or from root with workspace filter
pnpm --filter vite-app dev
```

### Build
```bash
# Build all workspaces (uses Turbo task graph)
pnpm turbo build

# Build specific workspace
pnpm --filter vite-app build
```

### Linting
```bash
# Lint all workspaces
pnpm turbo lint

# Lint vite-app
pnpm --filter vite-app lint
```

### Type Checking
```bash
# Type check all workspaces
pnpm turbo typecheck

# Type check vite-app (uses tsc -b)
cd apps/vite-app && pnpm build
```

### Testing
```bash
# Run tests across workspaces
pnpm turbo test

# Run tests in watch mode
pnpm turbo test:run

# Generate coverage
pnpm turbo test:coverage
```

### Clean
```bash
# Clean build artifacts
pnpm turbo clean
```

## Technology Stack

### Core
- **React 19.2** - Latest React with new hooks
- **TypeScript 5.9** - Strict mode enabled
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first styling with Vite plugin
- **pnpm** - Fast, disk-efficient package manager
- **Turborepo** - Build system with task caching and dependency graphs

### UI Framework (vite-app)
- **shadcn/ui** (base-vega style) - Copy-paste component system built on Radix UI
- **Radix UI (@base-ui/react)** - Unstyled accessible primitives
- **class-variance-authority** - Component variants
- **lucide-react** - Icon library
- **tailwind-merge + clsx** - Conditional class merging via `cn()` utility

### Other Libraries (vite-app)
- **next-themes** - Dark mode support
- **cmdk** - Command palette
- **sonner** - Toast notifications
- **vaul** - Mobile drawer
- **react-day-picker** - Date picker
- **embla-carousel-react** - Carousel
- **react-resizable-panels** - Split panes
- **recharts** - Charts

### Linting & Formatting
- **ESLint 9** with flat config
- **typescript-eslint** - TypeScript rules
- **eslint-plugin-react-hooks** - React Hooks rules
- **eslint-plugin-react-refresh** - Fast refresh validation
- **Prettier** - Code formatting (shared at root)

## Architecture Notes

### Path Aliases
The vite-app uses TypeScript path aliases configured in `vite.config.ts`:
- `@/` maps to `apps/vite-app/src/`
- Import components: `import { Button } from '@/components/ui/button'`
- Import utils: `import { cn } from '@/lib/utils'`

### shadcn/ui Integration
Components are installed via the shadcn CLI to `apps/vite-app/src/components/ui/`. Configuration is in `apps/vite-app/components.json`:
- Style: `base-vega`
- CSS variables for theming
- Uses Tailwind CSS v4 with Vite plugin
- Icon library: lucide-react

To add new shadcn components:
```bash
cd apps/vite-app
npx shadcn@latest add <component-name>
```

### TypeScript Configuration
- Root: `tsconfig.base.json` extends `@tsconfig/node24`
- Target: ES2023, Module: ESNext, Resolution: bundler
- Strict mode enabled with `forceConsistentCasingInFileNames`
- Each workspace has its own tsconfig extending the base

### Turborepo Task Pipeline
Tasks defined in `turbo.json`:
- `build` - Depends on `^build` (dependencies first)
- `dev` - Persistent, no cache
- `lint`, `typecheck`, `format` - Standard checks
- `test`, `test:run`, `test:coverage` - Testing commands
- `clean` - No cache

Tasks use `^` notation to ensure dependency builds run first.

### UI Package (packages/ui)
Currently a placeholder. When implementing:
- Export reusable components independent of vite-app
- Consider extracting stable components from vite-app
- Set up proper build output (ESM/CJS) with tsup or Vite library mode
- Update `main` and `exports` fields in package.json

## Development Workflow

1. **Adding Dependencies**: Use `pnpm add <pkg>` in the specific workspace directory or `pnpm --filter <workspace> add <pkg>`
2. **Creating New Workspaces**: Add to appropriate directory (`apps/`, `packages/`, `examples/`) - pnpm will auto-detect based on `pnpm-workspace.yaml`
3. **Inter-Workspace Dependencies**: Reference by workspace name in package.json, e.g., `"ui": "workspace:*"`
4. **Git Commits**: Recent commits show use of patch versioning and conventional commit messages

## Node Version

The project specifies Node 24 (see `.nvmrc`). Use `nvm use` to switch to the correct version if using nvm.
