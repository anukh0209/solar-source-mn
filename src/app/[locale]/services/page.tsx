import ServicesSection from "@/components/sections/ServicesSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Үйлчилгээ | Solar Source MN",
  description: "Бидний үйлчилгээ - Нарны энергийн шийдлүүд",
};

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesSection />
    </div>
  );
}
