import { FadeIn } from "@/components/motion/FadeIn";
import { getPageBySlug } from "@/lib/mock";

const projects = [
  { title: "Гэр ахуйн систем", location: "Улаанбаатар", capacity: "5 кВт", year: "2024" },
  { title: "Оффисын барилга", location: "Эрдэнэт", capacity: "20 кВт", year: "2024" },
  { title: "Үйлдвэрийн төсөл", location: "Дархан", capacity: "100 кВт", year: "2023" },
  { title: "Сургууль", location: "Чойр", capacity: "15 кВт", year: "2023" },
  { title: "Эмнэлэг", location: "Баянхонгор", capacity: "30 кВт", year: "2023" },
  { title: "Зочид буудал", location: "Хархорин", capacity: "50 кВт", year: "2022" },
];

export default function PortfolioSection() {
  const page = getPageBySlug("portfolio");

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{page?.name || "Төслүүд"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {page?.description || "Бидний хэрэгжүүлсэн төслүүд"}
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border/50 hover:shadow-md transition-shadow">
                <div className="w-full h-40 bg-primary/10 rounded-xl mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary/30">{project.capacity}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
