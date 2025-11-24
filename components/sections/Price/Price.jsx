"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { UIButton } from "@/components/ui/Button";

export function Price() {
    const t = useTranslations("price");

    return (
        <section className="section-shell section--pink text-center hidden">
            <Container>
                <div id="price">
                    <h6>{t("label")}</h6>
                    <h2>{t("title")}</h2>
                    
                    <UIButton as="a" href="#" variant="outline">Button</UIButton>
                </div>
            </Container>
        </section>
    );
}