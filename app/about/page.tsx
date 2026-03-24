const skills = [
  "Figma",
  "UX Research",
  "Design Systems",
  "Prototyping",
  "Webflow",
  "Human-Centered Design",
  "Vibe Coding",
];

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold mb-10">About Me</h2>
      <div className="grid sm:grid-cols-2 gap-12">
        <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            I&apos;m a Lead Product Designer at Atlassian, based in Austin, TX.
            I specialize in turning complex systems into intuitive, memorable
            user experiences — with a strong eye for interface craft and
            design systems.
          </p>
          <p>
            I hold certifications in Human-Centered Design from IDEO and am a
            Webflow Enterprise Partner. I studied at the Rochester Institute of
            Technology&apos;s College of Imaging Arts &amp; Sciences.
          </p>
          <p>
            Previously, I&apos;ve designed at Realtor.com, Funsize, BigCommerce,
            and Base CRM.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-900 dark:text-white hover:border-gray-500 transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
