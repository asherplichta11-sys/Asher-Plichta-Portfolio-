"use client";

import { motion, useReducedMotion } from "motion/react";
import { PERSON } from "@/content/site";

const HIDDEN = "inset(0% 100% 0% 0%)";
const SHOWN = "inset(0% 0% 0% 0%)";

/** Broadcast lower third: wipes in once on load, then stays put across every cut. Holds the page h1. */
export function LowerThird() {
  const reduce = useReducedMotion();
  const wipe = (delay: number) => (reduce ? { duration: 0 } : { duration: 0.5, ease: "easeOut" as const, delay });

  return (
    <div className="flex flex-col items-start">
      <motion.h1
        initial={{ clipPath: HIDDEN }}
        animate={{ clipPath: SHOWN }}
        transition={wipe(0)}
        className="display w-fit max-w-full bg-on-monitor px-3 pb-1 pt-2 text-[clamp(2.5rem,7vw,5.5rem)] text-monitor sm:px-5"
      >
        {PERSON.name}
      </motion.h1>
      <motion.p
        initial={{ clipPath: HIDDEN }}
        animate={{ clipPath: SHOWN }}
        transition={wipe(0.15)}
        className="w-fit max-w-full bg-accent px-3 py-1 text-[15px] font-semibold leading-snug text-on-accent sm:px-5 sm:text-lg"
      >
        {PERSON.role}
      </motion.p>
    </div>
  );
}
