import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Mobile Car Detailing Cost | Dean Auto",
  description:
    "Dean Auto mobile detailing prices by vehicle size: Interior & Exterior from $100, Full Detail from $180, Polish from $150, Ceramic Coating from $400. Thornton, Westminster, Brighton.",
  keywords: [
    "car detailing prices",
    "mobile detailing pricing",
    "interior detailing cost",
    "exterior detailing price",
    "full detail price",
    "ceramic coating price",
    "paint polish cost",
    "headlight restoration cost",
    "car detailing Thornton prices",
    "affordable car detailing",
  ],
  openGraph: {
    title: "Pricing | Mobile Car Detailing Cost | Dean Auto",
    description:
      "Transparent mobile detailing prices in Thornton, Westminster, Brighton. Interior & Exterior from $100, Full Detail from $180, Ceramic from $400.",
    url: "https://deanauto.net/pricing",
    images: [{ url: "https://deanauto.net/images/deanauto.png", alt: "Dean Auto" }],
  },
  alternates: {
    canonical: "https://deanauto.net/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

