import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";
import GenerateResumeButton from "@/components/GenerateResumeButton";

export const metadata: Metadata = {
  title: "About",
  description: "Lead Product Designer at Atlassian. IDEO-certified. RIT alumna. Based in Austin, TX.",
};

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
    <section className="min-h-screen max-w-6xl mx-auto px-5 sm:px-8 py-32">
      <FadeUp delay={0.1}>
        {/* aria-hidden: decorative section label, heading below is the real landmark */}
        <p aria-hidden="true" className="text-xs uppercase tracking-[0.25em] text-[#00f2fe] mb-5">
          About
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        {/* h1: this is the primary heading for this page */}
        <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.92] tracking-tight mb-16">
          Design is<br />
          <span className="gradient-text">decision.</span>
        </h1>
      </FadeUp>

      <div className="grid sm:grid-cols-2 gap-16 border-t border-[#1a1a1a] pt-14">
        <FadeUp delay={0.3}>
          {/* #888884 on #050505 = 6.3:1 — passes WCAG AA */}
          <div className="flex flex-col gap-5 text-[#888884] leading-relaxed text-sm">
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
            <GenerateResumeButton />
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div>
            {/* #888884 on #050505 = 6.3:1 — passes WCAG AA */}
            <p className="text-xs uppercase tracking-[0.25em] text-[#888884] mb-5">
              Skills
            </p>
            <ul className="flex flex-col" role="list">
              {skills.map((skill, i) => (
                <li
                  key={skill}
                  className="group flex items-center justify-between text-sm text-[#888884] border-b border-[#1a1a1a] py-4 hover:text-[#f0ede8] transition-colors duration-300"
                >
                  <span>{skill}</span>
                  {/* aria-hidden: purely decorative color dot */}
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: i % 2 === 0 ? "#00f2fe" : "#ff007f" }}
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
