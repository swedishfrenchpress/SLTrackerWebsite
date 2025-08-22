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
      <FeatureHighlight />
      <BentoGrid />
      <FAQ />
      <Footer />
    </main>
  );
}
