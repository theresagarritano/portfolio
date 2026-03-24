import Link from "next/link";
import Marquee from "@/components/Marquee";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-between px-8 max-w-6xl mx-auto py-32">
        <div className="flex flex-col gap-8 mt-auto pt-24">
          <FadeUp delay={0.1}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#00f2fe]">
              Lead Product Designer
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight">
              <span className="gradient-text">Theresa</span>
              <br />
              <span className="text-[#f0ede8]">Garritano</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.35}>
            <p className="text-base text-[#555550] max-w-sm leading-relaxed">
              I turn complex systems into memorable user experiences and beautiful interfaces.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.5}>
          <div className="flex items-end justify-between mt-24 border-t border-[#1a1a1a] pt-8">
            <div className="flex gap-10">
              <Link
                href="/projects"
                className="text-xs uppercase tracking-[0.2em] text-[#f0ede8] hover:text-[#00f2fe] transition-colors duration-300 cta-pulse px-4 py-2 border border-[#1a1a1a] rounded-full hover:border-[#00f2fe]"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.2em] text-[#555550] hover:text-[#ff007f] transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
            <p className="text-xs text-[#2a2a28] uppercase tracking-[0.2em]">
              Atlassian · Austin, TX
            </p>
          </div>
        </FadeUp>
      </section>

      <Marquee />
    </>
  );
}
