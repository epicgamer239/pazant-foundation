"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { Button } from "@/components/Button";
import { FieldLabel } from "@/components/FieldLabel";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { BioJumpNav } from "@/components/biography/BioJumpNav";
import { BEAUFORT_HIGH_HERO_ALT, BEAUFORT_HIGH_HERO_SRC, PORTRAIT_ALT, PORTRAIT_SRC } from "@/components/HeroPortrait";
import {
  academicPrep,
  bioHighlights,
  directoryListings,
  honors,
  k12Roles,
  k12Schools,
  higherEdRoles,
  leadershipThemes,
  nationalRecognition,
  timelineSpine,
} from "@/content/biography";

const SECTION_SCROLL = "scroll-mt-[7.5rem] md:scroll-mt-[8.5rem]";

function BulletList({ items, stagger = false }: { items: string[]; stagger?: boolean }) {
  return (
    <ul className="mt-4 space-y-2 text-ink-muted">
      {items.map((item, index) => (
        <li
          key={item}
          className={`flex gap-2 leading-relaxed ${stagger ? "stagger-enter" : ""}`}
          style={stagger ? ({ "--i": index } as CSSProperties) : undefined}
        >
          <span className="font-semibold text-accent" aria-hidden>
            ·
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BiographyBody() {
  return (
    <div className="bg-surface">
      <section className="border-b border-line bg-surface-raised">
        <div className="sticky top-[4.25rem] z-30 border-b border-line bg-surface-raised/95 backdrop-blur-sm md:top-[4.5rem]">
          <div className="mx-auto max-w-6xl">
            <BioJumpNav />
          </div>
        </div>

        <Reveal className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {bioHighlights.map((item, index) => (
              <div
                key={item.label}
                className="bio-stat panel-accent-top panel-hover stagger-enter"
                style={{ "--i": index } as CSSProperties}
              >
                <p className="bio-stat-value font-serif">{item.value}</p>
                <p className="mt-2 text-sm font-semibold text-ink">{item.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-6 py-16 md:space-y-14 md:py-24">
        <Reveal id="bio-intro" className={SECTION_SCROLL}>
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <figure className="image-enter photo-frame photo-frame-accent panel w-full self-start overflow-hidden p-0">
              <Image
                src={PORTRAIT_SRC}
                alt={PORTRAIT_ALT}
                width={900}
                height={1100}
                className="block aspect-[4/5] h-auto w-full object-cover object-[62%_28%]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <figcaption className="border-t border-line bg-surface-raised px-4 py-3 text-sm text-ink-muted">
                Rosalie Frazier Pazant, Beaufort educator and community leader.
              </figcaption>
            </figure>
            <div className="panel-accent-top panel-hover text-pretty">
              <FieldLabel>Introduction</FieldLabel>
              <h2 className="prose-section-title mt-3">A life in education</h2>
              <div className="mt-6 space-y-5 text-ink-muted leading-relaxed">
                <p>
                  Rosalie Frazier Pazant was a distinguished Beaufort educator whose life&apos;s work shaped
                  generations of students across South Carolina and Georgia. A native Beaufortonian, she built
                  a career defined by academic excellence, disciplined leadership, and an unwavering belief in
                  the potential of young people.
                </p>
                <p>
                  Her legacy continues through the{" "}
                  <strong className="font-medium text-ink">Rosalie Frazier Pazant Foundation</strong>, which
                  honors her lifelong commitment to educational opportunity and future-ready student pathways.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal id="bio-preparation" className={SECTION_SCROLL} delay={40}>
          <section className="panel-accent-top panel-hover">
            <FieldLabel>Academic preparation</FieldLabel>
            <h2 className="prose-section-title mt-3">Education & credentials</h2>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Mrs. Pazant&apos;s dedication to learning began with her own academic journey:
            </p>
            <ol className="bio-credential-list mt-8">
              {academicPrep.map((item, index) => (
                <li
                  key={item}
                  className="bio-credential-item stagger-enter"
                  style={{ "--i": index } as CSSProperties}
                >
                  <span className="bio-credential-index" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal id="bio-career" className={SECTION_SCROLL} delay={50}>
          <SectionHeading title="Professional biography" />
          <figure className="group image-enter panel mb-6 overflow-hidden p-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[21/9]">
              <Image
                src={BEAUFORT_HIGH_HERO_SRC}
                alt={BEAUFORT_HIGH_HERO_ALT}
                fill
                className="object-cover object-[50%_38%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.03] motion-reduce:transform-none"
                sizes="(max-width: 1024px) 100vw, 72rem"
              />
            </div>
            <figcaption className="border-t border-line bg-surface-raised px-4 py-3 text-sm text-ink-muted">
              Beaufort High School, one of three county schools where Mrs. Pazant chaired the English
              department.
            </figcaption>
          </figure>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            <section className="panel panel-hover">
              <h3 className="font-serif text-lg text-ink">Excellence in K–12 education</h3>
              <p className="mt-4 text-ink-muted leading-relaxed">
                Mrs. Pazant served as High School English Department Chair at three Beaufort County schools:
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {k12Schools.map((school) => (
                  <li key={school}>
                    <span className="bio-school-chip">{school}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-ink-muted">In these roles, she:</p>
              <BulletList items={k12Roles} stagger />
            </section>

            <section className="panel-accent-top panel-hover lg:self-start">
              <FieldLabel>Savannah State University</FieldLabel>
              <h3 className="font-serif mt-3 text-lg text-ink">Higher education leadership</h3>
              <p className="mt-4 text-ink-muted leading-relaxed">
                Mrs. Pazant expanded her impact at Savannah State University:
              </p>
              <BulletList items={higherEdRoles} stagger />
            </section>
          </div>
        </Reveal>

        <Reveal id="bio-honors" className={SECTION_SCROLL} delay={60}>
          <section className="panel-soft">
            <FieldLabel>Honors & achievements</FieldLabel>
            <h2 className="prose-section-title mt-3">Awards & historic milestones</h2>
            <ul className="bio-honor-grid mt-8">
              {honors.map((honor, index) => (
                <li
                  key={honor.text}
                  className={`bio-honor-tile stagger-enter panel-hover ${
                    honor.featured ? "bio-honor-tile-featured panel-accent-top" : "panel"
                  }`}
                  style={{ "--i": index } as CSSProperties}
                >
                  {honor.text}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal id="bio-influence" className={SECTION_SCROLL} delay={40}>
          <SectionHeading title="Influence & recognition" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              {leadershipThemes.map((theme, index) => (
                <section
                  key={theme.title}
                  className="bio-influence-theme panel panel-hover stagger-enter"
                  style={{ "--i": index } as CSSProperties}
                >
                  <h3 className="font-serif text-base text-ink">{theme.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-ink-muted">
                    {theme.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="font-semibold text-accent" aria-hidden>
                          ·
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <section className="panel-accent-top panel-hover">
                <FieldLabel>National</FieldLabel>
                <h3 className="prose-section-title mt-3">Broader leadership</h3>
                <BulletList items={nationalRecognition} />
              </section>

              <blockquote className="bio-pull-quote panel-soft">
                <p className="font-serif text-lg leading-snug text-ink">
                  Selected as one of sixty minority leaders nationwide for the first federally sponsored
                  minority conference at the White House.
                </p>
              </blockquote>

              <section className="panel panel-hover">
                <p className="text-xs font-semibold text-accent">Directory listings</p>
                <ul className="bio-directory-chips mt-4">
                  {directoryListings.map((item) => (
                    <li key={item}>
                      <span className="bio-school-chip">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </Reveal>

        <Reveal id="bio-timeline" className={SECTION_SCROLL} delay={50}>
          <section className="panel panel-hover">
            <SectionHeading
              title="Chronological spine"
              subtitle="Key turning points only. See sections above for full detail on education, career, honors, and influence."
            />
            <ol className="bio-timeline-spine mt-6">
              {timelineSpine.map((milestone, index) => (
                <li
                  key={`${milestone.when}-${milestone.title}`}
                  className="bio-timeline-spine-item stagger-enter"
                  style={{ "--i": index } as CSSProperties}
                >
                  <span className="bio-timeline-when">{milestone.when}</span>
                  <div>
                    <h3 className="font-serif text-base text-ink">{milestone.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{milestone.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </Reveal>

        <Reveal id="bio-legacy" className={`${SECTION_SCROLL} band-accent section-y !py-12 md:!py-16`} delay={60}>
          <div className="mx-auto max-w-3xl px-0 text-center">
            <FieldLabel invert>Her enduring legacy</FieldLabel>
            <blockquote className="quote-deco text-pretty mt-4 font-serif text-[clamp(1.25rem,2.5vw,1.65rem)] leading-relaxed text-hero-ink">
              <p>
                Rosalie Frazier Pazant&apos;s life was defined by service to students, community, and future
                generations. The Foundation carries forward her belief in disciplined learning, educational
                opportunity, and preparing students to become future-ready.
              </p>
            </blockquote>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button variant="onAccent" href="/#support">
                Support the Foundation
              </Button>
              <Button variant="onAccentOutline" href="/">
                Return home
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
