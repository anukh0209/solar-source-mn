import { FadeIn } from "@/components/motion/FadeIn";
import { getPageBySlug } from "@/lib/mock";
import { Sun, Zap, Shield, Settings } from "lucide-react";

const services = [
  { icon: Sun, title: "Нарны самбар суурилуулалт", description: "Өндөр чанартай нарны самбарыг мэргэжлийн түвшинд суурилуулна." },
  { icon: Zap, title: "Инвертер систем", description: "Хамгийн сүүлийн үеийн инвертер технологи." },
  { icon: Shield, title: "Хамгаалалтын систем", description: "Цахилгаан хамгаалалтын бүрэн шийдэл." },
  { icon: Settings, title: "Засвар үйлчилгээ", description: "Тогтмол засвар үйлчилгээ, шалгалт." },
];

export default function ServicesSection() {
  const page = getPageBySlug("services");

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{page?.name || "Үйлчилгээ"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {page?.description || "Бидний үйлчилгээний талаарх мэдээлэл"}
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
