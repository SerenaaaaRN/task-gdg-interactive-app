const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`bg-white border border-border rounded-full px-4 py-2.5 text-text-main placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-dark-surface transition-all ${className}`}
      {...props}
    />
  );
};

export default Input;
