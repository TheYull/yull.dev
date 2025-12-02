"use client";

import { UIButton } from "./Button";

export function ShowMoreButton({
    isExpanded,
    hasMore,
    onToggle,
    labelMore,
    labelLess,
    wrapperClassName = "pt-[80px] flex justify-center",
    buttonClassName = "",
}) {

    if (!hasMore) return null;

    return (
        <div className={wrapperClassName}>
            <UIButton
                type="button"
                variant="outline"
                onClick={onToggle}
                aria-expanded={isExpanded}
                className={buttonClassName}
            >
                {isExpanded ? labelLess : labelMore}
            </UIButton>
        </div>
    );
}