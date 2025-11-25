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
                            <UIButton as="a" href="#" variant="outline">Button</UIButton>
                            <UIButton as="a" href="#" variant="outline" className="flex gap-[8px] !border-0 mt-[16px]">
                                Button
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