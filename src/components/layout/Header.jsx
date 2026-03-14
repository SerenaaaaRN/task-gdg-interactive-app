import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiUserLine, RiShoppingBagLine } from "react-icons/ri";

import logoImg from "../../assets/logo.png";
import userImg from "../../assets/user.png";
import Navbar from "./Navbar";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SearchBar from "../ui/SearchBar";
import { useAuth } from "../../hooks/useAuth";
import { useShop } from "../../hooks/useShop";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const { cartItems } = useShop();

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  const navStyles = menuOpened
    ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 border border-border z-50"
    : "hidden lg:flex gap-x-5 xl:gap-x-7 font-medium text-[15px] border border-border rounded-full px-4 py-1.5 bg-secondary";

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
          {menuOpened ? <FaBarsStaggered /> : <FaBars />}
        </button>

        {/* cart icon */}
        <Link to="/cart" className="relative group p-2">
          <RiShoppingBagLine className="text-2xl" />
          <span className="bg-dark-surface text-white text-[10px] font-bold absolute top-0 right-0 flex justify-center items-center min-w-4.5 h-4.5 px-1 rounded-full shadow-sm">
            {cartItems?.length || 0}
          </span>
        </Link>

        {/* login */}
        <div className="group relative ml-2">
          {user ? (
            <div className="cursor-pointer transition-transform hover:scale-105">
              <img src={userImg} alt="Profile" className="h-10 w-10 rounded-full border border-border object-cover" />

              {/* Dropdown Menu */}
              <ul className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white p-2 w-40 border border-border rounded-xl absolute right-0 top-full mt-2 flex flex-col text-sm font-medium shadow-xl z-50">
                <li
                  onClick={() => navigate("/my-orders")}
                  className="p-3 rounded-md hover:bg-secondary cursor-pointer transition-colors"
                >
                  My Orders
                </li>
                <li
                  onClick={() => setUser(null)}
                  className="p-3 rounded-md hover:bg-red-50 text-red-600 cursor-pointer transition-colors border-t border-gray-50"
                >
                  Logout
                </li>
              </ul>
            </div>
          ) : (
            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className="hidden sm:flex items-center gap-x-2 rounded-full"
            >
              Login <RiUserLine className="text-lg" />
            </Button>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Header;
