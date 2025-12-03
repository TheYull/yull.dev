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
      <Container className="flex flex-col sm:flex-row justify-between ">
          <div className="sm:max-w-[50%] section-shell">
            <h1>
              <span className="block">{t("title")}</span>
              
            </h1>
            <p className="font-normal text-[20px] leading-normal pt-[20px] lg:pt-[24px] pb-[24px] lg:pb-[32px]">{t("subtitle")}</p>

            <div className="flex gap-[10px]">
              <UIButton
                as="a"
                href="#portfolio"
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

        
        <div className="">
          <motion.div
              initial={reduce ? { opacity: 0 } : { x: 96, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={
                reduce
                  ? { duration: 0.1 }
                  : { type: "spring", stiffness: 120, damping: 18, mass: 0.6 }
              }
              className="h-[375px] sm:h-full flex align-center"
          >
            <div className="md:h-full w-full">
              <img src="/photo/img_1.avif" alt="Developer" className="h-full w-full object-cover" />
            </div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  )
}