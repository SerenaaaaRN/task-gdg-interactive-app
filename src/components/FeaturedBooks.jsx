import { TbShoppingBagPlus } from "react-icons/tb";
import featuredBooksImg from "../assets/featured-books.png";
import Title from "./Title";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { useShop } from "../context/ShopContext";

const FeaturedBooks = () => {
  const { books, currency } = useShop();
  // Rule 5.1: Derive book during rendering, no state needed.
  const book = books[21];

  return (
    <Container className="py-16">
      <div className="sm:px-10 flex sm:bg-[var(--color-secondary)] py-16 rounded-3xl border border-transparent sm:border-[var(--color-border)]">
        {/* left */}
        <aside className="flex-1">
          <Title
            title1={"Featured"}
            title2={"Books"}
            titleStyles={"pb-8"}
            para={"Browse featured books carefully selected by our experts"}
          />
          <div className="flex gap-4 sm:gap-8 sm:bg-white sm:p-6 rounded-2xl shadow-sm border border-transparent sm:border-[var(--color-border)]">
            <div className="min-w-40 flex items-center justify-center bg-[var(--color-primary)] p-2 rounded-xl">
              <img src={book?.image} alt={book?.name} className="h-64 w-44 object-contain mix-blend-multiply drop-shadow-sm" />
            </div>
            <div className="flex flex-col justify-between py-2">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-[var(--color-dark-surface)] line-clamp-2 leading-tight">{book?.name}</h3>
                <p className="text-sm font-medium text-[var(--color-accent)]">{book?.category}</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <h4 className="text-xl font-bold text-[var(--color-dark-surface)]">
                  {currency}{book?.offerPrice}
                </h4>
              </div>
              <div className="mt-4 text-[var(--color-text-muted)] text-sm space-y-1">
                <p><span className="font-medium text-[var(--color-text-main)]">Published: </span>2023</p>
                <p><span className="font-medium text-[var(--color-text-main)]">Pages: </span>300</p>
                <p><span className="font-medium text-[var(--color-text-main)]">Language: </span>English</p>
                <p><span className="font-medium text-[var(--color-text-main)]">Stock: </span>In Stock</p>
              </div>
              <p className="mt-4 text-[var(--color-text-muted)] text-sm line-clamp-3 leading-relaxed">{book?.description}</p>
              <Button variant="primary" className="mt-6 w-fit flex items-center gap-2">
                <TbShoppingBagPlus className="text-xl" />
                Add to Cart
              </Button>
            </div>
          </div>
        </aside>

        {/* right */}
        <aside
          className="hidden xl:flex flex-1 bg-center bg-cover bg-no-repeat rounded-2xl ml-8"
          style={{ backgroundImage: `url(${featuredBooksImg})` }}
        ></aside>
      </div>
    </Container>
  );
};

export default FeaturedBooks;
