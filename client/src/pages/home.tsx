import Hero from "@/components/sections/hero";
import SocialProof from "@/components/sections/social-proof";
import Comparison from "@/components/sections/comparison";
import Benefits from "@/components/sections/benefits";
import HowItWorks from "@/components/sections/how-it-works";
import Pricing from "@/components/sections/pricing";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <SocialProof />
        <Comparison />
        <Benefits />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}