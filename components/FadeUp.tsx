"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Tag = "div" | "li" | "section" | "article" | "span" | "p";

const MotionTag: Record<Tag, React.ElementType> = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  p: motion.p,
};

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: Tag;
}

export default function FadeUp({ children, delay = 0, className, as = "div" }: FadeUpProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Component = MotionTag[as];

  return (
    <Component
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
