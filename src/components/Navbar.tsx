"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Galerie" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none group">
          <span className="text-sm font-light tracking-[0.25em] uppercase text-[#f5f0e8] group-hover:text-[#c9a84c] transition-colors duration-300">
            Anissa Hafidi
          </span>
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[#c9a84c] opacity-80">
            Anissheart
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link key={href} href={href}
              className={`nav-link ${pathname === href ? "active text-[#c9a84c]" : "text-[#f5f0e8]/70 hover:text-[#f5f0e8]"}`}>
              {label}
            </Link>
          ))}
          <a href="https://instagram.com/anissheart" target="_blank" rel="noopener noreferrer"
            className="nav-link text-[#f5f0e8]/50 hover:text-[#c9a84c]">
            @anissheart
          </a>
        </div>

        <button className="md:hidden flex flex-col gap-[5px] p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block w-5 h-px bg-[#f5f0e8] transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-[#f5f0e8] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-[#f5f0e8] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-6">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}
              className={`nav-link text-base ${pathname === href ? "text-[#c9a84c]" : "text-[#f5f0e8]/70"}`}>
              {label}
            </Link>
          ))}
          <a href="https://instagram.com/anissheart" target="_blank" rel="noopener noreferrer"
            className="nav-link text-base text-[#f5f0e8]/50">@anissheart</a>
        </div>
      )}
    </header>
  );
}
