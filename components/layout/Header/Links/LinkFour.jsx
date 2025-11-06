"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function LinkFour({ href }) {
  return (
    <div className="relative flex items-center gap-2">
      <Link
        href={href}
        className="flex gap-[9px] 
        items-center 
        font-normal 
        text-[18px] 
        leading-[150%] 
        text-[var(--color-scheme-2-text)] 
        no-underline 
        transition-transform duration-200
        hover:scale-105
        active:text-[var(--color-blue-lighter)]
        "
      >
        <span>Link Four</span>
        <ChevronDown
          size={20}
        />
      </Link>

    </div>
  );
}
