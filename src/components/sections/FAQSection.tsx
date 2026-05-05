import { FadeIn } from "@/components/motion/FadeIn";
import { getPageBySlug } from "@/lib/mock";

const faqs = [
  {
    question: "Нарны самбар хэр удаан ажилладаг вэ?",
    answer: "Нарны самбар 25-30 жилийн хугацаанд ажиллах боломжтой. Бид 25 жилийн баталгаа өгдөг.",
  },
  {
    question: "Өвөлдөө хэр ажилладаг вэ?",
    answer: "Тиймээ, нарны самбар өвөлдөө ч ажиллана. Цас самбарыг бүрхвэл үр ашиг буурч болно.",
  },
  {
    question: "Хэр их зай эзэлдэг вэ?",
    answer: "1 кВт системд ойролцоогоор 6-8 м2 талбай хэрэгтэй. Гэр ахуйн системд 20-40 м2 зүйтэй.",
  },
  {
    question: "Төсөв хэр их гарах вэ?",
    answer: "Гэр ахуйн систем 2-5 сая төгрөгийн хооронд, бизнесийн систем 5-20 сая төгрөгийн хооронд байна.",
  },
];

export default function FAQSection() {
  const page = getPageBySlug("faq");

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{page?.name || "Түгээмэл асуулт"}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {page?.description || "Түгээмэл асуултууд"}
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
