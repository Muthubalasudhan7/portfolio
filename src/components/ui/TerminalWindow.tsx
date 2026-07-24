import type { ReactNode } from "react";

/**
 * Reusable terminal/editor window chrome: traffic-light dots + a title bar.
 * Used for the hero and any panel that should read as a live terminal.
 */
export default function TerminalWindow({
  title,
  children,
  className,
  scanlines = false,
}: {
  title: string;
  children: ReactNode;
  className?: string;
  scanlines?: boolean;
}) {
  return (
    <div
      className={`terminal-window overflow-hidden ${scanlines ? "scanlines" : ""} ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </span>
        <span className="mx-auto font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 sm:p-7">{children}</div>
    </div>
  );
}
