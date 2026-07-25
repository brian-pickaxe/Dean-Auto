import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Book Mobile Car Detailing | Dean Auto",
  description:
    "Book Dean Auto mobile car detailing in Thornton, Westminster, Brighton & North Denver. Call (720) 532-3072 or email to schedule. We come to you.",
  keywords: [
    "contact Dean Auto",
    "car detailing phone number",
    "mobile detailing contact",
    "Thornton car detailing contact",
    "Westminster car detailing",
    "Brighton car detailing contact",
    "book car detailing",
  ],
  openGraph: {
    title: "Contact | Book Mobile Car Detailing | Dean Auto",
    description:
      "Book mobile car detailing in Thornton, Westminster, Brighton & North Denver. Call (720) 532-3072 or schedule online. We come to you.",
    url: "https://deanauto.net/contact",
    images: [{ url: "https://deanauto.net/images/deanauto.png", alt: "Dean Auto" }],
  },
  alternates: {
    canonical: "https://deanauto.net/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

