import { useState } from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.png";
import Navbar from "./Navbar";
import Container from "../ui/Container";
import SearchBar from "../ui/SearchBar";

import { useShop } from "../../hooks/useShop";
import UserMenu from "./UserMenu";
import { Menu, ShoppingCart, X } from "lucide-react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const { cartItems } = useShop();

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  const navStyles = menuOpened
    ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 border border-border z-50"
    : "hidden lg:flex gap-x-5  font-medium text-4 border border-border rounded-xl px-2 py-1.5 bg-secondary";

  return (
    <Container className="absolute top-0 left-0 right-0 flex justify-between items-center gap-4 py-3 z-50">
      {/* logo */}
      <div className="flex flex-1">
        <Link to="/" className="text-2xl xl:text-3xl font-bold flex items-center gap-2">
          <img src={logoImg} alt="Logo" className="hidden sm:block h-9 object-contain" />
          <span className="relative flex items-baseline">
            Rillah Book <span className="text-accent text-4xl leading-none">.</span>
          </span>
        </Link>
      </div>

      {/* navigasi desktop dan mobile */}
      <div className="flex-1 flex justify-center">
        <Navbar setMenuOpened={setMenuOpened} containerStyles={navStyles} />
      </div>

      <div className="flex flex-1 items-center justify-end gap-x-3 sm:gap-x-6">
        <SearchBar />

        {/* mobile toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-xl focus:outline-none" aria-label="Toggle Menu">
          {menuOpened ? <X /> : <Menu />}
        </button>

        {/* cart icon */}
        <Link to="/cart" className="relative group p-2">
          <ShoppingCart className="text-2xl" />
          <span className="bg-dark-surface text-white text-[10px] font-bold absolute top-0 right-0 flex justify-center items-center min-w-4.5 h-4.5 px-1 rounded-full shadow-sm">
            {cartItems?.length || 0}
          </span>
        </Link>

        {/* login */}
        <UserMenu />
      </div>
    </Container>
  );
};

export default Header;
