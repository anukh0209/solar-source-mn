import { FadeIn } from "@/components/motion/FadeIn";
import { getPageBySlug } from "@/lib/mock";

const menuItems = [
  { category: "Нарны самбар", items: ["Monocrystalline - 400W", "Polycrystalline - 330W", "Bifacial - 450W"] },
  { category: "Инвертер", items: ["String inverter - 5kW", "Hybrid inverter - 10kW", "Micro inverter"] },
  { category: "Батарей", items: ["Lithium-ion - 10kWh", "Lithium-ion - 20kWh", "Lead-acid - 200Ah"] },
];

export default function MenuSection() {
  const page = getPageBySlug("menu");

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{page?.name || "Бүтээгдэхүүн"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {page?.description || "Бидний бүтээгдэхүүнүүд"}
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((category, index) => (
            <FadeIn key={category.category} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="text-lg font-semibold mb-4 text-primary">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-muted-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
