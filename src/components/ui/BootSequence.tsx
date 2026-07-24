"use client";

import { useEffect, useRef, useState } from "react";

const bootLines = [
  "muthu@portfolio:~$ ./boot",
  "[ ok ] mounting muthu@portfolio",
  "[ ok ] loading secure-systems module",
  "[ ok ] initializing ai-native workflow",
  "[ ok ] telemetry: 50,000+ sessions online",
  "[ ok ] ready.",
];

/**
 * A brief, skippable terminal boot animation on first load. Runs once per
 * browser (remembered in localStorage), skips entirely under
 * prefers-reduced-motion, and dismisses on any key/click.
 */
export default function BootSequence() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);
  const [fading, setFading] = useState(false);
  const finished = useRef(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("boot-seen")) return;
    } catch {
      /* ignore storage errors */
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      try {
        localStorage.setItem("boot-seen", "1");
      } catch {
        /* ignore */
      }
      return;
    }

    setShow(true);
    const timers: ReturnType<typeof setTimeout>[] = [];

    const finish = () => {
      if (finished.current) return;
      finished.current = true;
      try {
        localStorage.setItem("boot-seen", "1");
      } catch {
        /* ignore */
      }
      setFading(true);
      timers.push(setTimeout(() => setShow(false), 320));
    };

    bootLines.forEach((_, i) => {
      timers.push(setTimeout(() => setCount(i + 1), 170 * (i + 1)));
    });
    timers.push(setTimeout(finish, 170 * bootLines.length + 420));

    window.addEventListener("keydown", finish);
    window.addEventListener("click", finish);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", finish);
      window.removeEventListener("click", finish);
    };
  }, []);

  if (!show) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-full max-w-md px-6 font-mono text-sm leading-relaxed">
        {bootLines.slice(0, count).map((l, i) => {
          const ok = l.startsWith("[ ok ]");
          return (
            <p key={i} className={ok ? "text-fg" : "text-muted"}>
              {ok ? (
                <>
                  <span className="text-accent">[ ok ]</span>
                  {l.slice(6)}
                </>
              ) : (
                l
              )}
            </p>
          );
        })}
        <p className="mt-6 text-xs text-syn-comment">press any key to skip</p>
      </div>
    </div>
  );
}
