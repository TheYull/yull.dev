"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";

export function FAQs() {
    const t = useTranslations("faqs");

    return (
        <section className="section-shell section--black hidden">
            <Container>
                <div id="faqs">
                    {/* <h6>{t("label")}</h6> */}
                    {/* <h2>{t("title")}</h2> */}
                </div>
            </Container>
        </section>
    );
}