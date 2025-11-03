"use client";

import Container from "@/components/ui/Container";
import MainNav from "./MainNav";
import CtaButtons from "./CtaButtons";


export default function Header() {

  return (
    <header className="h-[72px] flex justify-center items-center bg-[var(--color-scheme-2-background)]">
      <Container className="flex items-center justify-between">
        <MainNav />
        <CtaButtons />
      </Container>
    </header>
  );
}




