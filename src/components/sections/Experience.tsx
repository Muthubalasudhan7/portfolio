import { experience } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

// Deterministic short-hash flavor for each commit-styled entry.
const hashes = ["a1f92c7", "7d3e0b4", "b28c5f1", "0e6a9d2"];

export default function Experience() {
  return (
    <Section id="experience" command="git log --oneline --graph" title="Experience">
      <ol className="relative">
        {/* vertical branch line */}
        <div
          aria-hidden
          className="absolute left-[7px] top-2 h-[calc(100%-2rem)] w-px bg-border sm:left-[9px]"
        />
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} index={i} className="relative pl-8 pb-12 last:pb-0 sm:pl-10">
            {/* commit node */}
            <span
              aria-hidden
              className={`absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 sm:h-5 sm:w-5 ${
                job.current
                  ? "border-accent bg-accent"
                  : "border-muted bg-bg"
              }`}
            >
              {job.current && (
                <span className="h-2 w-2 rounded-full bg-bg" />
              )}
            </span>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
              <span className="text-syn-num">commit {hashes[i]}</span>
              {job.current && (
                <span className="rounded bg-accent/15 px-1.5 py-0.5 text-accent">
                  HEAD → main
                </span>
              )}
              <span className="text-syn-comment">{job.period}</span>
            </div>

            <h3 className="mt-2 text-lg font-semibold text-fg-strong sm:text-xl">
              {job.role}
            </h3>
            <p className="mt-0.5 font-mono text-sm text-accent">
              {job.company}
              <span className="text-muted"> · {job.location}</span>
            </p>

            <ul className="mt-4 space-y-2.5">
              {job.bullets.map((b, bi) => (
                <li key={bi} className="flex gap-3 text-fg">
                  <span aria-hidden className="mt-1 select-none text-accent">
                    +
                  </span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
