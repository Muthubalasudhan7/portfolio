import { aiEngineering } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import AiTerminal from "@/components/ui/AiTerminal";

/**
 * The core differentiator: shows AI-native engineering as a disciplined
 * *process* (locked specs, phased execution, review gates) rather than a
 * buzzword — with an interactive terminal replaying a real exchange.
 */
export default function AiEngineering() {
  return (
    <Section id="ai" command="cat ai-workflow.md" title="AI-First Engineering">
      <Reveal>
        <h3 className="max-w-3xl text-balance text-2xl font-bold tracking-tight text-fg-strong sm:text-3xl">
          {aiEngineering.headline}
        </h3>
      </Reveal>
      <Reveal index={1}>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-fg sm:text-lg">
          {aiEngineering.intro}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        {/* Principles */}
        <ol className="space-y-6">
          {aiEngineering.principles.map((p, i) => (
            <Reveal as="li" key={p.title} index={i} className="flex gap-4">
              <span
                aria-hidden
                className="mt-0.5 select-none font-mono text-sm text-accent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4 className="font-mono text-sm font-semibold text-fg-strong">
                  {p.title}
                </h4>
                <p className="mt-1 leading-relaxed text-fg">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Interactive proof */}
        <Reveal index={1} className="lg:sticky lg:top-24">
          <AiTerminal />
          <p className="mt-3 font-mono text-xs text-syn-comment">
            # a locked spec, a phased task, a review gate — the loop I actually run
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
