import TeamSection from "@/components/sections/TeamSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Баг | Solar Source MN",
  description: "Манай баг - Нарны энергийн шийдлүүд",
};

export default function TeamPage() {
  return (
    <div className="pt-16">
      <TeamSection />
    </div>
  );
}
