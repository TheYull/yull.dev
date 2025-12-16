"use client";

import { UIButton } from "@/components/ui/Button";
import { Star } from "lucide-react";
import { MessageSquare } from "lucide-react";

export function EmptyReviews({ t }) { 
    return (
        <div className="flex flex-col items-center pt-[30px]">
        <div className="bg-[#E9E1F3]
                            rounded-3xl
                            border-[#C4B1DF]
                            border-2
                            flex flex-col
                            items-center
                            w-full max-w-[420px] p-8
                            text-center">
                
                <div className="flex gap-1 pb-[10px]">
                    {[...Array(5)].map((_, i) => (
                        <Star
                        key={i}
                        size={20}
                        className="text-black/20"
                        fill="transparent"
                        strokeWidth={1.5}
                        />
                ))}
                </div>

                <div className="rounded-4xl w-[50px] h-[50px]  bg-[#DAD7DE] flex justify-center items-center">
                    <MessageSquare fill="transparent" stroke="#818283" strokeWidth={1.5} size={20}/>
                </div>
                

            <h6 className="pt-[15px]">{t("empty_title")}</h6>
                <p className="pb-[20px] px-[30px] ">{t("empty_subtitle")}</p>
                <UIButton as="a" className="!bg-[#936FD7]" href="#connect">{t("cta")}</UIButton>
            </div>
            </div>
    )
}