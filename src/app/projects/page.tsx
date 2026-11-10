import type { Metadata } from "next";
import { ProjectEntry } from "@/components/ProjectEntry";
import { PROJECTS } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects by Asher Plichta in sports broadcasting, church IT and audiovisual work, and multi-camera podcast recording.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div>
      <div className="max-w-3xl">
        <h1 className="display text-[clamp(2.5rem,6vw,4.5rem)] text-ink">Things I’ve built and produced.</h1>
        <p className="mt-4 text-lg text-muted">Tap a project to see the tools behind it.</p>
      </div>

      <ul className="mt-12 border-t border-line sm:mt-16">
        {PROJECTS.map((project) => (
          <li key={project.id} className="border-b border-line py-8">
            <ProjectEntry project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
