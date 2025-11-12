"use client";

import { Container } from "@/components/ui/Container";
import { MainNav } from "./Links/MainNav";
import { CtaButtons } from "./CtaButtons";
import { Logo } from "./Logo";
import { BurgerButton } from "./Burger/BurgerButton";
import { MobileNav } from "./Burger/MobileNav";
import { BurgerProvider } from "./Burger/BurgerContext";

export default function Header({ locale}) {

  return (
    <BurgerProvider>

    <header className="lg:px-[64px] px-[20px] lg:py-[26px] py-[20px] flex justify-center items-center bg-[var(--color-scheme-2-background)]">
      <Container className="flex items-center justify-between">

        <div className="flex items-center">
          <Logo />
          <MainNav className="hidden lg:flex"  locale={locale} />
        </div>
        
        <CtaButtons className="hidden lg:flex" locale={locale} />
        <BurgerButton className="md:flex lg:hidden" />
          
      </Container>
      </header>

      <MobileNav locale={locale} />

    </BurgerProvider>
  );
}