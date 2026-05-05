import { FadeIn } from "@/components/motion/FadeIn";
import { getPageBySlug } from "@/lib/mock";

const team = [
  { name: "Бат-Эрдэнэ", role: "Гүйцэтгэх захирал", image: "/team-1.jpg" },
  { name: "Энхжин", role: "Инженер", image: "/team-2.jpg" },
  { name: "Болд", role: "Техникийн мэргэжилтэн", image: "/team-3.jpg" },
  { name: "Сарангэрэл", role: "Менежер", image: "/team-4.jpg" },
];

export default function TeamSection() {
  const page = getPageBySlug("team");

  return (
    <section className="w-full py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{page?.name || "Баг"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {page?.description || "Манай мэргэжлийн баг"}
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{member.name[0]}</span>
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
