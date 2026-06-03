import Image from "next/image";
import Link from "next/link";

type HeroPortraitProps = {
  imageSrc?: string;
  imageAlt?: string;
  /** Tailwind object-position / object-fit classes for the background image */
  imageClassName?: string;
  backLink?: { href: string; label: string };
  eyebrow?: React.ReactNode;
  title: string;
  subtitle?: string;
  callout?: { lead: string; body: string };
  children?: React.ReactNode;
  compact?: boolean;
};

export const PORTRAIT_SRC = "/rosalie-frazier-pazant.png";
export const PORTRAIT_ALT =
  "Rosalie Frazier Pazant, educator and community leader, draped in an American flag";

export const CAMPUS_AERIAL_SRC = "/beaufort-campus-aerial.png";
export const CAMPUS_AERIAL_ALT =
  "Aerial view of a Beaufort County school campus with athletic fields and surrounding woodlands";

export const BEAUFORT_HIGH_HERO_SRC = "/beaufort-high-entrance.png";
export const BEAUFORT_HIGH_HERO_ALT =
  "The main entrance of Beaufort High School, where Mrs. Pazant served as an educator";

const DEFAULT_IMAGE_CLASS = "object-cover object-[62%_28%]";

export function HeroPortrait({
  imageSrc = PORTRAIT_SRC,
  imageAlt = PORTRAIT_ALT,
  imageClassName = DEFAULT_IMAGE_CLASS,
  backLink,
  eyebrow,
  title,
  subtitle,
  callout,
  children,
  compact = false,
}: HeroPortraitProps) {
  const contentPadding = compact ? "py-14 md:py-20" : "py-16 md:py-24 lg:py-28";

  return (
    <section className="hero-portrait relative overflow-hidden">
      <div className="hero-portrait-media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className={`hero-portrait-image ${imageClassName}`}
          sizes="100vw"
        />
      </div>
      <div className="hero-portrait-overlay" aria-hidden />
      <div className={`relative z-10 mx-auto max-w-6xl px-6 ${contentPadding}`}>
        {backLink && (
          <Link
            href={backLink.href}
            className="hero-enter link-motion text-sm font-medium text-hero-muted hover:text-hero-ink"
          >
            {backLink.label}
          </Link>
        )}
        {eyebrow && (
          <div className={`hero-enter hero-enter-delay-1 ${backLink ? "mt-6" : ""}`}>{eyebrow}</div>
        )}
        <h1
          className={`font-serif hero-enter text-balance font-normal leading-[1.1] tracking-[-0.03em] text-hero-ink ${
            backLink || eyebrow ? "mt-6" : "mt-0"
          } ${compact ? "text-[clamp(2rem,5vw,3.25rem)]" : "text-[clamp(2.25rem,5.5vw,3.75rem)]"}`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`hero-enter text-pretty max-w-2xl leading-relaxed text-hero-muted ${
              compact ? "mt-4 text-lg" : "mt-5 text-lg md:text-xl"
            } ${backLink || eyebrow ? "hero-enter-delay-2" : "hero-enter-delay-1"}`}
          >
            {subtitle}
          </p>
        )}
        {callout && (
          <div className="hero-callout hero-enter hero-enter-delay-3 mt-8 max-w-md">
            <p className="font-serif text-xl leading-snug text-hero-ink md:text-2xl">{callout.lead}</p>
            <p className="mt-3 text-sm leading-relaxed text-hero-muted">{callout.body}</p>
          </div>
        )}
        {children && (
          <div className="hero-enter hero-enter-delay-3 mt-10 flex flex-wrap gap-4">{children}</div>
        )}
      </div>
    </section>
  );
}
