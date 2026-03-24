import FadeUp from "@/components/FadeUp";

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
    <section className="min-h-screen max-w-6xl mx-auto px-5 sm:px-8 py-36">
      <FadeUp delay={0.1}>
        <p className="text-xs uppercase tracking-[0.25em] text-[#00f2fe] mb-5">
          Work
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.92] tracking-tight mb-16">
          Selected<br />
          <span className="gradient-text">Experience</span>
        </h2>
      </FadeUp>

      <ul className="flex flex-col border-t border-[#1a1a1a]">
        {caseStudies.map((item, i) => (
          <FadeUp key={item.company} delay={Math.min(i * 0.08, 0.32)} as="li">
            <div className="group flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 py-10 border-b border-[#1a1a1a] transition-colors duration-300">
              {/* Accent bar */}
              <div
                className="hidden sm:block w-px self-stretch rounded-full shrink-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: item.accent }}
              />

              <span className="text-xs text-[#2a2a28] sm:w-8 shrink-0 sm:pt-1 group-hover:text-[#444440] transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="sm:w-52 shrink-0">
                <p
                  className="font-semibold text-lg text-[#f0ede8] transition-colors duration-300"
                  style={{ ["--c" as string]: item.accent }}
                >
                  <span className="group-hover:opacity-80 transition-opacity duration-300" style={{ color: undefined }}>
                    {item.company}
                  </span>
                </p>
                <p className="text-xs text-[#444440] mt-1 uppercase tracking-[0.15em]">
                  {item.role}
                </p>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                <p className="text-sm text-[#777774] leading-relaxed max-w-lg group-hover:text-[#999994] transition-colors duration-300">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 border border-[#1e1e1e] text-[#444440] rounded-full text-xs group-hover:border-[#2e2e2e] group-hover:text-[#666660] transition-all duration-300"
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
                    className="mt-1 group/link inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity duration-300 w-fit"
                    style={{ color: item.accent }}
                  >
                    View Case Study
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
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
