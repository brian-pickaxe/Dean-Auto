import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceramic Coating | Paint Protection Thornton, Westminster | Dean Auto",
  description:
    "Graphene ceramic coating in Thornton, Westminster, Brighton & North Denver. 5+ years paint protection, hydrophobic finish. Mobile service. Adam's Graphene Coating. Get a quote.",
  keywords: [
    "ceramic coating",
    "car ceramic coating",
    "Thornton CO ceramic coating",
    "Westminster ceramic coating",
    "Brighton paint protection",
    "North Denver ceramic coating",
    "graphene coating",
    "mobile ceramic coating",
  ],
  openGraph: {
    title: "Ceramic Coating | Paint Protection Thornton, Westminster | Dean Auto",
    description:
      "Graphene ceramic coating in Thornton, Westminster, Brighton & North Denver. 5+ years protection. Mobile service.",
    url: "https://deanauto.net/services/ceramic-coating",
    images: [{ url: "https://deanauto.net/images/deanauto.png", alt: "Dean Auto Ceramic Coating" }],
  },
  alternates: { canonical: "https://deanauto.net/services/ceramic-coating" },
};

export default function CeramicCoatingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
