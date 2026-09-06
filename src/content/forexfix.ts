import type { CaseStudy } from "@/content/types";

export const forexFixStudy: CaseStudy = {
  id: "forexfix",
  kicker: "Personal project",
  title: "ForexFix — Travel FX Intelligence Platform",
  blocks: [
    {
      type: "paragraph",
      text: "ForexFix is a full-stack travel FX product: live interbank exchange rates, configurable fee and spread rules, deterministic financial calculations, contextual travel inputs, and LLM-generated strategy recommendations. Numeric correctness stays in application code. The model writes strategy, context, and explanation—not the math.",
    },
    {
      type: "diagram",
      title: "Architecture",
      content: `UI
        ↓
Next.js App Router
        ↓
deterministic financial calculation layer
        ↓
Supabase data / cache (TTL freshness)

Separately:
Next.js API / strategy layer
        ↓
Gemini (recommendations and narrative only)`,
    },
    {
      type: "grid",
      columns: [
        {
          title: "Why this split",
          items: [
            "Financial correctness and model-generated recommendations have different failure modes.",
            "Deterministic fee, spread, and conversion logic must not vary with model output.",
            "Gemini is used for strategy generation, contextual recommendations, and narrative explanation.",
            "TTL-based freshness and caching avoid unnecessary rate fetches while keeping exchange data current.",
            "App Router keeps server/client boundaries explicit: UI, calculation, and strategy generation are separate responsibilities.",
          ],
        },
        {
          title: "Stack",
          items: [
            "Next.js 15, App Router",
            "React + TypeScript",
            "Supabase",
            "Gemini LLM",
            "Tailwind CSS",
            "Vercel",
          ],
        },
      ],
    },
    {
      type: "paragraph",
      title: "AI-assisted development",
      text: "Built using AI-assisted development workflows while retaining engineering ownership of architecture, implementation, data flow, correctness, and model boundaries.",
    },
    {
      type: "links",
      items: [
        {
          href: "https://forex-fix.vercel.app/forexfix",
          label: "Live Product",
          variant: "primary",
        },
        {
          href: "https://github.com/tejasnls/forex-fix",
          label: "Repository",
          variant: "secondary",
        },
      ],
    },
  ],
};
