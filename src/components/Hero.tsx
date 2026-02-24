import { Icon } from "@iconify/react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-32 border-b border-[color:var(--border-subtle)]">
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full space-y-6 sm:space-y-8">
        <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
          Senior Frontend Engineer
        </p>
        <h1 className="text-4xl md:text-6xl leading-tight font-bold max-w-4xl">
          I design and ship reliable frontend systems for enterprise-scale
          products.
        </h1>
        <p className="text-lg md:text-xl text-[color:var(--text-secondary)] max-w-3xl leading-relaxed">
          5+ years across micro-frontend architecture, performance optimization,
          analytics correctness, and production reliability. Current focus:
          platform-level frontend engineering.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#experience"
            className="px-5 py-3 rounded-lg bg-[color:var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
          >
            Read Case Studies
          </a>
          <a
            href="#contact"
            className="px-5 py-3 rounded-lg border border-[color:var(--border-subtle)] hover:border-[color:var(--border-subtle-hover)] transition-colors font-medium"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/tejasnls"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-lg border border-[color:var(--border-subtle)] hover:border-[color:var(--border-subtle-hover)] transition-colors font-medium flex items-center gap-2"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tejasnls/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-lg border border-[color:var(--border-subtle)] hover:border-[color:var(--border-subtle-hover)] transition-colors font-medium flex items-center gap-2"
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
