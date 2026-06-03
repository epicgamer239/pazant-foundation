import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

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
];

const programs = [
  {
    icon: "🎓",
    title: "Rosalie F. Pazant Scholars Program",
    status: "Active",
    description:
      "The Foundation's initial and primary focus is providing scholarships for Beaufort high school seniors who are preparing for postsecondary education and future-ready pathways.",
    includes: [
      "College and career advising to support applications, financial aid, and postsecondary planning",
      "Student support resources that strengthen readiness and confidence",
      "Early exposure opportunities as partnerships develop over time",
    ],
    note: "This program reflects the Foundation's commitment to disciplined governance and meaningful, achievable impact in its first phase.",
  },
  {
    icon: "🚀",
    title: "Future-Ready Student Pathways",
    status: "Planned Expansion",
    description:
      "As the Foundation grows, it plans to develop future-ready student pathway initiatives that help students build practical skills, confidence, and readiness for education and early career opportunities.",
    includes: [
      "Career exposure sessions with local employers",
      "Workplace-readiness workshops focused on communication and professionalism",
      "Mentorship opportunities with leaders from Beaufort's business and civic communities",
    ],
    note: "These initiatives will be introduced gradually as partnerships and capacity expand.",
  },
  {
    icon: "🤝",
    title: "School, Business & Community Partnerships",
    status: "Future Development",
    description:
      "The Foundation intends to build a strong network of partners to support student success.",
    includes: [
      "School partnerships aligned with district needs",
      "Local business collaborations that provide exposure and applied learning",
      "Community organization engagement to support student wellbeing and transitions",
    ],
    note: "These partnerships represent the Foundation's long-term vision for a coordinated, community-wide commitment to Beaufort students.",
  },
];

const impactItems = [
  "Scholarships awarded to Beaufort high school seniors",
  "Readiness workshops and mentoring sessions (as capacity grows)",
  "Partnerships with local schools, businesses, and community organizations (future development)",
];

const supportWays = [
  {
    title: "Give",
    description:
      "Your contribution directly supports scholarships and future-ready pathways.",
  },
  {
    title: "Partner",
    description: "Collaborate with us to expand opportunity for Beaufort students.",
  },
  {
    title: "Volunteer",
    description: "Mentor, facilitate workshops, or support student-focused events.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-deep/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 lg:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-light">
            Rosalie Frazier Pazant Foundation
          </p>
          <p className="mt-2 max-w-3xl text-lg text-cream/90 md:text-xl">
            Honoring a Legacy. Expanding Pathways. Preparing Students to Become Future-Ready.
          </p>
          <h1 className="font-serif mt-8 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Strengthening Educational Pathways for Beaufort Students
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/85">
            Honoring the life and service of Rosalie Frazier Pazant, a dedicated Beaufort educator,
            the Foundation expands opportunity through scholarships and future-ready student pathways
            that help students thrive in a changing world.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#support"
              className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              Support the Mission
            </Link>
            <Link
              href="#programs"
              className="rounded-full border-2 border-cream/40 px-8 py-3.5 text-sm font-semibold text-cream transition-colors hover:border-cream hover:bg-cream/10"
            >
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="About the Foundation"
            title="A Legacy of Education and Service"
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-5 text-muted leading-relaxed">
              <p>
                The <strong className="text-navy">Rosalie Frazier Pazant Foundation</strong> honors
                the life and service of Rosalie Frazier Pazant — a respected Beaufort educator whose
                career reflected discipline, compassion, and a deep belief in the potential of every
                child.
              </p>
              <p>
                Mrs. Pazant served as a longtime educator in Beaufort County, shaping generations of
                students through her high expectations, structured approach to learning, and
                unwavering dedication to academic growth. Her belief in the power of education to
                expand opportunity continues to guide the Foundation&apos;s mission and programs.
              </p>
              <p>
                Rooted in disciplined governance, the Foundation strengthens educational pathways for
                Beaufort high school seniors through scholarships, future-ready student pathways, and
                community partnerships that support postsecondary readiness and long-term success.
              </p>
            </div>
            <div className="rounded-2xl border border-sand bg-white p-8 shadow-sm">
              <dl className="space-y-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-teal">
                    Founder & Board Chair
                  </dt>
                  <dd className="mt-1 font-serif text-xl text-navy">Alecia Pazant Hall</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-teal">Location</dt>
                  <dd className="mt-1 text-navy">Beaufort, South Carolina</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-teal">
                    Focus Areas
                  </dt>
                  <dd className="mt-1 text-muted">
                    Scholarships, future-ready pathways, educational access, and community investment.
                  </dd>
                </div>
              </dl>
              <Link
                href="/biography"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal-light"
              >
                Read Mrs. Pazant&apos;s full biography
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="scroll-mt-24 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Purpose" title="Mission & Vision" />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-l-4 border-teal bg-cream/50 p-8">
              <h3 className="font-serif text-2xl font-semibold text-navy">Mission</h3>
              <p className="mt-4 leading-relaxed text-muted">
                Honoring the life and service of Rosalie Frazier Pazant, a dedicated Beaufort educator,
                the Rosalie Frazier Pazant Foundation strengthens educational pathways for Beaufort
                students through scholarships and future-ready student pathways that prepare them for
                postsecondary success. Rooted in disciplined governance and Mrs. Pazant&apos;s enduring
                legacy, the Foundation supports students as they build the skills, confidence, and
                readiness needed to thrive in a changing world.
              </p>
            </div>
            <div className="rounded-2xl border-l-4 border-gold bg-cream/50 p-8">
              <h3 className="font-serif text-2xl font-semibold text-navy">Vision</h3>
              <p className="mt-4 leading-relaxed text-muted">
                A Beaufort where every student is equipped with the education, skills, and confidence
                to pursue meaningful opportunities and thrive along future-ready pathways — supported by
                a Foundation that honors Rosalie Frazier Pazant&apos;s legacy through disciplined
                stewardship and community investment.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-serif text-center text-2xl font-semibold text-navy md:text-3xl">
              Core Values
            </h3>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-sand bg-cream p-6 transition-shadow hover:shadow-md"
                >
                  <h4 className="font-serif text-lg font-semibold text-navy">{value.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="scroll-mt-24 bg-navy py-16 text-cream md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Our Programs"
            subtitle="Scholarships today. Future-ready pathways and partnerships as we grow."
            light
          />
          <div className="space-y-8">
            {programs.map((program) => (
              <article
                key={program.title}
                className="rounded-2xl border border-cream/10 bg-navy-deep/50 p-8 md:p-10"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl" aria-hidden>
                      {program.icon}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl font-semibold">{program.title}</h3>
                      <span className="mt-2 inline-block rounded-full bg-teal/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-light">
                        {program.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-cream/85">{program.description}</p>
                <p className="mt-4 text-sm font-semibold text-gold-light">The program includes:</p>
                <ul className="mt-3 space-y-2">
                  {program.includes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-cream/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-light" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm italic text-cream/70">{program.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Our Reach" title="Impact" />
          <ul className="mx-auto max-w-2xl space-y-4">
            {impactItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-4 rounded-xl border border-sand bg-white px-6 py-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                  ✓
                </span>
                <span className="text-navy leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="scroll-mt-24 bg-teal py-16 text-cream md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="Join Us"
            title="Ways to Support"
            subtitle="Every contribution strengthens opportunity for Beaufort students."
            light
          />
          <div className="grid gap-6 md:grid-cols-3">
            {supportWays.map((way) => (
              <div
                key={way.title}
                className="rounded-2xl border border-cream/20 bg-white/10 p-8 backdrop-blur-sm"
              >
                <h3 className="font-serif text-2xl font-semibold">{way.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/90">{way.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="mailto:info@pazantfoundation.org?subject=Get%20Involved"
              className="inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeading eyebrow="From Our Founder" title="A Note from Alecia Pazant Hall" />
          <blockquote className="relative rounded-2xl border border-sand bg-cream px-8 py-10 md:px-12 md:py-14">
            <span className="font-serif absolute -top-4 left-8 text-6xl text-gold/40">&ldquo;</span>
            <p className="relative font-serif text-xl leading-relaxed text-navy md:text-2xl">
              My grandmother believed deeply in the power of education, discipline, and community.
              This Foundation ensures her legacy continues — not as memory, but as opportunity. We are
              committed to preparing Beaufort&apos;s students to become future-ready and honoring her
              life through disciplined stewardship and meaningful impact.
            </p>
            <footer className="mt-8 text-sm font-semibold text-teal">
              — Alecia Pazant Hall, Founder & Board Chair
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Reach Out" title="Contact" />
          <div className="mx-auto max-w-xl rounded-2xl border border-sand bg-white p-10 text-center shadow-sm">
            <p className="text-muted">
              <span className="block text-sm font-semibold uppercase tracking-wider text-teal">
                Email
              </span>
              <a
                href="mailto:info@pazantfoundation.org"
                className="mt-1 inline-block text-lg font-medium text-navy hover:text-teal"
              >
                info@pazantfoundation.org
              </a>
            </p>
            <p className="mt-6 text-muted">
              <span className="block text-sm font-semibold uppercase tracking-wider text-teal">
                Location
              </span>
              <span className="mt-1 inline-block text-lg text-navy">Beaufort, South Carolina</span>
            </p>
            <p className="mt-6 text-sm text-muted">Social Media</p>
            <div className="mt-3 flex justify-center gap-6">
              <a href="#" className="text-sm font-medium text-teal hover:text-teal-light">
                Instagram
              </a>
              <a href="#" className="text-sm font-medium text-teal hover:text-teal-light">
                Facebook
              </a>
              <a href="#" className="text-sm font-medium text-teal hover:text-teal-light">
                LinkedIn
              </a>
            </div>
            <a
              href="mailto:info@pazantfoundation.org"
              className="mt-10 inline-block rounded-full bg-teal px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-light"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
