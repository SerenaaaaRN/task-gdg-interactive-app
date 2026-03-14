import { useMemo, useState } from "react";
import Container from "../components/ui/Container";
import Item from "../components/ui/Item";
import Title from "../components/ui/Title";
import { useShop } from "../hooks/useShop";
import Button from "../components/ui/Button";
import { categories } from "../constant/categories";
import Pagination from "../components/ui/Pagination";

const Shop = () => {
  const { filteredBooks: books, category, setCategory } = useShop();
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  const handelCategoryClick = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const currentBooks = useMemo(() => {
    const indexOfLastPage = currentPage * booksPerPage;
    const indexOfFirstPage = indexOfLastPage - booksPerPage;
    return books.slice(indexOfFirstPage, indexOfLastPage);
  }, [books, currentPage]);

  const totalPage = Math.ceil(books.length / booksPerPage);

  return (
    <Container className="mt-24">
      <Title
        title={"All"}
        subtitle={"Books"}
        className={"pb-10"}
        description={"Check out our most popular books with exciting plots and vibrant voice"}
      />

      {/* tombol filter buku */}
      <CategoryItem category={category} handelCategoryClick={handelCategoryClick} setCategory={setCategory} />

      {/* grid buku */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {currentBooks.length > 0 ? (
          currentBooks.map((book) => <Item key={book._id} book={book} />)
        ) : (
          <p className="text-center col-span-full">No books available</p>
        )}
      </div>

      <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={setCurrentPage} />
    </Container>
  );
};

const CategoryItem = ({ category, handelCategoryClick, setCategory }) => (
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
);

export default Shop;
