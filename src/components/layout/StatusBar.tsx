"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";
import { useActiveSection } from "@/lib/hooks/useActiveSection";

const ids = navItems.map((n) => n.id);

/**
 * Signature element: a fixed bottom status bar in the spirit of vim/tmux.
 * The live "sessions monitored" ticker is a nod to Muthu's real work —
 * the real-time telemetry dashboard behind Neo Browser's 50,000+ students.
 * Decorative motion is marked aria-hidden so it doesn't spam screen readers.
 */
export default function StatusBar() {
  const active = useActiveSection(ids);
  const [sessions, setSessions] = useState(50000);
  const [clock, setClock] = useState("");

  // Gently tick the session counter to feel "live" without being noisy.
  useEffect(() => {
    const id = setInterval(() => {
      setSessions((s) => s + Math.floor(Math.random() * 4));
    }, 2600);
    return () => clearInterval(id);
  }, []);

  // Clock — updates once a second.
  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const activeLabel =
    navItems.find((n) => n.id === active)?.label ?? "~/home";

  return (
    <div
      role="status"
      aria-label="Session status bar"
      className="fixed inset-x-0 bottom-0 z-40 hidden border-t border-border bg-surface/90 backdrop-blur-md sm:block"
    >
      <div className="mx-auto flex h-8 max-w-content items-center justify-between px-4 font-mono text-[11px] sm:px-6">
        {/* Left: secure branch indicator */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-accent">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-accent animate-pulseDot"
            />
            SECURE
          </span>
          <span className="hidden items-center gap-1.5 text-muted md:flex">
            <span aria-hidden className="text-syn-fn"></span> main
            <span className="text-accent">✓</span>
          </span>
        </div>

        {/* Middle: live telemetry ticker */}
        <div className="flex items-center gap-2 text-muted" aria-hidden>
          <span className="text-syn-fn">◉</span>
          <span className="tabular-nums text-fg">
            {sessions.toLocaleString()}
          </span>
          <span className="hidden sm:inline">sessions&nbsp;monitored</span>
        </div>

        {/* Right: active section + clock */}
        <div className="flex items-center gap-4">
          <span className="text-muted">
            <span className="text-syn-comment">on</span>{" "}
            <span className="text-accent">{activeLabel}</span>
          </span>
          <span
            className="hidden tabular-nums text-muted md:inline"
            aria-hidden
          >
            {clock}
          </span>
        </div>
      </div>
    </div>
  );
}
