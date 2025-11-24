"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";


export function Reviews() {
    const t = useTranslations("reviews");

    return (
        <section className="section-shell section--pink hidden">
            <Container>
                <div id="reviews">
                    {/* <h6>{t("label")}</h6> */}
                    {/* <h2>{t("title")}</h2> */}
                </div>
            </Container>
        </section>
    );
}