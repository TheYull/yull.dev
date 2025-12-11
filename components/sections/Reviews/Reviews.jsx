"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";


export function Reviews() {
    const t = useTranslations("reviews");

    return (
        <section className="section-shell section--pink hidden">
            <Container>
                <div id="reviews">
                    <h3>{t("title")}</h3>
                    <p>{t("subtitle")}</p>

                    
                </div>
            </Container>
        </section>
    );
}