"use client";
import { UIButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
export function Process() {
    const t = useTranslations("process");
    // const steps = t.raw("steps");

    return (
        <section className="section-shell section--light-black hidden">
            <Container>
                <div id="process" >
                    <h6>{t("label")}</h6>
                    <h2>{t("title")}</h2>
                    <UIButton as="a" href="#" variant="outline">Button</UIButton>
                    <UIButton as="a" href="#" variant="outline" className="flex gap-[8px] !border-0 mt-[16px]"> Button <img src="/elements/btn_arrow.svg" alt="arrow" className="!fill-white" /></UIButton>

                </div>
            </Container>
        </section>
    );
}