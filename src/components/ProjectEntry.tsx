"use client";

import { useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/content/site";

type ProjectEntryProps = { project: Project };

export function ProjectEntry({ project }: ProjectEntryProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const toolsId = useId();
  const headingId = useId();

  return (
    <article aria-labelledby={headingId} className="flex flex-col gap-5 sm:flex-row sm:gap-8">
      <div className="aspect-video w-full shrink-0 border-l-4 border-tally bg-monitor p-3 text-on-monitor sm:w-[220px]">
        <div className="flex h-full items-end">
          <p className="display text-xl">{project.area}</p>
        </div>
      </div>

      <div className="min-w-0 max-w-[65ch] flex-1">
        <h2 id={headingId} className="display text-[2rem] text-ink">
          {project.title}
        </h2>
        <p className="mt-2 text-muted">{project.summary}</p>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={toolsId}
          onClick={() => setOpen((value) => !value)}
          className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-[2px] border border-ink px-3 text-[15px] text-ink hover:bg-ink hover:text-bg"
        >
          <span aria-hidden="true" className="inline-block w-3 text-center">
            {open ? "−" : "+"}
          </span>
          Tools used
        </button>

        <motion.div
          id={toolsId}
          initial={false}
          animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.2, 0, 0, 1] }}
          inert={!open}
          aria-hidden={!open}
          className="overflow-hidden"
        >
          <ul aria-label={`Tools used for ${project.title}`} className="flex flex-wrap gap-2 pt-4">
            {project.tools.map((tool) => (
              <li key={tool} className="rounded-[2px] border border-line px-2 py-0.5 text-sm text-ink">
                {tool}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </article>
  );
}
