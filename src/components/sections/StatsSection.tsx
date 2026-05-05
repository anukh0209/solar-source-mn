import { FadeIn } from "@/components/motion/FadeIn";
import { useTranslations } from "next-intl";
import { Zap, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Zap, value: "500+", label: "installations", suffix: "" },
  { icon: Award, value: "2.5", label: "capacity", suffix: " МВт" },
  { icon: Users, value: "450+", label: "clients", suffix: "" },
  { icon: Clock, value: "6", label: "experience", suffix: "+ жил" },
];

export default function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="w-full py-12 md:py-16 bg-forest-600">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-3 opacity-90" />
                <div className="text-3xl md:text-4xl font-bold mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm opacity-90">{t(stat.label)}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
