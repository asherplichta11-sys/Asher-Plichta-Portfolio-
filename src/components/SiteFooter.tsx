import { PERSON } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-2 border-t border-line py-8 pb-24 text-sm text-muted">
      <span>© {PERSON.name}</span>
      <a href={`mailto:${PERSON.email}`} className="underline underline-offset-4 hover:text-ink">
        {PERSON.email}
      </a>
    </footer>
  );
}
