"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 w-full z-50 bg-[#050505]/85 backdrop-blur-sm border-b border-[#1a1a1a]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        {/* h-14 makes the logo clickable for the full navbar height */}
        <Link
          href="/"
          className="flex items-center h-14 text-xs font-medium uppercase tracking-[0.2em] text-[#f0ede8] logo-glow"
          aria-label="Theresa Garritano — home"
        >
          Theresa Garritano
        </Link>
        <ul className="flex" role="list">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                {/* h-14 + px-4 fills the full nav height and adds horizontal padding — hover fires across the whole area */}
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center h-14 px-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive
                      ? "text-[#00f2fe]"
                      : "text-[#888884] hover:text-[#f0ede8]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
