import FadeUp from "@/components/FadeUp";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/theresagarritano" },
];

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-between max-w-6xl mx-auto px-8 py-40">
      <div>
        <FadeUp delay={0.1}>
          <p className="text-xs uppercase tracking-[0.25em] text-[#00f2fe] mb-6">
            Contact
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight mb-20">
            Let&apos;s make<br />
            <span className="gradient-text">something.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="border-t border-[#1a1a1a] pt-16 flex flex-col gap-10">
            <p className="text-sm text-[#888884] max-w-sm leading-relaxed">
              Interested in working together or just want to connect? Reach out
              directly.
            </p>
            <a
              href="mailto:theresagarritano@gmail.com"
              className="group flex items-center gap-4 w-fit"
            >
              <span className="text-[clamp(1.2rem,3vw,2.2rem)] font-semibold text-[#f0ede8] group-hover:text-[#00f2fe] transition-colors duration-300">
                theresagarritano@gmail.com
              </span>
              <span className="text-[#00f2fe] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl">
                →
              </span>
            </a>
            <ul className="flex gap-8">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-[0.2em] text-[#555550] hover:text-[#ff007f] transition-colors duration-300"
                  >
                    {social.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>

      <FadeUp delay={0.5}>
        <p className="text-xs text-[#2a2a28] uppercase tracking-[0.2em] mt-20">
          © {new Date().getFullYear()} Theresa Garritano
        </p>
      </FadeUp>
    </section>
  );
}
