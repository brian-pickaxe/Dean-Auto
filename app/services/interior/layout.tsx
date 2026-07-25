import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Car Detailing | Thornton, Westminster & Brighton | Dean Auto",
  description:
    "Professional interior car detailing in Thornton, Westminster, Brighton & North Denver. Deep cleaning, vacuuming & sanitization with Adam's Polishes & P&S. Mobile service. Book now.",
  keywords: [
    "interior detailing",
    "car interior cleaning",
    "Thornton interior detailing",
    "Westminster car interior",
    "Brighton mobile detailing",
    "North Denver interior detailing",
    "mobile interior car detailing",
  ],
  openGraph: {
    title: "Interior Car Detailing | Thornton, Westminster & Brighton | Dean Auto",
    description:
      "Professional interior car detailing in Thornton, Westminster, Brighton & North Denver. Deep cleaning & sanitization. We come to you.",
    url: "https://deanauto.net/services/interior",
    images: [{ url: "https://deanauto.net/images/deanauto.png", alt: "Dean Auto Interior Detailing" }],
  },
  alternates: { canonical: "https://deanauto.net/services/interior" },
};

export default function InteriorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
