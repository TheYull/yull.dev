"use client";

// import { PROJECTS } from "@/components/sections/Portfolio/projectsData";
// import { ProjectItem } from "@/components/sections/Portfolio/ProjectItem";
import { AnimatePresence, motion } from "framer-motion";

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
                                <div className="section--black">
                                    <p>text text</p>
                                </div>
                            
                        </motion.div>
                    )}
                </AnimatePresence>
        </>
    );
};