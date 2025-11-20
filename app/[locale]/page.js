import { About } from "@/components/sections/About/About";
import { Craft } from "@/components/sections/Craft/Craft";
import { Hero } from "@/components/sections/Hero/Hero";
import { LogosMarquee } from "@/components/sections/LogosMarquee/LogosMarquee";


export default function Page() {
  return (
    <>
      <Hero />
      <LogosMarquee />
      <About />
      <Craft />
    </>
  );
}