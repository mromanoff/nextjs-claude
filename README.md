# sandbox-claude

A modern UI component library built with Next.js 16, React 19, and Tailwind CSS 4. Features a collection of reusable, accessible components with dark mode support and comprehensive testing.

## Features

- **7 Reusable UI Components** - Avatar, Button, Card, Icon, Modal, Header, and ThemeToggle
- **Interactive Component Preview** - Live preview page showcasing all components with different variants and configurations
- **Dark Mode Support** - System-preference based theming with `next-themes`
- **TypeScript Strict Mode** - Fully typed components with comprehensive interfaces
- **Modern Testing Setup** - Vitest + React Testing Library
- **Latest Tech Stack** - Next.js 16, React 19, Tailwind CSS 4

## Tech Stack

- **Next.js 16.0.4** - App Router with Server Components
- **React 19.2.0** - Latest React with concurrent features
- **TypeScript 5** - Strict mode enabled
- **Tailwind CSS 4** - Utility-first CSS framework
- **next-themes** - Dark mode implementation
- **Vitest** - Fast unit testing framework
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/mromanoff/nextjs-claude.git
cd sandbox-claude

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Visit [http://localhost:3000/preview](http://localhost:3000/preview) to see the component showcase.

## Available Components

All components are located in `/src/components/ui/` and support multiple variants, sizes, and dark mode:

- **Avatar** - User profile avatars with initials, configurable sizes (sm, md, lg, xl) and variants (default, primary, secondary, accent)
- **Button** - Interactive buttons with variants (default, primary, secondary, accent, outline, ghost) and sizes
- **Card** - Container components with variants (primary, secondary, success, danger, warning) and configurable sizes
- **Icon** - Icon wrapper component with consistent styling and sizes
- **Modal** - Dialog/popup component with backdrop, ESC key support, and size options (sm, md, lg)
- **Header** - Sticky navigation header with responsive design
- **ThemeToggle** - Dark mode toggle switch

## Development

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Run tests
pnpm test

# Run tests with UI
pnpm test:ui
```

## Project Structure

```
sandbox-claude/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Home page
│   │   ├── about/        # About page
│   │   ├── preview/      # Component showcase
│   │   └── layout.tsx    # Root layout
│   └── components/
│       └── ui/           # Reusable UI components
│           ├── Avatar/
│           ├── Button/
│           ├── Card/
│           ├── Header/
│           ├── Icon/
│           ├── Modal/
│           └── ThemeToggle/
├── public/               # Static assets
└── tests/               # Test files
```

## Testing

The project uses Vitest for testing with React Testing Library:

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with UI
pnpm test:ui
```

## Component Usage Example

```typescript
import { Button } from '@/components/ui/Button/Button';
import { Avatar } from '@/components/ui/Avatar/Avatar';

export default function Page() {
  return (
    <div>
      <Avatar initials="JD" variant="primary" size="lg" />
      <Button variant="primary" size="md" onClick={() => console.log('Clicked!')}>
        Click Me
      </Button>
    </div>
  );
}
```

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mromanoff/nextjs-claude)

For other deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## License

MIT
