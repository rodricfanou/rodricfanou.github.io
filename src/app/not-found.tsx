import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-gray-100 min-h-screen py-16 px-4 flex flex-col items-center md:py-24 md:px-8">
      <div className="text-center max-w-xl">
        <div className="text-8xl font-extrabold text-gray-300 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}