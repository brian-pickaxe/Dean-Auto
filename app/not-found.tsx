import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-6xl md:text-8xl font-bold text-primary-600 mb-2" aria-hidden="true">
        404
      </h1>
      <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
        Page not found
      </p>
      <p className="text-gray-600 text-center max-w-md mb-8">
        Sorry, we couldn’t find the page you’re looking for. It may have been moved or the link might be incorrect.
      </p>
      <Link
        href="/"
        className="inline-block bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Back to home
      </Link>
    </div>
  );
}
