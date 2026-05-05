import { FadeIn } from "@/components/motion/FadeIn";
import { useTranslations } from "next-intl";
import { MessageSquare, Wrench, Settings, CreditCard } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "consulting",
    description: "consultingDesc",
    features: ["Сайтын үзлэг хийх", "Хэрэгцээний тооцоо", "ROI анализ", "Төсөвлөлт"],
  },
  {
    icon: Wrench,
    title: "installation",
    description: "installationDesc",
    features: ["Мэргэжлийн суурилуулалт", "Цахилгаан холболт", "Системийн туршилт", "Гэрчилгээ олгох"],
  },
  {
    icon: Settings,
    title: "maintenance",
    description: "maintenanceDesc",
    features: ["Жилд 2 удаа үзлэг", "24/7 мониторинг", "Яаралтай засвар", "Дадлага сургалт"],
  },
  {
    icon: CreditCard,
    title: "financing",
    description: "financingDesc",
    features: ["Хөнгөлөлттэй зээл", "6-36 сарын хуваарь", "Төрөөс дэмжлэг", "Уян хатан нөхцөл"],
  },
];

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-forest-50/50">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="group p-6 md:p-8 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-lg hover:border-forest-200 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center mb-5 group-hover:bg-forest-600 transition-colors">
                  <service.icon className="w-6 h-6 text-forest-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t(service.title)}</h3>
                <p className="text-muted-foreground mb-5">{t(service.description)}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-400" />
                      {feature}
                    </li>
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
