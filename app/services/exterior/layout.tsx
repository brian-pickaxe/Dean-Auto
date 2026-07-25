import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exterior Car Detailing | Wash & Wax Thornton, Westminster | Dean Auto",
  description:
    "Mobile exterior car detailing in Thornton, Westminster, Brighton & North Denver. Hand wash, clay bar, wax & wheel cleaning. Koch Chemie & Adam's Polishes. Book at your location.",
  keywords: [
    "exterior detailing",
    "mobile car wash",
    "Thornton car wash",
    "Westminster exterior detailing",
    "Brighton mobile car wash",
    "North Denver car detailing",
    "mobile exterior detailing",
  ],
  openGraph: {
    title: "Exterior Car Detailing | Wash & Wax Thornton, Westminster | Dean Auto",
    description:
      "Mobile exterior detailing in Thornton, Westminster, Brighton & North Denver. Hand wash, clay bar, wax. We come to you.",
    url: "https://deanauto.net/services/exterior",
    images: [{ url: "https://deanauto.net/images/deanauto.png", alt: "Dean Auto Exterior Detailing" }],
  },
  alternates: { canonical: "https://deanauto.net/services/exterior" },
};

export default function ExteriorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
