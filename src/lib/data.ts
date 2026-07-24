/**
 * Single source of truth for all portfolio content.
 * Every section reads from here so copy edits happen in one place.
 *
 * TODO placeholders you (Muthu) need to swap in are marked with `// TODO:`.
 */

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Muthu Bala Sudhan M",
  handle: "muthu", // used in terminal prompts, e.g. muthu@portfolio
  title: "Junior Associate – Software Engineer",
  company: "iamneo (an NIIT Venture)",
  location: "Madurai, Tamil Nadu, India",
  email: "muthubalasudhan7@gmail.com",
  // Roles/stack cycled through the hero typewriter.
  roles: [
    "Desktop & Electron Engineer",
    "Security & Lockdown Specialist",
    "Full-Stack Developer",
    "Cross-Platform Native Integrations",
  ],
  valueProp:
    "I turn ideas into secure, scalable software — currently a cross-platform exam browser trusted by 50,000+ students.",
} as const;

export const socials = {
  email: `mailto:${profile.email}`,
  linkedin: "https://www.linkedin.com/in/muthu-bala-sudhan-m/",
  github: "https://github.com/Muthubalasudhan7",
  resume: "/resume.pdf", // TODO: drop your resume PDF into /public/resume.pdf
} as const;

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "German", level: "Elementary" },
] as const;

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

export const about = {
  summary: [
    "Passionate software engineer with 1.7+ years turning ideas into impactful, scalable solutions through modern technologies.",
    "My work spans secure desktop application engineering with Electron, cross-platform native integrations, and full-stack web development with Angular, Node.js, GCP, Azure, and relational/non-relational databases.",
    "Right now I'm building a cross-platform secure exam browser used by 50,000+ students, with deep focus on OS-level security, native process monitoring, and real-time telemetry at scale.",
  ],
  // Rendered as an interactive tag cloud rather than a bullet list.
  competencies: [
    "Cross-Platform Desktop (Win/Linux/macOS)",
    "Security & Lockdown Engineering",
    "Native Process & DLL Monitoring",
    "Native Module Development",
    "CI/CD Auto-Update Pipelines",
    "Real-Time Telemetry & Observability",
    "Angular",
    "Node.js / MEAN",
    "Google Cloud Platform",
    "Microsoft Azure",
    "Relational & NoSQL Databases",
    "Fast Learner",
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
    role: "Junior Associate, Software Engineer",
    period: "May 2025 – Present",
    location: "Coimbatore, Tamil Nadu, India",
    current: true,
    bullets: [
      "Building Neo Browser, a secure locked-down exam browser (Electron) supporting 50,000+ students across Windows, Linux, and macOS.",
      "Implemented native security features: DLL monitoring, live process detection, display/monitor state detection, and hidden overlay detection to prevent cheating and unauthorized screen sharing.",
      "Designed and shipped an end-to-end auto-update system using GitHub (release artifacts/versioning) and AWS S3 (distribution) to roll out upgrades seamlessly across all three platforms.",
      "Built telemetry instrumentation capturing app and exam-session events, feeding a real-time dashboard used to monitor and analyze exam-integrity data at scale.",
    ],
  },
  {
    company: "HiveLance Technologies Pvt Ltd",
    role: "Junior MEAN Stack Developer",
    period: "Jan 2024 – May 2025",
    location: "Madurai, Tamil Nadu, India",
    bullets: [
      "Developed dynamic full-stack web applications across the MEAN stack (MongoDB, Express, Angular, Node.js).",
      "Built and integrated backend services with relational and non-relational databases.",
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
  },
  // ---- Swap the two placeholders below with your own real projects. ----
  {
    name: "Project Two", // TODO: real project name
    tagline: "One-line impact statement", // TODO
    description:
      "TODO: 1–2 sentence description focused on what you built and the outcome / impact.",
    highlights: [
      "TODO: notable technical decision or result",
      "TODO: measurable impact (users, performance, scale)",
    ],
    tags: ["Angular", "Node.js", "MongoDB"], // TODO: real stack
    links: {
      demo: "#", // TODO: live demo URL
      repo: "#", // TODO: GitHub repo URL
    },
  },
  {
    name: "Project Three", // TODO: real project name
    tagline: "One-line impact statement", // TODO
    description:
      "TODO: 1–2 sentence description focused on what you built and the outcome / impact.",
    highlights: [
      "TODO: notable technical decision or result",
      "TODO: measurable impact (users, performance, scale)",
    ],
    tags: ["TypeScript", "GCP", "SQL"], // TODO: real stack
    links: {
      demo: "#", // TODO: live demo URL
      repo: "#", // TODO: GitHub repo URL
    },
  },
];

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
  { id: "skills", label: "~/skills" },
  { id: "education", label: "~/education" },
  { id: "contact", label: "~/contact" },
] as const;

/**
 * TODO (optional): if you set up a Formspree form, paste its endpoint here.
 * Leave empty ("") to fall back to a mailto: link — the contact form
 * degrades gracefully either way.
 */
export const FORMSPREE_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"
