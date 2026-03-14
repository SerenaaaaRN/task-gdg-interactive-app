import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Input from "./Input";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="relative hidden xl:flex items-center">
      <div
        className={`transition-all duration-300 ease-in-out ${
          showSearch ? "w-66.5 opacity-100" : "w-0 opacity-0 overflow-hidden"
        }`}
      >
        <Input type="text" placeholder="Search book..." className="w-full pr-10" />
      </div>
      <div
        onClick={() => setShowSearch(!showSearch)}
        className="absolute right-0.5 bg-secondary p-2.5 rounded-full cursor-pointer z-10 hover:bg-border transition-colors"
      >
        <FaSearch className="text-xl" />
      </div>
    </div>
  );
};

export default SearchBar;
