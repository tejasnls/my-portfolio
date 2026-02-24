export function Philosophy() {
  return (
    <section id="philosophy" className="py-16 px-4 sm:px-6 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
            Technical Philosophy
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Architecture first. Framework second.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass-card rounded-xl p-5 sm:p-6 space-y-2">
            <h3 className="font-semibold">Design for failure modes</h3>
            <p className="text-[color:var(--text-secondary)] leading-relaxed">
              Production reliability is a design decision, not a post-launch
              patch. I design for rollout safety, blast radius control, and
              clear rollback paths.
            </p>
          </div>
          <div className="glass-card rounded-xl p-5 sm:p-6 space-y-2">
            <h3 className="font-semibold">Observability is product quality</h3>
            <p className="text-[color:var(--text-secondary)] leading-relaxed">
              If analytics and telemetry are late or incorrect, product
              decisions become guesswork. Correct instrumentation is part of the
              core feature, not an add-on.
            </p>
          </div>
          <div className="glass-card rounded-xl p-5 sm:p-6 space-y-2">
            <h3 className="font-semibold">Performance is architectural</h3>
            <p className="text-[color:var(--text-secondary)] leading-relaxed">
              I prioritize boundaries, loading strategy, and state ownership
              before micro-optimizations. Most performance wins come from system
              shape, not tiny tweaks.
            </p>
          </div>
          <div className="glass-card rounded-xl p-5 sm:p-6 space-y-2">
            <h3 className="font-semibold">Own outcomes, not tickets</h3>
            <p className="text-[color:var(--text-secondary)] leading-relaxed">
              I take architectural accountability: tradeoff decisions,
              implementation quality, team alignment, and production behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
