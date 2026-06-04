"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

const rightLinks = [
  { href: "/publications", labelKey: "publications" as const },
  { href: "/blog", labelKey: "blog" as const },
  { href: "/services", labelKey: "contact" as const },
];

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

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
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            aria-label={lang === "en" ? "Switch to French" : "Switch to English"}
            className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>
        <div className="flex md:hidden items-center gap-4">
          {rightLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              {t.nav[link.labelKey]}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            aria-label={lang === "en" ? "Switch to French" : "Switch to English"}
            className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
          >
            {lang === "en" ? "FR" : "EN"}
          </button>
        </div>
      </div>
    </nav>
  );
}
