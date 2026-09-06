export type CaseStudyLink = {
  href: string;
  label: string;
  variant: "primary" | "secondary";
};

export type CaseStudyBlock =
  | { type: "paragraph"; title?: string; text: string }
  | { type: "list"; title: string; items: string[] }
  | { type: "grid"; columns: { title: string; text?: string; items?: string[] }[] }
  | { type: "diagram"; title: string; content: string }
  | { type: "metrics"; items: { value: string; label: string }[] }
  | { type: "callout"; text: string }
  | { type: "links"; items: CaseStudyLink[] };

export type CaseStudy = {
  id: string;
  kicker?: string;
  title: string;
  blocks: CaseStudyBlock[];
};

export type ExperienceNavItem = {
  id: string;
  label: string;
};
