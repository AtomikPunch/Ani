"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavDict = {
  home: string;
  about: string;
  gallery: string;
};

interface NavbarProps {
  lang: string;
  dict: NavDict;
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: `/${lang}`, label: dict.home },
    { href: `/${lang}/about`, label: dict.about },
    { href: `/${lang}/gallery`, label: dict.gallery },
  ];

  // Build the same page URL for the alternate language
  const getAlternateLangHref = (targetLang: string) => {
    // pathname is e.g. /fr/about or /en/gallery
    const segments = pathname.split("/");
    // segments[0] is "", segments[1] is the lang, rest is the page
    segments[1] = targetLang;
    return segments.join("/") || `/${targetLang}`;
  };

  const otherLang = lang === "fr" ? "en" : "fr";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f5f0e8] border-b border-black/10 text-black">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={`/${lang}`} className="flex flex-col leading-none group">
          <span className="text-sm font-light tracking-[0.25em] uppercase text-black group-hover:text-black transition-colors duration-300">
            Anissa Hafidi
          </span>
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-black opacity-80">
            Anissheart
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`nav-link ${pathname === href ? "active text-black" : "text-black/60 hover:text-black"}`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://instagram.com/anissheart"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-black/40 hover:text-black"
          >
            @anissheart
          </a>
          {/* Language switcher — desktop */}
          <div className="flex items-center gap-1 ml-2 border-l border-black/15 pl-4">
            <span
              className={`text-[0.65rem] tracking-[0.2em] uppercase font-medium ${
                lang === "fr" ? "text-black" : "text-black/35 hover:text-black/70"
              } transition-colors duration-200`}
            >
              {lang === "fr" ? (
                <span>FR</span>
              ) : (
                <Link href={getAlternateLangHref("fr")}>FR</Link>
              )}
            </span>
            <span className="text-black/20 text-xs">|</span>
            <span
              className={`text-[0.65rem] tracking-[0.2em] uppercase font-medium ${
                lang === "en" ? "text-black" : "text-black/35 hover:text-black/70"
              } transition-colors duration-200`}
            >
              {lang === "en" ? (
                <span>EN</span>
              ) : (
                <Link href={getAlternateLangHref("en")}>EN</Link>
              )}
            </span>
          </div>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-black transition-all duration-300 ${open ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-black transition-all duration-300 ${open ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#f5f0e8] border-t border-black/10 px-6 py-6 flex flex-col gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`nav-link text-base ${pathname === href ? "text-black" : "text-black/60"}`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://instagram.com/anissheart"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link text-base text-black/40"
          >
            @anissheart
          </a>
          {/* Language switcher — mobile */}
          <div className="flex items-center gap-3 pt-2 border-t border-black/10">
            <Link
              href={getAlternateLangHref("fr")}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
                lang === "fr" ? "text-black pointer-events-none" : "text-black/40 hover:text-black"
              }`}
            >
              FR
            </Link>
            <span className="text-black/20">|</span>
            <Link
              href={getAlternateLangHref("en")}
              onClick={() => setOpen(false)}
              className={`text-sm tracking-[0.2em] uppercase font-medium transition-colors duration-200 ${
                lang === "en" ? "text-black pointer-events-none" : "text-black/40 hover:text-black"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
