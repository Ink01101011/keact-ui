import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variant
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /**
   * Button size
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Is button in loading state?
   */
  loading?: boolean;
  /**
   * Full width button
   */
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Variant styles
    const variantStyles = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
      secondary: 'bg-secondary-500 text-white hover:bg-secondary-600 active:bg-secondary-700',
      outline:
        'bg-transparent text-primary-500 border border-primary-500 hover:bg-primary-50 active:bg-primary-100',
      ghost: 'bg-transparent text-secondary-700 hover:bg-neutral-100 active:bg-neutral-200',
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-2 text-sm gap-2',
      md: 'px-4 py-2.5 text-base gap-2',
      lg: 'px-5 py-3 text-lg gap-3',
    };

    const classes = clsx(
      'keact-button',
      'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variantStyles[variant],
      sizeStyles[size],
      {
        'w-full': fullWidth,
        'pointer-events-none': loading,
      },
      className
    );

    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
        {loading ? <span className="keact-button__spinner" /> : null}
        <span className={clsx({ 'opacity-0': loading })}>{children}</span>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
