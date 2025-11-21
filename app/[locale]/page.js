import { About } from "@/components/sections/About/About";
import { Craft } from "@/components/sections/Craft/Craft";
import { Hero } from "@/components/sections/Hero/Hero";
import { LogosMarquee } from "@/components/sections/LogosMarquee/LogosMarquee";
import { Technologies } from "@/components/sections/Technologies/Technologies";


export default function Page() {
  return (
    <>
      <Hero />
      <LogosMarquee />
      <About />
      <Craft />
      <Technologies />
    </>
  );
}