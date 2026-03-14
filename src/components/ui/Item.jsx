import { useNavigate } from "react-router-dom";
import { useShop } from "../../hooks/useShop";
import { ShoppingBag } from "lucide-react";
import Card from "./Card";

const Item = ({ book, variant = "default" }) => {
  const { currency } = useShop();
  const navigate = useNavigate();

  const cardStyles = variant === "hero" ? "bg-primary border-transparent" : "m-2";

  return book ? (
    <Card className={cardStyles}>
      <div className="overflow-hidden bg-border rounded-lg flex items-center justify-center p-4 h-70">
        <img src={book.image} alt={book.name} className="object-contain h-full mix-blend-multiply drop-shadow-sm" />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-start gap-2">
          <h4 className="font-semibold text-lg leading-tight line-clamp-2">{book.name}</h4>
          <p className="text-accent font-bold text-lg whitespace-nowrap">
            {currency}
            {book.offerPrice}.00
          </p>
        </div>
        <div className="flex justify-between items-end gap-2 mt-auto">
          <p className="line-clamp-2 text-sm text-text-muted leading-relaxed">{book.description}</p>
          <button
            onClick={() => navigate(`/shop/${book.category.toLowerCase()}/${book._id}`)}
            className="text-text-main hover:text-white transition-colors p-2.5 bg-secondary hover:bg-dark-surface rounded-full shrink-0"
          >
            <ShoppingBag className="text-[22px]" />
          </button>
        </div>
      </div>
    </Card>
  ) : (
    <div className="p-5 text-red-600 text-sm rounded-md">No found book</div>
  );
};

export default Item;
