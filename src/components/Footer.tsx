import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4 md:py-16 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
        <div>
          <h3 className="text-xl font-bold mb-3 md:text-2xl md:mb-4">Roderick Fanou</h3>
          <p className="text-gray-400 leading-relaxed">
            Internet scientist and Senior Systems Engineer building at the intersection of computer networks, data, and AI.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3 text-gray-200 md:text-lg md:mb-4">Quick Links</h3>
          <div className="space-y-2">
            <Link href="/" className="block text-gray-400 hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/publications" className="block text-gray-400 hover:text-blue-400 transition-colors">Publications</Link>
            <Link href="/blog" className="block text-gray-400 hover:text-blue-400 transition-colors">Blog</Link>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3 text-gray-200 md:text-lg md:mb-4">Contact</h3>
          <p className="text-gray-400 mb-2">
            Email:{" "}
            <a href="mailto:roderick@fanou.net" className="text-blue-400 hover:underline">
              roderick@fanou.net
            </a>
          </p>
          <p className="text-gray-400 mb-2">
            <a href="https://www.linkedin.com/in/roderick-fanou/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">LinkedIn</a>
          </p>
          <p className="text-gray-400 mb-2">
            <a href="https://scholar.google.com/citations?user=CpdupCIAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Scholar</a>
          </p>
          <p className="text-gray-400">
            <a href="https://github.com/rodricfanou" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub</a>
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Roderick Fanou. All rights reserved.
      </div>
    </footer>
  );
}
