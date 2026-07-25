import type { Metadata } from "next";
import Link from "next/link";
import BookNowButton from "@/components/BookNowButton";

export const metadata: Metadata = {
  title: "Mobile Car Detailing North Denver",
  description:
    "Mobile car detailing across North Denver suburbs including Thornton, Westminster & Brighton. Premium products. Call (720) 532-3072.",
  alternates: { canonical: "https://deanauto.net/north-denver" },
};

export default function NorthDenverPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile Car Detailing in North Denver
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Across the North Denver metro — including Thornton, Westminster,
            Brighton, and Northglenn — Dean Auto Detailers delivers premium
            mobile detailing at your door.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <BookNowButton variant="primary" className="inline-block px-8 py-3" />
            <a
              href="tel:+17205323072"
              className="inline-flex items-center px-8 py-3 border border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50"
            >
              Call (720) 532-3072
            </a>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-gray-700">
          <h2 className="text-2xl font-bold text-gray-900">Explore by City</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/" className="text-primary-600 hover:underline font-semibold">
                Thornton, CO
              </Link>{" "}
              (primary service area)
            </li>
            <li>
              <Link href="/westminster" className="text-primary-600 hover:underline font-semibold">
                Westminster, CO
              </Link>
            </li>
            <li>
              <Link href="/brighton" className="text-primary-600 hover:underline font-semibold">
                Brighton, CO
              </Link>
            </li>
          </ul>
          <p>
            View{" "}
            <Link href="/pricing" className="text-primary-600 hover:underline">
              pricing
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary-600 hover:underline">
              contact us
            </Link>{" "}
            to book.
          </p>
        </div>
      </section>
    </div>
  );
}
