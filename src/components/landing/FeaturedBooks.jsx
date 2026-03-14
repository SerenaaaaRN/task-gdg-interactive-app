import { TbShoppingBagPlus } from "react-icons/tb";

import Container from "../ui/Container";
import Title from "../ui/Title";
import Button from "../ui/Button";

import { useShop } from "../../hooks/useShop";

const FeaturedBooks = () => {
  const { featuredBook, books, currency } = useShop();

  if (!featuredBook) return null;

  return (
    <Container className="py-16">
      <div className="sm:px-10 flex sm:bg-secondary py-16 rounded-3xl border border-transparent sm:border-border">
        {/* left */}
        <aside className="flex-1">
          <Title
            title={"Featured"}
            subtitle={"Books"}
            className={"pb-8"}
            description={"Browse featured books carefully selected by our experts"}
          />
          <div className="flex gap-4 sm:gap-8 sm:bg-white sm:p-6 rounded-2xl shadow-sm border border-transparent sm:border-border">
            <div className="min-w-40 flex items-center justify-center bg-primary p-2 rounded-xl">
              <img
                src={featuredBook.image}
                alt={featuredBook.name}
                className="h-64 w-44 object-contain mix-blend-multiply drop-shadow-sm"
              />
            </div>
            <div className="flex flex-col justify-between py-2">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-dark-surface line-clamp-2 leading-tight">{featuredBook.name}</h3>
                <p className="text-sm font-medium text-accent">{featuredBook.category}</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <h4 className="text-xl font-bold text-dark-surface">
                  {currency}
                  {featuredBook.offerPrice}
                </h4>
              </div>
              <div className="mt-4 text-text-muted text-sm space-y-1">
                <p>
                  <span className="font-medium text-text-main">Published: </span>2023
                </p>
                <p>
                  <span className="font-medium text-text-main">Pages: </span>300
                </p>
                <p>
                  <span className="font-medium text-text-main">Language: </span>English
                </p>
                <p>
                  <span className="font-medium text-text-main">Stock: </span>In Stock
                </p>
              </div>
              <p className="mt-4 text-text-muted text-sm line-clamp-3 leading-relaxed">{featuredBook.description}</p>
              <Button variant="primary" className="mt-6 w-fit flex items-center gap-2">
                <TbShoppingBagPlus className="text-xl" />
                Add to Cart
              </Button>
            </div>
          </div>
        </aside>

        {/* right */}
        <aside className="hidden xl:flex flex-1 bg-center bg-cover bg-no-repeat rounded-2xl ml-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {books.slice(1, 7).map((b) => (
              <div key={b._id} className=" bg-primary p-2 rounded-xl items-center justify-center">
                <img
                  src={b.image}
                  alt={b.name}
                  className="object-contain drop-shadow-md rounded-md group-hover:rotate-3 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default FeaturedBooks;
