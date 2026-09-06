"use client";

import { useEffect, useState } from "react";
import { scrollToTop } from "@/lib/scroll";
import { ArrowUpIcon } from "./icons";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        setShow(window.scrollY > window.innerHeight * 0.75);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
      className={`fixed z-30 right-[max(1rem,env(safe-area-inset-right))] bottom-[max(1rem,env(safe-area-inset-bottom))] h-11 w-11 flex items-center justify-center rounded-lg border border-[color:var(--border-subtle)] bg-[color:var(--surface-1)] shadow-[var(--shadow-card)] text-[color:var(--text-secondary)] hover:text-[color:var(--accent)] hover:border-[color:var(--accent-line)] transition duration-200 motion-reduce:transition-none ${
        show
          ? "opacity-100 translate-y-0"
          : "pointer-events-none opacity-0 translate-y-2"
      }`}
    >
      <ArrowUpIcon />
    </button>
  );
}
