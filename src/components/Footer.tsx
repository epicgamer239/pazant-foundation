import Link from "next/link";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="band-hero border-t border-hero-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-lg leading-snug">Rosalie Frazier Pazant Foundation</p>
            <p className="mt-3 text-sm leading-relaxed text-hero-muted">
              Committed to disciplined governance, educational opportunity, and community impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
            <ul className="space-y-2 text-hero-muted">
              <li>
                <Link href="/#about" className="link-motion hover:text-hero-ink">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#programs" className="link-motion hover:text-hero-ink">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/biography" className="link-motion hover:text-hero-ink">
                  Her legacy
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="link-motion hover:text-hero-ink">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="text-hero-muted">
              <a href="mailto:info@pazantfoundation.org" className="link-motion hover:text-hero-ink">
                info@pazantfoundation.org
              </a>
              <p className="mt-2">Beaufort, South Carolina</p>
              <SocialLinks className="mt-4 text-hero-muted [&_li]:text-hero-muted" />
            </div>
          </div>
        </div>
        <p className="mt-12 border-t border-hero-ink/15 pt-8 text-sm text-hero-muted">
          © {new Date().getFullYear()} Rosalie Frazier Pazant Foundation
        </p>
      </div>
    </footer>
  );
}
