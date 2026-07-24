"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE_ENDPOINT, profile, socials } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const links = [
  { label: "email", value: profile.email, href: socials.email },
  { label: "linkedin", value: "muthu-bala-sudhan-m", href: socials.linkedin },
  { label: "github", value: "@your-handle", href: socials.github }, // TODO
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    // No Formspree endpoint configured → fall back to a mailto: draft.
    if (!FORMSPREE_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("sending");
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section id="contact" command="./contact --send" title="Contact">
      <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
        {/* Direct links */}
        <div>
          <Reveal>
            <p className="text-lg text-fg sm:text-xl">
              Building something that needs secure desktop, full-stack, or
              cross-platform muscle? Let&rsquo;s talk.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-3 font-mono text-sm">
            {links.map((l, i) => (
              <Reveal as="li" key={l.label} index={i}>
                <a
                  href={l.href}
                  target={l.label === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                >
                  <span className="w-20 text-syn-comment">{l.label}</span>
                  <span aria-hidden className="text-accent">→</span>
                  <span className="text-fg underline-offset-4 group-hover:text-accent group-hover:underline">
                    {l.value}
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Form */}
        <Reveal index={1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-surface p-6 sm:p-7"
            noValidate
          >
            <div className="space-y-4">
              <Field label="name" name="name" type="text" required />
              <Field label="email" name="email" type="email" required />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block font-mono text-xs text-muted"
                >
                  <span className="text-accent">$</span> message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-y rounded-md border border-border bg-surface-2 px-3 py-2 text-fg outline-none transition-colors focus:border-accent"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-5 w-full rounded-md bg-accent px-4 py-2.5 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {status === "sending" ? "sending…" : "send message ↵"}
            </button>

            {/* Status feedback */}
            <p
              className="mt-3 min-h-[1.25rem] font-mono text-xs"
              role="status"
              aria-live="polite"
            >
              {status === "sent" && (
                <span className="text-accent">
                  ✓ Message sent — I&rsquo;ll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-[#ff5f56]">
                  ✗ Something went wrong. Email me directly instead.
                </span>
              )}
              {status === "idle" && !FORMSPREE_ENDPOINT && (
                <span className="text-muted">
                  {/* TODO: set FORMSPREE_ENDPOINT in lib/data.ts to enable
                      in-page sending. Until then this opens your mail client. */}
                  {"// opens your mail client"}
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block font-mono text-xs text-muted"
      >
        <span className="text-accent">$</span> {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={name}
        className="w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-fg outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
