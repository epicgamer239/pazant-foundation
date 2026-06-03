import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { FieldLabel } from "@/components/FieldLabel";
import { SocialLinks } from "@/components/SocialLinks";
import {
  BEAUFORT_HIGH_HERO_ALT,
  BEAUFORT_HIGH_HERO_SRC,
  HeroPortrait,
  PORTRAIT_ALT,
  PORTRAIT_SRC,
} from "@/components/HeroPortrait";
import { CoreValues } from "@/components/CoreValues";
import { ProgramsSection } from "@/components/ProgramsSection";
import { Reveal } from "@/components/Reveal";

const impactItems = [
  {
    label: "Scholarships",
    detail: "Awarded to Beaufort high school seniors preparing for postsecondary pathways.",
  },
  {
    label: "Readiness",
    detail: "Workshops and mentoring sessions as Foundation capacity grows.",
  },
  {
    label: "Partnerships",
    detail: "With schools, businesses, and community organizations in development.",
  },
];

const supportWays = [
  {
    title: "Give",
    description:
      "Your contribution directly supports scholarships and future-ready pathways for Beaufort students.",
  },
  {
    title: "Partner",
    description:
      "Collaborate with the Foundation to expand opportunity through schools and local organizations.",
  },
  {
    title: "Volunteer",
    description:
      "Mentor students, facilitate workshops, or support events focused on readiness and transition.",
  },
];

export default function Home() {
  return (
    <>
      <HeroPortrait
        imageSrc={BEAUFORT_HIGH_HERO_SRC}
        imageAlt={BEAUFORT_HIGH_HERO_ALT}
        imageClassName="object-cover object-[50%_42%]"
        eyebrow={<FieldLabel invert>Rosalie Frazier Pazant Foundation</FieldLabel>}
        title="Strengthening educational pathways for Beaufort students"
        subtitle="Honoring the life of a dedicated Beaufort educator through scholarships and future-ready pathways that help students thrive."
        callout={{
          lead: "Honoring a legacy. Expanding pathways.",
          body: "Rooted in disciplined governance and Mrs. Pazant's enduring commitment to educational opportunity in Beaufort County.",
        }}
      >
        <Button variant="onAccent" href="#support">
          Support the mission
        </Button>
        <Button variant="onAccentOutline" href="#programs">
          View programs
        </Button>
      </HeroPortrait>

      {/* Preserved: user-approved About section */}
      <Reveal as="section" id="about" className="section-y scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="A Legacy of Education and Service" size="large" />
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <figure className="image-enter photo-frame photo-frame-accent panel w-full self-start overflow-hidden p-0">
              <Image
                src={PORTRAIT_SRC}
                alt={PORTRAIT_ALT}
                width={900}
                height={1100}
                className="block aspect-[4/5] h-auto w-full object-cover object-[62%_28%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <figcaption className="border-t border-line bg-surface-raised px-4 py-3 text-sm text-ink-muted">
                Rosalie Frazier Pazant, whose legacy guides the Foundation&apos;s work in Beaufort
                County.
              </figcaption>
            </figure>
            <div className="flex flex-col gap-8">
              <div className="panel-accent-top panel-hover text-pretty min-w-0 space-y-5 text-ink-muted leading-relaxed">
                <p>
                  The <strong className="font-medium text-ink">Rosalie Frazier Pazant Foundation</strong>{" "}
                  honors the life and service of Rosalie Frazier Pazant, a respected Beaufort educator whose
                  career reflected discipline, compassion, and a deep belief in the potential of every child.
                </p>
                <p>
                  Mrs. Pazant served as a longtime educator in Beaufort County, shaping generations of
                  students through her high expectations, structured approach to learning, and unwavering
                  dedication to academic growth.
                </p>
                <p>
                  Rooted in disciplined governance, the Foundation strengthens educational pathways for
                  Beaufort high school seniors through scholarships, future-ready student pathways, and
                  community partnerships that support postsecondary readiness and long-term success.
                </p>
              </div>
              <aside className="panel panel-hover">
                <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
                  <div>
                    <FieldLabel>Founder & board chair</FieldLabel>
                    <p className="font-serif mt-2 text-xl text-ink">Alecia Pazant Hall</p>
                  </div>
                  <div>
                    <FieldLabel>Location</FieldLabel>
                    <p className="mt-2 text-ink">Beaufort, South Carolina</p>
                  </div>
                  <div>
                    <FieldLabel>Focus areas</FieldLabel>
                    <p className="mt-2 text-sm text-ink-muted">
                      Scholarships, future-ready pathways, educational access, and community investment.
                    </p>
                  </div>
                </div>
                <Link
                  href="/biography"
                  className="link-motion link-underline-grow mt-8 inline-block text-sm font-semibold text-accent hover:text-accent-hover"
                >
                  Read Mrs. Pazant&apos;s biography
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Preserved: user-approved Mission & Vision */}
      <Reveal as="section" id="mission" className="section-y scroll-mt-24 bg-surface-raised" delay={60}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Mission & Vision" size="large" />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="panel-accent-top panel-hover text-pretty">
              <h3 className="prose-section-title">Mission</h3>
              <p className="mt-5 leading-relaxed text-ink-muted">
                Honoring the life and service of Rosalie Frazier Pazant, a dedicated Beaufort educator,
                the Rosalie Frazier Pazant Foundation strengthens educational pathways for Beaufort
                students through scholarships and future-ready student pathways that prepare them for
                postsecondary success. Rooted in disciplined governance and Mrs. Pazant&apos;s enduring
                legacy, the Foundation supports students as they build the skills, confidence, and
                readiness needed to thrive in a changing world.
              </p>
            </div>
            <div className="panel-accent-top panel-hover text-pretty">
              <h3 className="prose-section-title">Vision</h3>
              <p className="mt-5 leading-relaxed text-ink-muted">
                A Beaufort where every student is equipped with the education, skills, and confidence to
                pursue meaningful opportunities and thrive along future-ready pathways, supported by a
                Foundation that honors Rosalie Frazier Pazant&apos;s legacy through disciplined stewardship
                and community investment.
              </p>
            </div>
          </div>

          <CoreValues />
        </div>
      </Reveal>

      <ProgramsSection />

      <Reveal as="section" id="impact" className="section-y scroll-mt-24 bg-surface-raised" delay={40}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Impact" size="large" />
          <div className="grid gap-6 md:grid-cols-3">
            {impactItems.map((item, index) => (
              <div
                key={item.label}
                className="panel-accent-top panel-hover"
                style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
              >
                <p className="impact-label font-serif text-2xl text-accent">{item.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal as="section" id="support" className="band-accent section-y scroll-mt-24" delay={50}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            title="Ways to support"
            subtitle="Every contribution strengthens opportunity for Beaufort students."
            invert
            size="large"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {supportWays.map((way) => (
              <div key={way.title} className="panel-on-accent">
                <h3 className="font-serif text-xl text-hero-ink">{way.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-hero-muted">{way.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button variant="onAccent" href="mailto:info@pazantfoundation.org?subject=Get%20involved">
              Get involved
            </Button>
          </div>
        </div>
      </Reveal>

      {/* Preserved: user-approved founder message */}
      <Reveal as="section" className="section-y border-t border-line" delay={70}>
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading title="A Note from Alecia Pazant Hall" align="center" size="large" />
          <figure className="panel-soft quote-deco text-center">
            <blockquote className="text-pretty font-serif text-[clamp(1.35rem,2.8vw,1.75rem)] leading-relaxed text-ink">
              <p>
                My grandmother believed deeply in the power of education, discipline, and community. This
                Foundation ensures her legacy continues, not as memory, but as opportunity. We are committed
                to preparing Beaufort&apos;s students to become future-ready and honoring her life through
                disciplined stewardship and meaningful impact.
              </p>
            </blockquote>
            <figcaption className="mt-8 border-t border-line pt-6 text-sm font-semibold text-accent">
              Alecia Pazant Hall, Founder & Board Chair
            </figcaption>
          </figure>
        </div>
      </Reveal>

      <Reveal as="section" id="contact" className="section-y scroll-mt-24 bg-surface-raised" delay={60}>
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading title="Contact" size="large" />
          <div className="panel grid gap-10 md:grid-cols-[1fr_1fr_auto] md:items-start">
            <div>
              <FieldLabel>Email</FieldLabel>
              <a
                href="mailto:info@pazantfoundation.org"
                className="link-motion mt-2 block text-xl font-medium text-ink hover:text-accent"
              >
                info@pazantfoundation.org
              </a>
            </div>
            <div>
              <FieldLabel>Location</FieldLabel>
              <p className="mt-2 text-xl text-ink">Beaufort, South Carolina</p>
            </div>
            <div>
              <FieldLabel>Social</FieldLabel>
              <p className="mt-2 text-sm text-ink-muted">Profiles coming soon.</p>
              <SocialLinks className="mt-3" />
            </div>
          </div>
          <div className="mt-8">
            <Button variant="primary" href="mailto:info@pazantfoundation.org">
              Send a message
            </Button>
          </div>
        </div>
      </Reveal>
    </>
  );
}
