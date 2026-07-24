import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import { profile, socials } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      <footer className="mx-auto max-w-content px-4 pb-20 pt-8 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border pt-6 font-mono text-xs text-muted sm:flex-row sm:items-center">
          <p>
            <span className="text-accent">$</span> echo &quot;built by{" "}
            {profile.name}&quot;
          </p>
          <p className="flex gap-4">
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              linkedin
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              github
            </a>
            <a href={socials.email} className="hover:text-accent">
              email
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
