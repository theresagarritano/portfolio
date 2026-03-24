"use client";

// Zero-dependency fade-up using native IntersectionObserver + CSS transitions.
// Replaces framer-motion to eliminate ~140kB from the client bundle.

import { useEffect, useRef } from "react";

type Tag = "div" | "li" | "section" | "article" | "span" | "p";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}

export default function FadeUp({ children, delay = 0, className, as = "div" }: FadeUpProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    el.setAttribute("data-fade", "hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-fade", "visible");
          observer.disconnect();
        }
      },
      { rootMargin: "-60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = as as React.ElementType;

  return (
    <Component
      ref={ref}
      className={className}
      style={{ "--fade-delay": `${delay}s` } as React.CSSProperties}
    >
      {children}
    </Component>
  );
}
