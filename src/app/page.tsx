import type { Metadata } from "next";
import Link from "next/link";
import { Multiviewer } from "@/components/Multiviewer";
import { PERSON } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Multiviewer />
      <div className="mt-10 max-w-[60ch] sm:mt-14">
        <p className="text-[1.15rem] leading-relaxed text-muted">{PERSON.intro}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={`mailto:${PERSON.email}`}
            className="inline-flex items-center rounded-[3px] bg-accent px-5 py-2.5 font-semibold text-on-accent hover:bg-accent-strong"
          >
            Email Asher
          </a>
          <Link
            href="/projects"
            className="text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-strong"
          >
            See projects
          </Link>
        </div>
      </div>
    </>
  );
}
