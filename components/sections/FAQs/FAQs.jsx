"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { FAQsSection } from "./FAQsSection";

export function FAQs() {
    const t = useTranslations("faqs");
    const items = t.raw("itemsList");

    return (
        <section className="section-shell section--black hidden">
            <Container>
                <div id="faqs">
                    <h3>{t("title")}</h3>
                    <p className="lg:!pb-[80px] !pb-[48px]">{t("subtitle")}</p>

                    <FAQsSection items={items} />

                    <h3 className="lg:!text-[40px] !text-[24px] !pb-[16px]">{t("title2")}</h3>
                    <p>{t("subtitle2")}</p>
                </div>
            </Container>
        </section>
    );
}