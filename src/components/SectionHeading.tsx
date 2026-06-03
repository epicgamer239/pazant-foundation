type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
  size?: "default" | "large";
};

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "left",
  invert = false,
  size = "default",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const titleSize =
    size === "large"
      ? "text-[clamp(2rem,4vw,3rem)]"
      : "text-[clamp(1.75rem,3.5vw,2.5rem)]";

  return (
    <header id={id} className={`mb-10 scroll-mt-24 md:mb-12 ${alignClass}`}>
      <h2
        className={`heading-rule font-serif text-balance font-normal leading-[1.12] tracking-[-0.02em] ${titleSize} ${
          invert ? "text-hero-ink heading-rule-invert" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-pretty mt-4 max-w-2xl text-lg leading-relaxed ${
            invert ? "text-hero-muted" : "text-ink-muted"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
