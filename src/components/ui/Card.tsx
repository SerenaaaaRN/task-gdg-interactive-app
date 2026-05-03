import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const Card = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "group/card bg-background text-foreground relative flex flex-col overflow-hidden rounded-xl border border-border shadow-warm-sm transition-all duration-300 hover:shadow-warm hover:-translate-y-1",
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({ className, ...props }: ComponentProps<"header">) => {
  return (
    <header
      className={cn(
        "group/card-header grid auto-rows-min items-start gap-1.5 px-5 pt-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto]",
        className
      )}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props }: ComponentProps<"h3">) => {
  return (
    <h3
      className={cn(
        "text-foreground text-lg leading-snug font-semibold",
        className
      )}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props }: ComponentProps<"p">) => {
  return <p className={cn("text-muted-foreground text-sm leading-relaxed", className)} {...props} />;
};

const CardAction = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)} {...props} />;
};

const CardContent = ({ className, ...props }: ComponentProps<"div">) => {
  return <div className={cn("px-5", className)} {...props} />;
};

const CardFooter = ({ className, ...props }: ComponentProps<"footer">) => {
  return (
    <footer
      className={cn(
        "bg-muted/30 border-border flex items-center border-t px-5 py-4",
        className
      )}
      {...props}
    />
  );
};

export { Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter };
