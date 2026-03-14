import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import { categories } from "../assets/data";
import Container from "./ui/Container";

const Categories = () => {
  const { navigate } = useContext(ShopContext);
  const colors = ["bg-[#f4efe6]", "bg-[#e8eceb]", "bg-[#f5e6e6]"];

  return (
    <Container className="pt-16 pb-6">
      <Title title1={"Category"} title2={"List"} titleStyles={"pb-10"} paraStyles={"hidden"} />

      <div className="flex gap-6 lg:gap-9 flex-wrap">
        {categories.map((cat, inx) => (
          <div
            key={inx}
            onClick={() => navigate(`/shop/${cat.name.toLowerCase()}`)}
            className="flex items-center justify-center flex-col cursor-pointer group"
          >
            <div className={`flex items-center justify-center flex-col h-36 w-36 sm:h-40 sm:w-40 rounded-2xl ${colors[inx % 3]} transition-transform duration-300 group-hover:-translate-y-2 border border-[var(--color-border)] shadow-sm`}>
              <img src={cat.image} alt={cat.name} height={46} width={46} className="object-cover mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
              <h5 className="font-semibold text-[var(--color-dark-surface)] capitalize mt-4">{cat.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
