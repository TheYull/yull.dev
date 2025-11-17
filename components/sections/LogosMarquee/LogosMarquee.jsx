"use client";

import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { LogosRow } from "./LogosRow";
import { LOGOS } from "./logos.data";
import { MarqueeTrack } from "./MarqueeTrack";




export function LogosMarquee({items = LOGOS, direction = 'left', speedSeconds = 20}) {
    const t = useTranslations("logos");

    return (
        <section className="w-full section--black">
            <Container>
                <p className="text-center lg:pt-[80px] pt-[48px] font-bold">{t("title")}</p>
                <div className="relative w-full overflow-hidden pt-[48px] lg:pb-[80px] pb-[48px]">
                    <MarqueeTrack direction={direction} speedSeconds={speedSeconds} >
                    <LogosRow items={items} prioritizeFirst />
                    <LogosRow items={items} ariaHidden className="pl-10 md:pl-14" />
                    </MarqueeTrack>
                </div>
            </Container>
        </section>
    )
}