import { Link } from "@/i18n/routing";
import { getFooterMenu } from "@/lib/mock";
import { useTranslations } from "next-intl";

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("footer");
  const menu = getFooterMenu();

  return (
    <footer className="w-full border-t border-border/40 bg-muted/50">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">{t("company")}</span>
          </div>
          <nav className="flex items-center gap-6">
            {menu.map((item) => (
              <Link
                key={item._id}
                href={item.url}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t("company")}. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
