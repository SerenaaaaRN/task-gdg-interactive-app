import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const Input = ({ className, ...props }: ComponentProps<"input">) => {
  return (
    <input
      className={cn(
        "border-border bg-background text-foreground placeholder:text-muted-foreground",
        "focus-visible:border-accent focus-visible:ring-accent/20",
        "file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "disabled:bg-muted/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/20",
        "h-11 w-full min-w-0 rounded-lg border px-4 py-2.5 text-base font-serif transition-all duration-200 outline-none focus-visible:ring-3 aria-invalid:ring-3",
        "md:text-sm",
        className
      )}
      {...props}
    />
  );
};

export { Input };
