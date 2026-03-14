import { useMemo, useState } from "react";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
import { useShop } from "../hooks/useShop";
import Pagination from "../components/ui/Pagination";
import CategoryFilter from "../modules/shop/CategoryFilter";
import BookGrid from "../modules/shop/BookGrid";

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
      <CategoryFilter category={category} handelCategoryClick={handelCategoryClick} setCategory={setCategory} />
      <BookGrid currentBooks={currentBooks} />
      <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={setCurrentPage} />
    </Container>
  );
};

export default Shop;
