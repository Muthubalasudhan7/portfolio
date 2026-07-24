"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  return (
    <Section id="skills" command="cat package.json" title="Skills">
      <Reveal>
        <div className="terminal-window overflow-x-auto">
          <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5 font-mono text-xs text-muted">
            <span aria-hidden className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </span>
            <span className="mx-auto">package.json</span>
          </div>

          <div className="p-5 font-mono text-sm leading-relaxed sm:p-7">
            <p className="text-fg">
              <span className="text-syn-key">&#123;</span>
            </p>
            <p className="pl-4 text-fg">
              <span className="text-syn-str">&quot;skills&quot;</span>
              <span className="text-muted">: &#123;</span>
            </p>

            {skillGroups.map((group, gi) => (
              <div key={group.key} className="pl-8 py-1.5">
                <span className="text-syn-fn">&quot;{group.key}&quot;</span>
                <span className="text-muted">: [</span>
                <span className="ml-2 hidden text-syn-comment sm:inline">
                  {"// "}
                  {group.category}
                </span>
                <ul className="flex flex-wrap gap-2 py-2 pl-4">
                  {group.items.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.05 + i * 0.03, duration: 0.25 }}
                      whileHover={{ y: -2 }}
                      className="cursor-default rounded border border-border bg-surface-2 px-2.5 py-1 text-syn-str transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      &quot;{item}&quot;
                    </motion.li>
                  ))}
                </ul>
                <span className="pl-4 text-muted">
                  ]{gi < skillGroups.length - 1 ? "," : ""}
                </span>
              </div>
            ))}

            <p className="pl-4 text-muted">&#125;</p>
            <p className="text-syn-key">&#125;</p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
