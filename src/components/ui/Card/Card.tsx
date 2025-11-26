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
  primary: 'bg-blue-50/50 border-blue-200 text-blue-950 dark:bg-blue-950 dark:border-blue-800 dark:text-blue-100',
  secondary: 'bg-purple-50/50 border-purple-200 text-purple-950 dark:bg-purple-950 dark:border-purple-800 dark:text-purple-100',
  success: 'bg-green-50/50 border-green-200 text-green-950 dark:bg-green-950 dark:border-green-800 dark:text-green-100',
  danger: 'bg-red-50/50 border-red-200 text-red-950 dark:bg-red-950 dark:border-red-800 dark:text-red-100',
  warning: 'bg-yellow-50/50 border-yellow-200 text-yellow-950 dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-100',
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
    >
      {children}
    </div>
  );
}
