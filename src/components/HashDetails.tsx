"use client";

import { useEffect } from "react";

/**
 * When the page loads at — or is navigated to — an anchor that lands on a
 * case-study article whose body is collapsed (a shared link, or the Experience
 * workstream nav jumping to a folded study), open that <details> and re-scroll
 * so the heading settles under the fixed nav instead of leaving the visitor on
 * a summary they were sent past.
 */
export function HashDetails() {
  useEffect(() => {
    const revealTarget = () => {
      let id: string;
      try {
        id = decodeURIComponent(window.location.hash.slice(1));
      } catch {
        id = window.location.hash.slice(1);
      }
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      const details = target.querySelector<HTMLDetailsElement>(
        ":scope > details",
      );
      if (!details || details.open) return;

      details.open = true;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: reduce ? "auto" : "smooth",
          block: "start",
        });
      });
    };

    revealTarget();
    window.addEventListener("hashchange", revealTarget);
    return () => window.removeEventListener("hashchange", revealTarget);
  }, []);

  return null;
}
