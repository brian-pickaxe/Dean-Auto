import Link from "next/link";
import BookNowButton from "@/components/BookNowButton";

const interiorServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Interior Car Detailing",
  description:
    "Professional interior car detailing in Thornton, Westminster, Brighton & North Denver. Deep cleaning, vacuuming and sanitization with Adam's Polishes and P&S. Mobile service.",
  provider: {
    "@type": "AutomotiveBusiness",
    name: "Dean Auto",
    url: "https://deanauto.net",
    areaServed: ["Thornton, CO", "Westminster, CO", "Brighton, CO", "North Denver"],
  },
  areaServed: [
    { "@type": "City", name: "Thornton", addressRegion: "CO" },
    { "@type": "City", name: "Westminster", addressRegion: "CO" },
    { "@type": "City", name: "Brighton", addressRegion: "CO" },
  ],
  offers: {
    "@type": "Offer",
    priceSpecification: { "@type": "PriceSpecification", minPrice: 150, priceCurrency: "USD" },
  },
};

export default function InteriorServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(interiorServiceSchema) }}
      />
      <section className="py-16 bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interior Car Detailing in Thornton, Westminster & Brighton
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Professional interior car detailing brought to your door in Thornton,
            Westminster, Brighton, and the North Denver suburbs. We deep-clean
            and sanitize your vehicle using premium products from Adam&apos;s
            Polishes and P&S Detail Products for a fresh, like-new cabin.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Dean Auto&apos;s mobile interior detailing service is ideal for
            families, commuters, and anyone who wants a clean, healthy cabin
            without the hassle of driving to a shop. We come to your home or
            office and deliver thorough interior cleaning and protection.
          </p>
          <BookNowButton variant="primary" className="inline-block px-8 py-3" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What&apos;s Included in Our Interior Detailing
          </h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li>Deep vacuuming of carpets, seats, and floor mats</li>
            <li>Dashboard, console, and door panel cleaning</li>
            <li>Seat cleaning and conditioning (leather or fabric)</li>
            <li>Window cleaning (interior)</li>
            <li>Air vent and crevice cleaning</li>
            <li>Trunk cleaning</li>
            <li>Sanitization for a fresh, residue-free finish</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Dean Auto for Interior Detailing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use professional-grade interior cleaners and protectants,
            including Adam&apos;s Total Interior Detailer and P&S Xpress
            Interior Cleaner for safe, effective stain removal and a lasting
            finish. Every interior detail is done by hand so we can reach
            crevices and surfaces that automated systems miss.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our mobile interior detailing service saves you time and keeps your
            schedule intact—we work around you at your home or workplace in
            Thornton, Westminster, Brighton, Northglenn, and surrounding North
            Denver areas.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Service Area &amp; Pricing
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We serve Thornton, Westminster, Brighton, Northglenn, and the North
            Denver metro. Interior detailing pricing starts at $100 and depends
            on vehicle size and condition. For a custom quote,{" "}
            <Link href="/pricing" className="text-primary-600 hover:underline font-semibold">
              view our pricing
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary-600 hover:underline font-semibold">
              contact us
            </Link>
            . You can also book online for a slot that works for you.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Other Automotive Services
            </h2>
            <p className="text-gray-600 mb-4">
              Combine interior detailing with our{" "}
              <Link href="/services/exterior" className="text-primary-600 hover:underline font-semibold">
                exterior detailing
              </Link>{" "}
              for a full detail, or explore{" "}
              <Link href="/services/ceramic-coating" className="text-primary-600 hover:underline font-semibold">
                ceramic coating
              </Link>{" "}
              for long-term paint protection. View all options on our{" "}
              <Link href="/" className="text-primary-600 hover:underline font-semibold">
                home page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
