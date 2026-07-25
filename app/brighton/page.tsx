import type { Metadata } from "next";
import Link from "next/link";
import BookNowButton from "@/components/BookNowButton";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Brighton CO",
  description:
    "Professional mobile car detailing in Brighton, CO. Interior, exterior & ceramic coating brought to your door. Call (720) 532-3072 to book.",
  alternates: { canonical: "https://deanauto.net/brighton" },
};

export default function BrightonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-16 bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mobile Car Detailing in Brighton, CO
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Professional mobile car detailing in Brighton, CO — interior,
            exterior, and ceramic coating at your home or workplace.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Serving Brighton neighborhoods and nearby Adams County addresses so
            you never have to wait at a shop.
          </p>
          <div className="flex flex-wrap gap-4">
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
          <h2 className="text-2xl font-bold text-gray-900">Services in Brighton</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/services/interior" className="text-primary-600 hover:underline font-semibold">
                Interior detailing
              </Link>{" "}
              from $100
            </li>
            <li>
              <Link href="/services/exterior" className="text-primary-600 hover:underline font-semibold">
                Exterior detailing
              </Link>{" "}
              from $100
            </li>
            <li>
              <Link href="/services/ceramic-coating" className="text-primary-600 hover:underline font-semibold">
                Ceramic coating
              </Link>{" "}
              from $400
            </li>
          </ul>
          <p>
            Also serving{" "}
            <Link href="/" className="text-primary-600 hover:underline">
              Thornton
            </Link>
            ,{" "}
            <Link href="/westminster" className="text-primary-600 hover:underline">
              Westminster
            </Link>
            , and{" "}
            <Link href="/north-denver" className="text-primary-600 hover:underline">
              North Denver
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
