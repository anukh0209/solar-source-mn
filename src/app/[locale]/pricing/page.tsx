import PricingSection from "@/components/sections/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Үнэ | Solar Source MN",
  description: "Багц үнэ - Нарны энергийн шийдлүүд",
};

export default function PricingPage() {
  return (
    <div className="pt-16">
      <PricingSection />
    </div>
  );
}
