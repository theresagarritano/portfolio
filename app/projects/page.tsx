const caseStudies = [
  {
    company: "Atlassian",
    role: "Lead Product Designer",
    description:
      "Leading product design across Atlassian's suite of collaboration tools. Focused on design systems, complex workflow UX, and cross-functional team alignment.",
    tags: ["Design Systems", "Product Design", "Figma"],
    link: "",
  },
  {
    company: "Realtor.com",
    role: "Product Designer",
    description:
      "Designed end-to-end user experiences for one of the largest real estate platforms in the US, with a focus on search, discovery, and home buying flows.",
    tags: ["UX Research", "Product Design", "Prototyping"],
    link: "",
  },
  {
    company: "Funsize",
    role: "Product Designer",
    description:
      "Worked at a boutique product design agency crafting digital experiences for startups and enterprise clients across a range of industries.",
    tags: ["UX Design", "Client Work", "Webflow"],
    link: "",
  },
  {
    company: "BigCommerce",
    role: "Product Designer",
    description:
      "Designed features for BigCommerce's merchant-facing platform, improving the e-commerce setup and management experience for thousands of merchants.",
    tags: ["E-Commerce", "Product Design", "Design Systems"],
    link: "",
  },
  {
    company: "Base CRM",
    role: "Product Designer",
    description:
      "Helped shape the UX of a modern CRM platform — improving sales workflows, data visualization, and mobile experiences for sales teams.",
    tags: ["SaaS", "UX Design", "Mobile"],
    link: "",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen max-w-6xl mx-auto px-8 py-40">
      <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96e] mb-6">
        Work
      </p>
      <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight mb-20">
        Selected<br />Experience
      </h2>

      <ul className="flex flex-col border-t border-[#1f1f1d]">
        {caseStudies.map((item, i) => (
          <li
            key={item.company}
            className="group flex flex-col sm:flex-row sm:items-start gap-6 py-10 border-b border-[#1f1f1d] hover:border-[#3a3a38] transition-colors"
          >
            <span className="text-xs text-[#3a3a38] w-8 shrink-0 pt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="sm:w-56 shrink-0">
              <p className="font-semibold text-[#f0ede8] text-lg">{item.company}</p>
              <p className="text-xs text-[#666660] mt-1 uppercase tracking-[0.15em]">{item.role}</p>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-sm text-[#999994] leading-relaxed max-w-lg">
                {item.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-3 py-1 border border-[#1f1f1d] text-[#666660] rounded-full text-xs"
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
                  className="text-xs uppercase tracking-[0.2em] text-[#c9a96e] hover:opacity-60 transition-opacity w-fit"
                >
                  View Case Study →
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
