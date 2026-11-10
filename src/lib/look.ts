// "Look" = the font pair + color scheme. Set on <html> as data-font / data-scheme (see globals.css).

export type FontId = "scoreboard" | "broadcast" | "control-room" | "tall" | "slab" | "original";
export type SchemeId = "light" | "dark";

export type FontOption = { id: FontId; name: string; fonts: string };
export type SchemeOption = { id: SchemeId; name: string; note: string };

export const FONT_OPTIONS: readonly FontOption[] = [
  { id: "scoreboard", name: "Scoreboard", fonts: "Big Shoulders + Public Sans" },
  { id: "broadcast", name: "Broadcast", fonts: "Saira Condensed + Saira" },
  { id: "control-room", name: "Control room", fonts: "Chakra Petch + IBM Plex Sans" },
  { id: "tall", name: "Tall", fonts: "Sofia Sans Extra Condensed + Sofia Sans" },
  { id: "slab", name: "Slab", fonts: "Zilla Slab + Libre Franklin" },
  { id: "original", name: "Original", fonts: "Space Grotesk" },
];

export const SCHEME_OPTIONS: readonly SchemeOption[] = [
  { id: "light", name: "Studio Red, inverted", note: "White background, black text, red accents" },
  { id: "dark", name: "Studio Red, original", note: "Black background, white text, red accents" },
];

export const DEFAULT_FONT: FontId = "scoreboard";
export const DEFAULT_SCHEME: SchemeId = "light";
export const FONT_KEY = "look-font";
export const SCHEME_KEY = "look-scheme";

export const isFontId = (v: unknown): v is FontId => FONT_OPTIONS.some((f) => f.id === v);
export const isSchemeId = (v: unknown): v is SchemeId => SCHEME_OPTIONS.some((s) => s.id === v);

/** Runs before paint (inline in <head>) so a saved or linked look shows without a flash. */
export const LOOK_BOOT_SCRIPT = `(function(){try{var q=new URLSearchParams(location.search),d=document.documentElement;
var f=q.get("font")||localStorage.getItem("${FONT_KEY}"),s=q.get("scheme")||localStorage.getItem("${SCHEME_KEY}");
if(f&&${JSON.stringify(["scoreboard", "broadcast", "control-room", "tall", "slab", "original"])}.indexOf(f)>-1)d.dataset.font=f;
if(s==="light"||s==="dark")d.dataset.scheme=s;}catch(e){}})();`;
