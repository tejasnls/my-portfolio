"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "./ThemeProvider";
import { scrollToTop } from "@/lib/scroll";
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from "./icons";

const LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[color:var(--border-subtle)] nav-blur">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            scrollToTop();
          }}
          className="font-semibold tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Scroll to top"
        >
          N L Subramanya Tejas
        </a>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center gap-8 text-sm text-[color:var(--text-secondary)]">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[color:var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="h-9 px-3 rounded-md flex items-center justify-center border border-[color:var(--border-subtle)] bg-[color:var(--surface-2)] hover:border-[color:var(--accent-line)] transition-colors text-sm gap-2 cursor-pointer"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            {theme === "dark" ? "Dark" : "Light"}
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden h-9 w-9 rounded-md flex items-center justify-center border border-[color:var(--border-subtle)] bg-[color:var(--surface-2)] hover:border-[color:var(--accent-line)] transition-colors cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? (
              <CloseIcon className="text-lg" />
            ) : (
              <MenuIcon className="text-lg" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <>
          <div
            className="fixed inset-x-0 top-16 bottom-0 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav"
            className="relative z-50 md:hidden border-t border-[color:var(--border-subtle)] bg-[color:var(--surface-1)] shadow-[var(--shadow-card)] px-4 sm:px-6"
          >
            <ul className="flex flex-col py-1">
              {LINKS.map((link, index) => (
                <li key={link.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : null}
    </nav>
  );
}
