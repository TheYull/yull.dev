"use client";

import { Container } from "@/components/ui/Container";
import { MainNav } from "./Links/MainNav";
import { CtaButtons } from "./CtaButtons";
import { Logo } from "./Logo";
import { BurgerButton } from "./Burger/BurgerButton";
import { MobileNav } from "./Burger/MobileNav";
import { BurgerProvider } from "./Burger/BurgerContext";
import { useState } from "react";
import { PanelMenu } from "./Links/LinkFour/PanelMenu";

export default function Header({ locale }) {
  const [isOthersOpen, setIsOthersOpen] = useState(false);

  const handleOthersOpen = () => setIsOthersOpen(true);
  const handleOthersClose = () => setIsOthersOpen(false); 
  const handleOthersToggle = () => setIsOthersOpen((prev) => !prev);

  const othersMenuProps = {
    isOpen: isOthersOpen,
    onOpen: handleOthersOpen,
    onClose: handleOthersClose,
    onToggle: handleOthersToggle,
  };

  return (
    <BurgerProvider>
      {/* if fix on top --> sticky top-0 z-50 */}

    <header className="section--black lg:px-[64px] px-[20px] lg:py-[26px] py-[20px] flex justify-center items-center">
      <Container className="flex items-center justify-between">

        <div className="flex items-center">
          <Logo />
            <MainNav
              className="hidden lg:flex"
              locale={locale}
              othersMenuProps={{
                isOpen: isOthersOpen,           // state
                onOpen: handleOthersOpen,      // open (hover/focus)
                onClose: handleOthersClose,    // close (onMouseLeave у панелі)
                onToggle: handleOthersToggle,  // click -> Others
              }}
            />
        </div>
        
        <CtaButtons className="hidden lg:flex" locale={locale} />
        <BurgerButton className="md:flex lg:hidden" />
          
      </Container>
      </header>

      

      <MobileNav locale={locale} othersMenuProps={othersMenuProps} />
      <PanelMenu isOpen={isOthersOpen} onClose={handleOthersClose}/>

    </BurgerProvider>
  );
}