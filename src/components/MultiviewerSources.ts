import { PERSON, PROJECTS } from "@/content/site";

export type SourceId = "asher" | "sports" | "church" | "podcast";

export type Shot =
  | { kind: "quote"; text: string }
  | { kind: "story"; title: string; sentence: string; link: { href: string; label: string } };

export type Source = {
  id: SourceId;
  /** Switcher input number, shown on the label strip like a real multiviewer. */
  input: number;
  label: string;
  /** Tiny title shown inside the source tile. */
  tileTitle: string;
  shot: Shot;
};

const projectSummary = (id: string): string => PROJECTS.find((p) => p.id === id)?.summary ?? "";

export const SOURCES: Source[] = [
  {
    id: "asher",
    input: 1,
    label: "Asher",
    tileTitle: PERSON.name,
    shot: { kind: "quote", text: PERSON.quote },
  },
  {
    id: "sports",
    input: 2,
    label: "Sports broadcast",
    tileTitle: "Sports broadcasting",
    shot: {
      kind: "story",
      title: "Sports broadcasting",
      sentence: projectSummary("sports"),
      link: { href: "/projects", label: "See the projects" },
    },
  },
  {
    id: "church",
    input: 3,
    label: "Church IT & AV",
    tileTitle: "Church IT & AV",
    shot: {
      kind: "story",
      title: "Church IT & AV",
      sentence: `Four summers as an IT intern at ${PERSON.employer}, keeping the computers, networks, and the sound and video behind services running.`,
      link: { href: "/experience", label: "Read about the work" },
    },
  },
  {
    id: "podcast",
    input: 4,
    label: "Podcast & media",
    tileTitle: "Podcast & media",
    shot: {
      kind: "story",
      title: "Podcast & media",
      sentence: projectSummary("podcast"),
      link: { href: "/projects", label: "See the projects" },
    },
  },
];

export const DEFAULT_SOURCE: SourceId = "asher";
