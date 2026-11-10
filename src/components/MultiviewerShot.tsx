"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import type { Shot } from "./MultiviewerSources";

/** What's on program. Mounted with a key per source so AnimatePresence can mix between shots. */
export function MultiviewerShot({ shot }: { shot: Shot }) {
  const reduce = useReducedMotion();
  const mix = reduce ? { duration: 0 } : { duration: 0.1, ease: "linear" as const };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={mix}>
      {shot.kind === "quote" ? (
        <p className="display max-w-[20ch] text-[clamp(1.75rem,3.6vw,3rem)] text-on-monitor">
          &ldquo;{shot.text}&rdquo;
        </p>
      ) : (
        <div className="max-w-[46ch]">
          <p className="display text-[clamp(1.85rem,3.6vw,3rem)] text-on-monitor">{shot.title}</p>
          <p className="mt-3 text-[15px] leading-normal text-monitor-muted sm:text-base lg:text-[17px]">
            {shot.sentence}
          </p>
          <Link
            href={shot.link.href}
            className="mt-3 inline-block text-[15px] text-on-monitor underline decoration-tally decoration-2 underline-offset-4 hover:decoration-on-monitor focus-visible:outline-on-monitor! sm:text-base"
          >
            {shot.link.label}
          </Link>
        </div>
      )}
    </motion.div>
  );
}
