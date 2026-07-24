"use client";

import { useEffect, useState } from "react";

/**
 * Cycling typewriter effect for the hero. The animated text is aria-hidden;
 * a visually-hidden static list conveys the same content to screen readers.
 */
export default function Typewriter({
  words,
  className,
}: {
  words: readonly string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      // Pause on a complete word before deleting.
      timeout = setTimeout(() => setDeleting(true), 1500);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          );
        },
        deleting ? 45 : 85,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span className={className}>
      <span aria-hidden>
        {text}
        <span className="ml-0.5 inline-block w-[0.6ch] animate-blink text-accent">
          ▊
        </span>
      </span>
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
