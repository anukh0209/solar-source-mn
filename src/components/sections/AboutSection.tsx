import { FadeIn } from "@/components/motion/FadeIn";
import { useTranslations } from "next-intl";
import { Target, Eye, CheckCircle } from "lucide-react";

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-medium">
                <span>{t("badge")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t("title")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("description")}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-forest-50 border border-forest-100">
                  <Target className="w-6 h-6 text-forest-600 mb-2" />
                  <h3 className="font-semibold text-forest-900 mb-1">{t("mission")}</h3>
                  <p className="text-sm text-forest-700">{t("missionText")}</p>
                </div>
                <div className="p-4 rounded-xl bg-forest-50 border border-forest-100">
                  <Eye className="w-6 h-6 text-forest-600 mb-2" />
                  <h3 className="font-semibold text-forest-900 mb-1">{t("vision")}</h3>
                  <p className="text-sm text-forest-700">{t("visionText")}</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-6">{t("whyChooseUs")}</h3>
              {t.raw("values").map((value: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-forest-600 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
