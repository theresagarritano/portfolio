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
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-2">Work</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm">
        A selection of companies and projects I&apos;ve designed for.{" "}
        {/* TODO: add case study links as they become available */}
      </p>
      <ul className="flex flex-col gap-6">
        {caseStudies.map((item) => (
          <li
            key={item.company}
            className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
          >
            <div className="sm:w-40 shrink-0">
              <p className="font-semibold text-gray-900 dark:text-white">{item.company}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.role}</p>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded text-xs font-medium"
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
                  className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors w-fit"
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
