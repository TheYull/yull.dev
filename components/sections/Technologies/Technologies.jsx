"use client";

import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { TECHNOLOGIES } from "./technologiesConfig";
import { ShowMoreButton } from "@/components/ui/ShowMoreButton";
import { TechnologiesGrid } from "./TechnologiesGrid";

const INITIAL_VISIBLE = 4;

export function Technologies() {
    const t = useTranslations("technologies");
    
    const [showAll, setShowAll] = useState(false);

    // array from i18n
    const allItems = TECHNOLOGIES.map((tech) => ({
        ...tech,
        description: t(`descriptions.${tech.id}`),
    }));

    // cards to show
    const visibleItems = showAll ? allItems : allItems.slice(0, INITIAL_VISIBLE);

    const hasMore = allItems.length > INITIAL_VISIBLE;
    const handleToggle = () => {
        setShowAll((prev) => !prev);
    };

    
    return (
        <section className="section-shell section--light-black text-center">
            <Container>
                <div id="skills">
                    <h6>{t("label")}</h6>
                    <h2>{t("title")}</h2>
                    <p>{t("text")}</p>

                    <TechnologiesGrid
                        items={visibleItems}
                        readMoreLabel={t("readMore")}
                    />

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
    )
}