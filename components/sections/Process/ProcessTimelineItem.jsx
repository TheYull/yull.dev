"use client";

export function ProcessTimelineItem({ step, index, Icon, totalSteps }) {
    const isLastItem = index === totalSteps - 1;

    const lineBaseClass = "w-px bg-[var(--color-scheme-2-text)]";
    const lineHeightClass = "h-[100px]";

    return (
        <li className="flex ">

            <div className="flex items-start lg:gap-[50px] gap-[16px]">

                <div className="flex flex-col gap-[16px] items-center ">

                    <div className="flex h-[48px] w-[48px] items-center justify-center">
                        {Icon && <Icon aria-hidden="true" className=" w-[48px] h-[48px]" />}
                    </div>

                    {!isLastItem && (
                        <span
                            aria-hidden="true"
                            className={`${lineBaseClass} ${lineHeightClass}`}
                            />
                    )}
                </div>

                <div className="lg:w-[512px]">
                    <h5>{step.title}</h5>
                    <p>{step.description}</p>
                </div>
            </div>
            
        </li>
    )
}