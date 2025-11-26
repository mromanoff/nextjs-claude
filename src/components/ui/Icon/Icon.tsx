interface IconProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  className?: string;
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
};

const variantClasses = {
  primary: '',
  secondary: '',
  success: '',
  danger: '',
  warning: '',
};

const variantStyles = {
  primary: {
    backgroundColor: 'color-mix(in srgb, var(--primary) 15%, var(--background))',
    color: 'var(--primary)',
  },
  secondary: {
    backgroundColor: 'color-mix(in srgb, var(--secondary) 15%, var(--background))',
    color: 'var(--secondary)',
  },
  success: {
    backgroundColor: 'color-mix(in srgb, var(--success) 15%, var(--background))',
    color: 'var(--success)',
  },
  danger: {
    backgroundColor: 'color-mix(in srgb, var(--danger) 15%, var(--background))',
    color: 'var(--danger)',
  },
  warning: {
    backgroundColor: 'color-mix(in srgb, var(--warning) 15%, var(--background))',
    color: 'var(--warning)',
  },
};

export default function Icon({
  children,
  size = 'md',
  variant = 'primary',
  className = '',
  disabled = false,
}: IconProps) {
  return (
    <div
      className={`
        rounded-full inline-flex items-center justify-center transition-all
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
