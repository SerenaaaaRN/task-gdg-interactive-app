import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonVariantProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent";
  size?: "default" | "sm" | "lg" | "xs";
};

type ButtonProps = ComponentProps<"button"> & ButtonVariantProps;
type ButtonLinkProps = LinkProps & ButtonVariantProps;

const variantStyle = {
  primary: "bg-primary text-primary-foreground shadow-warm-sm hover:shadow-warm hover:opacity-90",
  secondary: "bg-secondary text-secondary-foreground shadow-warm-sm hover:bg-secondary/80",
  outline: "border border-border bg-background shadow-warm-sm hover:bg-muted hover:text-foreground",
  ghost: "hover:bg-muted hover:text-foreground",
  accent: "bg-accent text-accent-foreground shadow-warm-sm hover:opacity-90",
};

const sizeStyles = {
  default: "h-10 gap-2 px-5 text-sm",
  xs: "h-7 gap-1 px-3 text-xs rounded-md",
  sm: "h-8 gap-1.5 px-4 text-[0.8rem] rounded-md",
  lg: "h-12 gap-2 px-7 text-base",
};

const buttonBase =
  "inline-flex items-center justify-center shrink-0 whitespace-nowrap rounded-lg font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer";

const Button = ({ children, className, variant = "primary", size = "default", ...props }: ButtonProps) => {
  return (
    <button className={cn(buttonBase, variantStyle[variant], sizeStyles[size], className)} {...props}>
      {children}
    </button>
  );
};

const ButtonLink = ({ children, className, variant = "ghost", size = "default", ...props }: ButtonLinkProps) => {
  return (
    <Link className={cn(buttonBase, variantStyle[variant], sizeStyles[size], className)} {...props}>
      {children}
    </Link>
  );
};

export { Button, ButtonLink };
