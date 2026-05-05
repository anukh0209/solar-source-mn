import ProductsSection from "@/components/sections/ProductsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Бүтээгдэхүүн | Solar Source MN",
  description: "Нарны самбар, инвертер, батерей, дагалдах хэрэгсэл",
};

export default function ProductsPage() {
  return (
    <div className="pt-16">
      <ProductsSection />
    </div>
  );
}
