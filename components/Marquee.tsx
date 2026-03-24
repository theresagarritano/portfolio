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
    <div className="overflow-hidden border-y border-[#1a1a1a] py-4 my-0">
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-xs uppercase tracking-[0.2em] text-[#333330]">
            {item}
            <span className="gradient-text">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
