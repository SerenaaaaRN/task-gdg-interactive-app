import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import Container from "../ui/Container";
import { navLinks } from "../../constant/navigation";
import { socialLinks } from "../../constant/navigation";
import { BookUser, Mail, Map } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary mt-20 border-t border-border">
    <Container className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <FooterBrand />
        <FooterNav />
        <FooterContact />
      </div>
    </Container>
  </footer>
);

const FooterBrand = () => (
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
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          className="w-10 h-10 rounded-full bg-white border border-border flex justify-center items-center text-dark-surface hover:bg-accent hover:text-white transition-all duration-300 shadow-sm"
          aria-label={social.label}
        >
          <social.icon />
        </a>
      ))}
    </div>
  </div>
);

const FooterNav = () => (
  <div className="md:col-span-3">
    <h4 className="font-bold text-dark-surface text-lg mb-8 relative inline-block">
      Navigation
      <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
    </h4>
    <ul className="flex flex-col gap-4">
      {navLinks.map((link) => (
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
);

const FooterContact = () => (
  <div className="md:col-span-4">
    <h4 className="font-bold text-dark-surface text-lg mb-8 relative inline-block">
      Get in Touch
      <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
    </h4>
    <ul className="space-y-5 text-text-muted text-sm">
      <li className="flex items-start gap-3">
        <Map className="text-accent mt-1 shrink-0" />
        <span>123 Library Lane, Oxford, OX1 2JD, United Kingdom</span>
      </li>
      <li className="flex items-center gap-3">
        <Mail className="text-accent shrink-0" />
        <a href="mailto:hello@rillahbook.co" className="hover:text-accent transition-colors">
          hello@rillahbook.co
        </a>
      </li>
      <li className="flex items-center gap-3">
        <BookUser className="text-accent shrink-0" />
        <a href="tel:+441234567890" className="hover:text-accent transition-colors">
          +44 123 456 7890
        </a>
      </li>
    </ul>
  </div>
);

export default Footer;
