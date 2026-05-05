import MenuSection from "@/components/sections/MenuSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бүтээгдэхүүн | Solar Source MN",
  description: "Бидний бүтээгдэхүүнүүд - Нарны энергийн шийдлүүд",
};

export default function MenuPage() {
  return (
    <div className="pt-16">
      <MenuSection />
    </div>
  );
}
