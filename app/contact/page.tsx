import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Theresa Garritano — Lead Product Designer at Atlassian.",
};

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/theresagarritano",
    ariaLabel: "Visit Theresa Garritano on LinkedIn (opens in new tab)",
  },
];

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-between max-w-6xl mx-auto px-5 sm:px-8 py-32">
      <div>
        <FadeUp delay={0.1}>
          <p aria-hidden="true" className="text-xs uppercase tracking-[0.25em] text-[#00f2fe] mb-5">
            Contact
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          {/* h1: primary heading for this page */}
          <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.92] tracking-tight mb-16">
            Let&apos;s make<br />
            <span className="gradient-text">something.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="border-t border-[#1a1a1a] pt-14 flex flex-col gap-8">
            {/* #888884 = 6.3:1 — passes WCAG AA */}
            <p className="text-sm text-[#888884] max-w-sm leading-relaxed">
              Interested in working together or just want to connect? Reach out
              directly.
            </p>

            <a
              href="mailto:theresagarritano@gmail.com"
              className="group inline-flex items-center gap-3 py-3 px-4 -mx-4 w-fit"
            >
              <span className="text-[clamp(1.1rem,2.5vw,2rem)] font-semibold text-[#f0ede8] group-hover:text-[#00f2fe] transition-colors duration-300 break-all sm:break-normal">
                theresagarritano@gmail.com
              </span>
              <span aria-hidden="true" className="shrink-0 text-[#00f2fe] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </a>

            <ul className="flex items-center gap-8" role="list">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    /* #888884 = 6.3:1 — passes WCAG AA */
                    className="group inline-flex items-center gap-2 py-3 px-4 -mx-4 text-xs uppercase tracking-[0.2em] text-[#888884] hover:text-[#ff007f] transition-colors duration-300"
                  >
                    {social.label}
                    <span aria-hidden="true" className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={0.5}>
        {/* aria-hidden: decorative copyright, not critical info for AT users */}
        <p aria-hidden="true" className="text-xs text-[#555550] uppercase tracking-[0.2em] mt-16">
          © {new Date().getFullYear()} Theresa Garritano
        </p>
      </FadeUp>
    </section>
  );
}
