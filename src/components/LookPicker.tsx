"use client";

// Preview tool so Asher can try font pairs and color schemes on the live site.
// Remove this component (and its <LookPicker /> in layout.tsx) once he has picked a look.

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  DEFAULT_FONT,
  DEFAULT_SCHEME,
  FONT_KEY,
  FONT_OPTIONS,
  SCHEME_KEY,
  SCHEME_OPTIONS,
  isFontId,
  isSchemeId,
  type FontId,
  type SchemeId,
} from "@/lib/look";

const FONT_VARS: Record<FontId, string> = {
  scoreboard: "--font-big-shoulders",
  broadcast: "--font-saira-condensed",
  "control-room": "--font-chakra-petch",
  tall: "--font-sofia-condensed",
  slab: "--font-zilla-slab",
  original: "--font-space-grotesk",
};

const save = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage blocked (private mode etc.): the look still applies for this visit.
  }
};

const applyFont = (id: FontId) => {
  document.documentElement.dataset.font = id;
  save(FONT_KEY, id);
};

const applyScheme = (id: SchemeId) => {
  document.documentElement.dataset.scheme = id;
  save(SCHEME_KEY, id);
  syncThemeColor();
};

const syncThemeColor = () => {
  const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
  if (!bg) return;
  const existing = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (existing) {
    existing.content = bg;
    return;
  }
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = bg;
  document.head.appendChild(meta);
};

export function LookPicker() {
  const panelId = useId();
  const titleId = useId();
  const reduceMotion = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const copiedTimer = useRef<number | undefined>(undefined);

  const [open, setOpen] = useState(false);
  // Read from <html> when the panel opens, so the server render never depends on window.
  const [font, setFont] = useState<FontId>(DEFAULT_FONT);
  const [scheme, setScheme] = useState<SchemeId>(DEFAULT_SCHEME);
  const [copied, setCopied] = useState(false);

  const toggle = () => {
    if (open) {
      setOpen(false);
      return;
    }
    const { font: f, scheme: s } = document.documentElement.dataset;
    setFont(isFontId(f) ? f : DEFAULT_FONT);
    setScheme(isSchemeId(s) ? s : DEFAULT_SCHEME);
    setCopied(false);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  useEffect(() => () => window.clearTimeout(copiedTimer.current), []);

  const pickFont = (id: FontId) => {
    applyFont(id);
    setFont(id);
    setCopied(false);
  };

  const pickScheme = (id: SchemeId) => {
    applyScheme(id);
    setScheme(id);
    setCopied(false);
  };

  const copyLink = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("font", font);
    url.searchParams.set("scheme", scheme);
    const link = url.toString();
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      window.prompt("Copy this link:", link);
    }
    setCopied(true);
    window.clearTimeout(copiedTimer.current);
    copiedTimer.current = window.setTimeout(() => setCopied(false), 2500);
  };

  const optionClass = (on: boolean) =>
    `block w-full rounded-[4px] px-3 py-2.5 text-left ${
      on ? "border border-ink bg-ink text-bg" : "border border-line text-ink hover:border-ink"
    }`;

  return (
    <div className="fixed right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={toggle}
        className="order-2 rounded-[4px] bg-ink px-4 py-2 text-[15px] font-bold text-bg"
      >
        Look
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            key="look-panel"
            ref={panelRef}
            id={panelId}
            role="region"
            aria-labelledby={titleId}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="order-1 mb-2 max-h-[70vh] w-[min(340px,calc(100vw-2rem))] overflow-y-auto rounded-[4px] border border-line bg-surface p-4 text-ink"
          >
            <h2 id={titleId} className="text-lg font-bold">
              Try a look
            </h2>
            <p className="mt-1 text-sm text-muted">Preview only. Your pick is saved in this browser.</p>

            <h3 className="mt-5 text-[15px] font-bold">Fonts</h3>
            <ul className="mt-2 space-y-2">
              {FONT_OPTIONS.map((option) => {
                const on = option.id === font;
                return (
                  <li key={option.id}>
                    <button type="button" aria-pressed={on} onClick={() => pickFont(option.id)} className={optionClass(on)}>
                      <span
                        className="block text-2xl leading-tight font-bold"
                        style={{ fontFamily: `var(${FONT_VARS[option.id]}), system-ui, sans-serif` }}
                      >
                        {option.name}
                      </span>
                      <span className={`block text-sm ${on ? "text-bg/80" : "text-muted"}`}>{option.fonts}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <h3 className="mt-5 text-[15px] font-bold">Colors</h3>
            <ul className="mt-2 space-y-2">
              {SCHEME_OPTIONS.map((option) => {
                const on = option.id === scheme;
                return (
                  <li key={option.id}>
                    <button type="button" aria-pressed={on} onClick={() => pickScheme(option.id)} className={optionClass(on)}>
                      <span className="block font-bold">{option.name}</span>
                      <span className={`block text-sm ${on ? "text-bg/80" : "text-muted"}`}>{option.note}</span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={copyLink}
              className="mt-5 w-full rounded-[4px] bg-accent px-3 py-2.5 font-bold text-on-accent hover:bg-accent-strong"
            >
              {copied ? "Copied" : "Copy link to this look"}
            </button>
            <p className="sr-only" aria-live="polite">
              {copied ? "Link copied" : ""}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
