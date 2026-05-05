"use client";

import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { Sun, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";

export default function RegisterPage() {
  const t = useTranslations("auth");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert(t("passwordMismatch"));
      return;
    }
    alert(t("featureComingSoon"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-forest-50 via-white to-forest-100 py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-forest-600 flex items-center justify-center mx-auto mb-4">
            <Sun className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-2">{t("register")}</h1>
          <p className="text-muted-foreground">{t("joinUs")}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-border/50 shadow-sm space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium">{t("name")}</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder={t("namePlaceholder")}
                className="pl-10 rounded-xl"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t("email")}</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="pl-10 rounded-xl"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t("phone")}</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="tel"
                placeholder={t("phonePlaceholder")}
                className="pl-10 rounded-xl"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t("password")}</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="password"
                placeholder={t("passwordPlaceholder")}
                className="pl-10 rounded-xl"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">{t("confirmPassword")}</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="password"
                placeholder={t("confirmPasswordPlaceholder")}
                className="pl-10 rounded-xl"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-forest-600 hover:bg-forest-700 text-white py-5 rounded-xl font-semibold"
          >
            <span className="flex items-center justify-center gap-2">
              {t("registerButton")}
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>

          <div className="text-center text-sm">
            <p className="text-muted-foreground">
              {t("alreadyHaveAccount")}{" "}
              <Link href="/auth/login" className="text-forest-600 hover:underline font-medium">
                {t("login")}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
