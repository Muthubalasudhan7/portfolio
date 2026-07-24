import { certifications, education, honors } from "@/lib/data";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Education() {
  return (
    <Section
      id="education"
      command="tree ./education --certs"
      title="Education & Certifications"
    >
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        {/* Degree */}
        <Reveal className="rounded-xl border border-border bg-surface p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            # degree
          </p>
          <h3 className="mt-4 text-lg font-semibold text-fg-strong sm:text-xl">
            {education.degree}
          </h3>
          <p className="mt-1 text-fg">{education.school}</p>
          <p className="mt-2 font-mono text-sm text-muted">
            {education.period}
          </p>

          {honors.length > 0 && (
            <div className="mt-6 border-t border-border pt-5">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                # honors
              </p>
              <ul className="mt-3 space-y-1.5">
                {honors.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-fg">
                    <span aria-hidden className="text-accent">
                      ★
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>

        {/* Certifications */}
        <Reveal
          index={1}
          className="rounded-xl border border-border bg-surface p-6 sm:p-8"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            # certifications
          </p>
          <ul className="mt-4 space-y-3 font-mono text-sm">
            {certifications.map((cert, i) => (
              <li key={cert} className="flex gap-3 text-fg">
                <span aria-hidden className="select-none text-syn-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-relaxed">{cert}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
