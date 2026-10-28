/**
 * Structured Data (JSON-LD) for SEO
 * LocalBusiness schema for better search engine understanding
 */

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": "https://deanauto.net/#organization",
    name: "Dean Auto Detailers",
    alternateName: "Dean Auto",
    description:
      "Professional mobile car detailing services in Thornton, Westminster, Brighton, and North Denver suburbs. Interior, exterior, and ceramic coating services using premium Adam's Polishes products.",
    url: "https://deanauto.net",
    logo: "https://deanauto.net/images/deanauto.png",
    image: "https://deanauto.net/images/deanauto.png",
    telephone: "+17205323072",
    email: "deanautodetailers95@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thornton",
      addressRegion: "CO",
      addressCountry: "US",
      postalCode: "80233",
      addressArea: "North Denver Suburbs",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Thornton",
        addressRegion: "CO",
      },
      {
        "@type": "City",
        name: "Westminster",
        addressRegion: "CO",
      },
      {
        "@type": "City",
        name: "Brighton",
        addressRegion: "CO",
      },
      {
        "@type": "City",
        name: "Northglenn",
        addressRegion: "CO",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "39.8680",
      longitude: "-104.9719",
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "15:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "06:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "06:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Car Detailing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interior Detailing",
            description:
              "Complete interior cleaning and refresh priced by vehicle size from $100",
            provider: { "@type": "LocalBusiness", name: "Dean Auto" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exterior Detailing",
            description:
              "Hand wash, wheels, and exterior finish priced by vehicle size from $100",
            provider: { "@type": "LocalBusiness", name: "Dean Auto" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Detail",
            description:
              "Interior and exterior detailing combined, priced by vehicle size from $180",
            provider: { "@type": "LocalBusiness", name: "Dean Auto" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Polish",
            description:
              "Paint correction and polish; price varies based on paint condition, from $150",
            provider: { "@type": "LocalBusiness", name: "Dean Auto" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceramic Coating",
            description:
              "Long-lasting ceramic paint protection priced by vehicle size from $400",
            provider: { "@type": "LocalBusiness", name: "Dean Auto" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Headlight Restoration",
            description: "Restore cloudy or yellowed headlights — $35 add-on",
            provider: { "@type": "LocalBusiness", name: "Dean Auto" },
          },
        },
      ],
    },
    sameAs: [
      "https://deanautodetailers.setmore.com",
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        url: "https://deanautodetailers.setmore.com",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Book Dean Auto Detailing Appointment",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

