"use client";

import Image from "next/image";

export function PriceSection({ items }) {
    if (!Array.isArray(items)) return null;

    return (
        <div className="grid gap-6 md:grid-cols-3 text-left">
            {items.map((item) => (
                <article key={item.id} className="rounded-3xl p-6 bg-[var(--opacity-white-5)]">
                    {item.image && (
                        <div className="mb-4 overflow-hidden rounded-2xl">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={260}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    <h5 className="font-semibold !text-xl mb-2">{item.title}</h5>

                    <p className="text-base mb-2 opacity-80">{item.description}</p>

                    <p className="font-semibold text-[20px]">{item.price}</p>

                    <p className="mb-1 text-sm opacity-70 text-[var(--color-neutral-light)]">{item.timeline}</p>
                </article>
            ))}
        </div>
    );
}
