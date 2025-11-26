import Avatar from '@/components/ui/Avatar/Avatar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Site Title */}
        <div className="flex items-center gap-2">
          <div className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            MyApp
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Home
          </Link>
          <Link
            href="/preview"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Preview
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            About
          </Link>
        </nav>

        {/* Right side - User Avatar */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            John Doe
          </div>
          <Avatar name="John Doe" size="md" variant="primary" />
        </div>
      </div>
    </header>
  );
}
