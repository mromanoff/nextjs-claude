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
  default: 'bg-foreground/10 text-foreground hover:bg-foreground/20 shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:shadow-[0_0_0_0_rgba(0,0,0,0.15)]',
  primary: 'text-white hover:translate-y-[1px] active:translate-y-[4px] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.2)] active:shadow-[0_0_0_0_rgba(0,0,0,0.2)]',
  secondary: 'text-white hover:translate-y-[1px] active:translate-y-[4px] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.2)] active:shadow-[0_0_0_0_rgba(0,0,0,0.2)]',
  accent: 'text-white hover:translate-y-[1px] active:translate-y-[4px] shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.2)] active:shadow-[0_0_0_0_rgba(0,0,0,0.2)]',
  outline: 'border-2 border-foreground/30 text-foreground hover:bg-foreground/10 shadow-[0_3px_0_0_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.1)] active:shadow-[0_0_0_0_rgba(0,0,0,0.1)]',
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
        inline-flex items-center justify-center rounded-2xl font-medium
        transition-all duration-150 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 disabled:shadow-none
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
