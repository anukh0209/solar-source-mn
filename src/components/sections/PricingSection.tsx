import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { getPageBySlug } from "@/lib/mock";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Гэр ахуйн",
    price: "2,500,000",
    period: "төг/сар",
    features: ["3 кВт систем", "10 самбар", "Бүрэн суурилуулалт", "1 жилийн баталгаа"],
    featured: false,
  },
  {
    name: "Бизнес",
    price: "5,000,000",
    period: "төг/сар",
    features: ["10 кВт систем", "30 самбар", "Бүрэн суурилуулалт", "2 жилийн баталгаа", "24/7 дэмжлэг"],
    featured: true,
  },
  {
    name: "Аж үйлдвэр",
    price: "15,000,000",
    period: "төг/сар",
    features: ["50 кВт систем", "150 самбар", "Бүрэн суурилуулалт", "5 жилийн баталгаа", "24/7 дэмжлэг", "Тогтмол засвар"],
    featured: false,
  },
];

export default function PricingSection() {
  const page = getPageBySlug("pricing");

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{page?.name || "Үнэ"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {page?.description || "Таны хэрэгцээнд тохирсон багцууд"}
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.1}>
              <div className={`relative p-6 rounded-2xl border ${plan.featured ? 'border-primary bg-primary/5' : 'border-border/50 bg-card'} shadow-sm`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    Илүү түгээмэл
                  </div>
                )}
                <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground"> {plan.period}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.featured ? "default" : "outline"}>
                  Сонгох
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
