import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-32 border-b border-[color:var(--border-subtle)]">
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full space-y-6 sm:space-y-8">
        <p className="eyebrow">Senior Frontend Engineer</p>
        <h1 className="text-4xl md:text-6xl leading-tight font-bold max-w-4xl text-balance">
          I design and ship reliable frontend systems for complex products.
        </h1>
        <div className="space-y-3 max-w-3xl">
          <p className="text-lg md:text-xl text-[color:var(--text-secondary)] leading-relaxed">
            Nearly 6 years in frontend architecture, enterprise Search, platform
            engineering, and observability. Current focus: system boundaries,
            production behavior, and reliable delivery.
          </p>
          <p className="text-sm text-[color:var(--text-secondary)]">
            Enterprise Search platform @ American Express
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-4 pt-2">
          <a href="#experience" className="btn btn-primary">
            Read Case Studies
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Résumé
          </a>

          <span className="mx-1 hidden h-5 w-px bg-[color:var(--border-subtle)] sm:inline-block" />

          <a
            href="https://github.com/tejasnls"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-subtle)] hover:bg-[color:var(--surface-2)] transition-colors text-xl"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/tejasnls/"
            target="_blank"
            rel="noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:border-[color:var(--border-subtle)] hover:bg-[color:var(--surface-2)] transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
