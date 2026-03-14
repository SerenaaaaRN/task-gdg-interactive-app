import { Link, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import userImg from "../assets/user.png";
import Navbar from "./Navbar";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Container from "./ui/Container";

import { useContext, useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { RiUserLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const {navigate, user, setUser} = useContext(ShopContext);

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  return (
    <Container className="absolute top-0 left-0 right-0 flex justify-between items-center gap-4 py-2 z-50">
      {/* logo */}
      <div className="flex flex-1">
        <Link to="/" className="text-2xl xl:text-3xl font-bold flex items-end gap-1">
          <img src={logoImg} alt="" className="hidden sm:block h-9" />
          <div className="sm:relative top-1.5 flex items-baseline">
            Rillah Book <span className="text-[var(--color-accent)] text-4xl leading-none">.</span>
          </div>
        </Link>
      </div>

      {/* navbar untuk mobile */}
      <div className="flex-1">
        <Navbar
          setMenuOpened={setMenuOpened}
          containerStyles={`${
            menuOpened
              ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 border border-[var(--color-border)] z-50"
              : "hidden lg:flex gap-x-5 xl:gap-x-7 font-medium text-[15px] border border-[var(--color-border)] rounded-full px-4 py-1.5 bg-[var(--color-secondary)]"
          }`}
        />
      </div>

      <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
        {/* search bar */}
        <div className="relative hidden xl:flex items-center">
          <div
            className={`transition-all duration-300 ease-in-out ${
              showSearch ? "w-66.5 opacity-100" : "w-0 opacity-0 overflow-hidden"
            }`}
          >
            <Input
              type="text"
              placeholder="Search book..."
              className="w-full pr-10"
            />
          </div>
          <div
            onClick={() => setShowSearch((prev) => !prev)}
            className="absolute right-0.5 bg-[var(--color-secondary)] p-2.5 rounded-full cursor-pointer z-10 hover:bg-[var(--color-border)] transition-colors"
          >
            <FaSearch className="text-xl" />
          </div>
        </div>

        {/* menu toggle */}
        <>
          {menuOpened ? (
            <FaBarsStaggered onClick={toggleMenu} className="lg:hidden cursor-pointer text-xl" />
          ) : (
            <FaBars onClick={toggleMenu} className="lg:hidden cursor-pointer text-xl" />
          )}
        </>
      </div>

      {/* cart */}
      <Link to="/cart" className="flex relative">
        <div>
          Cart
          <span className="bg-[var(--color-dark-surface)] text-white text-[12px] font-semibold absolute -top-3.5 -right-2 flex justify-center items-center w-4 h-4 rounded-full shadow-md">
            0
          </span>
        </div>
      </Link>

      {/* user profile */}
      <div className="group relative">
        <div>
          {user ? (
            <div className="flex gap-2 items-center cursor-pointer rounded-full bg-white border border-[var(--color-border)] p-1">
              <img src={userImg} alt="userImg" height={40} width={40} className="rounded-full" />
            </div>
          ) : (
            <Button variant="outline" className="flex justify-center items-center gap-x-2">
              Login <RiUserLine className="text-xl" />
            </Button>
          )}
        </div>

        {/* dropdown */}
        {user && (
          <ul className="bg-white p-2 w-32 border border-[var(--color-border)] rounded-xl absolute right-0 top-12 hidden group-hover:flex flex-col text-sm font-medium shadow-md z-50">
            <li onClick={() => navigate("/my-orders")} className="p-2 rounded-md hover:bg-[var(--color-secondary)] cursor-pointer">
              Orders
            </li>
            <li className="p-2 rounded-md hover:bg-[var(--color-secondary)] cursor-pointer"></li>
          </ul>
        )}
      </div>
    </Container>
  );
};

export default Header;
