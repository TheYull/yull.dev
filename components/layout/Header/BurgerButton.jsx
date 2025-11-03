"use client";

import { Menu } from "lucide-react";

export default function BurgerButton({ open, onOpen }) {
  return (
    <button
      type="button"
      className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
      onClick={onOpen}
      aria-label="Open menu"
      aria-controls="mobile-menu"
      aria-expanded={open}
    >
      <Menu size={22} />
    </button>
  );
}