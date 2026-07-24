import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile, socials } from "@/lib/data";
import Header from "@/components/layout/Header";
import StatusBar from "@/components/layout/StatusBar";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://muthu-portfolio.vercel.app"; // TODO: set to your deployed domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.valueProp,
  keywords: [
    "Muthu Bala Sudhan",
    "Software Engineer",
    "Electron",
    "Cross-Platform Desktop",
    "Angular",
    "Node.js",
    "Full-Stack Developer",
    "iamneo",
  ],
  authors: [{ name: profile.name, url: socials.linkedin }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${profile.name} — ${profile.title}`,
    description: profile.valueProp,
    siteName: `${profile.name} · Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.valueProp,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080B0A" },
    { media: "(prefers-color-scheme: light)", color: "#F4F3ED" },
  ],
  width: "device-width",
  initialScale: 1,
};

/**
 * Runs before paint to apply the saved (or system) theme, preventing the
 * flash of the wrong theme on first load.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var system = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', stored || system);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen antialiased">
        {/* Skip link for keyboard & screen-reader users */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:font-mono focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <StatusBar />
      </body>
    </html>
  );
}
