import Link from "next/link";
import Marquee from "@/components/Marquee";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-between px-5 sm:px-8 max-w-6xl mx-auto py-28">
        <div className="flex flex-col gap-6 mt-auto pt-20">
          <FadeUp delay={0.1}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#00f2fe]">
              Lead Product Designer
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-[clamp(3.2rem,10vw,9rem)] font-bold leading-[0.88] tracking-tight">
              <span className="gradient-text">Theresa</span>
              <br />
              <span className="text-[#f0ede8]">Garritano</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.35}>
            <p className="text-sm text-[#555550] max-w-xs leading-relaxed mt-2">
              I turn complex systems into memorable user experiences and beautiful interfaces.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-16 border-t border-[#1a1a1a] pt-8">
            <div className="flex items-center gap-8">
              <Link
                href="/projects"
                className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#f0ede8] hover:text-[#00f2fe] transition-colors duration-400"
              >
                View Work
                <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300 text-[#00f2fe] opacity-0 group-hover:opacity-100">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.2em] text-[#555550] hover:text-[#ff007f] transition-colors duration-400"
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
