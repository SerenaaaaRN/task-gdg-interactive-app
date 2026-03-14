// @ts-check

import { BookOpenText, Facebook, House, Instagram, Mails, ShoppingBag, Twitter } from "lucide-react";

export const navLinks = [
  { path: "/", label: "Home", Icon: House },
  { path: "/shop", label: "Shop", Icon: ShoppingBag },
  { path: "/blog", label: "Blog", Icon: BookOpenText },
  { path: "mailto:hello@rillahbook.co", label: "Contact", Icon: Mails },
];

export const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];
