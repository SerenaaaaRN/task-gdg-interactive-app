export type Category = {
  name: string;
  url?: string;
};

export type BookDetails = {
  no_gm: string;
  isbn: string;
  price: string;
  total_pages: string;
  size: string;
  published_date: string;
  format: string;
};

export type BuyLink = {
  store: string;
  url: string;
};

export type Book = {
  _id: string;
  title: string;
  cover_image: string;
  author: Category;
  category: Category; // API returns an object
  summary: string;
  details: BookDetails;
  tags: string[];
  buy_links: BuyLink[];
  publisher: string;
};

export type BookResponse = {
  books: Book[];
};
