type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
};

export function SectionHeading({ id, eyebrow, title, subtitle, light }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-10 scroll-mt-24 text-center md:mb-12">
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
            light ? "text-gold-light" : "text-teal"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl font-semibold tracking-tight md:text-4xl ${
          light ? "text-cream" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${
            light ? "text-cream/85" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
