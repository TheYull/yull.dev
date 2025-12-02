"use client";

import { UIButton } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function PortfolioCard({ items, t }) {

    return (
        <div className="
                grid
                gap-[32px]
                pt-[48px]
                lg:pt-0
                md:grid-cols-2
                lg:grid-cols-3"
            >
            {items.map((item) => (
                <article key={item.id} className="mb-8">
                    {item.image && (
                        <a href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="
                            group
                            w-full max-w-[600px] aspect-[22/15]
                            relative overflow-hidden rounded-[40px]
                            ">
                                <Image
                                    href={item.href}
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={260}
                                    className="h-full w-full object-cover
                                    transition-transform duration-500
                                    group-hover:scale-105"
                                />
                                
                                </div>
                            </a>
                    )}

                   
                    <h5 className="font-semibold !text-xl pt-[16px]">{item.title}</h5>
                    <p>{item.description}</p>
                    <p>{item.tech}</p>

                    {item.href && (
                        <UIButton
                            as="a"
                            href={item.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="outline"
                            className="flex gap-[8px] !border-0 mt-[16px] !p-0 active:bg-transparent"
                        >
                            {t("moreBtn")}
                            <ChevronDown size={20} className="-rotate-90 ml-[4px]" />
                        </UIButton>
                    )}

                </article>
            ))}
        </div>
    )
 }