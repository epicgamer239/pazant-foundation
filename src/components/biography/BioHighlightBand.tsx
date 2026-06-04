import type { CSSProperties } from "react";
import { bioHighlights } from "@/content/biography";
import { AnimatedStatValue } from "@/components/biography/AnimatedStatValue";

export function BioHighlightBand() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
      {bioHighlights.map((item, index) => (
        <div
          key={item.label}
          className="bio-stat panel panel-hover stagger-enter"
          style={{ "--i": index } as CSSProperties}
        >
          <AnimatedStatValue value={item.value} motion={item.motion} />
          <p className="mt-2 text-sm font-semibold text-ink">{item.label}</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}
