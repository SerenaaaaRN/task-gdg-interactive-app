import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { TbShoppingBagPlus } from "react-icons/tb";

const FeaturedBooks = () => {
  const { books, currency } = useContext(ShopContext);
  const book = books[21];

  return (
    <section className="max-padd-container max-sm:bg-primary">
      <div className="sm:px-10 flex sm:bg-primary py-16 rounded-2xl">
        {/* left */}
        <aside className="flex-1">
          <Title
            title1={"Featured"}
            title2={"Books"}
            titleStyles={"pb-8"}
            para={"Browse featured books carefull selected by our experts"}
          />
          <div className="flex gap-3 sm:gap-8 sm:bg-white sm:p-4 rounded-2xl">
            <div className="min-w-40">
              <img src={book?.image} alt={book?.name} className="h-64 w-44 object-cover " />
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-1 ">
                <h3 className="text-xl font-semibold text-gray-800 line-clamp-1">{book?.name}</h3>
                <p className="text-sm text-gray-500">{book?.category}</p>
              </div>
              <div className="flex items-center gap-3 sm:mt-2">
                <h4 className="text-lg font-bold text-secondary">
                  {currency}
                  {book?.offerPrice}
                </h4>
                <p>
                  {currency}
                  {book?.price}.00
                </p>
                <span>Save 5</span>
              </div>
              <div>
                <p>
                  <span className="font-medium">Published:</span>2023
                </p>
                <p>
                  <span className="font-medium">Pages:</span>300
                </p>
                <p>
                  <span className="font-medium">Language:</span>English
                </p>
                <p>
                  <span className="font-medium">Stock:</span>In Stock
                </p>
              </div>
              <p className="mt-1 sm:mt-4 text-gray-600 text-sm line-clamp-3">{book?.description}</p>
              <button className="btn-secondary max-sm:text-xs mt-1 sm:mt-5 w-fit px-5 py-2 flex items-center gap-2 text-sm font-medium">
                <TbShoppingBagPlus className="text-lg" />
                Add to Cart
              </button>
            </div>
          </div>
        </aside>

        {/* right */}
        <aside></aside>
      </div>
    </section>
  );
};

export default FeaturedBooks;
