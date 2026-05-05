import { FadeIn } from "@/components/motion/FadeIn";
import { getPageBySlug } from "@/lib/mock";

export default function AboutSection() {
  const page = getPageBySlug("about");

  if (!page) return null;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{page.name}</h2>
            <div 
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: page.content }} 
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
