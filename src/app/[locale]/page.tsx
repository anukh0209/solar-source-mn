import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import PricingSection from "@/components/sections/PricingSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <PricingSection />
      <PortfolioSection />
      <TeamSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
