import { Link } from "@/i18n/routing";
import { getHeaderMenu } from "@/lib/mock";
import { useTranslations } from "next-intl";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const menu = getHeaderMenu();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Solar Source MN</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {menu.map((item) => (
            <Link
              key={item._id}
              href={item.url}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <LanguageSwitcher locale={locale} />
      </div>
    </header>
  );
}

function LanguageSwitcher({ locale }: { locale: string }) {
  return (
    <div className="flex gap-2 text-sm">
      <Link
        href="/"
        locale="mn"
        className={locale === "mn" ? "font-bold text-primary" : "opacity-60 hover:opacity-100"}
      >
        МН
      </Link>
      <Link
        href="/"
        locale="en"
        className={locale === "en" ? "font-bold text-primary" : "opacity-60 hover:opacity-100"}
      >
        EN
      </Link>
    </div>
  );
}
