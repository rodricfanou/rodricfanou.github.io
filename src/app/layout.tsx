import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roderick Fanou",
  description: "Internet scientist and senior systems engineer specializing in network measurements, AI, and systems design.",
  icons: {
    icon: "/favicon.png",
  },
};

const rightLinks = [
  { href: "/publications", label: "Publications" },
  { href: "/blog", label: "Blog" },
  { href: "/pay", label: "Pay" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between md:px-8 md:py-4">
            <Link href="/" className="text-lg font-bold text-gray-900 tracking-tight hover:text-blue-600 transition-colors md:text-xl">
              Home
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {rightLinks.map((link, i) => (
                <span key={link.href} className="flex items-center gap-6">
                  {i > 0 && <span className="text-gray-300">|</span>}
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </span>
              ))}
            </div>
            <div className="flex md:hidden items-center gap-4">
              {rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
