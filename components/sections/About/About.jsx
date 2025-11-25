"use client";

import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { UIButton } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export function About() {
    const t = useTranslations("about");

    return (
        <section className="section-shell section--pink text-center">
            <Container className="flex flex-col items-center">
                <h6>{t("label")}</h6>
                <div className="max-w-[768px] lg:pb-[32px] pb-[24px]">
                    <h5 className="font-bold uppercase lg:text-[32px] text-[20px]">{t("title")}</h5>
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
                    Button   <ChevronDown  size={20} className="-rotate-90 ml-[4px]"/>
                    </UIButton>
                    
                </div>
            </Container>
        </section>
    )
};