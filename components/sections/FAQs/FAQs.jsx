"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export function FAQs() {
    const t = useTranslations("faqs");

    return (
        <section className="section-shell section--black hidden">
            <Container>
                <div id="faqs">
                    <h3>{t("title")}</h3>
                    <p>{t("subtitle")}</p>

                    
                </div>
            </Container>
        </section>
    );
}