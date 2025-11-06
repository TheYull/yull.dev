"use client";

import Container from "@/components/ui/Container";
import MainNav from "./Links/MainNav";
import CtaButtons from "./CtaButtons";
import Logo from "./Logo";
import BurgerButton from "./Burger/BurgerButton";
import MobileNav from "./Burger/MobileNav";
import BurgerProvider from "./Burger/BurgerContext";

export default function Header() {

  return (
    <BurgerProvider>

    <header className="lg:h-[72px] md:h-[64px] py-[18px] flex justify-center items-center bg-[var(--color-scheme-2-background)]">
      <Container className="flex items-center justify-between">

        <div className="flex items-center">
          <Logo />
          <MainNav className="hidden lg:flex" />
        </div>
        
        <CtaButtons className="hidden lg:flex" />
        <BurgerButton className="md:flex lg:hidden" />
          
      </Container>
      </header>

      <MobileNav />

    </BurgerProvider>
  );
}