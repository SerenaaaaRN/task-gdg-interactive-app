const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200 cursor-pointer";

  const variants = {
    primary: "bg-dark-surface text-dark-text hover:bg-[#1f1e1b]",
    secondary: "bg-secondary text-main hover:bg-[#e3dccc]",
    outline: "bg-transparent border border-border text-main hover:bg-secondary",
    ghost: "bg-transparent text-main hover:bg-secondary border-transparent",
    accent: "bg-accent text-white hover:opacity-90",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
