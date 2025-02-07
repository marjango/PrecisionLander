import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Testimonials />
        <Features />
        <CTA />
      </main>
    </div>
  );
}