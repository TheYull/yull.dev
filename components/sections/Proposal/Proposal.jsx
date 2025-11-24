"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { UIButton } from "@/components/ui/Button";
export function Proposal() {
    const t = useTranslations("proposal");

    return (
        <section className="section-shell section--light-black text-center hidden">
            <Container>
                <div id="proposal">
                    <h6>{t("label")}</h6>
                    <h2>{t("title")}</h2>
                    <UIButton as="a" href="#" variant="outline">Button</UIButton>
                </div>
            </Container>
        </section>
    );
}