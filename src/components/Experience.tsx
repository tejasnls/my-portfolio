export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
            Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical case studies from production systems
          </h2>
        </div>

        <article className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8">
          <header className="space-y-2">
            <p className="text-sm text-[color:var(--text-secondary)]">
              American Express (via Cognizant) · Global Search
            </p>
            <h3 className="text-2xl md:text-3xl font-bold">
              Micro-Frontend Tenancy Migration
            </h3>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Problem</h4>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">
                Search UI lived under MYCA tenancy in OneApp. Release cadence was
                coupled to another team&apos;s root module, analytics executed late,
                and legacy SAN + Iguazu dependencies increased system drag.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Constraints</h4>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">
                High traffic surface, strict rollout safety, cross-team tenancy
                dependencies, and no tolerance for analytics loss during migration.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Architecture Diagram</h4>
            <pre className="rounded-xl border code-block p-4 text-xs md:text-sm overflow-x-auto text-[color:var(--text-secondary)]">
{`Before:
[Client] -> [OneApp MYCA Shell] -> [Search MFE]
                        -> [Late Analytics Init]
                        -> [SAN + Iguazu Coupling]

After:
[Client] -> [Global Search CNAME]
         -> [Dedicated Root Module]
         -> [Dedicated Search Tenancy + Pods]
         -> [Early Analytics Init]
         -> [Decoupled Release Lifecycle]`}
            </pre>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Decisions</h4>
              <ul className="space-y-2 text-[color:var(--text-secondary)] leading-relaxed list-disc pl-5">
                <li>Led 6-month migration to dedicated tenancy.</li>
                <li>Provisioned new root module, clusters, and pods.</li>
                <li>Skipped SAN/Iguazu inheritance to avoid framework bloat.</li>
                <li>Designed CNAME-based domain switch + subdomain routing.</li>
                <li>Reordered analytics initialization to remove blind spot.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Outcome & Lessons</h4>
              <ul className="space-y-2 text-[color:var(--text-secondary)] leading-relaxed list-disc pl-5">
                <li>Eliminated ~10s analytics tracking gap.</li>
                <li>Decoupled release cycles from external root ownership.</li>
                <li>Improved operational reliability via isolated tenancy.</li>
                <li>Documented migration path and mentored junior engineer.</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8">
          <header className="space-y-2">
            <p className="text-sm text-[color:var(--text-secondary)]">
              American Express (via Cognizant) · Partner Servicing Portal
            </p>
            <h3 className="text-2xl md:text-3xl font-bold">
              Enterprise Onboarding Platform
            </h3>
          </header>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Problem</h4>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">
                Multi-step partner onboarding workflows, lifecycle dashboards,
                and large-scale card art management required high performance and
                strong accessibility in an enterprise environment.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Decisions</h4>
              <ul className="space-y-2 text-[color:var(--text-secondary)] leading-relaxed list-disc pl-5">
                <li>Applied workflow-driven state management patterns.</li>
                <li>Migrated tests from Enzyme to React Testing Library.</li>
                <li>Owned feature delivery during tech lead absence.</li>
                <li>Prioritized perf + a11y + security together.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="rounded-xl border border-[color:var(--border-subtle)] p-4">
              <p className="text-2xl font-bold">30%</p>
              <p className="text-sm text-[color:var(--text-secondary)]">
                Performance improvement
              </p>
            </div>
            <div className="rounded-xl border border-[color:var(--border-subtle)] p-4">
              <p className="text-2xl font-bold">45%</p>
              <p className="text-sm text-[color:var(--text-secondary)]">
                Accessibility improvement (WCAG)
              </p>
            </div>
            <div className="rounded-xl border border-[color:var(--border-subtle)] p-4">
              <p className="text-2xl font-bold">60%</p>
              <p className="text-sm text-[color:var(--text-secondary)]">
                Vulnerability reduction
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
