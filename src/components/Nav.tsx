"use client";

import { Icon } from "@iconify/react";
import { useTheme } from "./ThemeProvider";

export function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[color:var(--border-subtle)] nav-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-semibold tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Scroll to top"
        >
          N L Subramanya Tejas
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-[color:var(--text-secondary)]">
          <a
            href="#experience"
            className="hover:text-[color:var(--text-primary)] transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-[color:var(--text-primary)] transition-colors"
          >
            Project
          </a>
          <a
            href="#philosophy"
            className="hover:text-[color:var(--text-primary)] transition-colors"
          >
            Philosophy
          </a>
          <a
            href="#contact"
            className="hover:text-[color:var(--text-primary)] transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          className="h-9 px-3 rounded-md flex items-center justify-center border border-[color:var(--border-subtle)] hover:border-[color:var(--border-subtle-hover)] transition-colors text-sm gap-2 cursor-pointer"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          <Icon icon={theme === "dark" ? "lucide:moon" : "lucide:sun"} />
          {theme === "dark" ? "Dark" : "Light"}
        </button>
      </div>
    </nav>
  );
}
