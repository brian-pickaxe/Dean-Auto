import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Mobile Car Detailing Thornton CO | Dean Auto Detailers",
  description:
    "Professional mobile car detailing brought to your doorstep in Thornton & North Denver. Premium interior cleaning, exterior polishing & ceramic coatings. Book today!",
  openGraph: {
    title: "Mobile Car Detailing Thornton CO | Dean Auto Detailers",
    description:
      "Professional mobile car detailing brought to your doorstep in Thornton & North Denver. Premium interior cleaning, exterior polishing & ceramic coatings. Book today!",
    url: "https://deanauto.net",
  },
  alternates: { canonical: "https://deanauto.net/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Gallery />
    </>
  );
}

