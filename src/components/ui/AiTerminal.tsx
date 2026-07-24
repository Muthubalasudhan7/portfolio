"use client";

import { useEffect, useState } from "react";
import { aiEngineering, type TranscriptLine } from "@/lib/data";

const transcript = aiEngineering.transcript;

/**
 * Replays an abbreviated, real AI-paired engineering exchange: a locked
 * constraint file is read, a phased task is planned, and execution waits for
 * a review gate. Prompt lines type out; output lines reveal in sequence.
 * A full static copy is exposed to screen readers, and the animation is
 * skipped entirely under prefers-reduced-motion.
 */
function LineRow({ line }: { line: TranscriptLine }) {
  if (line.kind === "prompt") {
    return (
      <div>
        <span className="text-accent">$</span> <span className="text-fg-strong">{line.text}</span>
      </div>
    );
  }
  if (line.kind === "ok") {
    return (
      <div className="text-accent">
        <span aria-hidden>✓</span> {line.text}
      </div>
    );
  }
  if (line.kind === "pause") {
    return <div className="text-syn-num">{line.text}</div>;
  }
  return <div className="text-muted">{line.text}</div>;
}

export default function AiTerminal() {
  const [count, setCount] = useState(0); // fully-revealed line count
  const [typed, setTyped] = useState(""); // partial text of a typing prompt
  const [done, setDone] = useState(false);
  const [runId, setRunId] = useState(0); // bump to replay

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setCount(0);
    setTyped("");
    setDone(false);

    if (reduce) {
      setCount(transcript.length);
      setDone(true);
      return;
    }

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms));

    let i = 0;
    const nextLine = () => {
      if (cancelled) return;
      if (i >= transcript.length) {
        setDone(true);
        return;
      }
      const line = transcript[i];

      if (line.kind === "prompt") {
        let c = 0;
        setTyped("");
        const typeChar = () => {
          if (cancelled) return;
          c += 1;
          setTyped(line.text.slice(0, c));
          if (c < line.text.length) {
            wait(30, typeChar);
          } else {
            wait(340, () => {
              if (cancelled) return;
              setCount((n) => n + 1);
              setTyped("");
              i += 1;
              wait(260, nextLine);
            });
          }
        };
        wait(200, typeChar);
      } else {
        const delay = line.kind === "pause" ? 750 : 230;
        wait(delay, () => {
          if (cancelled) return;
          setCount((n) => n + 1);
          i += 1;
          nextLine();
        });
      }
    };

    nextLine();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [runId]);

  const typingPrompt = !done && typed !== "";

  return (
    <div className="terminal-window overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </span>
        <span className="mx-auto font-mono text-xs text-muted">
          muthu@portfolio — ai-paired session
        </span>
      </div>

      <div className="p-5 font-mono text-[13px] leading-relaxed sm:p-6 sm:text-sm">
        {/* Animated view (decorative — the sr-only block below carries the text) */}
        <div aria-hidden className="min-h-[19rem] space-y-1">
          {transcript.slice(0, count).map((line, idx) => (
            <LineRow key={idx} line={line} />
          ))}
          {typingPrompt && (
            <div>
              <span className="text-accent">$</span>{" "}
              <span className="text-fg-strong">{typed}</span>
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />
            </div>
          )}
          {done && (
            <button
              type="button"
              onClick={() => setRunId((r) => r + 1)}
              className="mt-4 rounded border border-border px-2.5 py-1 text-xs text-muted transition-colors hover:border-accent/60 hover:text-accent"
            >
              ↻ replay
            </button>
          )}
        </div>

        {/* Accessible static transcript */}
        <div className="sr-only">
          {transcript.map((line, idx) => (
            <p key={idx}>
              {line.kind === "prompt" ? "$ " : ""}
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
