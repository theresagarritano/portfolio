import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected design experience at Atlassian, Realtor.com, Funsize, BigCommerce, and Base CRM.",
};

const caseStudies = [
  {
    company: "Atlassian",
    role: "Lead Product Designer",
    description:
      "Leading product design across Atlassian's suite of collaboration tools. Focused on design systems, complex workflow UX, and cross-functional team alignment.",
    tags: ["Design Systems", "Product Design", "Figma"],
    link: "",
    accent: "#00f2fe",
  },
  {
    company: "Realtor.com",
    role: "Product Designer",
    description:
      "Designed end-to-end user experiences for one of the largest real estate platforms in the US, with a focus on search, discovery, and home buying flows.",
    tags: ["UX Research", "Product Design", "Prototyping"],
    link: "",
    accent: "#ff007f",
  },
  {
    company: "Funsize",
    role: "Product Designer",
    description:
      "Worked at a boutique product design agency crafting digital experiences for startups and enterprise clients across a range of industries.",
    tags: ["UX Design", "Client Work", "Webflow"],
    link: "",
    accent: "#00f2fe",
  },
  {
    company: "BigCommerce",
    role: "Product Designer",
    description:
      "Designed features for BigCommerce's merchant-facing platform, improving the e-commerce setup and management experience for thousands of merchants.",
    tags: ["E-Commerce", "Product Design", "Design Systems"],
    link: "",
    accent: "#ff007f",
  },
  {
    company: "Base CRM",
    role: "Product Designer",
    description:
      "Helped shape the UX of a modern CRM platform — improving sales workflows, data visualization, and mobile experiences for sales teams.",
    tags: ["SaaS", "UX Design", "Mobile"],
    link: "",
    accent: "#00f2fe",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen max-w-6xl mx-auto px-5 sm:px-8 py-32">
      <FadeUp delay={0.1}>
        <p aria-hidden="true" className="text-xs uppercase tracking-[0.25em] text-[#00f2fe] mb-5">
          Work
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        {/* h1: primary heading for this page */}
        <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.92] tracking-tight mb-16">
          Selected<br />
          <span className="gradient-text">Experience</span>
        </h1>
      </FadeUp>

      <ul className="flex flex-col border-t border-[#1a1a1a]" role="list">
        {caseStudies.map((item, i) => (
          <FadeUp key={item.company} delay={Math.min(i * 0.08, 0.32)} as="li">
            <div className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 py-10 border-b border-[#1a1a1a]">
              {/* aria-hidden: decorative accent bar */}
              <div
                aria-hidden="true"
                className="hidden sm:block w-px self-stretch rounded-full shrink-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: item.accent }}
              />

              {/* aria-hidden: decorative index number */}
              <span aria-hidden="true" className="text-xs text-[#555550] sm:w-8 shrink-0 sm:pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="sm:w-52 shrink-0">
                <p className="font-semibold text-lg text-[#f0ede8]">
                  {item.company}
                </p>
                {/* #888884 on #050505 = 6.3:1 — passes WCAG AA */}
                <p className="text-xs text-[#888884] mt-1 uppercase tracking-[0.15em]">
                  {item.role}
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                {/* #888884 = 6.3:1 — passes WCAG AA */}
                <p className="text-sm text-[#888884] leading-relaxed max-w-lg group-hover:text-[#b0adaa] transition-colors duration-300">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-2 mt-1" role="list" aria-label={`${item.company} skills`}>
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 border border-[#2a2a2a] text-[#888884] rounded-full text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.company} case study (opens in new tab)`}
                    className="mt-1 group/link inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity duration-300 w-fit"
                    style={{ color: item.accent }}
                  >
                    View Case Study
                    <span aria-hidden="true" className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                )}
              </div>
            </div>
          </FadeUp>
        ))}
      </ul>
    </section>
  );
}
