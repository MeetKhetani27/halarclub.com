import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  ariaLabel,
  type = 'button',
}) => {
  const baseClasses = 'btn';
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const sizeClasses = {
    sm: 'text-xs px-4 py-2',
    md: 'text-sm px-6 py-3',
    lg: 'text-base px-8 py-4',
  };

  const allClasses = `${baseClasses} ${variantClasses} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={allClasses} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={allClasses} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={allClasses} aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default Button;