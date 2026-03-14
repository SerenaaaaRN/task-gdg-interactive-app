const Button = ({ children, variant = "primary", size = "md", className = "", ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200 cursor-pointer";

  const variants = {
    primary: "bg-dark-surface text-dark-text hover:bg-dark-surface hover:text-white",
    secondary: "bg-secondary text-dark-text hover:bg-[#e3dccc] hover:text-dark-surface",
    outline: "bg-transparent border border-border text-main hover:bg-secondary",
    ghost: "bg-transparent text-main hover:bg-secondary border-transparent",
    accent: "bg-accent text-white hover:opacity-90",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
