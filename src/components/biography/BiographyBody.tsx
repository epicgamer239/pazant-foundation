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
  directoryListings,
  k12Roles,
  k12Schools,
  higherEdRoles,
  leadershipThemes,
  nationalRecognition,
} from "@/content/biography";
import { BioHighlightBand } from "@/components/biography/BioHighlightBand";
import { BioHonorsSection } from "@/components/biography/BioHonorsSection";
import { BioTimeline } from "@/components/biography/BioTimeline";

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
      <div className="sticky top-[4.25rem] z-30 border-b border-line bg-surface/95 backdrop-blur-sm md:top-[4.5rem]">
        <div className="mx-auto max-w-6xl px-6">
          <BioJumpNav />
        </div>
      </div>

      <section className="border-b border-line bg-surface-raised">
        <Reveal className="mx-auto max-w-6xl px-6 py-10 md:py-12">
          <BioHighlightBand />
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
                  the potential of young people. Her influence extended across K–12 and higher education,
                  statewide curriculum leadership, national assessment work, and community advocacy.
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
            <p className="mt-6 text-ink-muted leading-relaxed">
              Her advanced study reflected her belief that educators must continually grow to better serve
              their students.
            </p>
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
                Mrs. Pazant served as High School English Department Chair at three major Beaufort County
                schools:
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
              <p className="mt-6 text-ink-muted leading-relaxed">
                Her leadership shaped the academic culture of each school she served.
              </p>
            </section>

            <section className="panel-accent-top panel-hover lg:self-start">
              <FieldLabel>Savannah State University</FieldLabel>
              <h3 className="font-serif mt-3 text-lg text-ink">Higher education leadership</h3>
              <p className="mt-4 text-ink-muted leading-relaxed">
                Mrs. Pazant expanded her impact in higher education through key roles at Savannah State
                University:
              </p>
              <BulletList items={higherEdRoles} stagger />
              <p className="mt-6 text-ink-muted leading-relaxed">
                She strengthened academic programs, supported student readiness, and contributed to the
                university&apos;s instructional excellence.
              </p>
            </section>
          </div>
        </Reveal>

        <Reveal id="bio-honors" className={SECTION_SCROLL} delay={60}>
          <BioHonorsSection />
        </Reveal>

        <Reveal id="bio-influence" className={SECTION_SCROLL} delay={40}>
          <SectionHeading title="Influence & recognition" />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4">
              <p className="text-pretty text-ink-muted leading-relaxed">
                Mrs. Pazant contributed to educational excellence beyond her own classrooms:
              </p>
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
              <p className="text-sm leading-relaxed text-ink-muted">
                Her expertise shaped curriculum, assessment, and instructional standards across the state
                and nation.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <section className="panel-accent-top panel-hover">
                <FieldLabel>National</FieldLabel>
                <h3 className="prose-section-title mt-3">Broader leadership</h3>
                <p className="mt-4 text-ink-muted leading-relaxed">
                  Mrs. Pazant&apos;s leadership extended into national education and advocacy:
                </p>
                <BulletList items={nationalRecognition} />
              </section>

              <blockquote className="bio-pull-quote panel-soft">
                <p className="font-serif text-lg leading-snug text-ink">
                  Selected as one of sixty minority leaders nationwide for the first federally sponsored
                  minority conference at the White House.
                </p>
              </blockquote>

              <section className="panel panel-hover">
                <h3 className="prose-section-title">Honors & listings</h3>
                <p className="mt-4 text-sm text-ink-muted leading-relaxed">
                  Mrs. Pazant was recognized in several national directories, including:
                </p>
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
          <BioTimeline />
        </Reveal>

        <Reveal id="bio-legacy" className={`${SECTION_SCROLL} band-accent section-y !py-12 md:!py-16`} delay={60}>
          <div className="mx-auto max-w-3xl px-0 text-center">
            <FieldLabel invert>Her enduring legacy</FieldLabel>
            <blockquote className="quote-deco text-pretty mt-4 font-serif text-[clamp(1.25rem,2.5vw,1.65rem)] leading-relaxed text-hero-ink">
              <p>
                Rosalie Frazier Pazant&apos;s life was defined by service to students, community, and future
                generations. Her legacy continues through the Rosalie Frazier Pazant Foundation, which
                carries forward her belief in disciplined learning, educational opportunity, and the
                transformative power of preparing students to become future-ready.
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
