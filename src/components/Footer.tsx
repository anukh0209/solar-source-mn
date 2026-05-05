import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Sun, Phone, Mail, MapPin } from "lucide-react";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");

  return (
    <footer className="w-full bg-forest-950 text-white">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-forest-600 flex items-center justify-center">
                <Sun className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">{t("company")}</span>
            </div>
            <p className="text-forest-300 text-sm leading-relaxed">{t("description")}</p>
            <div className="flex items-center gap-2 text-sm text-forest-300">
              <MapPin className="w-4 h-4" />
              <span>Улаанбаатар, Сүхбаатар дүүрэг</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4">{t("quickLinks")}</h3>
            <ul className="space-y-2">
              {[
                { label: t("home"), url: "/" },
                { label: t("about"), url: "/about" },
                { label: t("services"), url: "/services" },
                { label: t("products"), url: "/products" },
              ].map((link) => (
                <li key={link.url}>
                  <Link href={link.url} className="text-sm text-forest-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t("services")}</h3>
            <ul className="space-y-2">
              {[
                "Нарны самбар суурилуулалт",
                "Инвертер систем",
                "Батерей хуримтлуур",
                "Засвар үйлчилгээ",
              ].map((service) => (
                <li key={service} className="text-sm text-forest-300">{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-forest-300">
                <Phone className="w-4 h-4" />
                <span>+976 9911-2233</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-forest-300">
                <Mail className="w-4 h-4" />
                <span>info@solarsource.mn</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-forest-300">
                <MapPin className="w-4 h-4" />
                <span>Их Монгол гудамж 15</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-forest-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-forest-400">
            © {new Date().getFullYear()} {t("company")}. {t("rights")}
          </p>
          <div className="flex gap-6 text-sm text-forest-400">
            <span>Нууцлалын бодлого</span>
            <span>Үйлчилгээний нөхцөл</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
