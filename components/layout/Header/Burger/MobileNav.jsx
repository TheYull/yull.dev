import Container from "@/components/ui/Container";
import { AnimatePresence, motion } from "framer-motion";
import MainNav from "../Links/MainNav";
import { useBurger } from "./BurgerContext";

export default function MobileNav({ className = "" }) {
    const { isOpen } = useBurger();

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden bg-[var(--color-scheme-2-background)] shadow-md"
                    >
                        <Container>
                            <MainNav className="flex flex-col items-start gap-[28px] py-[28px]" />
                        </Container>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};
