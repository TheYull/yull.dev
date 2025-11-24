"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { UIButton } from "@/components/ui/Button";

export function Connect() {
    const t = useTranslations("connect");

    return (
        <section className="section-shell section--pink hidden">
            <Container>
                <div id="connect">
                    {/* <h6>{t("label")}</h6> */}
                    {/* <h2>{t("title")}</h2> */}
                    <UIButton as="a" href="#" variant="outline">Button</UIButton>
                </div>
            </Container>
        </section>
    );
}