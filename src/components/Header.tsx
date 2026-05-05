"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Menu, X, Sun, User } from "lucide-react";

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const authT = useTranslations("auth");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: t("home"), url: "/" },
    { label: t("about"), url: "/about" },
    { label: t("services"), url: "/services" },
    { label: t("products"), url: "/products" },
    { label: t("pricing"), url: "/pricing" },
    { label: t("portfolio"), url: "/portfolio" },
    { label: t("contact"), url: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-forest-600 flex items-center justify-center">
            <Sun className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">MMS Solar Energy</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className="px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-forest-600 rounded-lg hover:bg-forest-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          
          <Link 
            href="/auth/login" 
            className="hidden md:flex items-center gap-2 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-forest-600 rounded-lg hover:bg-forest-50"
          >
            <User className="w-4 h-4" />
            <span>{authT("login")}</span>
          </Link>
          
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/40 bg-background">
          <nav className="container py-4 flex flex-col gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-forest-600 rounded-lg hover:bg-forest-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/auth/login"
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-forest-600 rounded-lg hover:bg-forest-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {authT("login")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher({ locale }: { locale: string }) {
  return (
    <div className="flex gap-1 text-sm bg-muted rounded-lg p-0.5">
      <Link
        href="/"
        locale="mn"
        className={`px-2.5 py-1 rounded-md font-medium transition-all ${locale === "mn" ? "bg-white text-forest-700 shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
      >
        МН
      </Link>
      <Link
        href="/"
        locale="en"
        className={`px-2.5 py-1 rounded-md font-medium transition-all ${locale === "en" ? "bg-white text-forest-700 shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
      >
        EN
      </Link>
      <Link
        href="/"
        locale="zh"
        className={`px-2.5 py-1 rounded-md font-medium transition-all ${locale === "zh" ? "bg-white text-forest-700 shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
      >
        中
      </Link>
    </div>
  );
}
