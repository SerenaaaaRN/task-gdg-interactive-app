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
          key={label}
          onClick={() => setMenuOpened(false)}
          to={to}
          className={({ isActive }) =>
            `${isActive ? "bg-[var(--color-primary)] text-[var(--color-dark-surface)] shadow-sm font-semibold" : "text-[var(--color-text-main)] hover:bg-[var(--color-border)]"} flex items-center gap-x-2 px-4 py-2 rounded-full transition-colors`
          }
        >
          <span className="text-xl">{icon}</span>
          <span className="font-medium text-base">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
