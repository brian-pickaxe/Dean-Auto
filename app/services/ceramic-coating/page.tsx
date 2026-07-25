import Link from "next/link";
import BookNowButton from "@/components/BookNowButton";

const ceramicCoatingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ceramic Coating & Paint Protection",
  description:
    "Graphene ceramic coating in Thornton, Westminster, Brighton & North Denver. 5+ years paint protection, hydrophobic finish. Adam's Graphene Ceramic Coating. Mobile service.",
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
    priceSpecification: { "@type": "PriceSpecification", minPrice: 800, priceCurrency: "USD" },
  },
};

export default function CeramicCoatingServicePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ceramicCoatingSchema) }}
      />
      <section className="py-16 bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ceramic Coating &amp; Paint Protection in Thornton, Westminster &amp; Brighton
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4">
            Long-lasting paint protection with Adam&apos;s Graphene Ceramic
            Coating™ in Thornton, Westminster, Brighton, and the North Denver
            metro. We come to you for paint correction and multi-layer ceramic
            coating that delivers a hydrophobic, high-gloss finish for 5+ years.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Ceramic coating is the top tier of automotive paint protection. It
            bonds to your clear coat and resists UV, chemicals, and light
            scratches while keeping your car easier to wash and maintaining a
            deep gloss. Dean Auto applies Adam&apos;s Graphene Ceramic Coating
            at your location so you get professional results without visiting a
            shop.
          </p>
          <BookNowButton variant="primary" className="inline-block px-8 py-3" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What&apos;s Included in Our Ceramic Coating Service
          </h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li>Paint correction (as needed)</li>
            <li>Multi-layer graphene ceramic coating</li>
            <li>5+ years of protection</li>
            <li>UV and chemical resistance</li>
            <li>Hydrophobic surface (water beading)</li>
            <li>Enhanced gloss and shine</li>
            <li>Maintenance kit included</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Dean Auto for Ceramic Coating
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use Adam&apos;s Graphene Ceramic Coating for durable, hydrophobic
            protection that lasts years. Before coating, we perform paint
            correction when necessary so the surface is smooth and defect-free.
            The result is a showroom-quality finish that sheds water and stays
            glossy with minimal upkeep.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Our mobile ceramic coating service is available throughout Thornton,
            Westminster, Brighton, Northglenn, and the North Denver area. We
            bring the equipment and products to you and work in a controlled
            environment so your vehicle gets the same quality as a
            brick-and-mortar detail shop.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Service Area &amp; Pricing
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We serve the North Denver metro including Thornton, Westminster,
            Brighton, and Northglenn. Ceramic coating packages start at $400 and
            vary with vehicle size and paint condition. For details, check our{" "}
            <Link href="/pricing" className="text-primary-600 hover:underline font-semibold">
              pricing page
            </Link>{" "}
            or{" "}
            <Link href="/contact" className="text-primary-600 hover:underline font-semibold">
              contact us
            </Link>{" "}
            for a custom quote. You can also book online to get started.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Other Automotive Services
            </h2>
            <p className="text-gray-600 mb-4">
              Before or after ceramic coating, many customers choose our{" "}
              <Link href="/services/interior" className="text-primary-600 hover:underline font-semibold">
                interior detailing
              </Link>{" "}
              or{" "}
              <Link href="/services/exterior" className="text-primary-600 hover:underline font-semibold">
                exterior detailing
              </Link>{" "}
              to keep the whole vehicle in top shape. View all services on our{" "}
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
