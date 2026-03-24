import FadeUp from "@/components/FadeUp";

const skills = [
  { label: "Figma", color: "var(--cyan)" },
  { label: "UX Research", color: "var(--pink)" },
  { label: "Design Systems", color: "var(--cyan)" },
  { label: "Prototyping", color: "var(--pink)" },
  { label: "Webflow", color: "var(--cyan)" },
  { label: "Human-Centered Design", color: "var(--pink)" },
  { label: "Vibe Coding", color: "var(--cyan)" },
];

export default function About() {
  return (
    <section className="min-h-screen max-w-6xl mx-auto px-8 py-40">
      <FadeUp delay={0.1}>
        <p className="text-xs uppercase tracking-[0.25em] text-[#00f2fe] mb-6">
          About
        </p>
      </FadeUp>
      <FadeUp delay={0.2}>
        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight mb-20">
          Design is<br />
          <span className="gradient-text">decision.</span>
        </h2>
      </FadeUp>

      <div className="grid sm:grid-cols-2 gap-20 border-t border-[#1a1a1a] pt-16">
        <FadeUp delay={0.3}>
          <div className="flex flex-col gap-6 text-[#888884] leading-relaxed text-sm">
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
              className="mt-4 inline-flex w-fit text-xs uppercase tracking-[0.2em] text-[#f0ede8] border-b border-[#f0ede8] pb-0.5 hover:text-[#00f2fe] hover:border-[#00f2fe] transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#2a2a28] mb-6">
              Skills
            </p>
            <ul className="flex flex-col">
              {skills.map((skill, i) => (
                <li
                  key={skill.label}
                  className="group text-sm text-[#888884] border-b border-[#1a1a1a] py-4 flex items-center justify-between hover:text-[#f0ede8] transition-colors duration-300"
                >
                  <span>{skill.label}</span>
                  <span
                    className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: i % 2 === 0 ? "var(--cyan)" : "var(--pink)" }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
