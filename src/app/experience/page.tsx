import type { Metadata } from "next";
import { EXPERIENCE, PERSON } from "@/content/site";

export const metadata: Metadata = {
  title: "Experience",
  description: "Asher Plichta has spent four summers as an IT intern at Highview Baptist Church, covering IT support, audiovisual systems and services.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="max-w-3xl">
      <h1 className="display text-[clamp(2.5rem,6vw,4.5rem)] text-ink">{EXPERIENCE.summary}</h1>
      <p className="mt-4 text-lg text-muted">
        {EXPERIENCE.title} at {EXPERIENCE.org}
      </p>

      <blockquote className="mt-12 border-l-4 border-accent pl-5 sm:mt-16">
        <p className="display text-[clamp(1.75rem,4vw,2.75rem)] text-ink">{PERSON.quote}</p>
      </blockquote>

      <section aria-labelledby="duties-heading" className="mt-14 sm:mt-20">
        <h2 id="duties-heading" className="display text-3xl text-ink sm:text-4xl">
          What the work covers
        </h2>
        <ul className="mt-6 border-t border-line">
          {EXPERIENCE.duties.map((duty) => (
            <li key={duty.name} className="border-b border-line py-5">
              <h3 className="display text-2xl text-ink">{duty.name}</h3>
              <p className="mt-2 max-w-[65ch] text-muted">{duty.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
