"use client";

import {
    PencilRuler,
    FileText,
    Handshake,
    Wrench,
    House,
    Rocket,
} from "lucide-react";

import { ProcessTimelineItem } from "./ProcessTimelineItem";

const iconById = {
    strategy: PencilRuler,
    agreement: FileText,
    prepayment: Handshake,
    development: Wrench,
    completion: House,
    support: Rocket,
};

export function ProcessSection({steps}) { 

    return (
        <ul className=" lg:max-w-[600px] flex flex-col flex-wrap gap-[16px] lg:pt-0 pt-[50px]">
            {steps.map((step, index) => {
                
                const Icon = iconById[step.id];
                return (
                    <ProcessTimelineItem
                        key={step.id}
                        step={step}
                        index={index}
                        Icon={Icon}
                        totalSteps={steps.length}
                    />
                );
            }
            )}
        </ul>
    )
};
