"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BurgerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const lineStyle = "bg-[var(--color-scheme-2-text)] w-[30px] h-[2px] block";

  return (
    <button
      onClick={toggle}
      className={`w-[30px] h-[20px] border-0 bg-transparent flex flex-col justify-center items-center gap-[3px] `}
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
