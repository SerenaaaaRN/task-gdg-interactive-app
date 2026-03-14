import Item from "../../components/ui/Item";

const BookGrid = ({ currentBooks }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {currentBooks.length > 0 ? (
        currentBooks.map((book) => <Item key={book._id} book={book} />)
      ) : (
        <p className="text-center col-span-full">No books available</p>
      )}
    </div>
  );
};

export default BookGrid;
