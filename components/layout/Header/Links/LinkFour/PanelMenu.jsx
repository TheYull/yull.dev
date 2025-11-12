"use client";

import { PROJECTS } from "@/components/sections/Projects/projectsData";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "lucide-react";
import { createContext, useContext, useState } from "react";

const PanelMenuContext = createContext(null);

// hook
function usePanelMenu() {
    const context = useContext(PanelMenuContext);
    if (!context) {
        throw new Error("usePanelMenu must be used within a PanelMenuProvider");
    }
    return context;
}

// general component
export function PanelMenu({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen((p) => !p);
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    return (
        <PanelMenuContext.Provider value={{ isOpen, toggle, open, close }}>
            <div
                className=""
                onMouseEnter={open}
                onMouseLeave={close}>
                
                {children}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.15 }}
                        className="hidden lg:block bg-[var(--color-scheme-2-background)]"
                        >
                            <Container className="">
                                {PROJECTS.map((item) => (
                                    <ProjectItem
                                        key={item.id}
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        href={item.href}
                                        onClick={close}
                                    />
                                ))}
                            </Container>
                        </motion.div>
                    )}
                </AnimatePresence>
                
            </div>
            
        </PanelMenuContext.Provider>
    );
};