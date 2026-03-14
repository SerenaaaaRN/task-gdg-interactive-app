import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-[var(--color-dark-surface)] text-[var(--color-dark-text)] hover:bg-[#1f1e1b]',
    secondary: 'bg-[var(--color-secondary)] text-[var(--color-text-main)] hover:bg-[#e3dccc]',
    outline: 'bg-transparent border border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-secondary)]',
    ghost: 'bg-transparent text-[var(--color-text-main)] hover:bg-[var(--color-secondary)] border-transparent',
    accent: 'bg-[var(--color-accent)] text-white hover:opacity-90'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
