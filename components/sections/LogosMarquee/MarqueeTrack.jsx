"use client";
import { motion, useReducedMotion } from "framer-motion";

export function MarqueeTrack({
    children,
    direction,
    speedSeconds
}) {
    const reduce = useReducedMotion();
    const animate = reduce ? undefined : { x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] };
    const transition = reduce ? undefined : { duration: speedSeconds, repeat: Infinity, ease: 'linear' };

    return (
        <motion.div
            className="flex will-change-transform"
            style={{ width: "max-content" }}
            animate={animate}
            transition={transition}
        >
            {children}
        </motion.div>
    )
}