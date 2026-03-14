import Button from "../../components/ui/Button";
import { categories } from "../../constant/categories";

const CategoryFilter = ({ category, handelCategoryClick, setCategory }) => (
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

export default CategoryFilter;
