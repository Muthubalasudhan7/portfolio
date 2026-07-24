import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Consistent section wrapper. The heading reads like a shell command
 * (`$ cat about.md`) so every section stays in the terminal vernacular
 * while remaining a semantic <h2> for accessibility.
 */
export default function Section({
  id,
  command,
  title,
  children,
  className,
}: {
  id: string;
  command: string; // e.g. "cat about.md"
  title: string; // human title for screen readers / heading text
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`mx-auto max-w-content scroll-mt-20 px-4 py-20 sm:px-6 sm:py-28 ${className ?? ""}`}
    >
      <Reveal>
        <h2 id={`${id}-heading`} className="mb-10 flex items-baseline gap-3">
          <span
            aria-hidden
            className="select-none font-mono text-sm text-accent"
          >
            $
          </span>
          <span className="font-mono text-sm text-muted sm:text-base">
            {command}
          </span>
          {/* Visible title carries the real heading weight */}
          <span className="sr-only">{title}</span>
        </h2>
      </Reveal>
      {children}
    </section>
  );
}
