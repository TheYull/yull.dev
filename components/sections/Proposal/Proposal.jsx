"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { UIButton } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
export function Proposal() {
    const t = useTranslations("proposal");

    return (
        <section className="section-shell section--light-black text-center">
            <Container>
                <div id="proposal" className="flex items-center lg:flex-row flex-col  text-start lg:gap-[80px]">
                    <div className="flex flex-col justify-center">
                        <h6>{t("label")}</h6>
                        <h3>{t("title")}</h3>
                        <p className="pb-[32px]">{t("description")}</p>
                        
                        <div className="flex-row">
                            <UIButton as="a" href="#" variant="outline">{t("cta.btn1")}</UIButton>
                            <UIButton as="a" href="#connect" variant="outline" className="flex gap-[8px] !border-0 mt-[16px]">
                                {t("cta.btn2")}
                                <ChevronDown size={20} className="-rotate-90 ml-[4px]" />
                            </UIButton>

                        </div>
                    </div>
                    <div className="w-full max-w-[600px] aspect-[15/16]  lg:pt-0 pt-[48px]">
                        <img src="/photo/img_3.avif" alt="Developer" className="h-full w-full object-cover rounded-[40px]"/>
                    </div>
                </div>
                
            </Container>
        </section>
    );
}