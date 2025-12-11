"use client";

import { Container } from "@/components/ui/Container";
// import { PROJECTS } from "@/components/sections/Portfolio/projectsData";
// import { ProjectItem } from "@/components/sections/Portfolio/ProjectItem";
import { AnimatePresence, motion } from "framer-motion";
import { PanelMenuItems } from "./PanelMenuItems";

export function PanelMenu({ isOpen, onClose }) {

    return (
        <>
            <AnimatePresence>
                    {isOpen && (
                        <motion.div
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto", }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut", }}
                            className="
                                    
                                    w-full 
                                    bg-[var(--color-scheme-2-background)]
                                    overflow-hidden
                                    z-40
                                    "
                            onMouseLeave={onClose}
                            role="region"
                            aria-label="Others panel"
                    >
                                <PanelMenuItems />s
                            
                        </motion.div>
                    )}
                </AnimatePresence>
        </>
    );
};