"use client";

import Container from "@/components/ui/Container";
import MainNav from "./MainNav";
import CtaButtons from "./CtaButtons";
import Logo from "./Logo";
import BurgerButton from "./BurgerButton";
// import MobileNav from "./MobileNav";

export default function Header() {

  return (
    <>
    <header className="py-[18px] px-[5%] flex justify-center items-center bg-[var(--color-scheme-2-background)]">
      <Container className="flex items-center justify-between">

        <div className="flex items-center">
          <Logo />
          <MainNav className="hidden lg:flex" />
        </div>
        
        <CtaButtons className="hidden lg:flex" />
        <BurgerButton  className="flex lg:hidden" />
      </Container>
      
    </header>
    </>
  );
}