import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import Container from "./ui/Container";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Browse Shop", path: "/shop" },
  { label: "Our Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-secondary mt-20 py-16 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold flex items-end gap-1 mb-6">
              <img src={logoImg} alt="Rillah Book Logo" className="h-8" />
              <div className="flex items-baseline">
                Rillah Book <span className="text-accent text-3xl leading-none">.</span>
              </div>
            </Link>
            <p className="text-text-muted max-w-sm leading-relaxed italic">
              "A room without books is like a body without a soul." — Marcus Tullius Cicero
            </p>
            <p className="text-text-muted mt-4 max-w-sm leading-relaxed">
              Curating the world's most inspiring literature, delivered with a minimalist touch.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-dark-surface mb-6">Navigation</h4>
            <ul className="space-y-4 text-text-muted">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-dark-surface mb-6">Contact</h4>
            <address className="not-italic space-y-2 text-text-muted">
              <p>123 Library Lane, Oxford, OX1 2JD</p>
              <p>Email: hello@rillahbook.co</p>
              <p>Phone: +44 123 456 7890</p>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Rillah Book. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
