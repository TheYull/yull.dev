import { About } from "@/components/sections/About/About";
import { Connect } from "@/components/sections/Connect/Connect";
import { Craft } from "@/components/sections/Craft/Craft";
import { FAQs } from "@/components/sections/FAQs/FAQs";
import { Hero } from "@/components/sections/Hero/Hero";
import { LogosMarquee } from "@/components/sections/LogosMarquee/LogosMarquee";
import { Portfolio } from "@/components/sections/Portfolio/Portfolio";
import { Services } from "@/components/sections/Services/Services";
import { Process } from "@/components/sections/Process/Process";
import { Proposal } from "@/components/sections/Proposal/Proposal";
import { Reviews } from "@/components/sections/Reviews/Reviews";
import { Technologies } from "@/components/sections/Technologies/Technologies";


export default function Page() {
  return (
    <>
      <Hero />
      <LogosMarquee />
      <About />
      <Craft />
      <Technologies />
      <Process />
      <Services />
      <Proposal />
      <Portfolio />
      <Reviews />
      <FAQs />
      <Connect />
    </>
  );
}