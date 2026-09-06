export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-16 px-4 sm:px-6 sm:py-20 md:py-24 border-t border-[color:var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">Technical Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Architecture first. Framework second.
            </h2>
          </div>

          <hr className="rule" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="space-y-2">
            <h3 className="font-semibold">Design for failure modes</h3>
            <p className="text-[color:var(--text-secondary)] leading-relaxed">
              Typeahead can return stale responses; LLM features can over-reach
              a consumer. I design for cancellation, deterministic cohorts,
              blast radius, and rollback—not only the happy path.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Observability is product quality</h3>
            <p className="text-[color:var(--text-secondary)] leading-relaxed">
              A 10-second analytics blind spot is a product defect. Typeahead
              instrumentation and rollout measurement belong in the feature,
              not as a follow-up ticket.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Performance is architectural</h3>
            <p className="text-[color:var(--text-secondary)] leading-relaxed">
              Request lifecycle, tenancy boundaries, loading behavior, and
              state ownership move the needle more than isolated tweaks.
              Deterministic FX math and LLM narrative are separate systems for
              the same reason.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Own outcomes, not tickets</h3>
            <p className="text-[color:var(--text-secondary)] leading-relaxed">
              I take accountability for architecture, implementation, technical
              planning, cross-team coordination, mentoring, release practices,
              and production behavior—including Search ownership and MFE
              tenancy boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
