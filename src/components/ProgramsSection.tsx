"use client";

import { useId, useState, useEffect } from "react";
import { StatusBadge } from "@/components/StatusBadge";

type Program = {
  title: string;
  status: string;
  description: string;
  includes: string[];
  note: string;
};

const currentPrograms: Program[] = [
  {
    title: "Rosalie F. Pazant Scholars Program",
    status: "Active now",
    description:
      "The Foundation's initial and primary focus is providing scholarships for Beaufort high school seniors who are preparing for postsecondary education and future-ready pathways.",
    includes: [
      "College and career advising to support applications, financial aid, and postsecondary planning",
      "Student support resources that strengthen readiness and confidence",
      "Early exposure opportunities as partnerships develop over time",
    ],
    note: "This program reflects the Foundation's commitment to disciplined governance and meaningful, achievable impact in its first phase.",
  },
];

const upcomingPrograms: Program[] = [
  {
    title: "Future-Ready Student Pathways",
    status: "Planned",
    description:
      "As the Foundation grows, it plans to develop future-ready student pathway initiatives that help students build practical skills, confidence, and readiness for education and early career opportunities.",
    includes: [
      "Career exposure sessions with local employers",
      "Workplace-readiness workshops on communication and professionalism",
      "Mentorship with leaders from Beaufort's business and civic communities",
    ],
    note: "These initiatives will be introduced gradually as partnerships and capacity expand.",
  },
  {
    title: "School, Business & Community Partnerships",
    status: "In development",
    description:
      "The Foundation intends to build a strong network of partners to support student success across Beaufort.",
    includes: [
      "School partnerships aligned with district needs",
      "Local business collaborations for exposure and applied learning",
      "Community organization engagement for student wellbeing and transitions",
    ],
    note: "These partnerships represent the Foundation's long-term vision for a coordinated, community-wide commitment to Beaufort students.",
  },
];

type TabId = "current" | "upcoming";

function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="panel panel-hover">
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
        <h3 className="font-serif text-xl text-ink md:text-2xl">{program.title}</h3>
        <StatusBadge>{program.status}</StatusBadge>
      </div>
      <p className="text-pretty mt-5 max-w-3xl text-lg leading-relaxed text-ink-muted">
        {program.description}
      </p>
      <ul className="mt-5 grid gap-2 text-sm text-ink-muted sm:grid-cols-2">
        {program.includes.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="font-semibold text-accent" aria-hidden>
              ·
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-5 border-t border-line pt-5 text-sm text-ink-muted">{program.note}</p>
    </article>
  );
}

export function ProgramsSection() {
  const [tab, setTab] = useState<TabId>("current");
  const [panelKey, setPanelKey] = useState(0);
  const baseId = useId();

  useEffect(() => {
    setPanelKey((k) => k + 1);
  }, [tab]);
  const currentPanelId = `${baseId}-current`;
  const upcomingPanelId = `${baseId}-upcoming`;

  const activePrograms = tab === "current" ? currentPrograms : upcomingPrograms;

  return (
    <section id="programs" className="section-y scroll-mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-start md:justify-between">
          <header className="max-w-2xl">
            <h2 className="font-serif text-balance text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.12] tracking-[-0.02em] text-ink">
              Our programs
            </h2>
            <p className="text-pretty mt-4 text-lg leading-relaxed text-ink-muted">
              {tab === "current"
                ? "What the Foundation offers today for Beaufort students."
                : "Programs we are building as partnerships and capacity expand."}
            </p>
          </header>

          <div
            role="tablist"
            aria-label="Program timeline"
            className="inline-flex shrink-0 border border-line bg-surface-raised p-1"
          >
            {(
              [
                { id: "current" as const, label: "Current" },
                { id: "upcoming" as const, label: "Upcoming" },
              ] as const
            ).map(({ id, label }) => {
              const selected = tab === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${id}`}
                  aria-selected={selected}
                  aria-controls={id === "current" ? currentPanelId : upcomingPanelId}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setTab(id)}
                  className={`relative min-h-11 px-5 text-sm font-semibold transition-[color,background-color,transform] duration-200 motion-safe:active:scale-[0.98] ${
                    selected
                      ? "bg-accent text-hero-ink shadow-[inset_0_-2px_0_oklch(1_0_0/0.2)]"
                      : "text-ink-muted hover:bg-surface hover:text-ink"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          key={panelKey}
          role="tabpanel"
          id={tab === "current" ? currentPanelId : upcomingPanelId}
          aria-labelledby={`${baseId}-tab-${tab}`}
          className="program-panel-enter space-y-6"
        >
          {activePrograms.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
