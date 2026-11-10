import type { Metadata } from "next";
import { SignalChain } from "@/components/SignalChain";
import { SkillBoard } from "@/components/SkillBoard";

export const metadata: Metadata = {
  title: "About",
  description:
    "Asher Plichta's background in IT support, live production, audio engineering and technical troubleshooting.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article>
      <h1 className="display max-w-[14ch] text-[clamp(2.5rem,6vw,4.5rem)]">Where technology meets storytelling.</h1>
      <p className="mt-6 max-w-[60ch] text-lg text-muted">
        Hands-on experience in IT support, live production, audio engineering, and technical troubleshooting, always
        looking for the next problem to solve.
      </p>

      <section aria-labelledby="signal-chain" className="mt-16 border-t border-line pt-8 sm:mt-20">
        <h2 id="signal-chain" className="display text-[1.75rem]">
          The signal chain
        </h2>
        <div className="mt-8">
          <SignalChain />
        </div>
      </section>

      <section aria-labelledby="skills" className="mt-16 border-t border-line pt-8 sm:mt-20">
        <h2 id="skills" className="display text-[1.75rem]">
          Skills
        </h2>
        <div className="mt-6">
          <SkillBoard />
        </div>
      </section>
    </article>
  );
}
