import PortfolioSection from "@/components/sections/PortfolioSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Төслүүд | Solar Source MN",
  description: "Бидний төслүүд - Нарны энергийн шийдлүүд",
};

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      <PortfolioSection />
    </div>
  );
}
