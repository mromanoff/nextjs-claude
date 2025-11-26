# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Tech Stack

- **Next.js 16.0.4** with App Router
- **React 19.2.0** (latest)
- **TypeScript 5** (strict mode enabled)
- **Tailwind CSS 4** with PostCSS
- **Package Manager:** pnpm

## Architecture Overview

### Component Organization

UI components live in `/src/components/ui/` for reusable interface elements. The project follows Next.js App Router conventions with file-based routing in the `/src/app/` directory. All source code lives under the `/src/` directory.

**Directory Structure:**
- `/src/app/` - Page components and routing (App Router)
- `/src/components/ui/` - Reusable UI components (Avatar, Button, Header, etc.)

**Key Patterns:**
- Server Components by default (no 'use client' directive needed)
- Named default exports: `export default function ComponentName() { ... }`
- Props interfaces defined inline above components
- Responsive design using Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`)

### Styling System

**Tailwind CSS 4 with inline classes:**
- All styling uses Tailwind utility classes via `className` prop
- No CSS modules - inline Tailwind only
- Dynamic class composition using template literals

**Dark Mode:**
- System-preference based using `@media (prefers-color-scheme: dark)`
- All components use `dark:` prefix for dark variants
- Theme colors defined in `app/globals.css` as CSS custom properties:
  - `--background`: #ffffff (light) → #0a0a0a (dark)
  - `--foreground`: #171717 (light) → #ededed (dark)

**Color Palette:**
- Zinc shades for neutral UI (backgrounds, borders, text)
- Blue, purple, green for variant states
- Example: `bg-zinc-50 dark:bg-zinc-900`, `text-zinc-600 dark:text-zinc-400`

### Component Patterns

**Size/Variant Props Pattern** (see `Avatar/Avatar.tsx`, `Button/Button.tsx`):
```typescript
interface ComponentProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;  // Allow additional custom classes
}

// Map props to Tailwind classes
const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  // ...
};
```

**Responsive Components:**
- Mobile-first approach
- Use `hidden sm:block` patterns to show/hide elements
- Navigation: `hidden md:flex` for desktop-only menus

### TypeScript Configuration

- Path alias `@/*` maps to root directory (use for imports)
- Strict mode enabled - all props must be typed
- Target: ES2017

## Current Architecture

**Layout Hierarchy:**
```
RootLayout (src/app/layout.tsx)
  └─ Header (src/components/ui/Header/Header.tsx)
       └─ Avatar (src/components/ui/Avatar/Avatar.tsx)
  └─ Page Content
```

**Existing Reusable Components:**
- `Avatar` (src/components/ui/Avatar/Avatar.tsx): Displays user initials with configurable size/variant
- `Button` (src/components/ui/Button/Button.tsx): Interactive button with configurable size/variant/type
- `Header` (src/components/ui/Header/Header.tsx): Sticky header with navigation and user avatar

## Fonts

Uses Google Fonts via `next/font/google`:
- **Geist Sans** (primary, variable: `--font-geist-sans`)
- **Geist Mono** (monospace, variable: `--font-geist-mono`)

Applied via CSS variables in layout.tsx body className.

## development Notes

- when making new page compponents, always add a link to that page in the header. Only do this for page components, not UI or other drop-in components.

- when making new UI component, always place this component in own forlder as component name. example /src/components/ui/Avatar/Avatar.tsx 

- never use "Co-Authored-By: Claude <noreply@anthropic.com>" in git commit messages or any mentions about claude.

- Use Context7 to check up-to-date docs when needed for implementing new libraries or frameworks, or adding features using them.

- Always use context7 when I need code generation, setup or configuration steps, or library/API documentation. This means you should automatically use the Context7 MCP tools to resolve library id and get library docs without me having to explicitly ask.