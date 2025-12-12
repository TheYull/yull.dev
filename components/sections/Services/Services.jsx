"use client";

import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { ServicesSection } from "./ServicesSection";
import { SERVICES } from "./servicesConfig";
import { ShowMoreButton } from "@/components/ui/ShowMoreButton";

 // cards to show
    const INITIAL_VISIBLE = 6;

export function Services() {
    const t = useTranslations("services");
    const rawItems = t.raw("itemsList");
    const itemsFromI18n = Array.isArray(rawItems) ? rawItems : [];

    // i18n + img
    const items = itemsFromI18n.map((item) => {
        const media = SERVICES.find((m) => m.id === item.id);
        return {
            ...item,
            image: media?.image ?? null,
        };
    });
   
    // button state
    const [showAll, setShowAll] = useState(false);
    // button render
    const visibleItems = showAll ? items : items.slice(0, INITIAL_VISIBLE);
    const hasMore = items.length > INITIAL_VISIBLE;
    // button handler
    const handleToggle = () => {
        setShowAll((prev) => !prev);
    };



    return (
        <section className="section-shell section--light-black text-center">
            <Container>
                <div id="services">
                    <h6>{t("label")}</h6>
                    <h2>{t("title")}</h2>

                    <ServicesSection items={visibleItems} />

                    <ShowMoreButton
                        isExpanded={showAll}
                        hasMore={hasMore}
                        onToggle={handleToggle}
                        labelMore={t("cta.more")}
                        labelLess={t("cta.less")}
                    />
                </div>
            </Container>
        </section>
    );
}
