import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Mobile Car Detailing Experts | Dean Auto",
  description:
    "Dean Auto is your trusted mobile car detailing team in Thornton, Westminster, Brighton & North Denver. We use Adam's Polishes, Koch Chemie & P&S. Quality service at your location. Learn more.",
  keywords: [
    "about Dean Auto",
    "mobile car detailing Thornton",
    "car detailing Westminster",
    "North Denver car detailing",
    "mobile detailing service",
    "professional car detailers",
    "Brighton car detailing",
  ],
  openGraph: {
    title: "About Us | Mobile Car Detailing Experts | Dean Auto",
    description:
      "Dean Auto: trusted mobile car detailing in Thornton, Westminster, Brighton & North Denver. Premium products, quality service at your door.",
    url: "https://deanauto.net/about",
    images: [{ url: "https://deanauto.net/images/deanauto.png", alt: "Dean Auto" }],
  },
  alternates: {
    canonical: "https://deanauto.net/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

