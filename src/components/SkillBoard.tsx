"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { SKILL_GROUPS } from "@/content/site";
import { SkillDetail } from "./SkillDetail";

/** Skill groups behind a switcher-style segmented control; the active group's skills list below. */
export function SkillBoard() {
  const [activeId, setActiveId] = useState(SKILL_GROUPS[0].id);
  const reduceMotion = useReducedMotion();
  const active = SKILL_GROUPS.find((group) => group.id === activeId) ?? SKILL_GROUPS[0];

  return (
    <div>
      <div role="group" aria-label="Skill group" className="grid grid-cols-3 border border-ink sm:inline-grid">
        {SKILL_GROUPS.map((group) => {
          const pressed = group.id === active.id;
          return (
            <button
              key={group.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => setActiveId(group.id)}
              className={`border-l border-ink px-3 py-2.5 text-[15px] leading-tight first:border-l-0 sm:px-5 ${
                pressed ? "bg-accent text-on-accent" : "bg-surface text-ink hover:bg-line"
              }`}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.dl
          key={active.id}
          aria-label={active.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.12 }}
          className="mt-8 border-b border-line"
        >
          {active.skills.map((skill) => (
            <SkillDetail key={skill.name} skill={skill} />
          ))}
        </motion.dl>
      </AnimatePresence>
    </div>
  );
}
