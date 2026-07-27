"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-background shadow-sm">
      <div className="max-w-2xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-foreground">
          Tonybrian
        </Link>

        {/* Desktop links — hidden on small screens */}
        <ul className="hidden sm:flex gap-6 text-warmgray text-base items-center">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-clay transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden sm:block">
          <ThemeToggle />
        </div>

        {/* Mobile menu button — visible only on small screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="sm:hidden text-foreground p-2"
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <ul className="sm:hidden flex flex-col gap-1 px-6 pb-4 text-warmgray text-base">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:text-clay transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </nav>
  );
}