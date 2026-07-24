"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navItems, profile } from "@/lib/data";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import ThemeToggle from "./ThemeToggle";

const ids = navItems.map((n) => n.id);

export default function Header() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-content items-center justify-between px-4 sm:px-6"
      >
        {/* Brand — editor tab style */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm"
        >
          <span aria-hidden className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-accent" />
          </span>
          <span className="ml-1 text-muted transition-colors group-hover:text-fg">
            {profile.handle}
            <span className="text-accent">@</span>
            portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative rounded-md px-3 py-1.5 font-mono text-sm transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-0.5 h-px bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile menu button */}
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border font-mono text-accent md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-surface md:hidden"
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "true" : undefined}
                  className={`block px-6 py-3 font-mono text-sm ${
                    active === item.id ? "text-accent" : "text-muted"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
