/* eslint-disable react-refresh/only-export-components */

import { createContext, use, useMemo, useState, Suspense, type ReactNode } from "react";
import type { Book } from "@/types";
import type { Item } from "@/types";

type ShopContextType = {
  books: Book[];
  filteredBooks: Book[];
  category: string;
  setCategory: (category: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  currency: string;
  cartItems: Item[];
  setCartItems: (items: Item[]) => void;
};

export const ShopContext = createContext<ShopContextType | null>(null);

const API_URL = import.meta.env.VITE_API_URL;

const fetchBooksPromise = fetch(API_URL)
  .then((res) => {
    if (!res.ok) throw new Error("Gagal mengambil data dari server");
    return res.json();
  })
  .then((data) => {
    return data.books.map((book: Book) => ({
      ...book,
      cover_image: book.cover_image || "/placeholder.svg",
    }));
  })
  .catch((err) => {
    console.error("Error fetching books:", err);
    return [];
  });

export const ShopContextProvider = ({ children }: { children: ReactNode }) => {
  const booksData = use(fetchBooksPromise);

  const [books] = useState<Book[]>(booksData);
  const [category, setCategory] = useState("All");
  const [cartItems, setCartItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const currency = "Rp";

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const titleMatch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = category === "All" || book.category.name === category;
      return titleMatch && categoryMatch;
    });
  }, [books, searchTerm, category]);

  const value = useMemo(
    () => ({
      books,
      filteredBooks,
      category,
      setCategory,
      searchTerm,
      setSearchTerm,
      currency,
      cartItems,
      setCartItems,
    }),
    [books, filteredBooks, category, searchTerm, currency, cartItems]
  );

  return (
    <ShopContext.Provider value={value}>
      <Suspense fallback={<div className="flex min-h-screen items-center justify-center">Memuat katalog buku...</div>}>
        {children}
      </Suspense>
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = use(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopContextProvider");
  }
  return context;
};
