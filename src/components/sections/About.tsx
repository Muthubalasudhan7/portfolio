"use client";

import { motion } from "framer-motion";
import { about, languages, profile } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <Section id="about" command="cat about.md" title="About">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        {/* Narrative "readme" */}
        <div>
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              # README.md
            </p>
          </Reveal>
          <div className="space-y-5 text-base leading-relaxed text-fg sm:text-lg">
            {about.summary.map((para, i) => (
              <Reveal key={i} index={i}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal index={about.summary.length}>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
              <div className="flex gap-2">
                <dt className="text-syn-comment">location:</dt>
                <dd className="text-fg">{profile.location}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-syn-comment">languages:</dt>
                <dd className="text-fg">
                  {languages.map((l) => `${l.name} (${l.level})`).join(", ")}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        {/* Interactive competency cloud */}
        <div>
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-widest text-accent">
              # core competencies
            </p>
          </Reveal>
          <ul className="flex flex-wrap gap-2.5">
            {about.competencies.map((skill, i) => (
              <motion.li
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                whileHover={{ y: -3 }}
                className="cursor-default rounded-full border border-border bg-surface px-3.5 py-1.5 font-mono text-xs text-fg transition-colors hover:border-accent/60 hover:text-accent"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
