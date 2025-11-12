"use client";

import { motion } from "framer-motion";
import { useBurger } from "./BurgerContext";

export function BurgerButton({ className = "" }) {

  const { isOpen, toggle } = useBurger();
  const lineStyle = "bg-[var(--color-scheme-2-text)] w-[30px] h-[2px] block";

  return (
    <button
      type="button"
      onClick={toggle}
      className={`w-[30px] h-[20px] border-0 bg-transparent flex flex-col justify-center items-center gap-[3px] ${className}`}
      aria-label="Toggle menu"
    >

      <motion.span
        className={lineStyle}
        animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.span
        className={lineStyle}
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      <motion.span
        className={lineStyle}
        animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}
