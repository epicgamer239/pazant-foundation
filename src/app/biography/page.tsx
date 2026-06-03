import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Rosalie Frazier Pazant — Full Biography",
  description:
    "Educator. Leader. Trailblazer. Legacy Builder. The distinguished career of Rosalie Frazier Pazant.",
};

const academicPrep = [
  "Bachelor's Degree in English Education — Georgia State College (now Savannah State University)",
  "Master's Degree in Education — South Carolina State College",
  "Graduate study at North Carolina A&T State University",
  "Completion of all doctoral coursework at NOVA University",
];

const k12Schools = [
  "Robert Smalls High",
  "Beaufort High School",
  "Battery Creek High School",
];

const k12Roles = [
  "Led English departments with discipline, structure, and academic rigor",
  "Mentored teachers and strengthened instructional quality",
  "Set high expectations that helped students build confidence and academic focus",
];

const higherEdRoles = [
  "Associate Professor of English",
  "Acting Director, Division of Developmental Studies",
];

const honors = [
  "Teacher of the Year (1970)",
  "STAR Teacher (1972)",
  "Beaufort County District Teacher of the Year",
  "First Black teacher in South Carolina to receive the American Legion's State Teacher of the Year Award",
  "Teacher of the Year at Beaufort High School (again)",
  "National Honor Society chapter named in her honor — the Rosalie F. Pazant Chapter of the National Honor Society at Battery Creek High School",
];

const professionalLeadership = [
  "Served on the State Textbook Evaluation Rating Committee for Speech, Advanced Composition, and Journalism",
  "Served on a Visiting Committee evaluating Burke High School in Charleston",
  "Treasurer, South Carolina Teachers of English",
  "Executive Board Member, South Carolina Teachers of English",
  "Selected to write Grammar articles for the ACT (American College Testing Program)",
  "Served as a Reader for the College Board English Composition Test with Essay (Educational Testing Service, Princeton) for decades",
];

const nationalRecognition = [
  "Regional Coordinator, African-American Consumer Education Organization",
  "Selected as one of sixty minority leaders nationwide to participate in the first federally sponsored minority conference at the White House",
];

const directoryListings = [
  "Outstanding Secondary Educators of America",
  "Who's Who Among Women",
  "Who's Who in American Cities",
  "Who's Who Among College Women",
];

const timeline = [
  {
    era: "Early Life & Education",
    items: [
      "Born and raised in Beaufort, South Carolina",
      "Earned B.A. in English Education, Georgia State College",
      "Earned M.Ed., South Carolina State College",
      "Graduate study at North Carolina A&T",
      "Completed doctoral coursework at NOVA University",
    ],
  },
  {
    era: "K–12 Leadership",
    items: [
      "English Department Chair, Robert Smalls High",
      "English Department Chair, Beaufort High",
      "English Department Chair, Battery Creek High",
    ],
  },
  {
    era: "Awards & Recognition",
    items: [
      "1970 — Teacher of the Year",
      "1972 — STAR Teacher",
      "Beaufort County District Teacher of the Year",
      "First Black teacher in SC to receive the American Legion State Teacher of the Year Award",
      "National Honor Society chapter named in her honor",
    ],
  },
  {
    era: "Higher Education Leadership",
    items: [
      "Associate Professor of English, Savannah State University",
      "Acting Director, Division of Developmental Studies, Savannah State University",
    ],
  },
  {
    era: "State & National Influence",
    items: [
      "State Textbook Evaluation Committee",
      "ACT Grammar contributor",
      "College Board Reader (ETS, Princeton)",
      "White House Minority Leadership Conference participant",
    ],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-muted leading-relaxed">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function BiographyPage() {
  return (
    <>
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <Link
            href="/"
            className="text-sm font-medium text-gold-light hover:text-gold"
          >
            ← Back to Home
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold-light">
            Her Legacy
          </p>
          <h1 className="font-serif mt-4 text-4xl font-semibold md:text-5xl lg:text-6xl">
            Rosalie Frazier Pazant
          </h1>
          <p className="mt-4 text-xl text-cream/90 md:text-2xl">
            Educator. Leader. Trailblazer. Legacy Builder.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        {/* Introduction */}
        <section>
          <h2 className="font-serif text-3xl font-semibold text-navy">Introduction</h2>
          <div className="mt-6 space-y-5 text-muted leading-relaxed">
            <p>
              Rosalie Frazier Pazant was a distinguished Beaufort educator whose life&apos;s work
              shaped generations of students across South Carolina and Georgia. A native Beaufortonian,
              she built a career defined by academic excellence, disciplined leadership, and an
              unwavering belief in the potential of young people. Her influence extended across K–12
              and higher education, statewide curriculum leadership, national assessment work, and
              community advocacy.
            </p>
            <p>
              Her legacy continues through the{" "}
              <strong className="text-navy">Rosalie Frazier Pazant Foundation</strong>, which honors
              her lifelong commitment to educational opportunity and future-ready student pathways.
            </p>
          </div>
        </section>

        {/* Academic Preparation */}
        <section className="mt-16 rounded-2xl border border-sand bg-white p-8 md:p-10">
          <h2 className="font-serif text-2xl font-semibold text-navy">Academic Preparation</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Mrs. Pazant&apos;s dedication to learning began with her own academic journey:
          </p>
          <BulletList items={academicPrep} />
          <p className="mt-6 text-sm italic text-muted">
            Her advanced study reflected her belief that educators must continually grow to better
            serve their students.
          </p>
        </section>

        {/* Professional Biography - K12 */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl font-semibold text-navy">Professional Biography</h2>
          <h3 className="font-serif mt-10 text-2xl font-semibold text-teal">
            Excellence in K–12 Education
          </h3>
          <p className="mt-4 text-muted leading-relaxed">
            Mrs. Pazant served as a High School English Department Chair at three major Beaufort County
            schools:
          </p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {k12Schools.map((school) => (
              <li
                key={school}
                className="rounded-full border border-sand bg-cream px-4 py-2 text-sm font-medium text-navy"
              >
                {school}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-muted">In these roles, she:</p>
          <BulletList items={k12Roles} />
          <p className="mt-6 text-muted leading-relaxed">
            Her leadership shaped the academic culture of each school she served.
          </p>

          <h3 className="font-serif mt-12 text-2xl font-semibold text-teal">
            Higher Education Leadership
          </h3>
          <p className="mt-4 text-muted leading-relaxed">
            Mrs. Pazant expanded her impact in higher education through key roles at Savannah State
            University:
          </p>
          <BulletList items={higherEdRoles} />
          <p className="mt-6 text-muted leading-relaxed">
            She strengthened academic programs, supported student readiness, and contributed to the
            university&apos;s instructional excellence.
          </p>
        </section>

        {/* Honors */}
        <section className="mt-16 rounded-2xl bg-navy p-8 text-cream md:p-10">
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">
            Honors, Awards & Historic Achievements
          </h2>
          <p className="mt-4 text-cream/85 leading-relaxed">
            Mrs. Pazant&apos;s excellence as an educator earned her some of the highest recognitions
            available in the state and nation:
          </p>
          <BulletList items={honors} />
        </section>

        {/* Professional Leadership */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-navy">
            Professional Leadership & Statewide Influence
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Mrs. Pazant contributed to educational excellence beyond her own classrooms:
          </p>
          <BulletList items={professionalLeadership} />
          <p className="mt-6 text-muted leading-relaxed">
            Her expertise shaped curriculum, assessment, and instructional standards across the state
            and nation.
          </p>
        </section>

        {/* National Recognition */}
        <section className="mt-16 rounded-2xl border border-sand bg-cream p-8 md:p-10">
          <h2 className="font-serif text-2xl font-semibold text-navy">
            National Recognition & Broader Leadership
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            Mrs. Pazant&apos;s leadership extended into national education and advocacy:
          </p>
          <BulletList items={nationalRecognition} />
          <p className="mt-6 text-muted leading-relaxed">
            These roles reflected her influence as a respected educator and community leader.
          </p>
        </section>

        {/* Directory Listings */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-navy">Honors & Listings</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Mrs. Pazant was recognized in several national directories, including:
          </p>
          <BulletList items={directoryListings} />
        </section>

        {/* Timeline */}
        <section className="mt-20">
          <SectionHeading title="Timeline of Milestones" />
          <div className="relative space-y-0">
            {timeline.map((block, index) => (
              <div key={block.era} className="relative flex gap-8 pb-12 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="mt-2 w-0.5 flex-1 bg-sand" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <h3 className="font-serif text-xl font-semibold text-navy">{block.era}</h3>
                  <ul className="mt-3 space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="text-sm text-muted leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enduring Legacy */}
        <section className="mt-20 rounded-2xl border-l-4 border-gold bg-white p-8 shadow-sm md:p-12">
          <h2 className="font-serif text-3xl font-semibold text-navy">Her Enduring Legacy</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Rosalie Frazier Pazant&apos;s life was defined by service — to students, to community, and
            to future generations. Her legacy continues through the Rosalie Frazier Pazant Foundation,
            which carries forward her belief in disciplined learning, educational opportunity, and the
            transformative power of preparing students to become future-ready.
          </p>
          <Link
            href="/#support"
            className="mt-8 inline-block rounded-full bg-teal px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-light"
          >
            Support the Foundation
          </Link>
        </section>
      </div>
    </>
  );
}
