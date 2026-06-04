import type { CSSProperties } from "react";
import { FieldLabel } from "@/components/FieldLabel";

const coreValues = [
  {
    title: "Stewardship",
    description:
      "Disciplined governance, responsible decision-making, and careful stewardship of entrusted resources.",
  },
  {
    title: "Educational Opportunity",
    description:
      "Every Beaufort student deserves access to learning pathways that expand their possibilities and support long-term success.",
  },
  {
    title: "Future-Ready Preparation",
    description:
      "Preparing students for future-ready pathways by building practical skills, confidence, and readiness for postsecondary opportunities.",
  },
  {
    title: "Community Commitment",
    description:
      "Investing in Beaufort's young people and partnering with schools, local businesses, and community organizations to strengthen opportunity, access, and long-term impact.",
  },
  {
    title: "Student-Centered Impact",
    description:
      "Designing programs and scholarships that meet real student needs and support transitions.",
  },
  {
    title: "Integrity",
    description: "Operating with transparency, accountability, and fairness.",
  },
  {
    title: "Legacy of Service",
    description:
      "Carrying forward Mrs. Pazant's dedication to education, service, and community uplift.",
  },
] as const;

export function CoreValues() {
  return (
    <div className="values-surface values-block">
      <div className="values-intro panel">
        <FieldLabel>Guiding Principles</FieldLabel>
        <h3 className="prose-section-title mt-3">Core Values</h3>
        <p className="text-pretty mt-4 max-w-prose text-base leading-relaxed text-ink-muted">
          Seven commitments that shape how the Foundation governs, partners, and invests in Beaufort
          students.
        </p>
      </div>

      <ol className="values-mosaic" aria-label="Foundation core values">
        {coreValues.map((value, index) => {
          const indexLabel = String(index + 1).padStart(2, "0");

          return (
            <li
              key={value.title}
              className="value-tile stagger-enter panel-hover"
              style={{ "--i": index } as CSSProperties}
            >
              <span className="value-tile-index" aria-hidden>
                {indexLabel}
              </span>
              <div className="value-tile-body">
                <h4 className="value-tile-title">{value.title}</h4>
                <p className="value-tile-desc">{value.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
