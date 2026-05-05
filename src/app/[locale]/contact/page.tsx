import ContactSection from "@/components/sections/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Холбоо барих | Solar Source MN",
  description: "Нарны энергийн шийдлийн талаар мэдээлэл авах",
};

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
