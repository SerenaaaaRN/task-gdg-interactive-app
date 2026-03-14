import { createContext, use, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyBooks } from "../assets/data";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [books] = useState(dummyBooks);
  const [user, setUser] = useState(null);
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const popularBooks = useMemo(() => books.filter((book) => book.popular), [books]);

  const newArrivals = useMemo(() => books.slice(0, 6), [books]);

  const value = useMemo(
    () => ({ books, popularBooks, newArrivals, navigate, user, setUser, currency }),

    [books, popularBooks, newArrivals, navigate, user, currency]
  );

  return <ShopContext value={value}>{children}</ShopContext>;
};

export const useShop = () => {
  const context = use(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopContextProvider");
  }
  return context;
};

export default ShopContextProvider;
