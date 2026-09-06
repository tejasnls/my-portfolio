import Link from "next/link";
import type { CaseStudy, CaseStudyBlock } from "@/content/types";
import { ChevronRightIcon } from "./icons";

type Emphasis = "lead" | "standard";

function Block({ block, bleed }: { block: CaseStudyBlock; bleed?: boolean }) {
  switch (block.type) {
    case "paragraph":
      return (
        <div className="space-y-3">
          {block.title ? <h4 className="font-semibold">{block.title}</h4> : null}
          <p className="text-[color:var(--text-secondary)] leading-relaxed">
            {block.text}
          </p>
        </div>
      );
    case "list":
      return (
        <div className="space-y-3">
          <h4 className="font-semibold">{block.title}</h4>
          <ul className="space-y-2 text-[color:var(--text-secondary)] leading-relaxed list-disc pl-5">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      );
    case "grid":
      return (
        <div
          className={`grid gap-6 ${
            block.columns.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
          }`}
        >
          {block.columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h4 className="font-semibold">{column.title}</h4>
              {column.text ? (
                <p className="text-[color:var(--text-secondary)] leading-relaxed">
                  {column.text}
                </p>
              ) : null}
              {column.items ? (
                <ul className="space-y-2 text-[color:var(--text-secondary)] leading-relaxed list-disc pl-5">
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      );
    case "diagram":
      return (
        <div
          className={
            bleed ? "space-y-3 -mx-6 sm:-mx-8 md:-mx-10 lg:-mx-12" : "space-y-3"
          }
        >
          <h4
            className={
              bleed
                ? "font-semibold px-6 sm:px-8 md:px-10 lg:px-12"
                : "font-semibold"
            }
          >
            {block.title}
          </h4>
          <pre
            className={
              bleed
                ? "border-y border-[color:var(--code-border)] bg-[color:var(--code-bg)] px-6 py-5 sm:px-8 md:px-10 lg:px-12 text-sm overflow-x-auto text-[color:var(--text-secondary)]"
                : "rounded-xl border code-block p-4 text-sm overflow-x-auto text-[color:var(--text-secondary)]"
            }
          >
            {block.content}
          </pre>
        </div>
      );
    case "metrics":
      return (
        <div
          className={`grid grid-cols-1 gap-3 ${
            block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          }`}
        >
          {block.items.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-2)] p-4"
            >
              <p className="text-2xl font-bold text-[color:var(--accent)]">
                {item.value}
              </p>
              <p className="text-sm text-[color:var(--text-secondary)]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      );
    case "callout":
      return (
        <p className="rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--surface-2)] px-4 py-3 text-sm text-[color:var(--text-secondary)] leading-relaxed">
          {block.text}
        </p>
      );
    case "links":
      return (
        <div className="flex flex-wrap gap-3">
          {block.items.map((item) =>
            item.href.startsWith("http") ? (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={
                  item.variant === "primary"
                    ? "btn btn-primary"
                    : "btn btn-secondary"
                }
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className={
                  item.variant === "primary"
                    ? "btn btn-primary"
                    : "btn btn-secondary"
                }
              >
                {item.label}
              </a>
            ),
          )}
        </div>
      );
  }
}

const SHELL: Record<Emphasis, string> = {
  lead: "glass-card card-lead rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 md:space-y-8",
  standard:
    "glass-card rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 space-y-6 md:space-y-8",
};

function Header({ study }: { study: CaseStudy }) {
  return (
    <header className="space-y-2">
      {study.kicker ? (
        <p className="text-sm text-[color:var(--text-secondary)]">
          {study.kicker}
        </p>
      ) : null}
      <h3 className="text-2xl md:text-3xl font-bold text-balance">
        {study.title}
      </h3>
    </header>
  );
}

export function CaseStudyArticle({
  study,
  emphasis = "standard",
}: {
  study: CaseStudy;
  emphasis?: Emphasis;
}) {
  const isLead = emphasis === "lead";

  // The flagship stays fully open — it is the one study you want read in full.
  if (isLead) {
    return (
      <article id={study.id} className={SHELL.lead}>
        <Header study={study} />
        {study.blocks.map((block, index) => (
          <Block key={`${study.id}-${index}`} block={block} bleed />
        ))}
      </article>
    );
  }

  // Everything else collapses to a scannable summary: the opening statement,
  // impact numbers if any, and any live links — deep detail behind a toggle.
  const [firstBlock, ...restBlocks] = study.blocks;
  const metricsBlock = restBlocks.find((block) => block.type === "metrics");
  const linkBlocks = restBlocks.filter((block) => block.type === "links");
  const foldedBlocks = restBlocks.filter(
    (block) => block.type !== "links" && block !== metricsBlock,
  );

  return (
    <article id={study.id} className={SHELL[emphasis]}>
      <Header study={study} />
      {firstBlock ? <Block block={firstBlock} /> : null}
      {metricsBlock ? <Block block={metricsBlock} /> : null}

      {foldedBlocks.length > 0 ? (
        <details className="group">
          <summary className="flex cursor-pointer select-none items-center gap-2 border-t border-[color:var(--border-subtle)] pt-5 text-sm font-medium text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors list-none [&::-webkit-details-marker]:hidden">
            <ChevronRightIcon className="shrink-0 transition-transform duration-200 motion-reduce:transition-none group-open:rotate-90" />
            <span className="group-open:hidden">Read full case study</span>
            <span className="hidden group-open:inline">Collapse</span>
          </summary>
          <div className="space-y-6 pt-6 md:space-y-8">
            {foldedBlocks.map((block, index) => (
              <Block key={`${study.id}-fold-${index}`} block={block} />
            ))}
          </div>
        </details>
      ) : null}

      {linkBlocks.map((block, index) => (
        <Block key={`${study.id}-link-${index}`} block={block} />
      ))}
    </article>
  );
}
