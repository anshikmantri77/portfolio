import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Articles } from "@/components/Articles";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Articles />
      <Certifications />
      <Skills />
      <Education />
      <Community />
      <Footer />
    </main>
  );
}
