'use client';

import { useEffect, useRef, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  className?: string;
  showCloseButton?: boolean;
  contentId?: string;
}

// Focus trap hook
function useFocusTrap(ref: React.RefObject<HTMLDivElement>, isActive: boolean) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const element = ref.current;
    const focusableElements = element.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    function handleTabKey(e: KeyboardEvent) {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    }

    element.addEventListener('keydown', handleTabKey);
    return () => element.removeEventListener('keydown', handleTabKey);
  }, [isActive, ref]);
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  variant = 'primary',
  className = '',
  showCloseButton = true,
  contentId,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  // Focus trap
  useFocusTrap(modalRef, isOpen);

  // Size classes for modal width
  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-2xl',
  };

  // Variant classes for header styling using CSS variables
  const variantClasses = {
    primary: 'text-white',
    secondary: 'text-white',
    success: 'text-white',
    danger: 'text-white',
    warning: 'text-white',
  };

  const variantStyles = {
    primary: { backgroundColor: 'var(--primary)' },
    secondary: { backgroundColor: 'var(--secondary)' },
    success: { backgroundColor: 'var(--success)' },
    danger: { backgroundColor: 'var(--danger)' },
    warning: { backgroundColor: 'var(--warning)' },
  };

  // Handle escape key and focus restoration
  useEffect(() => {
    if (!isOpen) return;

    // Store the element that had focus before modal opened
    const previouslyFocusedElement = document.activeElement as HTMLElement;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Focus modal when it opens
    if (modalRef.current) {
      modalRef.current.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
      // Restore focus when modal closes
      previouslyFocusedElement?.focus();
    };
  }, [isOpen, onClose]);

  // Handle backdrop click with visual feedback
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsClosing(true);
      setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 150);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={contentId}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={`
          relative w-full ${sizeClasses[size]}
          bg-background
          rounded-lg shadow-2xl
          ${isClosing ? 'animate-out zoom-out-95 duration-150' : 'animate-in zoom-in-95 duration-200'}
          outline-none
          ${className}
        `}
      >
        {/* Header */}
        {title && (
          <div
            className={`px-6 py-4 rounded-t-lg ${variantClasses[variant]}`}
            style={variantStyles[variant]}
          >
            <h2 id="modal-title" className="text-xl font-semibold">
              {title}
            </h2>
          </div>
        )}

        {/* Close button */}
        {showCloseButton && (
          <button
            onClick={onClose}
            className={`
              absolute ${title ? 'top-3 right-3' : 'top-4 right-4'}
              w-8 h-8 rounded-full
              flex items-center justify-center
              ${title ? 'text-white hover:bg-white/20 dark:hover:bg-white/10' : 'text-foreground/60 hover:text-foreground hover:bg-foreground/10'}
              transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
            `}
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        )}

        {/* Content */}
        <div className="px-6 py-4 text-foreground">
          {children}
        </div>
      </div>
    </div>
  );
}
