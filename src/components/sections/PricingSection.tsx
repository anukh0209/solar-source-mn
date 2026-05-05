import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Check, Zap, Building2, Factory } from "lucide-react";

const plans = [
  {
    name: "home",
    icon: Zap,
    price: "8,500,000",
    period: "₮",
    description: "Гэр ахуйн 3-5 кВт систем",
    features: [
      "8-10 нарны самбар (550W)",
      "5 кВт гибрид инвертер",
      "10 кВт батерей (BYD/Pylontech)",
      "MPPT контроллер",
      "Бүрэн суурилуулалт",
      "5 жилийн баталгаа",
      "24/7 мониторинг",
    ],
    featured: false,
  },
  {
    name: "business",
    icon: Building2,
    price: "25,000,000",
    period: "₮",
    description: "Бизнесийн 10-15 кВт систем",
    features: [
      "18-24 нарны самбар (550W)",
      "12 кВт гибрид инвертер",
      "20 кВт батерей систем",
      "3 фазын холболт",
      "Бүрэн суурилуулалт",
      "5 жилийн баталгаа",
      "24/7 дэмжлэг + засвар",
    ],
    featured: true,
  },
  {
    name: "industrial",
    icon: Factory,
    price: "85,000,000",
    period: "₮",
    description: "Үйлдвэрийн 50+ кВт систем",
    features: [
      "90+ нарны самбар (550W+)",
      "50 кВт холбогдох инвертер",
      "Хяналтын систем",
      "3 фазын холболт",
      "Бүрэн суурилуулалт",
      "10 жилийн баталгаа",
      "Онцгой дэмжлэг",
    ],
    featured: false,
  },
];

export default function PricingSection() {
  const t = useTranslations("pricing");

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-forest-50/50 to-white">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-4">
              <span>Боломжит үнэ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t("title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <FadeIn key={plan.name} delay={index * 0.1}>
              <div className={`relative p-6 md:p-8 rounded-2xl border-2 ${plan.featured ? 'border-forest-500 bg-forest-50/50 shadow-xl shadow-forest-500/10' : 'border-border/50 bg-white'} transition-all hover:shadow-lg`}>
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-forest-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    {t("popular")}
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center mb-5">
                  <plan.icon className="w-6 h-6 text-forest-600" />
                </div>
                
                <h3 className="text-xl font-bold mb-1">{t(plan.name)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-forest-700">{plan.price}</span>
                  <span className="text-muted-foreground"> {plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className={`w-5 h-5 mt-0.5 shrink-0 ${plan.featured ? 'text-forest-600' : 'text-forest-400'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-5 text-base font-semibold rounded-xl ${plan.featured ? 'bg-forest-600 hover:bg-forest-700 text-white' : 'bg-forest-100 hover:bg-forest-200 text-forest-700'}`}
                >
                  {t("select")}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
