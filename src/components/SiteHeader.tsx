"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, PERSON } from "@/content/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-line py-5">
      <Link href="/" className="display text-2xl text-ink no-underline">
        {PERSON.name}
      </Link>
      <nav aria-label="Main">
        <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[15px]">
          {NAV.map((item) => {
            const current = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={
                    current
                      ? "border-b-2 border-accent pb-1 text-ink"
                      : "border-b-2 border-transparent pb-1 text-muted hover:text-ink"
                  }
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
