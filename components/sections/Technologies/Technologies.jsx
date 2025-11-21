"use client";

import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { UIButton } from "@/components/ui/Button";

export function Technologies() {
    const t = useTranslations("technologies");
    
    return (
        <section className="section-shell section--light-black text-center">
            <Container>
                <h6>{t("label")}</h6>
                <h2>{t("title")}</h2>
                <p>{t("text")}</p>
                <div className="md:pb-[80px] pb-[24px]">

                </div>
                <UIButton as="a" href="#" variant="outline">Button</UIButton>
            </Container>
        </section>
    )
}