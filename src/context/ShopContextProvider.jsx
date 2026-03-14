import { useMemo, useState } from "react";
import { dummyBooks } from "../constant/books";
import { ShopContext } from "./ShopContext"; 

export const ShopContextProvider = ({ children }) => {
  const [books] = useState(dummyBooks);
  const [cartItems, setCartItems] = useState([]);
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const popularBooks = useMemo(() => books.filter((book) => book.popular), [books]);
  const newArrivals = useMemo(() => books.slice(0, 6), [books]);
  const featuredBook = useMemo(() => books.find((book) => book.featured) || books[0], [books]);

  const value = useMemo(
    () => ({ books, popularBooks, newArrivals, featuredBook, currency, cartItems, setCartItems }),
    [books, popularBooks, newArrivals, featuredBook, currency, cartItems]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
