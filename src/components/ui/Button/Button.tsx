interface ButtonProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-5 py-2.5 text-base',
  xl: 'px-6 py-3 text-lg',
};

const variantClasses = {
  default: 'bg-foreground/10 text-foreground hover:bg-foreground/20',
  primary: 'text-white hover:opacity-90',
  secondary: 'text-white hover:opacity-90',
  accent: 'text-white hover:opacity-90',
  outline: 'border-2 border-foreground/30 text-foreground hover:bg-foreground/10',
  ghost: 'text-foreground hover:bg-foreground/10',
};

const variantStyles = {
  default: {},
  primary: { backgroundColor: 'var(--primary)' },
  secondary: { backgroundColor: 'var(--secondary)' },
  accent: { backgroundColor: 'var(--success)' },
  outline: {},
  ghost: {},
};

export default function Button({
  children,
  size = 'md',
  variant = 'default',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center rounded-md font-medium
        transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={variantStyles[variant]}
    >
      {children}
    </button>
  );
}
