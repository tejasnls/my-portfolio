export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 sm:py-20 md:py-24 mb-12 sm:mb-16 border-t border-[color:var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 space-y-6">
          <p className="eyebrow">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Open to senior frontend and platform engineering roles.
          </h2>
          <p className="text-[color:var(--text-secondary)] max-w-3xl leading-relaxed">
            If your team is building frontend systems and values architecture,
            enterprise Search, platform engineering, and reliable delivery,
            I&apos;m happy to talk.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:nlsubramanyatejas@gmail.com"
              className="btn btn-primary"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/tejasnls/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
