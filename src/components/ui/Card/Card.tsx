interface CardProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  className?: string;
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-7',
};

const variantClasses = {
  primary: 'text-foreground',
  secondary: 'text-foreground',
  success: 'text-foreground',
  danger: 'text-foreground',
  warning: 'text-foreground',
};

const variantStyles = {
  primary: {
    backgroundColor: 'color-mix(in srgb, var(--primary) 10%, var(--background))',
    borderColor: 'color-mix(in srgb, var(--primary) 30%, var(--background))',
  },
  secondary: {
    backgroundColor: 'color-mix(in srgb, var(--secondary) 10%, var(--background))',
    borderColor: 'color-mix(in srgb, var(--secondary) 30%, var(--background))',
  },
  success: {
    backgroundColor: 'color-mix(in srgb, var(--success) 10%, var(--background))',
    borderColor: 'color-mix(in srgb, var(--success) 30%, var(--background))',
  },
  danger: {
    backgroundColor: 'color-mix(in srgb, var(--danger) 10%, var(--background))',
    borderColor: 'color-mix(in srgb, var(--danger) 30%, var(--background))',
  },
  warning: {
    backgroundColor: 'color-mix(in srgb, var(--warning) 10%, var(--background))',
    borderColor: 'color-mix(in srgb, var(--warning) 30%, var(--background))',
  },
};

export default function Card({
  children,
  size = 'md',
  variant = 'primary',
  className = '',
  disabled = false,
}: CardProps) {
  return (
    <div
      className={`
        rounded-lg border-2 shadow-sm transition-all
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={variantStyles[variant]}
    >
      {children}
    </div>
  );
}
