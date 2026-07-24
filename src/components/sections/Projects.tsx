"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import ProjectModal from "@/components/ui/ProjectModal";

function LinkPill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-md border border-border px-3 py-1.5 font-mono text-xs text-fg transition-colors hover:border-accent/60 hover:text-accent"
    >
      {children}
    </a>
  );
}

function ProjectCard({
  project,
  index,
  onOpenCaseStudy,
}: {
  project: Project;
  index: number;
  onOpenCaseStudy: (p: Project) => void;
}) {
  const flagship = project.flagship;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`group relative flex flex-col rounded-xl border bg-surface p-6 transition-colors sm:p-8 ${
        flagship
          ? "border-accent/40 md:col-span-2"
          : "border-border hover:border-accent/40"
      }`}
    >
      {/* file-header row */}
      <div className="mb-4 flex items-center justify-between font-mono text-xs">
        <span className="flex items-center gap-2 text-muted">
          <span className="text-accent">▸</span>
          {flagship ? "flagship/" : "projects/"}
          <span className="text-fg">
            {project.name.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </span>
        {flagship && (
          <span className="rounded bg-accent/15 px-2 py-0.5 text-accent">
            featured
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-fg-strong sm:text-2xl">
        {project.name}
      </h3>
      <p className="mt-1 font-mono text-sm text-accent">{project.tagline}</p>

      <p className="mt-4 leading-relaxed text-fg">{project.description}</p>

      {project.highlights.length > 0 && (
        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-3 text-sm text-fg">
              <span aria-hidden className="mt-0.5 select-none text-accent">
                ▹
              </span>
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      )}

      {/* tech tags as --flags */}
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded border border-border bg-surface-2 px-2 py-1 font-mono text-[11px] text-muted"
          >
            <span className="text-syn-key">--</span>
            {tag}
          </li>
        ))}
      </ul>

      {/* links / status */}
      <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
        {project.caseStudy && (
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="rounded-md border border-accent/50 bg-accent/10 px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent/20"
          >
            view case study →
          </button>
        )}
        {project.links.demo ? (
          <LinkPill href={project.links.demo}>live demo ↗</LinkPill>
        ) : null}
        {project.links.repo ? (
          <LinkPill href={project.links.repo}>source ↗</LinkPill>
        ) : null}
        {/* Private/proprietary work carries a truthful note instead of a dead link. */}
        {!project.links.demo && !project.links.repo && project.links.note && (
          <span className="flex items-center gap-2 font-mono text-xs text-muted">
            <span aria-hidden className="text-accent">◈</span>
            {project.links.note}
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <Section id="projects" command="ls -la ./projects" title="Projects">
      <Reveal>
        <p className="mb-8 font-mono text-sm text-muted">
          <span className="text-syn-comment">
            {"// "}
            {projects.length} entries · flagship first
          </span>
        </p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.name}
            project={project}
            index={i}
            onOpenCaseStudy={setActive}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
}
