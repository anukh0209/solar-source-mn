import { FadeIn } from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-medium mb-4">
              <span>Холбоо барих</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t("title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <FadeIn>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Хаяг</h3>
                  <p className="text-muted-foreground">{t("address")}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Утас</h3>
                  <p className="text-muted-foreground">+976 7711-1999</p>
                  <p className="text-muted-foreground">+976 9911-1999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">И-мэйл</h3>
                  <p className="text-muted-foreground">solar@source.mn</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ажлын цаг</h3>
                  <p className="text-muted-foreground">{t("workingHours")}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form className="p-6 md:p-8 rounded-2xl bg-white border border-border/50 shadow-sm space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("name")}</label>
                  <Input placeholder="Таны нэр" className="rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{t("phone")}</label>
                  <Input placeholder="+976" className="rounded-xl" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t("email")}</label>
                <Input type="email" placeholder="example@email.com" className="rounded-xl" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">{t("message")}</label>
                <textarea 
                  className="w-full min-h-[120px] px-3 py-2 rounded-xl border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="Таны зурвас..."
                />
              </div>

              <Button className="w-full bg-forest-600 hover:bg-forest-700 text-white py-5 rounded-xl font-semibold">
                {t("submit")}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
