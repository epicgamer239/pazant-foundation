"use client";

import { useCallback, useEffect, useState } from "react";
import { bioJumpLinks } from "@/content/biography";

export function BioJumpNav() {
  const [activeId, setActiveId] = useState(bioJumpLinks[0].id);

  useEffect(() => {
    const sections = bioJumpLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0, 0.15, 0.35, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }, []);

  return (
    <nav aria-label="On this page" className="bio-jump-nav py-3">
      <div className="md:hidden">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold text-ink-muted">Jump to section</span>
          <select
            value={activeId}
            onChange={(event) => scrollToSection(event.target.value)}
            className="bio-jump-select w-full"
          >
            {bioJumpLinks.map((link) => (
              <option key={link.id} value={link.id}>
                {link.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ul className="hidden gap-2 md:flex md:flex-wrap md:gap-3">
        {bioJumpLinks.map((link) => {
          const isActive = activeId === link.id;
          return (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`link-motion inline-block whitespace-nowrap border px-3 py-2 text-xs font-semibold transition-[border-color,background-color,color] duration-200 ${
                  isActive
                    ? "bio-jump-link-active border-accent bg-accent text-hero-ink"
                    : "border-line bg-surface-panel text-ink-muted hover:border-accent/40 hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
