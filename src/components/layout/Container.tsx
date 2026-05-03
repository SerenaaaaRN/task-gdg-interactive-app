import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

const Container = ({ className, children, ...props }: ComponentProps<"section">) => {
  return (
    <section className={cn("mx-auto max-w-360 px-6 lg:px-12", className)} {...props}>
      {children}
    </section>
  );
};

export { Container };
