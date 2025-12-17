"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function Craft() {
    const t = useTranslations("craft");
    const focusAreas = t.raw("focusAreas");

    return (
        <section className="section-shell section--black">
            <Container>
                <div id="about" className="lg:grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[80px] items-stretch">
                    <div className="lg:min-h-[640px]  order-2 lg:order-1 flex flex-col ">
                        <h3>{t("title")}</h3>
                        <p>{t("description")}</p>
                        <ul className="list-disc pt-[32px] pl-[25px] flex flex-col gap-[10px] pb-[45px] lg:pb-0">
                            {focusAreas.map((area, index) => (
                                <li key={index}>{area}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="order-1 lg:order-2 flex sm:justify-center">
                        <div className="relative w-full max-w-[600px] sm:max-h-[640px] aspect-[15/16] lg:pt-0 pt-[48px] mx-auto">
                            <Image src="/photo/img_2.png" alt="Developer" sizes="(max-width: 640px) 100vw, 600px" fill className="object-cover rounded-[40px]"/>
                        </div>

                        

                    </div>
                </div>  
            </Container>
        </section>
    );
 }