export const siteConfig = {
  name: "cluadehelper",
  tagline: "Claude.ai helper",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://cluadehelper.nexalis.in",
  supportEmail: "pradhanrajkishore26@gmail.com",
  description:
    "cluadehelper is a free Chrome extension for claude.ai with a built-in Claude usage meter, live token counter, chat export and forking, and Continuity — one click to carry your context into ChatGPT or Gemini the moment Claude cuts you off.",
  shortDescription:
    "Usage tracking, a live token counter, chat export, conversation forking, a slash-command prompt library, and Continuity for claude.ai.",
  chromeStoreUrl:
    "https://chromewebstore.google.com/detail/egjmkacjnbencfokaijijgleekgpepaj",
  keywords: [
    "claude.ai extension",
    "claude usage meter",
    "claude usage tracker",
    "claude token counter",
    "claude token meter",
    "claude chrome extension",
    "claude.ai chat export",
    "claude prompt library",
    "claude continuity",
    "claude to chatgpt",
    "claude usage limit",
    "anthropic claude tools",
  ],
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/#features", label: "Features" },
  { href: "/#continuity", label: "Continuity" },
  { href: "/#faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];
