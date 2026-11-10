import type { Metadata, Viewport } from "next";
import { fontVariables } from "./fonts";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LookPicker } from "@/components/LookPicker";
import { PERSON, SKILL_GROUPS } from "@/content/site";
import { DEFAULT_FONT, DEFAULT_SCHEME, LOOK_BOOT_SCRIPT } from "@/lib/look";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${PERSON.name} | IT, live production and media`, template: `%s | ${PERSON.name}` },
  description:
    "Asher Plichta: IT intern at Highview Baptist Church for four summers, plus live sports production (vMix, cameras, video boards), audio engineering and podcast production.",
  authors: [{ name: PERSON.name }],
  alternates: { canonical: "/" },
  openGraph: { type: "profile", siteName: PERSON.name, firstName: "Asher", lastName: "Plichta", url: "/" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#f5f3f4" };

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PERSON.name,
  url: siteUrl,
  description: "IT intern, live production operator and media producer.",
  jobTitle: "IT Intern",
  worksFor: { "@type": "Organization", name: PERSON.employer },
  email: `mailto:${PERSON.email}`,
  knowsAbout: SKILL_GROUPS.flatMap((g) => g.skills.map((s) => s.name)),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-font={DEFAULT_FONT}
      data-scheme={DEFAULT_SCHEME}
      className={`${fontVariables} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: LOOK_BOOT_SCRIPT }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className="min-h-dvh bg-bg text-ink">
        <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-bg">
          Skip to content
        </a>
        <div className="mx-auto flex min-h-dvh max-w-6xl flex-col px-4 sm:px-8">
          <SiteHeader />
          <main id="content" tabIndex={-1} className="flex-1 py-10 sm:py-14">
            {children}
          </main>
          <SiteFooter />
        </div>
        <LookPicker />
      </body>
    </html>
  );
}
