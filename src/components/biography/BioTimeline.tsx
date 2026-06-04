import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { timelineEras } from "@/content/biography";

export function BioTimeline() {
  return (
    <section className="bio-timeline-band border-t border-line bg-surface-raised">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <SectionHeading
          title="Timeline of milestones"
          subtitle="Five chapters of a career that shaped Beaufort students and reached across South Carolina and the nation."
        />

        <ol className="bio-timeline-track mt-10 md:mt-12" aria-label="Career timeline by era">
          {timelineEras.map((block, index) => {
            const indexLabel = String(index + 1).padStart(2, "0");
            const emphasized = "emphasis" in block && block.emphasis;

            return (
              <li
                key={block.era}
                className={`bio-timeline-era-card stagger-enter panel-hover ${
                  emphasized ? "bio-timeline-era-card--emphasis panel" : "panel"
                }`}
                style={{ "--i": index } as CSSProperties}
              >
                <span className="bio-timeline-era-index" aria-hidden>
                  {indexLabel}
                </span>
                <div className="bio-timeline-era-body min-w-0">
                  <h3 className="font-semibold text-[clamp(1.15rem,2.2vw,1.35rem)] leading-snug text-ink">
                    {block.era}
                  </h3>
                  <ul className="bio-timeline-milestones mt-4">
                    {block.items.map((item) => (
                      <li key={item} className="bio-timeline-milestone text-sm leading-relaxed text-ink-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
