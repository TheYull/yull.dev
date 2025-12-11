import { UIButton } from "@/components/ui/Button";
import { useTranslations } from "next-intl";

export function CtaButtons({ className = "" }) {
  const t = useTranslations("header.cta");

  return (
    <div className={`flex gap-[10px] ${className}`}>
      <UIButton as="a" href="#" className="border-[var(--color-scheme-2-text)] text-[var(--color-scheme-2-text)]" variant="outline">{t("btn1")}</UIButton>
      <UIButton as="a" href="#connect" variant="solid">{t("btn2")}</UIButton>
    </div>
  );
}
