import type { CSSProperties } from "react";
import { FieldLabel } from "@/components/FieldLabel";
import { honorAwards, honorMilestones } from "@/content/biography";

export function BioHonorsSection() {
  return (
    <section className="panel-accent-top panel-hover">
      <FieldLabel>Honors & achievements</FieldLabel>
      <h2 className="prose-section-title mt-3 text-balance">Awards & historic milestones</h2>
      <p className="mt-4 max-w-3xl text-pretty text-ink-muted leading-relaxed">
        Mrs. Pazant&apos;s excellence as an educator earned her some of the highest recognitions
        available in the state and nation.
      </p>

      <div className="bio-honors-spotlight mt-10">
        {honorMilestones.map((milestone, index) => (
          <figure
            key={milestone.label}
            className="bio-honor-milestone stagger-enter"
            style={{ "--i": index } as CSSProperties}
          >
            <figcaption className="bio-honor-milestone-label">{milestone.label}</figcaption>
            <blockquote className="bio-honor-milestone-quote">
              <p className="text-pretty">{milestone.text}</p>
            </blockquote>
          </figure>
        ))}
      </div>

      <div className="bio-honors-register mt-10">
        <p className="bio-honors-register-heading">State & local recognition</p>
        <ul className="bio-honors-register-list">
          {honorAwards.map((award, index) => (
            <li
              key={`${award.title}-${award.year ?? award.note ?? index}`}
              className="bio-honors-register-row stagger-enter"
              style={{ "--i": index + 2 } as CSSProperties}
            >
              <span className="bio-honors-register-title">
                {award.title}
                {award.note ? (
                  <span className="bio-honors-register-note"> ({award.note.toLowerCase()})</span>
                ) : null}
              </span>
              {award.year ? (
                <time className="bio-honors-register-year" dateTime={award.year}>
                  {award.year}
                </time>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
