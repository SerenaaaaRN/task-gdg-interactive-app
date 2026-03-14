import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logoImg from "../../assets/logo.png";
import Container from "../ui/Container";

const NAVIGATION_LINKS = [
  { label: "Home", path: "/" },
  { label: "Browse Shop", path: "/shop" },
  { label: "Our Blog", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

const SOCIAL_LINKS = [
  { icon: <FaInstagram />, href: "#", label: "Instagram" },
  { icon: <FaTwitter />, href: "#", label: "Twitter" },
  { icon: <FaFacebookF />, href: "#", label: "Facebook" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-20 border-t border-border">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <img src={logoImg} alt="Logo" className="h-9 transition-transform group-hover:scale-105" />
              <div className="text-2xl font-bold flex items-baseline tracking-tight">
                Rillah Book <span className="text-accent text-4xl leading-none">.</span>
              </div>
            </Link>

            <div className="space-y-4">
              <p className="text-text-muted italic leading-relaxed border-l-2 border-accent pl-4">
                "A room without books is like a body without a soul."
                <span className="block text-xs font-semibold uppercase tracking-widest mt-1 not-italic">— Cicero</span>
              </p>
              <p className="text-text-muted text-sm leading-relaxed max-w-sm">
                Curating the world's most inspiring literature, delivered with a minimalist touch for the modern reader.
              </p>
            </div>

            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white border border-border flex justify-center items-center text-dark-surface hover:bg-accent hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-dark-surface text-lg mb-8 relative inline-block">
              Navigation
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="flex flex-col gap-4">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-accent hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-dark-surface text-lg mb-8 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
            </h4>
            <ul className="space-y-5 text-text-muted text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent mt-1 shrink-0" />
                <span>123 Library Lane, Oxford, OX1 2JD, United Kingdom</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-accent shrink-0" />
                <a href="mailto:hello@rillahbook.co" className="hover:text-accent transition-colors">
                  hello@rillahbook.co
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-accent shrink-0" />
                <a href="tel:+441234567890" className="hover:text-accent transition-colors">
                  +44 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-text-muted">
            © {currentYear} <span className="font-semibold">Rillah Book</span>
          </p>
          <div className="flex gap-8 text-xs font-medium uppercase tracking-wider">
            <Link to="/privacy" className="text-text-muted hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-text-muted hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
