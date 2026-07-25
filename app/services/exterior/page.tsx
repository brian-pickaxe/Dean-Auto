import Link from "next/link";
import BookNowButton from "@/components/BookNowButton";

const exteriorServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Exterior Car Detailing",
  description:
    "Mobile exterior car detailing in Thornton, Westminster, Brighton & North Denver. Hand wash, clay bar, wax and wheel cleaning. Koch Chemie and Adam's Polishes. Mobile service.",
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
    priceSpecification: { "@type": "PriceSpecification", minPrice: 200, priceCurrency: "USD" },
  },
};

export default function ExteriorServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exteriorServiceSchema) }}
      />
      <section className="py-16 bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Exterior Car Detailing &amp; Wash in Thornton, Westminster &amp; Brighton
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Full exterior car detailing at your home or office in Thornton,
            Westminster, Brighton, and the North Denver area. We use
            professional-grade products including Koch Chemie and Adam&apos;s
            Polishes to restore shine, remove contaminants, and protect your
            paint with a lasting wax or sealant.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Dean Auto&apos;s mobile exterior detailing includes hand wash, wheel
            and tire cleaning, paint decontamination, and wax or sealant
            application. We bring everything to you—no need to drive to a car
            wash or detail shop. Ideal for daily drivers, weekend cars, and
            anyone who wants a showroom finish without leaving home.
          </p>
          <BookNowButton variant="primary" className="inline-block px-8 py-3" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What&apos;s Included in Our Exterior Detailing
          </h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li>Hand wash and dry</li>
            <li>Wheel and tire cleaning</li>
            <li>Paint decontamination</li>
            <li>Clay bar treatment</li>
            <li>Wax or sealant application</li>
            <li>Trim restoration</li>
            <li>Exterior window cleaning</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Dean Auto for Exterior Detailing
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use Koch Chemie protector wax and Adam&apos;s Polishes for
            wash, wax, and paint care. Our process removes bonded contaminants
            with clay bar when needed, then applies a durable wax or sealant so
            your paint stays protected and beads water for months. Every exterior
            detail is done by hand—no brushes or tunnels that can mar your
            finish.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Mobile exterior detailing means we come to you in Thornton,
            Westminster, Brighton, Northglenn, and the North Denver metro. You
            get a professional car wash and detail without leaving your driveway
            or office parking lot.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Service Area &amp; Pricing
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We serve Thornton, Westminster, Brighton, Northglenn, and surrounding
            North Denver communities. Exterior detailing starts at $100. For
            full pricing and packages, see our{" "}
            <Link href="/pricing" className="text-primary-600 hover:underline font-semibold">
              pricing page
            </Link>
            , or{" "}
            <Link href="/contact" className="text-primary-600 hover:underline font-semibold">
              contact us
            </Link>{" "}
            for a custom quote. Book online to reserve your spot.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Other Automotive Services
            </h2>
            <p className="text-gray-600 mb-4">
              Pair exterior detailing with our{" "}
              <Link href="/services/interior" className="text-primary-600 hover:underline font-semibold">
                interior detailing
              </Link>{" "}
              for a complete detail, or consider{" "}
              <Link href="/services/ceramic-coating" className="text-primary-600 hover:underline font-semibold">
                ceramic coating
              </Link>{" "}
              for multi-year paint protection. See all services on our{" "}
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
