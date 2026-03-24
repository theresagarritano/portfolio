import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "In-depth case studies from Theresa Garritano's work in product design. Available by request.",
};

export default function CaseStudies() {
  return (
    <section className="min-h-screen max-w-6xl mx-auto px-5 sm:px-8 py-32">
      <FadeUp delay={0.1}>
        <p aria-hidden="true" className="text-xs uppercase tracking-[0.25em] text-[#00f2fe] mb-5">
          Case Studies
        </p>
      </FadeUp>

      <FadeUp delay={0.2}>
        <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.92] tracking-tight mb-16">
          The details /<br />
          <span className="gradient-text">are everything.</span>
        </h1>
      </FadeUp>

      <div className="border-t border-[#1a1a1a] pt-14 max-w-xl">
        <FadeUp delay={0.3}>
          <div className="flex flex-col gap-5 text-[#888884] leading-relaxed text-sm">
            <p>
              My case studies go deep — covering research synthesis, systems thinking,
              cross-functional collaboration, and the decisions that shaped the final
              experience. They reflect work done at Atlassian and beyond.
            </p>
            <p>
              Due to NDA and confidentiality agreements, detailed case studies are
              shared selectively. If you&apos;re a recruiter, design leader, or potential
              collaborator, I&apos;d love to walk you through the work directly.
            </p>
            <Link
              href="/contact"
              className="mt-1 group inline-flex items-center gap-2 py-3 px-4 -mx-4 w-fit text-xs uppercase tracking-[0.2em] text-[#f0ede8] hover:text-[#00f2fe] transition-colors duration-300"
            >
              Start a conversation
              <span aria-hidden="true" className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
