"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { useState } from "react";

const rightLinks = [
  { href: "/publications", labelKey: "publications" as const },
  { href: "/blog", labelKey: "blog" as const },
  { href: "/services", labelKey: "contact" as const },
  { href: "/showcase", labelKey: "showcase" as const },
];

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between md:px-8 md:py-4">
        <Link href="/" className="text-lg font-bold text-gray-900 tracking-tight hover:text-blue-600 transition-colors md:text-xl">
          {t.nav.home}
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {rightLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-6">
              {i > 0 && <span className="text-gray-300">|</span>}
              <Link
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {t.nav[link.labelKey]}
              </Link>
            </span>
          ))}
          <span className="flex items-center gap-6">
            <span className="text-gray-300">|</span>
            <Link
              href="/contact"
              className="text-red-600 hover:text-red-800 font-medium transition-colors"
            >
              Contact
            </Link>
          </span>
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            aria-label={lang === "en" ? "Switch to French" : "Switch to English"}
            className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              {t.nav[link.labelKey]}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            Contact
          </Link>
          <div className="pt-2 border-t border-gray-100">
            <button
              onClick={() => { setLang(lang === "en" ? "fr" : "en"); setMenuOpen(false); }}
              className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              {lang === "en" ? "FR" : "EN"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
