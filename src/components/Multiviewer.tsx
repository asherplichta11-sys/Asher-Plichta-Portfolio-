"use client";

import { useId, useState } from "react";
import { AnimatePresence } from "motion/react";
import { LowerThird } from "./LowerThird";
import { MultiviewerShot } from "./MultiviewerShot";
import { SourceTile } from "./SourceTile";
import { DEFAULT_SOURCE, SOURCES, type Source, type SourceId } from "./MultiviewerSources";

/** vMix-style multiviewer: Program on the left, four sources to take. */
export function Multiviewer() {
  const [programId, setProgramId] = useState<SourceId>(DEFAULT_SOURCE);
  const hintId = useId();
  const program = SOURCES.find((s) => s.id === programId) ?? SOURCES[0];

  const take = (source: Source) => setProgramId(source.id);

  return (
    <div>
      <div className="grid gap-1.5 bg-bezel p-1.5 sm:gap-2 sm:p-2 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]">
        <div className="flex min-w-0 flex-col">
          <div className="flex min-h-[25rem] flex-col border-[3px] border-tally bg-monitor p-4 text-on-monitor sm:aspect-video sm:min-h-0 sm:p-6 lg:p-8">
            {/* The lower third comes first in the DOM so the h1 leads the page; CSS order puts it at the bottom. */}
            <div className="order-2 mt-auto pt-6">
              <LowerThird />
            </div>
            <div className="order-1" aria-live="polite">
              <AnimatePresence initial={false} mode="wait">
                <MultiviewerShot key={program.id} shot={program.shot} />
              </AnimatePresence>
            </div>
          </div>
          <p className="flex items-center justify-between gap-3 pt-1 text-xs leading-tight text-on-monitor sm:text-[13px]">
            <span className="font-semibold">Program</span>
            <span className="text-monitor-muted">
              <span className="sr-only">On program: </span>
              {program.input} {program.label}
            </span>
          </p>
        </div>

        <div
          role="group"
          aria-label="Sources"
          aria-describedby={hintId}
          className="grid grid-cols-2 gap-1.5 sm:grid-cols-4 sm:gap-2 md:grid-cols-1 md:grid-rows-4"
        >
          {SOURCES.map((source) => (
            <SourceTile key={source.id} source={source} onAir={source.id === programId} onTake={take} />
          ))}
        </div>
      </div>
      <p id={hintId} className="mt-3 text-sm text-muted">
        Pick a source to put it on program.
      </p>
    </div>
  );
}
