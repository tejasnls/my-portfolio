import { CaseStudyArticle } from "@/components/CaseStudyArticle";
import { forexFixStudy } from "@/content/forexfix";

export function Projects() {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 sm:py-20 md:py-24 border-t border-[color:var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto space-y-8 sm:space-y-10">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="eyebrow">Project</p>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">
              ForexFix: deterministic finance logic with LLM-assisted guidance
            </h2>
            <p className="text-[color:var(--text-secondary)] max-w-3xl leading-relaxed">
              A technically substantial full-stack application: live rates,
              configurable fee and spread rules, and travel context. Financial
              calculations stay in code. Gemini is used for strategy and
              explanation, not for the math.
            </p>
          </div>

          <hr className="rule" />
        </div>

        <CaseStudyArticle study={forexFixStudy} emphasis="standard" />
      </div>
    </section>
  );
}
