"use client"
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { UIButton } from "@/components/ui/Button";
import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");
  const reduce = useReducedMotion();

  return (
    <section className="w-full bg-[var(--color-scheme-1-background)]">
      <Container className="flex flex-col md:flex-row justify-between ">
          <div className="max-w-[50%] section-shell">
            <h1
              className="max-w-[370px]
                  ont-[var(--second-family)]
                  font-bold
                  text-[40px]
                  leading-[100%]
                  tracking-[-0.01em]
                  uppercase
                  text-[var(--color-scheme-1-text)]
                  md:text-[40px] md:leading-[95%]
                  lg:text-[64px]"
            >
              <span className="block">{t("title")}</span>
              
            </h1>
            <p className="pt-[20px] lg:pt-[24px] pb-[24px] lg:pb-[32px]">{t("subtitle")}</p>

            <div className="flex gap-[10px]">
              <UIButton
                as="a"
                href="#projects"
                variant="solid"
              >
                {t("primary")}
              </UIButton>
              <UIButton
                as="a"
                href="#contact"
                variant="outline"
              >
                {t("secondary")}
              </UIButton>
            </div>
        </div>

        
        <div className="relative overflow-hidden">
          <motion.div
              initial={reduce ? { opacity: 0 } : { x: 96, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={
                reduce
                  ? { duration: 0.2 }
                  : { type: "spring", stiffness: 120, damping: 18, mass: 0.6 }
              }
              className="h-full w-full"
          >
            <div className="relative h-[260px] md:h-full w-full">
              <img src="/hero-photo.png" alt="Developer" className="h-full w-full object-cover"/>
            </div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  )
}
