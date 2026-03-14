import React from 'react';

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`bg-white border border-[var(--color-border)] rounded-full px-4 py-2.5 text-[var(--color-text-main)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--color-dark-surface)] transition-all ${className}`}
      {...props}
    />
  );
};

export default Input;
