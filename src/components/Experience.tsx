import { CaseStudyArticle } from "@/components/CaseStudyArticle";
import {
  currentSearchStudies,
  experienceNav,
  previousWorkStudies,
} from "@/content/experience";

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">
              Experience
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              Technical case studies from production systems
            </h2>
          </div>

          <hr className="rule" />

          <div className="space-y-1">
            <p className="text-lg font-semibold">
              American Express (via Cognizant)
            </p>
            <p className="text-[color:var(--text-secondary)]">Engineer II</p>
            <p className="text-sm text-[color:var(--text-secondary)]">
              Dec 2020 – Present
            </p>
          </div>

          <nav
            aria-label="Experience workstreams"
            className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-[color:var(--text-secondary)]"
          >
            {experienceNav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-block py-1 hover:text-[color:var(--text-primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-10 sm:space-y-14">
          <p className="eyebrow">
            Current / Enterprise Search Platform
          </p>
          {currentSearchStudies.map((study, index) => (
            <CaseStudyArticle
              key={study.id}
              study={study}
              emphasis={index === 0 ? "lead" : "standard"}
            />
          ))}
        </div>

        <div className="space-y-8 sm:space-y-10">
          <p className="eyebrow">
            Previous Work
          </p>
          {previousWorkStudies.map((study) => (
            <CaseStudyArticle key={study.id} study={study} emphasis="standard" />
          ))}
        </div>
      </div>
    </section>
  );
}
