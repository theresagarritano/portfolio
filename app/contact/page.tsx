const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/theresagarritano" },
];

export default function Contact() {
  return (
    <section className="min-h-screen flex flex-col justify-between max-w-6xl mx-auto px-8 py-40">
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96e] mb-6">
          Contact
        </p>
        <h2 className="text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.95] tracking-tight mb-20">
          Let&apos;s make<br />something.
        </h2>

        <div className="border-t border-[#1f1f1d] pt-16 flex flex-col gap-10">
          <p className="text-sm text-[#999994] max-w-sm leading-relaxed">
            Interested in working together or just want to connect? Reach out
            directly.
          </p>
          <a
            href="mailto:theresagarritano@gmail.com"
            className="text-[clamp(1.2rem,3vw,2.5rem)] font-semibold text-[#f0ede8] hover:text-[#c9a96e] transition-colors w-fit"
          >
            theresagarritano@gmail.com
          </a>
          <ul className="flex gap-8">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-[0.2em] text-[#666660] hover:text-[#f0ede8] transition-colors"
                >
                  {social.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-xs text-[#3a3a38] uppercase tracking-[0.2em] mt-20">
        © {new Date().getFullYear()} Theresa Garritano
      </p>
    </section>
  );
}
