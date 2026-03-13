import { IoLibraryOutline } from "react-icons/io5";
import { PiEnvelopeOpenDuotone } from "react-icons/pi";
import { TbBrandBlogger, TbHome } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Navbar = ({ setMenuOpened, containerStyles }) => {
  const navItems = [
    { to: "/", label: "Home", icon: <TbHome /> },
    { to: "/shop", label: "Shop", icon: <IoLibraryOutline /> },
    { to: "/blog", label: "Blog", icon: <TbBrandBlogger /> },
    { to: "mailto:YRkXU@example.com", label: "Contact", icon: <PiEnvelopeOpenDuotone /> },
  ];
  return (
    <nav className={containerStyles}>
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          onClick={() => setMenuOpened(false)}
          to={to}
          className={({ isActive }) =>
            `${isActive ? "bg-white ring-1 ring-slate-900/10" : ""} flexCenter gap-x-2 px-3 py-1.5 rounded-full`
          }
        >
          <span className="text-xl">{icon}</span>
          <span className="medium-16">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
