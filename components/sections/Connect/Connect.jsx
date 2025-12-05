"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { UIButton } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";

export function Connect() {
    const t = useTranslations("connect");

    return (
        <section className="section-shell section--pink">
            <Container>
                <div id="connect" className="grid lg:grid-cols-2 lg:gap-[80px] justify-items-start">
                
                    <div className="sm:pb-[48px]">
                        <h6>{t("label")}</h6>
                        <h3>{t("title")}</h3>
                        <p className="pb-[24px]">{t("subtitle")}</p>

                        <div className="flex flex-col gap-[16px]">
                            <div className="flex gap-[16px]">
                            <Mail />
                                <div>
                                    <a href="mailto:frontend.yuliia@gmail.com" target="_blank">frontend.yuliia@gmail.com</a>
                                    <hr />
                                </div>
                            </div>
                            <div className="flex gap-[16px]">
                                <Phone />
                                <div>
                                    <p className="flex flex-row gap-1">
                                        <a href="mailto:frontend.yuliia@gmail.com" target="_blank">Email</a>
                                        &nbsp;or&nbsp;
                                        <a href="https://t.me/moonlight_in_the_darks" target="_blank">Telegram</a>
                                    </p>
                                    <hr />
                                </div>
                            </div>
                            <div className="flex gap-[16px]">
                                <MapPin />
                                <p>Cherkasy, Ukraine (remote)</p>
                            </div>
                            </div>

                    </div>
                    
                    <ContactForm />
                </div>
            </Container>
        </section>
    );
}