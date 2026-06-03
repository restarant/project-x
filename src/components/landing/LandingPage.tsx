import { CtaSection } from "./CtaSection";
import { FeaturesSection } from "./FeaturesSection";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { ModulesSection } from "./ModulesSection";
import { NavBar } from "./NavBar";
import { PricingSection } from "./PricingSection";
import { SectionDivider } from "./ui/Section";
import "./styles/tokens.css";

export function LandingPage() {
  return (
    <div className="landing">
      <NavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <SectionDivider />
        <ModulesSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
