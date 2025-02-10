import { DATA } from "@/data/resume";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero DATA={DATA} BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      <About DATA={DATA} />
      <Experience DATA={DATA} BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      <Education DATA={DATA} BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      <Skills DATA={DATA} BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      <Projects DATA={DATA} BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
      <Contact DATA={DATA} BLUR_FADE_DELAY={BLUR_FADE_DELAY} />
    </main>
  );
}
