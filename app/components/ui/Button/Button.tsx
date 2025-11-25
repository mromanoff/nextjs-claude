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
  default: 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-600',
  primary: 'bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700',
  secondary: 'bg-purple-500 text-white hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-700',
  accent: 'bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700',
  outline: 'border-2 border-zinc-300 text-zinc-700 hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800',
  ghost: 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
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
        transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {children}
    </button>
  );
}
