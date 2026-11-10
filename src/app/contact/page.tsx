import type { Metadata } from "next";
import { ContactComposer } from "@/components/ContactComposer";
import { PERSON } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Email ${PERSON.name} about live production, IT help, podcast recording or anything else.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="display text-[clamp(2.75rem,7vw,5.5rem)] text-ink">Got a project? Let’s make it happen.</h1>
      <ContactComposer />
    </div>
  );
}
