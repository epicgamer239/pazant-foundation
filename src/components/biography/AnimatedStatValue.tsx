"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatValueProps = {
  value: string;
  motion?: "count" | "reveal";
};

export function AnimatedStatValue({ value, motion = "count" }: AnimatedStatValueProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [started, setStarted] = useState(false);
  const [display, setDisplay] = useState(motion === "count" ? "0" : value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!started) return;

    if (motion === "reveal") {
      setDisplay(value);
      return;
    }

    const target = Number.parseInt(value, 10);
    if (!Number.isFinite(target)) {
      setDisplay(value);
      return;
    }

    const duration = target > 20 ? 900 : 650;
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(String(Math.round(eased * target)));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, motion, value]);

  return (
    <p
      ref={ref}
      className={`bio-stat-value font-semibold tabular-nums ${started && motion === "reveal" ? "bio-stat-value--revealed" : ""}`}
    >
      {display}
    </p>
  );
}
