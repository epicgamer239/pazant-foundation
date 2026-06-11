import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

type HeroPortraitProps = {
  imageSrc?: string;
  imageAlt?: string;
  /** Tailwind object-position / object-fit classes for the background image */
  imageClassName?: string;
  /** CSS brightness multiplier for dark source photos (default 1.12) */
  imageBrightness?: number;
  /** Slightly stronger scrim when the hero carries more copy (e.g. home) */
  overlayWeight?: "default" | "medium";
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

/** Home: one even scrim over the full photo; copy legibility comes from the local backdrop below */
const HERO_OVERLAY_MEDIUM = "oklch(0.14 0.045 250 / 0.48)";

export function HeroPortrait({
  imageSrc = PORTRAIT_SRC,
  imageAlt = PORTRAIT_ALT,
  imageClassName = DEFAULT_IMAGE_CLASS,
  imageBrightness = 1.12,
  overlayWeight = "default",
  backLink,
  eyebrow,
  title,
  subtitle,
  callout,
  children,
  compact = false,
}: HeroPortraitProps) {
  const contentPadding = compact ? "py-14 md:py-20" : "py-16 md:py-24 lg:py-28";
  const isMediumOverlay = overlayWeight === "medium";
  const imageFilter = isMediumOverlay
    ? `brightness(${imageBrightness}) contrast(1.02) saturate(1.02)`
    : `brightness(${imageBrightness}) contrast(1.03) saturate(1.04)`;

  return (
    <section
      className={`hero-portrait relative overflow-hidden${
        isMediumOverlay ? " hero-portrait--overlay-medium" : ""
      }`}
    >
      <div className="hero-portrait-media">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className={`hero-portrait-image ${imageClassName}`}
          style={{ filter: imageFilter }}
          sizes="100vw"
        />
      </div>
      <div
        className="hero-portrait-overlay"
        style={isMediumOverlay ? { background: HERO_OVERLAY_MEDIUM } : undefined}
        aria-hidden
      />
      <div className={`relative z-10 mx-auto max-w-6xl px-6 ${contentPadding}`}>
        <div className={isMediumOverlay ? "hero-portrait-copy" : undefined}>
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
            className={`hero-enter text-balance text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-hero-ink ${
              backLink || eyebrow ? "mt-6" : "mt-0"
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`hero-enter text-pretty max-w-2xl text-base leading-relaxed text-hero-muted ${
                compact ? "mt-4" : "mt-5"
              } ${backLink || eyebrow ? "hero-enter-delay-2" : "hero-enter-delay-1"}`}
            >
              {subtitle}
            </p>
          )}
          {callout && (
            <div className="hero-callout hero-enter hero-enter-delay-3 mt-8 max-w-md">
              <p className="text-lg font-semibold leading-snug text-hero-ink">{callout.lead}</p>
              <p className="mt-3 text-base leading-relaxed text-hero-muted">{callout.body}</p>
            </div>
          )}
          {children && (
            <div className="hero-enter hero-enter-delay-3 mt-10 flex flex-wrap gap-4">{children}</div>
          )}
        </div>
      </div>
    </section>
  );
}
