import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-between px-8 max-w-6xl mx-auto py-32">
      <div className="flex flex-col gap-8 mt-auto pt-24">
        <p className="text-xs uppercase tracking-[0.25em] text-[#c9a96e]">
          Lead Product Designer
        </p>
        <h1 className="text-[clamp(3rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight text-[#f0ede8]">
          Theresa<br />Garritano
        </h1>
        <p className="text-base text-[#666660] max-w-sm leading-relaxed">
          I turn complex systems into memorable user experiences and beautiful interfaces.
        </p>
      </div>

      <div className="flex items-end justify-between mt-24 border-t border-[#1f1f1d] pt-8">
        <div className="flex gap-10">
          <Link
            href="/projects"
            className="text-xs uppercase tracking-[0.2em] text-[#f0ede8] hover:text-[#c9a96e] transition-colors"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            className="text-xs uppercase tracking-[0.2em] text-[#666660] hover:text-[#f0ede8] transition-colors"
          >
            Get in Touch
          </Link>
        </div>
        <p className="text-xs text-[#3a3a38] uppercase tracking-[0.2em]">
          Atlassian · Austin, TX
        </p>
      </div>
    </section>
  );
}
