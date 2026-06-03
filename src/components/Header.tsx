"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/Button";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#mission", label: "Mission" },
  { href: "/#programs", label: "Programs" },
  { href: "/#support", label: "Support" },
  { href: "/biography", label: "Her Legacy" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link
          href="/"
          className="link-motion min-w-0 font-serif text-base leading-snug text-ink hover:text-accent sm:text-lg"
        >
          Rosalie Frazier Pazant Foundation
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-motion text-sm font-medium text-ink-muted hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" href="/#support">
            Get involved
          </Button>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center border border-line text-ink transition-colors duration-200 hover:border-ink/30 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      <div className="menu-panel lg:hidden" data-open={open}>
        <div className="menu-panel-inner">
          <nav
            className="border-t border-line px-6 py-5"
            aria-label="Mobile"
            aria-hidden={!open}
            inert={!open ? true : undefined}
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className={open ? "stagger-enter" : undefined}
                  style={open ? ({ "--i": i } as React.CSSProperties) : undefined}
                >
                  <Link
                    href={link.href}
                    className="link-motion block py-2.5 text-sm font-medium text-ink"
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li
                className={open ? "stagger-enter pt-3" : "pt-3"}
                style={open ? ({ "--i": navLinks.length } as React.CSSProperties) : undefined}
              >
                <Button variant="primary" href="/#support" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
                  Get involved
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
