import { FadeIn } from "@/components/motion/FadeIn";
import { useTranslations } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Zap, Battery, Settings } from "lucide-react";

const productCategories = [
  {
    id: "panels",
    icon: Sun,
    title: "panels",
    items: [
      { name: "Longi Hi-MO 6", spec: "550W | 21.7% бүтээмж", price: "980,000₮", badge: "Хамгийн түгээмэл" },
      { name: "JA Solar DeepBlue", spec: "540W | 21.5% бүтээмж", price: "950,000₮", badge: null },
      { name: "Trina Solar Vertex", spec: "600W | 22.0% бүтээмж", price: "1,150,000₮", badge: "Өндөр хүчин чадал" },
      { name: "Jinko Solar Tiger", spec: "470W | 21.2% бүтээмж", price: "820,000₮", badge: null },
    ],
  },
  {
    id: "inverters",
    icon: Zap,
    title: "inverters",
    items: [
      { name: "Growatt SPF 5000", spec: "5kW | Гибрид | MPPT", price: "2,800,000₮", badge: "Гэрийн системд" },
      { name: "Solis 10K", spec: "10kW | Гибрид | 2 MPPT", price: "4,500,000₮", badge: null },
      { name: "Deye 12K-SD", spec: "12kW | 3 фаз | Гибрид", price: "6,200,000₮", badge: "Бизнесийн" },
      { name: "Sungrow 25K", spec: "25kW | Холбогдох | 3 фаз", price: "9,800,000₮", badge: "Үйлдвэр" },
    ],
  },
  {
    id: "batteries",
    icon: Battery,
    title: "batteries",
    items: [
      { name: "BYD B-Box Premium", spec: "10kWh | LiFePO4 | 6000 цикл", price: "8,500,000₮", badge: "Тэргүүлэгч" },
      { name: "Pylontech US3000C", spec: "3.5kWh | LiFePO4 | 95% DoD", price: "3,200,000₮", badge: null },
      { name: "Freedom Won Lite", spec: "10kWh | LiFePO4 | 10 жил", price: "7,800,000₮", badge: null },
      { name: "Huawei LUNA2000", spec: "15kWh | Smart | Модульчлагдсан", price: "12,500,000₮", badge: "Ухаалаг" },
    ],
  },
  {
    id: "accessories",
    icon: Settings,
    title: "accessories",
    items: [
      { name: "MPPT Controller 60A", spec: "60A | 12/24/48V | LCD", price: "650,000₮", badge: null },
      { name: "Mounting System", spec: "Алюмин | Угсардаг | 4 самбар", price: "480,000₮", badge: null },
      { name: "Solar Cable 4mm2", spec: "100м | TUV баталгаат | UV тэсвэртэй", price: "280,000₮", badge: null },
      { name: "DC Breaker Box", spec: "1000V | 2 багц | IP65", price: "320,000₮", badge: null },
    ],
  },
];

export default function ProductsSection() {
  const t = useTranslations("products");

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-4">
              <span>ISO баталгаат</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t("title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Tabs defaultValue="panels" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto mb-8 grid grid-cols-2 md:grid-cols-4">
              {productCategories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id} className="gap-2">
                  <cat.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{t(cat.title)}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {productCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item, index) => (
                    <FadeIn key={item.name} delay={index * 0.05}>
                      <div className="p-5 rounded-xl bg-white border border-border/50 hover:border-forest-200 hover:shadow-md transition-all">
                        {item.badge && (
                          <div className="inline-block px-2 py-1 rounded-md bg-forest-100 text-forest-700 text-xs font-medium mb-3">
                            {item.badge}
                          </div>
                        )}
                        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.spec}</p>
                        <div className="text-xl font-bold text-forest-600">{item.price}</div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </FadeIn>
      </div>
    </section>
  );
}
