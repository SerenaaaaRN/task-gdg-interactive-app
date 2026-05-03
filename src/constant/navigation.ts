import { BookOpenText, House, Mails, ShoppingBag, Camera, MessageCircle, Globe } from "lucide-react";

export const navLinks = [
  { path: "/", label: "Home", Icon: House },
  { path: "/shop", label: "Shop", Icon: ShoppingBag },
  { path: "/blog", label: "Blog", Icon: BookOpenText },
  { path: "mailto:hello@rillahbook.co", label: "Contact", Icon: Mails },
];

export const socialLinks = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Twitter" },
  { icon: Globe, href: "#", label: "Facebook" },
];
