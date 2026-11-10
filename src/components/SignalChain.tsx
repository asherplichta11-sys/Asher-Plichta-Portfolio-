import { SIGNAL_CHAIN } from "@/content/site";

/** The signal path, in order: one rule runs through every stage, like a cable run. */
export function SignalChain() {
  return (
    <ol className="grid grid-cols-1 sm:grid-cols-5">
      {SIGNAL_CHAIN.map((stage, index) => (
        <li
          key={stage}
          className="relative border-l border-line pb-7 pl-6 last:pb-0 sm:border-l-0 sm:border-t sm:pb-0 sm:pl-0 sm:pr-4 sm:pt-6"
        >
          <span
            aria-hidden="true"
            className="absolute -left-[5px] top-[0.4rem] size-[9px] bg-accent sm:-top-[5px] sm:left-0"
          />
          <span aria-hidden="true" className="block text-sm tabular-nums text-muted">
            {index + 1}
          </span>
          <span className="display mt-1 block text-[1.75rem] sm:text-[clamp(1.375rem,2.4vw,2rem)]">{stage}</span>
        </li>
      ))}
    </ol>
  );
}
