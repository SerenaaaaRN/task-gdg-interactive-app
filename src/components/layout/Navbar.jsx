import { IoLibraryOutline } from "react-icons/io5";
import { PiEnvelopeOpenDuotone } from "react-icons/pi";
import { TbBrandBlogger, TbHome } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", icon: <TbHome /> },
  { to: "/shop", label: "Shop", icon: <IoLibraryOutline /> },
  { to: "/blog", label: "Blog", icon: <TbBrandBlogger /> },
  { to: "mailto:hello@rillahbook.co", label: "Contact", icon: <PiEnvelopeOpenDuotone /> },
];

const Navbar = ({ setMenuOpened, containerStyles }) => {
  return (
    <nav className={containerStyles}>
      {navLinks.map(({ to, label, icon }) => {
        const isExternal = to.startsWith("mailto:");
        const baseClass = "flex items-center gap-x-2 px-4 py-2 rounded-full transition-colors";

        if (isExternal) {
          return (
            <a key={label} href={to} className={`${baseClass} text-text-main hover:bg-border`}>
              <span className="text-xl">{icon}</span>
              <span className="font-medium text-base">{label}</span>
            </a>
          );
        }

        return (
          <NavLink
            key={label}
            onClick={() => setMenuOpened(false)}
            to={to}
            className={({ isActive }) =>
              `${baseClass} ${
                isActive ? "bg-primary text-dark-surface shadow-sm font-semibold" : "text-text-main hover:bg-border"
              }`
            }
          >
            <span className="text-xl">{icon}</span>
            <span className="font-medium text-base">{label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
