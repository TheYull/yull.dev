"use client";

import { TechnologyCard } from "./TechnologyCard";

export function TechnologiesGrid({ items, readMoreLabel }) {
    return (
        <div className="md:mt-[80px] mt-[48px] grid md:grid-cols-2 gap-[40px] text-left">
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