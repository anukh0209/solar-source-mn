import { FadeIn } from "@/components/motion/FadeIn";
import { useTranslations } from "next-intl";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Батбаяр",
    role: "Гэр ахуйн хэрэглэгч",
    location: "Улаанбаатар",
    rating: 5,
    text: "5 кВт систем суурилуулсанаас хойш цахилгааны төлбөр 80% буурсан. Багийн ажил мэргэжлийн түвшинд, баталгаатай. Маш их баярлалаа!",
  },
  {
    name: "Ганболд",
    role: "ЖДҮ эзэн",
    location: "Эрдэнэт",
    rating: 5,
    text: "Үйлдвэрт 20 кВт систем суурилуулсан. 1.5 жилийн дараа хөрөнгө оруулалт маань эргэж ирсэн. Одоо жилд 15 сая төгрөг хэмнэж байна.",
  },
  {
    name: "Сүхбаатар",
    role: "Засаг дарга",
    location: "Дархан",
    rating: 5,
    text: "Сургууль, эмнэлэгт нарны энергийн систем суурилуулах төслийг амжилттай хэрэгжүүлсэн. Иргэд маш их дэмжиж байна.",
  },
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="w-full py-16 md:py-24 bg-forest-900 text-white">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-forest-300 text-sm font-medium mb-4">
              <span>Харилцагчидийн сэтгэгдэл</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t("title")}</h2>
            <p className="text-forest-300 max-w-2xl mx-auto text-lg">{t("subtitle")}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <div className="p-6 rounded-2xl bg-forest-800/50 border border-forest-700">
                <Quote className="w-8 h-8 text-forest-400 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-forest-100 mb-6 leading-relaxed">{testimonial.text}</p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-forest-600 flex items-center justify-center text-sm font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-forest-400">{testimonial.role} • {testimonial.location}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
