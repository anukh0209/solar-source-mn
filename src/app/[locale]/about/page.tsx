import AboutSection from "@/components/sections/AboutSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бидний тухай | Solar Source MN",
  description: "Solar Source MN - Нарны энергийн шийдлүүд",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
    </div>
  );
}
