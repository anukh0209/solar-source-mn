import FAQSection from "@/components/sections/FAQSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Түгээмэл асуулт | Solar Source MN",
  description: "Түгээмэл асуултууд - Нарны энергийн шийдлүүд",
};

export default function FAQPage() {
  return (
    <div className="pt-16">
      <FAQSection />
    </div>
  );
}
