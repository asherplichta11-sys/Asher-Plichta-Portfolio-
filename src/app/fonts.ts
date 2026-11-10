import {
  Big_Shoulders,
  Chakra_Petch,
  IBM_Plex_Sans,
  Libre_Franklin,
  Public_Sans,
  Saira,
  Saira_Condensed,
  Sofia_Sans,
  Sofia_Sans_Extra_Condensed,
  Space_Grotesk,
  Zilla_Slab,
} from "next/font/google";

// Font options for the Look panel. Only the default pair preloads; the rest download when picked.
const bigShoulders = Big_Shoulders({ subsets: ["latin"], variable: "--font-big-shoulders", display: "swap" });
const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans", display: "swap" });
const sairaCondensed = Saira_Condensed({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-saira-condensed", display: "swap", preload: false });
const saira = Saira({ subsets: ["latin"], variable: "--font-saira", display: "swap", preload: false });
const chakraPetch = Chakra_Petch({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-chakra-petch", display: "swap", preload: false });
const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-plex-sans", display: "swap", preload: false });
const sofiaCondensed = Sofia_Sans_Extra_Condensed({ subsets: ["latin"], variable: "--font-sofia-condensed", display: "swap", preload: false });
const sofiaSans = Sofia_Sans({ subsets: ["latin"], variable: "--font-sofia-sans", display: "swap", preload: false });
const zillaSlab = Zilla_Slab({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-zilla-slab", display: "swap", preload: false });
const libreFranklin = Libre_Franklin({ subsets: ["latin"], variable: "--font-libre-franklin", display: "swap", preload: false });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", display: "swap", preload: false });

export const fontVariables = [
  bigShoulders, publicSans, sairaCondensed, saira, chakraPetch, plexSans,
  sofiaCondensed, sofiaSans, zillaSlab, libreFranklin, spaceGrotesk,
].map((f) => f.variable).join(" ");
