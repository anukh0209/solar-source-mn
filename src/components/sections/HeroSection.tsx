import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <FadeIn delay={0}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              {t("title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground">
              {t("subtitle")}
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/services">{t("cta")}</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link href="/about">{t("learnMore")}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
