import { BentoGrid } from "@/components/sections/bento";
import { FAQ } from "@/components/sections/faq";
import { FeatureHighlight } from "@/components/sections/feature-highlight";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";

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
