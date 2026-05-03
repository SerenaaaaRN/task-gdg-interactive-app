import { Container } from "@/components/layout/Container";
import { SectionHeader, SHTitle, SHDescription } from "@/components/common/SectionHeader";
import { blogs } from "@/constant/blogs";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import type { blog } from "@/types";
import { cn } from "@/lib/utils";

const BlogCard = ({ blog, isHero = false }: { blog: blog; isHero?: boolean }) => {
  return (
    <article className={cn("group cursor-pointer", isHero ? "md:col-span-2 lg:col-span-3" : "")}>
      <div className={`mb-5 overflow-hidden rounded-2xl ${isHero ? "h-80 md:h-96" : "h-64"}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3">
        <span className="text-accent text-xs font-bold tracking-[0.2em] uppercase">{blog.category}</span>
        <h3
          className={cn(
            "group-hover:text-accent leading-tight font-bold tracking-tight transition-colors duration-300",
            isHero ? "text-2xl md:text-3xl" : "line-clamp-2 text-xl"
          )}
        >
          {blog.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas.
        </p>
        <Button variant="ghost" className="hover-underline gap-2 px-0 text-sm font-medium hover:bg-transparent">
          Read More
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <Container className="pt-28 pb-20">
      <SectionHeader className="pb-14">
        <SHTitle title="Our" color="Journal" />
        <SHDescription content="Stories, insights, and recommendations from the world of literature" />
      </SectionHeader>

      {blogs.length > 0 && <BlogCard blog={blogs[0]} isHero />}

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(1).map((b) => (
          <BlogCard key={b.title} blog={b} />
        ))}
      </div>
    </Container>
  );
};

export default Blog;
