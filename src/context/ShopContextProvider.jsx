import { useMemo, useState } from "react";
import { dummyBooks } from "../constant/books";
import { ShopContext } from "./ShopContext";

export const ShopContextProvider = ({ children }) => {
  const [books] = useState(dummyBooks);
  const [category, setCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const currency = import.meta.env.VITE_CURRENCY || "$";

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch = book.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === "All" || book.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [books, searchTerm, category]);

  const popularBooks = useMemo(() => books.filter((book) => book.popular), [books]);
  const newArrivals = useMemo(() => books.slice(0, 6), [books]);
  const featuredBook = useMemo(() => books.find((book) => book.featured) || books[0], [books]);

  const value = useMemo(
    () => ({
      books,
      filteredBooks,
      category,
      setCategory,
      searchTerm,
      setSearchTerm,
      popularBooks,
      newArrivals,
      featuredBook,
      currency,
      cartItems,
      setCartItems,
    }),
    [books, filteredBooks, category, searchTerm, popularBooks, newArrivals, featuredBook, currency, cartItems]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
