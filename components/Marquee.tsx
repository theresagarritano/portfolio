const items = [
  "Product Design",
  "UX Research",
  "Design Systems",
  "Atlassian",
  "Figma",
  "Prototyping",
  "Webflow",
  "Human-Centered Design",
];

export default function Marquee() {
  const repeated = [...items, ...items];

  return (
    // aria-hidden: purely decorative — screen readers skip this entirely
    <div aria-hidden="true" className="overflow-hidden border-t border-[#1a1a1a] py-4 shrink-0">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-xs uppercase tracking-[0.2em] text-[#444440]">
            {item}
            <span className="gradient-text text-[10px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
