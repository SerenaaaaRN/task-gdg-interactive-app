import { ArrowLeftIcon, BookOpen } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";

const NotFound = () => {
  return (
    <div className="animate-fade-in-up flex h-[80vh] w-full flex-col items-center justify-center px-4 text-center">

      <div className="relative mb-8">
        <h1 className="text-border text-[10rem] leading-none font-extralight tracking-tighter sm:text-[14rem]">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="text-accent size-16 opacity-60" />
        </div>
      </div>

      <h2 className="mb-3 text-2xl font-bold">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
        The page you're looking for seems to have wandered off between the bookshelves. Let's get you back on track.
      </p>

      <ButtonLink to="/" variant="accent" size="lg" className="flex items-center gap-2">
        <ArrowLeftIcon className="size-4" />
        Back to Home
      </ButtonLink>
    </div>
  );
};

export default NotFound;
