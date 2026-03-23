// @ts-check
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import { blogs } from "../constant/blogs";

const BlogCard = ({ blog }) => {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-2xl mb-4">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="space-y-2">
        <span className="text-sm font-medium uppercase tracking-wider text-blue-600">{blog.category}</span>
        <h3 className="text-2xl font-semibold leading-snug group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-500 text-sm pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas.
        </p>
        <Button variant="outline" className="group-hover:bg-black group-hover:text-white transition-all">
          Read More
        </Button>
      </div>
    </div>
  );
};
const Blog = () => {
  return (
    <Container className="mt-24 mb-24">
      <Title
        title="All"
        subtitle="Blogs"
        className="pb-16"
        description="Check out our most popular blogs with exciting plots and vibrant voice"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {blogs.map((b) => (
          <BlogCard key={b.title} blog={b} />
        ))}
      </div>
    </Container>
  );
};

export default Blog;
