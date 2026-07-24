/**
 * Single source of truth for all portfolio content.
 * Every section reads from here so copy edits happen in one place.
 */

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Muthu Bala Sudhan M",
  handle: "muthu", // used in terminal prompts, e.g. muthu@portfolio
  title: "Product Engineer",
  company: "iamneo (an NIIT Venture)",
  location: "Madurai, Tamil Nadu, India",
  email: "muthubalasudhan7@gmail.com",
  // One-line "product-based" signal shown under the role in the hero.
  productSignal:
    "Product work — software I own and ship to 50,000+ users, not client/bench projects.",
  // Roles/stack cycled through the hero typewriter.
  roles: [
    "Product Engineer",
    "Security & Systems Engineer",
    "AI-Native Developer",
    "Full-Stack — Angular · Node · Electron",
  ],
  // Doubles as the site meta description. Ends with a scroll hook.
  valueProp:
    "Product engineer, 2.5+ years. I ship secure, production-scale systems — and engineer with AI as first-class infrastructure, not autocomplete. See how below.",
} as const;

// The résumé button stays hidden until a real PDF exists at public/resume.pdf.
export const resumeAvailable = false;

export const socials = {
  email: `mailto:${profile.email}`,
  linkedin: "https://www.linkedin.com/in/muthu-bala-sudhan-m/",
  github: "https://github.com/Muthubalasudhan7",
  resume: "/resume.pdf",
} as const;

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "Elementary" },
] as const;

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  // Impact first, tenure second, stack third.
  summary: [
    "50,000+ students rely on software I've shipped. I'm a product engineer with 2.5+ years building secure, production-scale systems end to end — and everything I've built is product work I own and iterate, not one-off client deliverables.",
    "My depth is in secure desktop engineering (Electron, native OS-level process/DLL and overlay monitoring) and full-stack product work with Angular, Node/Express, and SQL/NoSQL across GCP and Azure.",
    "I work AI-native: I drive AI agents from locked specs and phased, reviewed execution rather than one-shot generation — AI as engineering infrastructure, not a shortcut. The ~/ai section shows exactly how.",
  ],
  // Rendered as an interactive tag cloud rather than a bullet list.
  competencies: [
    "Product Engineering",
    "Security & Lockdown Engineering",
    "AI-Paired Engineering",
    "Context / Spec Engineering",
    "Cross-Platform Desktop (Win/Linux/macOS)",
    "Native Process & DLL Monitoring",
    "CI/CD Auto-Update Pipelines",
    "Real-Time Telemetry & Observability",
    "Angular",
    "Node.js / MEAN",
    "Google Cloud Platform",
    "Microsoft Azure",
    "Relational & NoSQL Databases",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Experience — reverse chronological (git-log styled)                 */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "iamneo — An NIIT Venture",
    role: "Product Engineer — Software Engineer",
    period: "May 2025 – Present",
    location: "Coimbatore, Tamil Nadu, India",
    current: true,
    bullets: [
      "Building Neo Browser, a secure locked-down exam browser (Electron) supporting 50,000+ students across Windows, Linux, and macOS.",
      "Chose native OS-level detection (process/DLL + display + overlay signals) over a browser-sandbox-only lockdown — a web sandbox structurally can't see screen-sharing tools, virtual cameras, or injected overlays running outside the page, which is exactly where exam-integrity threats live.",
      "Designed and shipped an end-to-end auto-update system using GitHub (versioned release artifacts) and AWS S3 (distribution) to roll upgrades out seamlessly across all three platforms with no manual reinstalls.",
      "Built telemetry instrumentation capturing app and exam-session events, feeding a real-time dashboard used to monitor and analyze exam-integrity data at scale.",
    ],
  },
  {
    company: "HiveLance Technologies Pvt Ltd",
    role: "MEAN Stack Developer",
    period: "Jan 2024 – May 2025",
    location: "Madurai, Tamil Nadu, India",
    bullets: [
      "Delivered production features across the MEAN stack (MongoDB, Express, Angular, Node.js), owning slices end to end from API to UI.",
      "Modeled and integrated both relational and non-relational data layers, including schema design for new features and their backing services.",
    ],
  },
  {
    company: "Great Innovus Solutions Inc",
    role: "Intern",
    period: "Feb 2023 – Apr 2023",
    location: "Madurai, Tamil Nadu, India",
    bullets: [
      "Hands-on experience with Microsoft Dynamics 365 Business Central — both technical and functional.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export interface Project {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  flagship?: boolean;
  links: {
    demo?: string | null;
    repo?: string | null;
    note?: string;
  };
  // Optional deep-dive shown in an in-page case-study modal.
  caseStudy?: {
    summary: string;
    architecture: string[];
    decisions: { decision: string; why: string }[];
  };
}

export const projects: Project[] = [
  {
    name: "Neo Browser",
    tagline: "Secure, locked-down exam browser for 50,000+ students",
    description:
      "A cross-platform secure exam browser built with Electron, deployed to schools and institutions. A single native codebase with OS-specific lockdown implementations for Windows, Linux, and macOS.",
    highlights: [
      "Security: DLL monitoring, live native process detection during active sessions, display/monitor state detection, and hidden overlay/screen-capture detection — engineered to stop cheating and unauthorized screen sharing.",
      "Release engineering: end-to-end auto-update pipeline using GitHub for versioned releases and AWS S3 for distribution — seamless upgrades across three platforms with no manual reinstalls.",
      "Observability: real-time telemetry pipeline capturing exam/app events, feeding a live analytics dashboard for monitoring exam integrity at scale.",
    ],
    tags: [
      "Electron",
      "TypeScript / JavaScript",
      "Native Modules (C++/OS APIs)",
      "GitHub Actions",
      "AWS S3",
      "Real-Time Dashboards",
      "Cross-Platform",
    ],
    flagship: true,
    links: {
      demo: null,
      repo: null,
      note: "Proprietary internal product — source and demo are not public.",
    },
    caseStudy: {
      summary:
        "Neo Browser locks down a candidate's machine for the duration of an exam and streams integrity signals to a live dashboard — across three operating systems from one codebase.",
      architecture: [
        "Single Electron/TypeScript codebase with OS-specific native lockdown modules for Windows, Linux, and macOS.",
        "Native process/DLL monitors and display/overlay detectors run alongside the exam session and stream signals up to the app layer.",
        "Telemetry events flow through an event pipeline to a real-time dashboard that monitors exam integrity across all active sessions.",
      ],
      decisions: [
        {
          decision: "Native OS-level detection over a browser-sandbox-only lockdown",
          why: "A web sandbox can't observe screen-sharing tools, virtual cameras, or injected overlays running outside the page — the exact vectors used to cheat. Native process/DLL/overlay signals catch what the sandbox structurally cannot.",
        },
        {
          decision: "GitHub releases + AWS S3 for auto-update, not an app-store pipeline",
          why: "Institutions install on managed lab machines across three OSes. Self-hosted versioned artifacts plus S3 distribution roll fixes out on every platform without manual reinstalls or store-review latency.",
        },
        {
          decision: "Decoupled, event-based telemetry",
          why: "Integrity analysis needs a reliable event stream without blocking the exam UX, so capture is decoupled from the session — the exam stays responsive while the dashboard stays fed.",
        },
      ],
    },
  },
  {
    name: "Moi Account Revamp",
    tagline: "Zero-data-loss legacy revamp of a production Tamil-language platform",
    description:
      "Led a full legacy-to-modern migration of a live Tamil-language event gift-money (moi) platform — from session-auth vanilla JS to Angular 17 + Express 5 + JWT — with zero data loss.",
    highlights: [
      "Migrated an anti-pattern schema (198 dynamically generated tables) to a clean, normalized relational design.",
      "Enforced an additive-only migration policy on a live production database, so every change stayed backward-compatible and safely reversible.",
      "Designed role-based access control with CASL across four user roles, plus full Tamil/English internationalization.",
    ],
    tags: ["Angular 17", "Express 5", "MySQL", "JWT", "CASL RBAC", "i18n (Tamil/English)"],
    links: {
      demo: null,
      repo: null,
      note: "Production platform — source is private.",
    },
  },
  {
    name: "LIC Agent App",
    tagline: "Secure bilingual record & policy manager for insurance agents",
    description:
      "A secure, bilingual (Tamil/English) web app that lets individual LIC agents digitize customer records, store policy documents, and track premium due dates — replacing paper-based workflows.",
    highlights: [
      "JWT auth (6-hour tokens) with bcrypt hashing, helmet security headers, and rate limiting; policy documents are stored outside the web root and served only through authenticated endpoints.",
      "PII-aware by design — Aadhaar, PAN, and financial data are kept out of application logs.",
      "Built against a locked six-phase spec (auth and schema first), executed phase by phase rather than all at once.",
    ],
    tags: ["Angular 17", "Angular Material", "Express 4", "MySQL", "JWT", "ngx-translate"],
    links: {
      demo: null,
      repo: "https://github.com/Muthubalasudhan7/lic-agent-app",
    },
  },
];

/* ------------------------------------------------------------------ */
/* AI-native engineering — the proof-of-claim section                  */
/* ------------------------------------------------------------------ */

export interface TranscriptLine {
  kind: "prompt" | "output" | "ok" | "pause";
  text: string;
}

export const aiEngineering = {
  headline: "How I actually use AI to engineer — not autocomplete",
  intro:
    "AI-first, for me, is a process — not a plugin. Before an agent writes a line, it works from a locked spec: hard constraints, an approved-dependency list, and acceptance criteria. Then it executes one task at a time, and I review each phase before the next begins. That's the difference between prompting a chatbot and running AI as part of the engineering pipeline.",
  principles: [
    {
      title: "Context & spec engineering",
      body: "I write locked constraint files — DB policy, dependency allowlists, acceptance criteria — before any code is generated. The agent reads them first, every time.",
    },
    {
      title: "Phased, reviewed execution",
      body: "One task per step, human review between phases. No giant one-shot generations that nobody can safely review or roll back.",
    },
    {
      title: "Constraints that protect production",
      body: "On the Moi revamp, an additive-only migration policy meant every AI-assisted schema change stayed backward-compatible on a live database.",
    },
    {
      title: "Repeatable across repos",
      body: "The LIC agent app was built the same way — a locked six-phase roadmap executed phase by phase, auth and schema first.",
    },
  ],
  // Replayed as a typing animation in the interactive terminal panel.
  transcript: [
    { kind: "prompt", text: "cat .specs/constraints.md" },
    { kind: "output", text: "# locked — read before writing any code" },
    { kind: "output", text: "- db: additive-only migrations (no drops/renames on prod)" },
    { kind: "output", text: "- deps: approved list only" },
    { kind: "output", text: "- exec: one task per step; wait for review" },
    { kind: "prompt", text: 'agent run --task "premium-due reminder" --phase 3' },
    { kind: "output", text: "→ reading constraints… ok" },
    { kind: "output", text: "→ plan: 1 additive migration · 1 endpoint · 1 ui card" },
    { kind: "pause", text: "→ awaiting review before writing code ⏸" },
    { kind: "prompt", text: "review --approve" },
    { kind: "ok", text: "approved — executing phase 3 only" },
  ] as TranscriptLine[],
} as const;

/* ------------------------------------------------------------------ */
/* Skills — grouped by category, rendered package.json-style           */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  category: string;
  key: string; // package.json-style key
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI Engineering",
    key: "ai_engineering",
    items: [
      "AI-Paired Development",
      "Context/Spec Engineering",
      "Claude Code",
      "Prompt Engineering for Codegen",
    ],
  },
  {
    category: "Frontend",
    key: "frontend",
    items: ["Angular", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    key: "backend",
    items: ["Node.js", "Express", "MEAN Stack", "REST APIs"],
  },
  {
    category: "Desktop & Native",
    key: "desktop",
    items: [
      "Electron",
      "Native Modules (C++/OS APIs)",
      "Process/DLL Monitoring",
      "Security & Lockdown",
    ],
  },
  {
    category: "Cloud & DevOps",
    key: "cloud_devops",
    items: [
      "Google Cloud Platform",
      "Microsoft Azure",
      "AWS S3",
      "GitHub Actions",
      "CI/CD Auto-Update",
    ],
  },
  {
    category: "Databases",
    key: "databases",
    items: ["SQL / Relational", "NoSQL", "MongoDB", "Schema Design"],
  },
  {
    category: "Languages",
    key: "languages",
    items: ["TypeScript", "JavaScript", "SQL", "Python"],
  },
];

/* ------------------------------------------------------------------ */
/* Education & Certifications                                          */
/* ------------------------------------------------------------------ */

export const education = {
  school: "PSNA College of Engineering and Technology",
  degree: "B.Tech, Information Technology",
  period: "May 2019 – May 2023",
} as const;

export const certifications = [
  "Introduction to Relational Database and SQL",
  "Frontend Fundamentals",
  "Python and Data Science",
  "Machine Learning for All",
  "Introduction to Python",
] as const;

export const honors = ["Novitiate Excellence"] as const;

/* ------------------------------------------------------------------ */
/* Navigation — section ids power both the nav and scroll-spy          */
/* ------------------------------------------------------------------ */

export const navItems = [
  { id: "home", label: "~/home" },
  { id: "about", label: "~/about" },
  { id: "experience", label: "~/experience" },
  { id: "projects", label: "~/projects" },
  { id: "ai", label: "~/ai" },
  { id: "skills", label: "~/skills" },
  { id: "education", label: "~/education" },
  { id: "contact", label: "~/contact" },
] as const;

/**
 * Optional: if you set up a Formspree form, paste its endpoint here.
 * Leave empty ("") to fall back to a mailto: link — the contact form
 * degrades gracefully either way.
 */
export const FORMSPREE_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"
