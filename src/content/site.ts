// Everything Asher's site says, in one place. Facts come only from his original site.

export const PERSON = {
  name: "Asher Plichta",
  role: "IT, live production and media",
  email: "asher.plichta11@gmail.com",
  intro:
    "Technology enthusiast, IT intern, and media producer passionate about solving problems and bringing ideas to life through technology.",
  quote: "Make the technology disappear so the moment can shine.",
  employer: "Highview Baptist Church",
  internSummers: 4,
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type Skill = { name: string; short: string; long: string };
export type SkillGroup = { id: string; label: string; skills: Skill[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "it",
    label: "IT & networking",
    skills: [
      { name: "IT support", short: "Helping people get their computers, accounts, and software working again.", long: "Day to day this means answering questions, setting up and fixing computers, managing accounts and passwords, and explaining things in plain language so people can get back to what they were doing." },
      { name: "Networking", short: "Keeping devices connected, from Wi-Fi and cabling to the network behind it all.", long: "Covers how devices talk to each other: Wi-Fi, cabling, switches, and routers, plus checking that everything stays connected and diagnosing it when it doesn’t." },
      { name: "Troubleshooting", short: "Tracking down what’s actually wrong, step by step, and fixing it for good.", long: "A methodical habit: reproduce the problem, narrow down the cause, test one change at a time, and document the fix so it doesn’t come back." },
      { name: "Audiovisual systems", short: "Setting up and running the sound, video, and display gear behind an event.", long: "Includes microphones, mixers, speakers, projectors, and screens, and wiring them so they work together reliably when an event starts." },
    ],
  },
  {
    id: "broadcast",
    label: "Broadcasting",
    skills: [
      { name: "Live production", short: "Running a live show in real time: switching cameras, graphics, and audio on the fly.", long: "Everything happens in real time, so it takes planning, clear communication with the crew, and calm decisions about which camera, graphic, or replay goes out next." },
      { name: "vMix", short: "Live video mixing software for switching sources, adding graphics, and streaming.", long: "Software that acts as a live video switcher on a computer: it handles cameras, graphics, replays, and audio, and can stream or record the final show." },
      { name: "Cameras", short: "Framing and operating cameras to capture clean, steady, well-composed shots.", long: "Good shots come from framing, focus, exposure, and steady movement, and from knowing what the director needs before the shot is called." },
      { name: "Video boards", short: "Driving the big video displays with replays, scores, and graphics.", long: "The screens in a venue show live video, replays, scores, and graphics, so they need to be timed with the action and the broadcast." },
    ],
  },
  {
    id: "audio",
    label: "Audio & media",
    skills: [
      { name: "Audio engineering", short: "Capturing and mixing sound so it comes through clear and balanced.", long: "Setting levels, reducing noise, and balancing voices, music, and effects so listeners never have to strain to hear." },
      { name: "Multi-camera recording", short: "Recording one scene from several angles to cut together into a polished final.", long: "Several angles of the same moment let an editor cut between wide shots and close-ups, which keeps long conversations and events visually interesting." },
      { name: "Riverside", short: "A remote recording platform for high-quality podcast and video interviews.", long: "Records each person locally in high quality, even when they’re in different places, so the final audio and video stay clean." },
      { name: "Podcast production", short: "Taking an episode from recording through editing to publishing.", long: "The full pipeline: planning an episode, recording, editing, mixing, and publishing it so people can listen." },
    ],
  },
];

/** The signal chain on the About page (a real sequence, in order). */
export const SIGNAL_CHAIN = ["Idea", "Capture", "Mix", "Broadcast", "Support"] as const;

export const EXPERIENCE = {
  title: "IT intern",
  org: "Highview Baptist Church",
  summary: "Four summers keeping the tech running.",
  duties: [
    { name: "IT support", detail: "Keeping computers, accounts, and networks running smoothly." },
    { name: "Audiovisual systems", detail: "Supporting the sound, video, and equipment behind services." },
    { name: "Services & events", detail: "Being the person who makes sure it all works when it counts." },
  ],
} as const;

export type Project = { id: string; area: string; title: string; summary: string; tools: string[] };

export const PROJECTS: Project[] = [
  { id: "sports", area: "Sports broadcasting", title: "Live production", summary: "Live production, vMix, cameras and video boards.", tools: ["vMix", "Cameras", "Video boards", "Live switching"] },
  { id: "church", area: "Church IT & AV", title: "Systems & support", summary: "IT support and audiovisual systems at Highview Baptist Church.", tools: ["IT support", "Audiovisual", "Troubleshooting"] },
  { id: "podcast", area: "Podcast & media", title: "Multi-camera recording", summary: "Multi-camera recording, Riverside and professional audio workflows.", tools: ["Riverside", "Multi-camera", "Pro audio"] },
];

/** Contact topics: picking them fills in the email subject. */
export const CONTACT_TOPICS = ["Live production", "IT help", "Podcast recording", "Something else"] as const;
