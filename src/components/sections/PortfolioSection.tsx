import { FadeIn } from "@/components/motion/FadeIn";
import { useTranslations } from "next-intl";
import { MapPin, Calendar, Zap, Home, Building2, Factory, School, Hotel, Hospital } from "lucide-react";

const projects = [
  { 
    title: "Гэр ахуйн систем", 
    location: "Улаанбаатар", 
    capacity: "5 кВт", 
    year: "2024",
    type: "home",
    icon: Home,
    color: "from-blue-500 to-cyan-400",
    description: "Гэр бүлийн нарны энергийн систем"
  },
  { 
    title: "Оффисын барилга", 
    location: "Эрдэнэт", 
    capacity: "20 кВт", 
    year: "2024",
    type: "office",
    icon: Building2,
    color: "from-purple-500 to-pink-400",
    description: "Албан газрын нарны энергийн систем"
  },
  { 
    title: "Үйлдвэрийн төсөл", 
    location: "Дархан", 
    capacity: "100 кВт", 
    year: "2023",
    type: "industrial",
    icon: Factory,
    color: "from-orange-500 to-red-400",
    description: "Үйлдвэрийн хэмжээний нарны энергийн систем"
  },
  { 
    title: "Сургууль", 
    location: "Чойр", 
    capacity: "15 кВт", 
    year: "2023",
    type: "school",
    icon: School,
    color: "from-green-500 to-emerald-400",
    description: "Боловсролын байгууллагын нарны энергийн систем"
  },
  { 
    title: "Эмнэлэг", 
    location: "Баянхонгор", 
    capacity: "30 кВт", 
    year: "2023",
    type: "hospital",
    icon: Hospital,
    color: "from-red-500 to-rose-400",
    description: "Эрүүл мэндийн байгууллагын нарны энергийн систем"
  },
  { 
    title: "Зочид буудал", 
    location: "Хархорин", 
    capacity: "50 кВт", 
    year: "2022",
    type: "hotel",
    icon: Hotel,
    color: "from-yellow-500 to-amber-400",
    description: "Зочид буудлын нарны энергийн систем"
  },
];

export default function PortfolioSection() {
  const t = useTranslations("portfolio");

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-4">
              <span>{t("title")}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t("title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="group p-6 rounded-2xl bg-white border border-border/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`relative w-full h-48 bg-gradient-to-br ${project.color} rounded-xl mb-5 flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <project.icon className="w-16 h-16 text-white/90 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-semibold">{project.capacity}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-forest-600 transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
