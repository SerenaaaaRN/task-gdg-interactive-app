// @ts-check

import { useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import Title from "../ui/Title";
import { categories } from "../../constant/categories";

const CATEGORY_COLORS = ["bg-[#f4efe6]", "bg-[#e8eceb]", "bg-[#f5e6e6]"];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <Container className="pt-16 pb-6">
      <Title
        title={"Category"}
        subtitle={"List"}
        className={"pb-10 hidden"}
        description={"Check out our category list"}
      />

      <div className="flex gap-6 lg:gap-9 flex-wrap">
        {categories.map((cat, inx) => (
          <div
            key={inx}
            onClick={() => navigate(`/shop/${cat.name.toLowerCase()}`)}
            className="flex items-center justify-center flex-col cursor-pointer group"
          >
            <div
              className={`flex items-center justify-center flex-col h-36 w-36 sm:h-40 sm:w-40 rounded-2xl ${
                CATEGORY_COLORS[inx % 3]
              } transition-transform duration-300 group-hover:-translate-y-2 border border-border shadow-sm`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                height={46}
                width={46}
                className="object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <h5 className="font-semibold text-dark-surface capitalize mt-4">{cat.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
