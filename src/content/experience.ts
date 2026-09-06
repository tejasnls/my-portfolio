import type { CaseStudy, ExperienceNavItem } from "@/content/types";

export const experienceNav: ExperienceNavItem[] = [
  { id: "global-search", label: "Global Search" },
  { id: "semantic-typeahead", label: "Semantic Typeahead" },
  { id: "search-as-a-service", label: "Search as a Service" },
  { id: "frontend-platform", label: "Frontend Platform Ownership" },
  { id: "partner-servicing-portal", label: "Partner Servicing Portal" },
];

export const currentSearchStudies: CaseStudy[] = [
  {
    id: "global-search",
    kicker: "Global Search",
    title: "Micro-Frontend Tenancy Migration",
    blocks: [
      {
        type: "grid",
        columns: [
          {
            title: "Problem",
            text: "Global Search ran inside a shared enterprise micro-frontend, mounted on another team's root module. Its release lifecycle, configuration, and integration ownership were coupled to that host. The host also controlled client-side script execution, which left an analytics gap in the first seconds after page load.",
          },
          {
            title: "Constraints",
            items: [
              "Search was coupled to a shared enterprise MFE root module.",
              "Release and configuration ownership sat with the host team, not with Search.",
              "The existing user-facing Search URL had to stay unchanged.",
              "Analytics, experimentation, feedback, and chatbot integrations had to keep working across the move.",
              "Analytics behavior had to remain correct through the cutover.",
            ],
          },
        ],
      },
      {
        type: "diagram",
        title: "Architecture",
        content: `shared enterprise OneApp MFE
        ↓
Search coupled to shared root
        ↓
dedicated Search OneApp MFE
        ↓
Akamai rewrite behind existing user-facing URL
        ↓
independent release / configuration / analytics ownership`,
      },
      {
        type: "paragraph",
        title: "Architecture & approach",
        text: "Led the frontend architecture and migration strategy for Global Search, driving the transition from a shared enterprise Search frontend to independently owned OneApp MFE tenancy. The dedicated-tenancy direction came from technical SMEs and Staff Engineering; I owned turning it into an executable migration — designing the new root module, mapping runtime dependencies, and sequencing the cutover across teams. The new model established a dedicated OneApp MFE and root module with independent ownership of configuration, releases, and integrations.",
      },
      {
        type: "paragraph",
        title: "Routing transition",
        text: "Drove the implementation of an Akamai rewrite that placed the new MFE behind the existing user-facing URL without a browser redirect, preserving the established user experience. The network team implemented the Akamai configuration itself; I designed the rewrite behavior and owned how the new tenancy sat behind the unchanged public URL.",
      },
      {
        type: "paragraph",
        title: "Integrations",
        text: "Coordinated the migration of analytics, experimentation, feedback, and chatbot integrations while preserving existing behavior across the new tenancy boundary.",
      },
      {
        type: "paragraph",
        title: "Analytics correctness",
        text: "Diagnosed an approximately 10-second analytics blind spot caused by client-side script execution order in the previous host: Search analytics scripts could run after other host scripts, so early interactions after page load were not captured. Drove the fix by reworking script execution order across analytics and experimentation integrations, closing the gap.",
      },
      {
        type: "list",
        title: "Outcome & Lessons",
        items: [
          "Search owns its release lifecycle, configuration, and deployment boundaries independently of the previous host.",
          "Eliminated the approximately 10-second analytics blind spot by reworking client-side script execution order across analytics and experimentation integrations.",
          "Owned production rollout and post-release validation, resolving integration and behavioral issues as the new tenancy was introduced.",
          "Authored migration guidelines and provided technical direction to engineers adopting the new tenancy architecture.",
          "Lesson: tenancy boundaries decide who owns releases, configuration, and production behavior — not just where the UI is mounted.",
        ],
      },
    ],
  },
  {
    id: "semantic-typeahead",
    kicker: "Semantic Typeahead",
    title: "Enterprise Search Intelligence",
    blocks: [
      {
        type: "paragraph",
        title: "Overview",
        text: "Owned the end-to-end frontend integration, rollout, and observability strategy for Semantic Typeahead, bringing AI-assisted search suggestions into the enterprise Search experience. Backend retrieval combines lexical, vector, and LLM-based techniques; the frontend integrates with that capability, manages the request lifecycle at the Search Box, carries application context, and controls how the experience is exposed and measured.",
      },
      {
        type: "diagram",
        title: "Architecture",
        content: `user input
        ↓
debounce + in-flight cancellation
        ↓
Search API (with consuming MFE / tenancy context)
        ↓
hybrid lexical / vector / LLM retrieval
        ↓
context-aware suggestions`,
      },
      {
        type: "paragraph",
        title: "Frontend integration",
        text: "Designed and owned the frontend integration for semantic suggestions, including debounced requests (200ms), in-flight cancellation, stale-response protection, and tenancy-aware request context. As the user types, rapid input creates concurrent in-flight requests; without cancellation an older response can resolve after a newer one and render suggestions for a query the user has already moved past. Request-lifecycle handling at the Search Box keeps the visible suggestions aligned with the latest input.",
      },
      {
        type: "paragraph",
        title: "Context-aware search",
        text: "Search Box is consumed by independently deployed MFEs and tenancies and can also be embedded in non-MFE pages. The frontend identifies the consuming application and passes that context with each request, so the same term can resolve to suggestions scoped to where the user actually is. Search context is part of the request, not a filter applied to results.",
      },
      {
        type: "paragraph",
        title: "Hybrid retrieval",
        text: "Backend retrieval combines lexical matching, vector/embedding similarity, and LLM-based expansion: lexical covers explicit keyword matches, vector captures related meaning, and the LLM layer helps interpret intent. The frontend integrates with this semantic retrieval capability and presents the resulting suggestions.",
      },
      {
        type: "paragraph",
        title: "Rollout",
        text: "Designed a deterministic GUID-based cohort rollout mechanism to control semantic-search exposure across users and tenancies: a stable value derived from the user's GUID maps to a percentage range and is compared against a rollout threshold, so a user's assignment stays consistent between sessions. Stable cohorts keep measurement clean and limit blast radius across independently deployed consumers. Worked within model-governance requirements so semantic suggestions could be safely exposed through the Search experience.",
      },
      {
        type: "paragraph",
        title: "Observability",
        text: "Defined and implemented first-party telemetry capturing search terms, surfaced suggestions, selection behavior, and suggestion position, to measure adoption and downstream behavior. Partnered with Product, Analytics, Marketing Operations, and Engineering to shape rollout, measurement, and adoption strategy. Observability was part of the feature design, not a follow-up.",
      },
      {
        type: "paragraph",
        title: "Execution leadership",
        text: "Decomposed PI-level initiatives into executable stories, estimated and delegated work, and provided technical direction through implementation and review. Owned production behavior and troubleshooting through rollout, addressing issues across the request, suggestion, and instrumentation paths.",
      },
      {
        type: "paragraph",
        title: "Design system",
        text: "Uplifted the Search Box to the latest American Express Design Language System (DLS) for accessibility, design consistency, and alignment with current reusable UI patterns.",
      },
      {
        type: "list",
        title: "Outcome & Lessons",
        items: [
          "Introduced intent-aware suggestions in the enterprise Search Box, designed to improve suggestion relevance over static keyword matching.",
          "Established a governed, deterministic rollout path for an AI-assisted experience across independently deployed consumers.",
          "First-party telemetry made suggestion behavior measurable rather than assumed.",
          "Lesson: for a shared Search Box, request lifecycle, consumer context, and telemetry are architecture, not polish.",
        ],
      },
    ],
  },
  {
    id: "search-as-a-service",
    kicker: "Search as a Service",
    title: "Internal Workflow Platform for Search Operations",
    blocks: [
      {
        type: "paragraph",
        title: "Problem",
        text: "Search and Typeahead operations depended on a manual, spreadsheet-driven data-review process: backend teams exported Search keywords to Excel, Product reviewed and edited them by hand, and backend teams then ran internal code to apply the changes to Search tables. The goal was to replace that process with an operator-facing application and an API-driven workflow, on a platform that could host further Search operations workflows rather than a single one-off tool.",
      },
      {
        type: "paragraph",
        title: "Platform architecture",
        text: "Architected and established the frontend platform foundation for the internal Search workflow application, spanning MFE composition, SSO, RBAC, environments, and initial workflow design. Established the OneApp MFE root, a shared container for common layout and navigation, and an independent child-module structure so additional workflows can be added without disturbing existing ones. Provisioned the application and cloud services and stood up Dev and QA environments.",
      },
      {
        type: "diagram",
        title: "Architecture",
        content: `root module
        ↓
shared container (layout, navigation)
        ↓
independent child workflow modules`,
      },
      {
        type: "paragraph",
        title: "Access control",
        text: "Configured application RBAC around enterprise SSO entitlements, mapping employee access groups to workflow-level permissions so access can be granted per workflow as the platform grows.",
      },
      {
        type: "paragraph",
        title: "Search Data Review workflow",
        text: "Led the design of the initial Search Data Review workflow — reviewing, accepting, rejecting, and replacing Search keywords alongside associated centroid data — translating the manual spreadsheet-driven process into an operator-facing, API-driven application experience. Worked closely with backend engineering to define the frontend around the new workflow.",
      },
      {
        type: "paragraph",
        title: "Prototyping",
        text: "Used AI-assisted prototyping to explore the operator experience and accelerate design iterations, keeping design direction aligned with the American Express Design Language System and reusable enterprise UI patterns.",
      },
      {
        type: "paragraph",
        title: "Technical leadership",
        text: "Provided technical direction to engineers working on the application, decomposed work, delegated implementation, reviewed contributions, and established patterns for building additional workflows. Mentored engineers joining the team on the platform architecture and how the workflows fit together.",
      },
      {
        type: "list",
        title: "Outcome & Lessons",
        items: [
          "Established a reusable workflow platform: MFE composition, shared container, independent workflow modules, environments, SSO, and workflow-level RBAC.",
          "Defined the operator-facing Search Data Review workflow and the API-driven interaction model replacing manual spreadsheet review.",
          "Set implementation patterns and technical direction for engineers extending the platform with further workflows.",
          "Lesson: platform shape — root, shared container, independently shippable workflows, module-level access — is what lets the next operational tool start as a workflow instead of another isolated app.",
        ],
      },
    ],
  },
  {
    id: "frontend-platform",
    kicker: "Frontend Platform Ownership",
    title: "Engineering Practices & Release Architecture",
    blocks: [
      {
        type: "paragraph",
        title: "Overview",
        text: "Served as the frontend architecture and release engineering owner for the Search application, shaping both how the codebase evolved and how the team shipped it. This work spans multiple Search UI modules rather than a single product feature.",
      },
      {
        type: "paragraph",
        title: "Release architecture",
        text: "Established a OneFlow-based release model centered on a continuously releasable main, restructuring branch and release workflows to improve release independence and reduce coordination overhead. When I joined, release branches had become long-lived and were in some cases treated as default branches, which made release state hard to reason about. The new model keeps main releasable and makes the release workflow more predictable and independent.",
      },
      {
        type: "list",
        title: "Modernization",
        items: [
          "Led modernization of the legacy frontend, replacing outdated class-component patterns with modern React.",
          "Removed recurring code smells that made change riskier.",
          "Improved performance and maintainability across the modules that needed it.",
        ],
      },
      {
        type: "list",
        title: "Engineering practices",
        items: [
          "Established frontend engineering practices and conventions around implementation, migration, release readiness, and technical review.",
          "Authored architecture documentation and migration guidance for the Search frontend.",
        ],
      },
      {
        type: "list",
        title: "Technical leadership",
        items: [
          "Provided architectural direction, conducted technical reviews, and mentored engineers.",
          "Served as a point of ownership for difficult frontend and release decisions — the person other engineers came to for architecture, migration, and release guidance.",
        ],
      },
    ],
  },
];

export const previousWorkStudies: CaseStudy[] = [
  {
    id: "partner-servicing-portal",
    kicker: "Previous work · Partner Servicing Portal",
    title: "Enterprise Onboarding Platform",
    blocks: [
      {
        type: "paragraph",
        title: "Overview",
        text: "Partner Servicing Portal is an enterprise onboarding platform used by partner banks to onboard and launch card products in the American Express ecosystem, built around complex multi-step onboarding workflows and product lifecycle dashboards. I was one of several engineers on the project and co-owned frontend delivery for critical Partner Servicing workflows.",
      },
      {
        type: "paragraph",
        title: "Ownership",
        text: "Co-owned frontend delivery for critical Partner Servicing workflows, driving measurable improvements in performance and accessibility while strengthening frontend testing and security practices. Owned significant parts of the multi-step onboarding workflows and lifecycle dashboards, took feature ownership, and served as a technical point of contact during periods when the tech lead was unavailable.",
      },
      {
        type: "metrics",
        items: [
          { value: "~30%", label: "Page-load performance improvement" },
          { value: "~45%", label: "Accessibility scoring improvement" },
        ],
      },
      {
        type: "list",
        title: "Performance & accessibility",
        items: [
          "Improved frontend performance by reducing unnecessary re-renders and restructuring state ownership, contributing to an approximately 30% improvement in page-load performance.",
          "Led a broad accessibility remediation effort using axe DevTools and WCAG 2.2 validation, introducing semantic and ARIA improvements across the frontend and driving an approximately 45% improvement in accessibility scoring.",
        ],
      },
      {
        type: "list",
        title: "Testing & security",
        items: [
          "Led the migration from Enzyme to React Testing Library, modernizing component tests and strengthening unit/integration coverage around critical workflows.",
          "Strengthened frontend security practices through PRISMA-driven remediation and ongoing dependency vulnerability management.",
        ],
      },
      {
        type: "paragraph",
        title: "Cross-functional",
        text: "Partnered across product, design, QA, security, and engineering to deliver and support frontend workflows, including production issues and releases for the features I owned.",
      },
    ],
  },
];
