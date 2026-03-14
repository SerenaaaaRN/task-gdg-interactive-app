import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";
import Button from "../../components/ui/Button";

import { useShop } from "../../hooks/useShop";
import { ShoppingBag } from "lucide-react";

const FeaturedBooks = () => {
  const { featuredBook, books, currency } = useShop();

  if (!featuredBook) return null;

  return (
    <Container className="py-16">
      <div className="sm:px-10 flex sm:bg-secondary py-16 rounded-3xl border border-transparent sm:border-border">
        <FeaturedBookDetail book={featuredBook} currency={currency} />
        <FeaturedBookGrid books={books} />
      </div>
    </Container>
  );
};

const FeaturedBookDetail = ({ book, currency }) => (
  <aside className="flex-1">
    <Title
      title={"Featured"}
      subtitle={"Books"}
      className={"pb-8"}
      description={"Browse featured books carefully selected by our experts"}
    />
    <div className="flex gap-4 sm:gap-8 sm:bg-white sm:p-6 rounded-2xl shadow-sm border border-transparent sm:border-border">
      <div className="min-w-40 flex items-center justify-center bg-primary p-2 rounded-xl">
        <img src={book.image} alt={book.name} className="h-64 w-44 object-contain mix-blend-multiply drop-shadow-sm" />
      </div>
      <div className="flex flex-col justify-between py-2">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold text-dark-surface line-clamp-2 leading-tight">{book.name}</h3>
          <p className="text-sm font-medium text-accent">{book.category}</p>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <h4 className="text-xl font-bold text-dark-surface">
            {currency}
            {book.offerPrice}
          </h4>
        </div>
        <div className="mt-4 text-text-muted text-sm space-y-1">
          <p className="font-medium text-text-main">Published: 2023</p>
          <p className="font-medium text-text-main">Pages: 300</p>
          <p className="font-medium text-text-main">Language: English</p>
          <p className="font-medium text-text-main">Stock: In Stock</p>
        </div>
        <p className="mt-4 text-text-muted text-sm line-clamp-3 leading-relaxed">{book.description}</p>
        <Button variant="primary" className="mt-6 w-fit flex items-center gap-2">
          <ShoppingBag className="text-xl" />
          Add to Cart
        </Button>
      </div>
    </div>
  </aside>
);

const FeaturedBookGrid = ({ books }) => (
  <aside className="hidden xl:flex flex-1 bg-center bg-cover bg-no-repeat rounded-2xl ml-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.slice(1, 7).map((b) => (
        <div key={b._id} className="bg-primary p-2 rounded-xl items-center justify-center group">
          <img
            src={b.image}
            alt={b.name}
            className="object-contain drop-shadow-md rounded-md transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  </aside>
);

export default FeaturedBooks;
