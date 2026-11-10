"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Skill } from "@/content/site";

type SkillDetailProps = { skill: Skill };

/** One skill: the name is a disclosure button that opens the longer explanation inline. */
export function SkillDetail({ skill }: SkillDetailProps) {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelId = useId();

  return (
    <div className="grid gap-x-10 gap-y-2 border-t border-line py-6 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]">
      <dt className={open ? "border-l-2 border-tally pl-3" : "border-l-2 border-transparent pl-3"}>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={open ? panelId : undefined}
          onClick={() => setOpen((value) => !value)}
          className="group flex w-full items-start justify-between gap-4 text-left"
        >
          <span className="display text-[1.5rem] group-hover:text-accent">{skill.name}</span>
          <span
            aria-hidden="true"
            className="relative mt-1 grid size-5 shrink-0 place-items-center border border-ink"
          >
            <span className="absolute h-px w-2.5 bg-ink" />
            <span
              className={`absolute h-2.5 w-px bg-ink transition-transform duration-150 ${open ? "rotate-90" : ""}`}
            />
          </span>
        </button>
      </dt>
      <dd className="max-w-[65ch] pl-3 md:pl-0">{skill.short}</dd>
      <AnimatePresence initial={false}>
        {open && (
          <motion.dd
            key="long"
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.22, ease: [0.2, 0, 0, 1] }}
            className="overflow-hidden md:col-start-2"
          >
            <p className="max-w-[65ch] pl-3 pt-1 text-muted md:pl-0">{skill.long}</p>
          </motion.dd>
        )}
      </AnimatePresence>
    </div>
  );
}
