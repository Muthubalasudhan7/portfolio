"use client";

import { motion } from "framer-motion";
import { profile, socials } from "@/lib/data";
import TerminalWindow from "@/components/ui/TerminalWindow";
import Typewriter from "@/components/ui/Typewriter";

const line = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.18, duration: 0.4 },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="mx-auto flex min-h-[100svh] max-w-content flex-col justify-center px-4 pb-24 pt-24 sm:px-6"
    >
      <TerminalWindow title={`${profile.handle}@portfolio — bash`} scanlines>
        <div className="font-mono text-sm leading-relaxed sm:text-base">
          {/* whoami */}
          <motion.p
            variants={line}
            custom={0}
            initial="hidden"
            animate="show"
            className="text-muted"
          >
            <span className="text-accent">$</span> whoami
          </motion.p>
          <motion.h1
            variants={line}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-1 font-mono text-2xl font-bold tracking-tight text-fg-strong sm:text-4xl"
          >
            {profile.name}
          </motion.h1>

          {/* role --now */}
          <motion.p
            variants={line}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-5 text-muted"
          >
            <span className="text-accent">$</span> cat role.txt
          </motion.p>
          <motion.p
            variants={line}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-1 text-fg"
          >
            <span className="text-syn-fn">{profile.title}</span>{" "}
            <span className="text-muted">@</span>{" "}
            <span className="text-syn-str">{profile.company}</span>
          </motion.p>

          {/* live role typewriter */}
          <motion.p
            variants={line}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-5 text-muted"
          >
            <span className="text-accent">$</span> ./introduce --role{" "}
            <Typewriter words={profile.roles} className="text-fg-strong" />
          </motion.p>

          {/* value prop as a comment block */}
          <motion.p
            variants={line}
            custom={5}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-2xl border-l-2 border-accent/40 pl-4 font-sans text-base text-fg sm:text-lg"
          >
            {profile.valueProp}
          </motion.p>
        </div>
      </TerminalWindow>

      {/* CTAs */}
      <motion.div
        variants={line}
        custom={6}
        initial="hidden"
        animate="show"
        className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm"
      >
        <a
          href={socials.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-accent px-4 py-2.5 font-medium text-bg transition-transform hover:-translate-y-0.5"
        >
          ./resume.pdf
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border bg-surface px-4 py-2.5 text-fg transition-colors hover:border-accent/60 hover:text-accent"
        >
          --contact
        </a>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border bg-surface px-4 py-2.5 text-fg transition-colors hover:border-accent/60 hover:text-accent"
        >
          {/* TODO: point socials.github at your real profile */}
          GitHub ↗
        </a>
      </motion.div>
    </section>
  );
}
