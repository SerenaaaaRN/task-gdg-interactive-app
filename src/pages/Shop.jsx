import { useState } from "react";
import Container from "../components/ui/Container";
import Item from "../components/ui/Item";
import Title from "../components/ui/Title";
import { useShop } from "../hooks/useShop";
import Button from "../components/ui/Button";
import { categories } from "../constant/categories";

const Shop = () => {
  const { filteredBooks: books, category, setCategory } = useShop();
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const handelCategoryClick = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const indexOfLastPage = currentPage * booksPerPage;
  const indexOfFirstPage = indexOfLastPage - booksPerPage;
  const currentBooks = books.slice(indexOfFirstPage, indexOfLastPage);

  const totalPage = Math.ceil(books.length / booksPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="mt-24">
      <Title
        title={"All"}
        subtitle={"Books"}
        className={"pb-10"}
        description={"Check out our most popular books with exciting plots and vibrant voice"}
      />

      <div className="flex flex-wrap gap-3 mb-8">
        <Button
          onClick={() => handelCategoryClick("All")}
          className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
            category === "All"
              ? "bg-dark-surface text-white border-dark-surface"
              : "bg-white text-gray-600 border-gray-200 hover:border-dark-surface"
          }`}
          size="sm"
        >
          All Categories
        </Button>

        {categories.map((cat) => (
          <Button
            key={cat.name}
            onClick={() => setCategory(cat.name)}
            className={`px-5 py-2 rounded-full border text-sm font-medium transition-all ${
              category === cat.name
                ? "bg-dark-surface text-white border-dark-surface"
                : "bg-white text-gray-600 border-gray-200 hover:border-dark-surface"
            }`}
            size="sm"
          >
            {cat.name}
          </Button>
        ))}
      </div>

      {/* grid buku */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => <Item key={book._id} book={book} />)
        ) : (
          <p className="text-center col-span-full">No books available</p>
        )}
      </div>

      {/* paginiation */}
      {totalPage > 1 && (
        <div className="flex justify-center mt-12 gap-2">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border transition-all ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-border hover:bg-secondary"
            }`}
            size="sm"
          >
            Prev
          </Button>

          {Array.from({ length: totalPage }, (_, i) => (
            <Button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                currentPage === i + 1
                  ? "bg-dark-surface text-white border-dark-surface"
                  : "bg-white text-gray-700 border-border hover:bg-secondary"
              }`}
              size="sm"
            >
              {i + 1}
            </Button>
          ))}

          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPage}
            className={`px-4 py-2 rounded-lg border transition-all ${
              currentPage === totalPage
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-border hover:bg-secondary"
            }`}
            size="sm"
          >
            Next
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Shop;
