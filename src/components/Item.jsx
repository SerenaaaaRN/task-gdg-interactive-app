import { TbShoppingBagPlus } from "react-icons/tb";
import Card from "./ui/Card";
import { useShop } from "../context/ShopContext";

const Item = ({ book, fromHero }) => {
  const { navigate, currency } = useShop();

  return book ? (
    <Card className={fromHero ? "bg-[var(--color-primary)] border-transparent" : "m-2"}>
      <div className="overflow-hidden bg-[var(--color-border)] rounded-t-2xl flex items-center justify-center p-4 h-[280px]">
        <img src={book.image} alt={book.name} className="object-contain h-full mix-blend-multiply drop-shadow-sm" />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-semibold text-lg leading-tight line-clamp-2">{book.name}</h4>
          <p className="text-[var(--color-accent)] font-bold text-lg whitespace-nowrap">
            {currency}
            {book.offerPrice}.00
          </p>
        </div>
        <div className="flex justify-between items-end gap-2 mt-auto">
          <p className="line-clamp-2 text-sm text-[var(--color-text-muted)] leading-relaxed">{book.description}</p>
          <button
            onClick={() => navigate(`/shop/${book.category.toLowerCase()}/${book._id}`)}
            className="text-[var(--color-text-main)] hover:text-white transition-colors p-2.5 bg-[var(--color-secondary)] hover:bg-[var(--color-dark-surface)] rounded-full shrink-0"
          >
            <TbShoppingBagPlus className="text-[22px]" />
          </button>
        </div>
      </div>
    </Card>
  ) : (
    <div className="p-5 text-red-600 text-sm rounded-md">No found book</div>
  );
};

export default Item;
