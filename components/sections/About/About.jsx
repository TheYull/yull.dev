"use client";

import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { UIButton } from "@/components/ui/Button";

export function About() {
    const t = useTranslations("about");

    return (
        <section className="section-shell section--pink text-center">
            <Container className="flex flex-col items-center">
                <h6>{t("title")}</h6>
                <div className="max-w-[768px] pb-[32px]">
                    <h5 className="font-bold uppercase text-[32px]">{t("text")}</h5>
                </div>
                <div className="flex gap-[10px]">
                    <UIButton
                        as="a"
                        href="#"
                        variant="outline"
                    >
                    Button
                    </UIButton>
                    <UIButton
                        as="a"
                        href="#"
                        variant="outline"
                        className="flex gap-[8px] !border-0"
                    >
                    Button   <img src="/elements/btn_arrow.svg" alt="arrow" />
                    </UIButton>
                    
                </div>
            </Container>
        </section>
    )
};