import FadeUp from "@/components/FadeUp";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/theresagarritano" },
];

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-between max-w-6xl mx-auto px-5 sm:px-8 py-36">
      <div>
        <FadeUp delay={0.1}>
          <p className="text-xs uppercase tracking-[0.25em] text-[#00f2fe] mb-5">
            Contact
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.92] tracking-tight mb-16">
            Let&apos;s make<br />
            <span className="gradient-text">something.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="border-t border-[#1a1a1a] pt-14 flex flex-col gap-8">
            <p className="text-sm text-[#777774] max-w-sm leading-relaxed">
              Interested in working together or just want to connect? Reach out
              directly.
            </p>

            <a
              href="mailto:theresagarritano@gmail.com"
              className="group inline-flex items-center gap-3 w-fit"
            >
              <span className="text-[clamp(1.1rem,2.5vw,2rem)] font-semibold text-[#f0ede8] group-hover:text-[#00f2fe] transition-colors duration-400 break-all sm:break-normal">
                theresagarritano@gmail.com
              </span>
              <span className="shrink-0 text-[#00f2fe] opacity-0 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </a>

            <ul className="flex items-center gap-8">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#444440] hover:text-[#ff007f] transition-colors duration-300"
                  >
                    {social.label}
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={0.5}>
        <p className="text-xs text-[#2a2a28] uppercase tracking-[0.2em] mt-16">
          © {new Date().getFullYear()} Theresa Garritano
        </p>
      </FadeUp>
    </section>
  );
}
