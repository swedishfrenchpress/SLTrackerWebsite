import { BentoGrid } from "@/components/sections/bento";
import { FAQ } from "@/components/sections/faq";
import { FeatureHighlight } from "@/components/sections/feature-highlight";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SL Tracker",
  description: "A simpler way to check the Tunnelbana",
  openGraph: {
    title: "SL Tracker",
    description: "A simpler way to check the Tunnelbana",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "SL Tracker - A simpler way to check the Tunnelbana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SL Tracker",
    description: "A simpler way to check the Tunnelbana",
    images: ["/og"],
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      
      {/* Subtle section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent mx-4 sm:mx-8 lg:mx-16" />
      
      <FeatureHighlight />
      
      {/* Subtle section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent mx-4 sm:mx-8 lg:mx-16" />
      
      <BentoGrid />
      
      {/* Subtle section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border/30 to-transparent mx-4 sm:mx-8 lg:mx-16" />
      
      <FAQ />
      <Footer />
    </main>
  );
}
