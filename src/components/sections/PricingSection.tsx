import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Check, Zap, Building2, Factory } from "lucide-react";

const planIcons = [Zap, Building2, Factory];
const planPrices = ["8,500,000", "25,000,000", "85,000,000"];
const planPeriods = ["₮", "₮", "₮"];
const planFeatured = [false, true, false];
const planKeys = ["home", "business", "industrial"];

export default function PricingSection() {
  const t = useTranslations("pricing");
  const plans = t.raw("plans") as Array<{
    name: string;
    description: string;
    features: string[];
  }>;

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-forest-50/50 to-white">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-4">
              <span>{t("badge")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t("title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = planIcons[index];
            const price = planPrices[index];
            const period = planPeriods[index];
            const featured = planFeatured[index];
            const key = planKeys[index];
            return (
              <FadeIn key={key} delay={index * 0.1}>
                <div className={`relative p-6 md:p-8 rounded-2xl border-2 ${featured ? 'border-forest-500 bg-forest-50/50 shadow-xl shadow-forest-500/10' : 'border-border/50 bg-white'} transition-all hover:shadow-lg`}>
                  {featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-forest-600 text-white text-sm font-semibold rounded-full shadow-lg">
                      {t("popular")}
                    </div>
                  )}
                  
                  <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-forest-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-1">{t(key)}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-forest-700">{price}</span>
                    <span className="text-muted-foreground"> {period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature: string) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className={`w-5 h-5 mt-0.5 shrink-0 ${featured ? 'text-forest-600' : 'text-forest-400'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-5 text-base font-semibold rounded-xl ${featured ? 'bg-forest-600 hover:bg-forest-700 text-white' : 'bg-forest-100 hover:bg-forest-200 text-forest-700'}`}
                  >
                    {t("select")}
                  </Button>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
