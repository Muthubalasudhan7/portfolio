"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

/**
 * In-page case-study deep dive for a flagship project: architecture notes and
 * the trade-offs behind key decisions. Closes on Escape, backdrop click, or
 * the close button; focus moves to the dialog on open and the page scroll
 * locks while it's open.
 */
export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const cs = project.caseStudy;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!cs) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-bg/80 p-4 backdrop-blur-sm sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="my-4 w-full max-w-3xl rounded-xl border border-accent/30 bg-surface shadow-2xl outline-none"
      >
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
          <span aria-hidden className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </span>
          <span className="mx-auto font-mono text-xs text-muted">
            case-study/{project.name.toLowerCase().replace(/\s+/g, "-")}.md
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="font-mono text-sm text-muted transition-colors hover:text-accent"
          >
            ✕
          </button>
        </div>

        <div className="max-h-[75vh] overflow-y-auto px-6 py-7 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            # case study
          </p>
          <h2
            id="case-study-title"
            className="mt-2 text-2xl font-bold tracking-tight text-fg-strong"
          >
            {project.name}
          </h2>
          <p className="mt-3 leading-relaxed text-fg">{cs.summary}</p>

          <h3 className="mt-8 font-mono text-sm font-semibold text-syn-fn">
            architecture
          </h3>
          <ul className="mt-3 space-y-2.5">
            {cs.architecture.map((a, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-fg">
                <span aria-hidden className="mt-0.5 select-none text-accent">
                  ▹
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-mono text-sm font-semibold text-syn-fn">
            decisions &amp; trade-offs
          </h3>
          <div className="mt-3 space-y-4">
            {cs.decisions.map((d, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-surface-2 p-4"
              >
                <p className="font-mono text-sm text-fg-strong">
                  <span className="text-accent">→</span> {d.decision}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-syn-comment">why: </span>
                  {d.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
