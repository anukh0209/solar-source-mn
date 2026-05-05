import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Sun, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-forest-50 via-white to-forest-100">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-30"></div>
      <div className="container relative px-4 md:px-6 py-20 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-4">
              <Sun className="w-4 h-4" />
              <span>Монголд 260-280 нартай өдөр</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-tight">
              {t("title")}
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="max-w-[800px] text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("subtitle")}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-forest-600/20">
                <Link href="/contact" className="flex items-center gap-2">
                  {t("cta")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg rounded-xl border-2">
                <Link href="/about">{t("learnMore")}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
