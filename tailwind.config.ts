import type { Config } from "tailwindcss";

/**
 * Colors are driven by CSS custom properties defined in globals.css so the
 * single accent + neutral palette can flip between light and dark themes
 * without duplicating utility classes. Tailwind just references the vars.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-2": "rgb(var(--surface-2) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        "fg-strong": "rgb(var(--fg-strong) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-dim": "rgb(var(--accent-dim) / <alpha-value>)",
        // syntax-highlight roles, used sparingly inside code-like contexts
        "syn-str": "rgb(var(--syn-str) / <alpha-value>)",
        "syn-key": "rgb(var(--syn-key) / <alpha-value>)",
        "syn-fn": "rgb(var(--syn-fn) / <alpha-value>)",
        "syn-num": "rgb(var(--syn-num) / <alpha-value>)",
        "syn-comment": "rgb(var(--syn-comment) / <alpha-value>)",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.35", transform: "scale(0.8)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulseDot: "pulseDot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
