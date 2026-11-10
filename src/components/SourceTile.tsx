import type { Source } from "./MultiviewerSources";

type SourceTileProps = {
  source: Source;
  onAir: boolean;
  onTake: (source: Source) => void;
};

/** One multiviewer input. Red tally when on program, grey preview border on hover or focus. */
export function SourceTile({ source, onAir, onTake }: SourceTileProps) {
  const screenBorder = onAir
    ? "border-tally"
    : "border-monitor group-hover:border-preview group-focus-visible:border-preview";

  return (
    <button
      type="button"
      aria-pressed={onAir}
      onClick={() => onTake(source)}
      className="group flex min-w-0 cursor-pointer flex-col text-left focus-visible:outline-offset-2! focus-visible:outline-on-monitor!"
    >
      <span
        aria-hidden="true"
        className={`flex aspect-video w-full items-end border-[3px] bg-monitor p-2 md:aspect-auto md:min-h-0 md:flex-1 ${screenBorder}`}
      >
        <span className="display text-[clamp(0.9rem,2.4vw,1.2rem)] leading-none text-on-monitor">
          {source.tileTitle}
        </span>
      </span>
      <span
        className={`flex items-center gap-1.5 pt-1 text-xs leading-tight sm:text-[13px] ${
          onAir ? "font-semibold text-on-monitor" : "text-monitor-muted"
        }`}
      >
        <span className={`px-1 tabular-nums ${onAir ? "bg-tally text-monitor" : "bg-monitor"}`}>{source.input}</span>
        <span className="truncate">{source.label}</span>
      </span>
    </button>
  );
}
