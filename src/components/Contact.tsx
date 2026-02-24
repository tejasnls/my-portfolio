export function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 sm:py-20 md:py-24 mb-12 sm:mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 space-y-6">
          <p className="text-sm uppercase tracking-[0.18em] text-[color:var(--text-secondary)]">
            Contact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Open to senior frontend and platform engineering roles.
          </h2>
          <p className="text-[color:var(--text-secondary)] max-w-3xl leading-relaxed">
            If your team is building high-scale frontend systems and values
            architecture, observability, and reliable delivery, I&apos;m happy to
            talk.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:nlsubramanyatejas@gmail.com"
              className="px-5 py-3 rounded-lg bg-[color:var(--accent)] text-white font-medium hover:opacity-90 transition-opacity"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/tejasnls/"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg border border-[color:var(--border-subtle)] hover:border-[color:var(--border-subtle-hover)] transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg border border-[color:var(--border-subtle)] hover:border-[color:var(--border-subtle-hover)] transition-colors font-medium"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
