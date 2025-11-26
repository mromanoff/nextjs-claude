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
  primary: 'bg-blue-100/50 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  secondary: 'bg-purple-100/50 text-purple-700 dark:bg-purple-900 dark:text-purple-300',
  success: 'bg-green-100/50 text-green-700 dark:bg-green-900 dark:text-green-300',
  danger: 'bg-red-100/50 text-red-700 dark:bg-red-900 dark:text-red-300',
  warning: 'bg-yellow-100/50 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
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
    >
      {children}
    </div>
  );
}
