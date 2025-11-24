"use client";
import { UIButton } from "@/components/ui/Button";

export function ShowMoreButton({ isExpanded, hasMore, onToggle, labelMore, labelLess }) {
    if (!hasMore) {
        return null;
    }

    return (
        <div className="pt-[80px]">
            <UIButton
                type="button"
                variant="outline"
                onClick={onToggle}
                aria-expanded={isExpanded}
                
            >
                {isExpanded ? labelLess : labelMore}
            </UIButton>
        </div>

    );     
}