"use client";

import { TechnologyCard } from "./TechnologyCard";

export function TechnologiesGrid({ items, readMoreLabel }) {
    return (
        <div className="lg:mt-[80px] mt-[48px] grid xl:grid-cols-2 gap-[40px] justify-center text-left">
            {items.map((item) => (
                <TechnologyCard
                    key={item.id}
                    item={item}
                    readMoreLabel={readMoreLabel}
                />
            ))}
        </div>
    )
 };