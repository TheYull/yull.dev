"use client";
import { UIButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { ProcessSection } from "./ProcessSection";
import { ChevronDown } from "lucide-react";

export function Process() {
    const t = useTranslations("process");
    const steps = t.raw("stepsList");

    return (
        <section className="section-shell section--light-black">
            <Container>
                <div id="process" className="flex lg:flex-row flex-col justify-between">
                    <div className="flex-col">
                        <h6>{t("label")}</h6>
                        <h2>{t("title")}</h2>

                        <div className="flex-row">
                            <UIButton as="a" href="#connect" variant="outline">{t("cta.btn1")}</UIButton>
                            <UIButton as="a" href="#connect" variant="outline" className="flex gap-[8px] !border-0 mt-[16px]">
                                {t("cta.btn2")}
                                <ChevronDown size={20} className="-rotate-90 ml-[4px]" />
                            </UIButton>

                        </div>
                        
                    </div>

                    <ProcessSection steps={steps} />
                </div>
            </Container>
        </section>
    );
}