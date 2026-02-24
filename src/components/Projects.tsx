import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
            Project
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            ForexFix: deterministic finance logic with LLM-assisted guidance
          </h2>
          <p className="text-[color:var(--text-secondary)] max-w-3xl leading-relaxed">
            ForexFix is a travel FX intelligence product built with Next.js App
            Router, TypeScript, Supabase, and Gemini. The core engineering
            decision: deterministic financial math stays in code; LLM output is
            restricted to narrative strategy.
          </p>
        </div>

        <article className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold">System Diagram</h3>
            <pre className="rounded-xl border code-block p-4 text-xs md:text-sm overflow-x-auto text-[color:var(--text-secondary)]">
{`[Client (RSC + UI)]
        |
        v
[Next.js App Router]
   |            |
   |            +--> [API Route: LLM Narrative Layer]
   |                        |
   |                        v
   |                  [Gemini Model]
   |
   +--> [Deterministic FX Engine]
                |
                v
       [Supabase Postgres + Cache]
                |
                v
          [Strategy Response]`}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Why this architecture</h4>
              <ul className="space-y-2 text-[color:var(--text-secondary)] leading-relaxed list-disc pl-5">
                <li>Numeric correctness cannot depend on model variability.</li>
                <li>LLM is used for explanation quality, not calculations.</li>
                <li>Caching strategy is cost-aware and latency-aware.</li>
                <li>App Router keeps server/client boundaries explicit.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Stack</h4>
              <ul className="space-y-2 text-[color:var(--text-secondary)] leading-relaxed list-disc pl-5">
                <li>Next.js 15+ App Router</li>
                <li>React + TypeScript</li>
                <li>Supabase (Postgres + caching)</li>
                <li>Gemini for narrative strategy generation</li>
                <li>Vercel deployment</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="https://forex-fix.vercel.app/forexfix"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-[color:var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Live Product
            </Link>
            <Link
              href="https://github.com/tejasnls/forex-fix"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg border border-[color:var(--border-subtle)] hover:border-[color:var(--border-subtle-hover)] transition-colors font-medium"
            >
              Repository
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
