import type { Book } from "./book";

//reexport
export * from "./book";

export type Item = {
  book: Book;
  quantity: number;
};

export type blog = {
  title: string;
  category: string;
  image: string;
};