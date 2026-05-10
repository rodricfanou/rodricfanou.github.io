"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:py-16 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
        <div>
          <h3 className="text-xl font-bold mb-3 md:text-2xl md:mb-4">{t.footer.tagline}</h3>
          <p className="text-gray-300 leading-relaxed">
            {t.footer.description}
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3 text-gray-200 md:text-lg md:mb-4">{t.footer.quickLinks}</h3>
          <div className="space-y-2">
            <Link href="/" className="block text-gray-300 hover:text-white transition-colors">{t.footer.home}</Link>
            <Link href="/publications" className="block text-gray-300 hover:text-white transition-colors">{t.footer.publications}</Link>
            <Link href="/blog" className="block text-gray-300 hover:text-white transition-colors">{t.footer.blog}</Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">{t.nav?.contact ?? "Contact"}</Link>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3 text-gray-200 md:text-lg md:mb-4">{t.footer.contact}</h3>
          <p className="text-gray-300 mb-2">
            {t.footer.email}{" "}
            <a href="mailto:roderick@roderickfanou.com" className="text-gray-300 hover:underline">
              roderick@roderickfanou.com
            </a>
          </p>
          <p className="text-gray-300 mb-2">
            <a href="https://www.linkedin.com/in/roderick-fanou/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">{t.footer.linkedIn}</a>
          </p>
          <p className="text-gray-300 mb-2">
            <a href="https://scholar.google.com/citations?user=CpdupCIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">{t.footer.googleScholar}</a>
          </p>
          <p className="text-gray-300 mb-2">
            <a href="https://github.com/rodricfanou" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">{t.footer.github}</a>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Roderick Fanou. All rights reserved.
      </div>
    </footer>
  );
}