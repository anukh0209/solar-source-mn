import { FadeIn } from "@/components/motion/FadeIn";
import { getPageBySlug } from "@/lib/mock";
import { useTranslations } from "next-intl";

export default function FAQSection() {
  const page = getPageBySlug("faq");
  const t = useTranslations("faq");
  const faqs = t.raw("items") as Array<{ question: string; answer: string }>;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{page?.name || t("title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {page?.description || t("subtitle")}
            </p>
          </div>
        </FadeIn>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
