"use client";
import { Container } from "@/components/ui/Container";
import { useTranslations } from "next-intl";
import { PortfolioCard } from "./PortfolioCard";
import { ShowMoreButton } from "@/components/ui/ShowMoreButton";
import { PROJECTS } from "./projectsData";
import { useState } from "react";

const INITIAL_VISIBLE = 3;

export function Portfolio() {

    //i18n items
    const t = useTranslations("portfolio");
    const rawItems = t.raw("itemsList");
    const itemsFromI18n = Array.isArray(rawItems) ? rawItems : [];

    // i18n + img
    const items = itemsFromI18n.map((item) => {
    const project = PROJECTS.find((p) => p.id === item.id);

    if (!project) {
        return item;
    }

    return {
        ...item,
        ...project,
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
        <section className="section-shell section--black text-center ">
            <Container>
                <div id="portfolio" className="text-start">
                    <div className="flex justify-between lg:pb-[80px]">
                        <div className="flex flex-col items-start">
                            <h6>{t("label")}</h6>
                            <h3>{t("title")}</h3>
                            <p>{t("description")}</p>
                        </div>

                        <ShowMoreButton
                        isExpanded={showAll}
                        hasMore={hasMore}
                        onToggle={handleToggle}
                        labelMore={t("cta.more")}
                        labelLess={t("cta.less")}
                    />
                    </div>

                    <PortfolioCard items={visibleItems} t={t} />
                </div>
            </Container>
        </section>
    );
}