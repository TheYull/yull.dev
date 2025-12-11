"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function TechnologyCard({ item, readMoreLabel }) { 
    return (
        <article className="flex flex-col lg:flex-row gap-[24px]">
            <div className="
            w-[288px] h-[288px]
            bg-[var(--opacity-white-5)]
            rounded-4xl
            flex  lg:flex-row items-center justify-center flex-shrink-0
            mx-auto md:mx-0">
                <Image
                    src={item.icon}
                    alt={item.name}
                    width={200}
                    height={200}
                />
            </div>

            <div className="md:flex-1 md:min-w-0 ">
                <span className="border-1 bg-transparent py-[4px] px-[10px] rounded-full">{item.category}</span>
                <h4 className="pt-[10px]">{item.name}</h4>
                <p className="pb-[24px]">{item.description}</p>
                {item.href && (
                    <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-[8px] !fill-red hover:text-[var(--color-blue-lighter)] "
                    >
                        {readMoreLabel} 
                        <ChevronDown  size={20} className="-rotate-90 ml-[4px]"/>
                    </Link>
                )}
            </div>
        </article>
    )

};