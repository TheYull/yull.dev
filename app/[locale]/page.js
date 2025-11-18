import { About } from "@/components/sections/About/About";
import { Hero } from "@/components/sections/Hero/Hero";
import { LogosMarquee } from "@/components/sections/LogosMarquee/LogosMarquee";


export default function Page() {
  return (
    <>
      <Hero />
      <LogosMarquee />
      <About />
    </>
  );
}