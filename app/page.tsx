import Link from "next/link";
import Marquee from "@/components/Marquee";
import FadeUp from "@/components/FadeUp";

export default function Home() {
  return (
    // h-dvh: dynamic viewport height — accounts for mobile browser chrome.
    // flex-col so the section fills space above the marquee.
    // Marquee is always visible at the bottom without scrolling.
    <div className="flex flex-col" style={{ height: "100dvh", minHeight: "500px" }}>
      <section className="flex-1 flex flex-col justify-between px-5 sm:px-8 max-w-6xl mx-auto w-full py-24 min-h-0">
        <div className="flex flex-col gap-6 mt-auto pt-16">
          <FadeUp delay={0.1}>
            <p className="text-xs uppercase tracking-[0.25em] text-[#00f2fe]">
              Lead Product Designer
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.88] tracking-tight">
              <span className="gradient-text">Theresa</span>
              <br />
              <span className="text-[#f0ede8]">Garritano</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.35}>
            {/* #999994 on #050505 = 7.8:1 — passes WCAG AAA */}
            <p className="text-sm text-[#999994] max-w-xs leading-relaxed mt-2">
              I turn complex systems into memorable user experiences and beautiful interfaces.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.5}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 border-t border-[#1a1a1a] pt-8">
            <div className="flex items-center gap-2">
              {/* py-3 + -my-3 expands the hover area vertically without shifting layout */}
              <Link
                href="/projects"
                className="group flex items-center gap-2 py-3 px-4 -my-3 -ml-4 text-xs uppercase tracking-[0.2em] text-[#f0ede8] hover:text-[#00f2fe] transition-colors duration-300"
              >
                View Work
                <span aria-hidden="true" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300 text-[#00f2fe] opacity-0 group-hover:opacity-100">
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="py-3 px-4 -my-3 text-xs uppercase tracking-[0.2em] text-[#888884] hover:text-[#ff007f] transition-colors duration-300"
              >
                Get in Touch
              </Link>
            </div>
            {/* aria-hidden: supplementary location info, not critical for AT users */}
            <p aria-hidden="true" className="text-xs text-[#555550] uppercase tracking-[0.2em]">
              Atlassian · Austin, TX
            </p>
          </div>
        </FadeUp>
      </section>

      <Marquee />
    </div>
  );
}
