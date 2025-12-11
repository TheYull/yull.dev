"use client";

import { ChevronDown } from "lucide-react";

export function LinkFour({ label, isOpen, onOpen, onToggle }) {
  
  return (
    <div className="relative flex items-center gap-2">

      <button
        type="button"
        onClick={onToggle}
        onMouseEnter={onOpen}
        onFocus={onOpen}
        aria-haspopup="true"
        aria-expanded={isOpen}
        
        className="
        flex gap-[9px] items-center 
        font-normal text-[18px] 
        leading-[150%] 
        text-[var(--color-scheme-2-text)] 
        no-underline 
        transition-transform duration-200
        hover:scale-105
        active:text-[var(--color-blue-lighter)]
        focus:outline-none"
      >
        <span>{label}</span>
        <ChevronDown
          size={20}
        />
      </button>

    </div>
  );
}
