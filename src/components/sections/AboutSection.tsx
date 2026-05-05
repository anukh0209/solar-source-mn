import { FadeIn } from "@/components/motion/FadeIn";
import { useTranslations } from "next-intl";
import { Target, Eye, CheckCircle } from "lucide-react";

const values = [
  "Олон улсын ISO 9001 чанарын стандарт",
  "Longi, JA Solar, Growatt албан ёсны дистрибьютор",
  "5 жилийн бүрэн баталгаа",
  "24/7 онлайн мониторинг систем",
  "Мэргэшсэн инженерийн баг",
  "Төр, хувийн хэвшлийн 100+ төсөл",
];

export default function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-medium">
                <span>2018 оноос хойш</span>
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
              <h3 className="text-xl font-semibold mb-6">Яг одоо биднийг сонгох шалтгаан</h3>
              {values.map((value, index) => (
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
