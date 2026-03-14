import Button from "./Button";

const PageStep = ({ direction, isDisabled, onClick }) => {
  const isPrev = direction === "prev";
  return (
    <Button
      onClick={onClick}
      disabled={isDisabled}
      className={`px-4 py-2 rounded-lg border transition-all ${
        isDisabled === 1
          ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
          : "bg-white text-gray-700 border-border "
      }`}
      size="sm"
    >
      {isPrev ? "Prev" : "Next"}
    </Button>
  );
};

const PageItem = ({ page, isActive, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg border transition-all ${
        isActive ? "bg-dark-surface text-white border-dark-surface" : "bg-white text-gray-700 border-border "
      }`}
      size="sm"
    >
      {page}
    </Button>
  );
};

// main components
const Pagination = ({ currentPage, totalPage, onPageChange }) => {
  if (totalPage <= 1) return null;
  return (
    <div className="flex justify-center mt-12 gap-2">
      <PageStep direction="prev" isDisabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} />
      {Array.from({ length: totalPage }, (_, index) => index + 1).map((page) => (
        <PageItem key={page} page={page} isActive={page === currentPage} onClick={() => onPageChange(page)} />
      ))}

      <PageStep direction="next" isDisabled={currentPage === totalPage} onClick={() => onPageChange(currentPage + 1)} />
    </div>
  );
};

export default Pagination;
