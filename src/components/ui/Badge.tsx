import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

type BadgeProps = ComponentProps<"div"> & {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
};

const variantStyle = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  outline: "border-border text-foreground bg-background",
  ghost: "bg-muted/50 text-muted-foreground",
  gold: "bg-gold text-white",
};

const Badge = ({ children, className, variant = "primary", ...props }: BadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex h-6 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-3 text-xs font-semibold tracking-wide whitespace-nowrap uppercase transition-all [&>svg]:size-3",
        variantStyle[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { Badge };
