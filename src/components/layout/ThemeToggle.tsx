"use client";

import { useTheme } from "@/lib/hooks/useTheme";

/**
 * Light/dark switch styled as a terminal flag toggle: `--theme=dark`.
 */
export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      aria-pressed={theme === "light"}
      className="group flex items-center gap-2 rounded-md border border-border bg-surface-2 px-2.5 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-fg"
    >
      <span className="text-syn-key">--theme</span>
      <span aria-hidden className="text-muted">=</span>
      {/* Avoid hydration mismatch: render the label only once mounted */}
      <span className="min-w-[2.6rem] text-left text-accent">
        {mounted ? theme : " "}
      </span>
      <span aria-hidden className="text-sm leading-none">
        {mounted ? (theme === "dark" ? "◐" : "◑") : "◐"}
      </span>
    </button>
  );
}
