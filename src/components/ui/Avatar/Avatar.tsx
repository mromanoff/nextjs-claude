interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
};

const variantClasses = {
  default: 'bg-foreground/10 text-foreground',
  primary: 'text-white',
  secondary: 'text-white',
  accent: 'text-white',
};

const variantStyles = {
  default: {},
  primary: { backgroundColor: 'var(--primary)' },
  secondary: { backgroundColor: 'var(--secondary)' },
  accent: { backgroundColor: 'var(--success)' },
};

/**
 * Get initials from a name string
 * Examples: "John Doe" -> "JD", "Alice" -> "AL", "Bob Smith Jr" -> "BS"
 */
function getInitials(name: string): string {
  if (!name || name.trim() === '') {
    return 'AA';
  }

  const words = name.trim().split(/\s+/);

  if (words.length === 1) {
    // Single name: take first two letters
    const word = words[0];
    return word.length >= 2
      ? word.substring(0, 2).toUpperCase()
      : (word[0] + word[0]).toUpperCase();
  }

  // Multiple words: take first letter of first and last word
  const firstInitial = words[0][0];
  const lastInitial = words[words.length - 1][0];
  return (firstInitial + lastInitial).toUpperCase();
}

export default function Avatar({
  name,
  size = 'md',
  variant = 'default',
  className = ''
}: AvatarProps) {
  const initials = getInitials(name);

  return (
    <div
      className={`
        inline-flex items-center justify-center rounded-full font-semibold
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={variantStyles[variant]}
      aria-label={`Avatar for ${name}`}
      title={name}
    >
      {initials}
    </div>
  );
}
