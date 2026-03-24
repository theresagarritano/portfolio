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
    <section className="min-h-screen max-w-6xl mx-auto px-8 py-40">
      <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96e] mb-6">
        About
      </p>
      <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight mb-20">
        Design is<br />decision.
      </h2>

      <div className="grid sm:grid-cols-2 gap-20 border-t border-[#1f1f1d] pt-16">
        <div className="flex flex-col gap-6 text-[#999994] leading-relaxed text-sm">
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
            className="mt-4 inline-flex w-fit text-xs uppercase tracking-[0.2em] text-[#f0ede8] border-b border-[#f0ede8] pb-0.5 hover:text-[#c9a96e] hover:border-[#c9a96e] transition-colors"
          >
            Download Resume
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-[#3a3a38] mb-6">
            Skills
          </p>
          <ul className="flex flex-col gap-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="text-sm text-[#999994] border-b border-[#1f1f1d] pb-3"
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
