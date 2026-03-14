import { NavLink } from "react-router-dom";
import { navLinks } from "../../constant/navigation";

const Navbar = ({ setMenuOpened, containerStyles }) => {
  return (
    <nav className={containerStyles}>
      {navLinks.map((nav) => {
        const isExternal = nav.path.startsWith("mailto:");
        const baseClass = "flex items-center gap-x-2 px-4 py-2 rounded-xl transition-colors";

        if (isExternal) {
          return (
            <a key={nav.label} href={nav.path} className={`${baseClass} text-text-main hover:bg-border`}>
              <span className="text-xl">
                <nav.Icon />
              </span>
              <span className="font-medium text-base">{nav.label}</span>
            </a>
          );
        }

        return (
          <NavLink
            key={nav.label}
            onClick={() => setMenuOpened(false)}
            to={nav.path}
            className={({ isActive }) =>
              `${baseClass} ${
                isActive ? "bg-primary text-dark-surface shadow-sm font-semibold" : "text-text-main hover:bg-border"
              }`
            }
          >
            <span className="text-xl">
              <nav.Icon />
            </span>
            <span className="font-medium text-base">{nav.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default Navbar;
