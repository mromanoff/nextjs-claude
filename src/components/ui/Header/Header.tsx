import Avatar from '@/components/ui/Avatar/Avatar';
import ThemeToggle from '@/components/ui/ThemeToggle/ThemeToggle';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-foreground/20 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Site Title */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-foreground/80"
          >
            AISandbox
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/preview"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Preview
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            About
          </Link>
        </nav>

        {/* Right side - User Avatar & Theme Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-sm font-medium text-foreground">
            John Doe
          </div>
          <Avatar name="John Doe" size="md" variant="primary" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
