# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A **pnpm monorepo** managed with **Turborepo** for publishing `@react-custom-components/ui` — a React component library built on shadcn/ui (base-vega style) with @base-ui/react primitives. The library ships 55 components, hooks, and utilities as tree-shakeable ESM.

## Package Manager

**pnpm 10.29.1** exclusively. Never use `npm` or `yarn`.

## Monorepo Structure

```
react-custom-components/
├── packages/
│   └── ui/                # @react-custom-components/ui — the main component library
│       ├── src/
│       │   ├── components/  # 55 shadcn/ui components (.tsx)
│       │   ├── hooks/       # use-mobile.ts
│       │   └── lib/         # utils.ts (cn helper)
│       ├── tsup.config.ts   # Build config (ESM, dts, sourcemaps)
│       ├── components.json  # shadcn/ui CLI config
│       └── eslint.config.ts # ESLint flat config
├── examples/              # Reserved for example/demo apps
└── turbo.json             # Turborepo task pipeline
```

Workspaces: `apps/*`, `packages/*`, `examples/*` (defined in `pnpm-workspace.yaml`).

## Common Commands

```bash
# Build (uses Turbo dependency graph)
pnpm turbo build

# Build just the UI package
pnpm --filter @react-custom-components/ui build

# Watch mode during development
pnpm --filter @react-custom-components/ui dev

# Lint (auto-fix)
pnpm turbo lint

# Type check
pnpm turbo typecheck

# Format
pnpm turbo format

# Clean build artifacts
pnpm turbo clean

# Add a dependency to the UI package
pnpm --filter @react-custom-components/ui add <pkg>

# Add a shadcn component
cd packages/ui && npx shadcn@latest add <component-name>
```

## Architecture

### Component Pattern

Components follow a consistent pattern (see `button.tsx` as reference):
1. Import a headless primitive from `@base-ui/react` (e.g., `@base-ui/react/button`)
2. Define variants with `class-variance-authority` (CVA)
3. Compose with `cn()` utility (clsx + tailwind-merge) for class merging
4. Use `data-slot` attributes for styling hooks
5. Export both the component and its variants object

### Build & Distribution

- **tsup** builds ESM-only output with TypeScript declarations and sourcemaps
- Each component has its own entry point in `tsup.config.ts` for tree-shaking
- Sub-path exports in `package.json` allow both barrel imports (`@react-custom-components/ui`) and direct imports (`@react-custom-components/ui/button`)
- Peer dependencies: `react`, `react-dom`, `@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`

### Adding a New Component

When adding a component, update three files:
1. Create `packages/ui/src/components/<name>.tsx`
2. Add `export * from "./components/<name>"` to `packages/ui/src/index.ts`
3. Add the entry point to `packages/ui/tsup.config.ts`
4. Add the sub-path export to `packages/ui/package.json` under `exports`

### TypeScript

- Root `tsconfig.base.json` extends `@tsconfig/node24` — target ESNext, strict mode, bundler resolution
- Path aliases in `packages/ui/tsconfig.json`: `@react-custom-components/ui` and `@react-custom-components/ui/*`
- Enforce `consistent-type-imports` with separate type import style

### Linting & Formatting

- ESLint 9 flat config with `@eslint-react/eslint-plugin`, `typescript-eslint`, and Prettier integration
- Prettier: no semicolons, 120 char line width
- Key enforced rule: `@typescript-eslint/consistent-type-imports` (error) — always use `import type` for type-only imports

### Node Version

Node 24 (see `.nvmrc`).
