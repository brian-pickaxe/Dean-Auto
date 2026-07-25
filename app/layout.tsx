import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://deanauto.net"),
  title: {
    default: "Mobile Car Detailing Thornton CO | Dean Auto Detailers",
    template: "%s | Dean Auto Detailers",
  },
  description:
    "Professional mobile car detailing brought to your doorstep in Thornton & North Denver. Premium interior cleaning, exterior polishing & ceramic coatings. Book today!",
  keywords: [
    "mobile car detailing",
    "car detailing",
    "mobile detailing",
    "Thornton car detailing",
    "Westminster car detailing",
    "Brighton car detailing",
    "North Denver car detailing",
    "Northglenn car detailing",
    "ceramic coating",
    "interior detailing",
    "exterior detailing",
    "car wash",
    "auto detailing",
    "mobile car wash",
    "Adam's Polishes",
    "Koch Chemie",
    "P&S Detail Products",
    "graphene ceramic coating",
    "headlight restoration",
    "express detail",
    "wash and wax",
    "car detailing near me",
    "mobile auto detailing Colorado",
  ],
  authors: [{ name: "Dean Auto" }],
  creator: "Dean Auto",
  publisher: "Dean Auto",
  icons: {
    icon: [
      { url: "/images/deanauto.png", sizes: "any" },
      { url: "/images/deanauto.png", type: "image/png" },
    ],
    apple: "/images/deanauto.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://deanauto.net",
    siteName: "Dean Auto",
    title: "Mobile Car Detailing Thornton CO | Dean Auto Detailers",
    description:
      "Professional mobile car detailing brought to your doorstep in Thornton & North Denver. Premium interior cleaning, exterior polishing & ceramic coatings. Book today!",
    images: [
      {
        url: "https://deanauto.net/images/deanauto.png",
        width: 500,
        height: 302,
        alt: "Dean Auto - Mobile Car Detailing Thornton Westminster Brighton",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile Car Detailing Thornton CO | Dean Auto Detailers",
    description:
      "Professional mobile car detailing brought to your doorstep in Thornton & North Denver. Book today!",
    images: ["https://deanauto.net/images/deanauto.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://deanauto.net/",
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "your-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        <StructuredData />
        <Script
          id="setmore_script"
          src="https://assets.setmore.com/integration/static/setmoreIframeLive.js"
          strategy="lazyOnload"
        />
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

