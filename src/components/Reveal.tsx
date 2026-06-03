"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
  id?: string;
};

/**
 * Scroll-triggered motion that never hides content: only a short rise once in view.
 */
export function Reveal({ children, className = "", delay = 0, as: Tag = "div", id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlayed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal-on-view${played ? " reveal-on-view--played" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
